<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Envios;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EnviosController extends Controller
{
    public $search = "";
    public $estado = "";
    public $tipo_envio = "all";

    public function index()
    {
        $select = [
            'facturas.id_factura',
            'facturas.nro_factura',
            'facturas.nro_container',
            'facturas.tipo_envio',
            'envios.id_envio',
            'envios.id_factura',
            'envios.historial_estado',
            'envios.estado', //FACTURADO - ENVIADO-VENEZUELA - EN-TRANSITO-VENEZUELA - ADUENA-VENEZUELA - ALMACEN-VENEZUELA - ENVIADO-CLINTE - ENTREGADO
            'envios.fecha_estimada',
            'envios.fecha_creado',
            'envios.fecha_editado',
            'usuarios_info.nombres', 
            'usuarios_info.apellidos', 
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 16;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
        $this->estado = ( $query != null && isset($query->estado) && $query->estado != '' ) ? $query->estado : "";
		$this->tipo_envio = ( $query != null && isset($query->tipo_envio) && $query->tipo_envio != '' ) ? $query->tipo_envio : "all";

        $records = Envios::select($select)
        ->leftJoin('facturas', 'facturas.id_factura', '=', 'envios.id_factura')
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'facturas.usuario_id')
        ->where('facturas.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('facturas.nro_factura',  'LIKE', '%'.$this->search.'%')
                ->orWhere('facturas.nro_container',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.nombres',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.apellidos',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.cod_usuario',  'LIKE', '%'.$this->search.'%');
        });

        if( $this->estado != '' && $this->estado != 'all' ){
            $records = $records->where('envios.estado', '=', $this->estado);
        }

        if( $this->tipo_envio != 'all'){
            $records = $records->where('facturas.tipo_envio', '=', $this->tipo_envio);
        }

        

        $count = $records->count();
        $records->limit($limit)
            ->skip($limit * ($page - 1));

        if (isset($orderBy)) {
            $direction = $ascending == 1 ? 'ASC' : 'DESC';
            $records->orderBy($orderBy, $direction);
        }

        $results = $records->get()->toArray();

        for ($i=0; $i < count($results) ; $i++) { 

            if( $results[$i]['historial_estado'] != null )
            $results[$i]['historial_estado'] = json_decode($results[$i]['historial_estado']);
        }

        return response()->json([
            'status' => 200,
            'results' => $results,
            'pagination' => [
                'numPage' => intval($page),
                'resultPage' => count($results),
                'totalResult' => $count
            ]
        ], 200);
    }

    public function edit($id)
    {
        $envio = Envios::find($id);

        if( $envio->historial_estado != null ){
            $envio->historial_estado = json_decode($envio->historial_estado);
        }
        return response()->json([
            'status' => 200,
            'result' => $envio
        ], 200);
    }

    public function update($id, Request $request)
    {
        $envio = Envios::find($id);
        if( $envio->estado != 'ENTREGADO' ){
            $validator = Validator::make($request->all(), [
                'estado' => ['required'],
                'h' => ['required'],
            ]);
    
            if ( isset($validator) && $validator->fails()) {
                return response()->json([
                    'status' => 422,
                    'message' => $validator->errors()->first(),
                ], 422);
            }
    
            
    
            $estado = $request->estado;
           
            $envio->historial_estado = json_encode($request->h);
            $envio->estado = $estado;
    
            if( $estado == 'ENVIO-VENEZUELA' ){
                $valid = Validator::make($request->all(), [
                    'fech_estimada' => ['required'],
                ]);
    
                if ( isset($valid) && $valid->fails()) {
                    return response()->json([
                        'status' => 422,
                        'message' => $valid->errors()->first(),
                    ], 422);
                }
    
                $envio->fecha_estimada = $request->fech_estimada;
            }
    
            $envio->update();
    
            return response()->json([
                'status' => 200,
                'message' => 'El estado del envio fue actualizado con exito',
            ], 200);
        }else{
            return response()->json([
                'status' => 422,
                'message' => 'Ya este envio fue entregado.',
            ], 422);
        }

        
    }

    public function analyze(Request $request)
    {
        $from = null;
        $to = new Carbon('tomorrow');
        $cantidad = 0;

        if( $request->valor == '7' ){
            $from = Carbon::now()->subDays(7)->format('Y-m-d');
        }else if ( $request->valor == '30'  ){
            $from = Carbon::now()->subDays(30)->format('Y-m-d');
        }else if( $request->valor == '90' ){
            $from = Carbon::now()->subDays(90)->format('Y-m-d');
        }

        if( $from != null ){
            $cantidad = Envios::where('estado', '=', 'ENVIO-VENEZUELA')
            ->whereBetween('fecha_creado', [$from, $to])
            ->count();
        }
        

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
            'valor' => $request->valor
        ], 200);
    }
}
