<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SolicitudesEnvios;
use App\Models\Trackings;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class SolicitudesEnviosController extends Controller
{
    public $search = "";
    public $estado = "";
    public $fecha_inicio = "";
    public $fecha_final = "";

    public function index()
    {
        $select = [
            'solicitudes_envios.id_solicitud',
            'solicitudes_envios.fecha_llegada',
            'solicitudes_envios.estado',
            'solicitudes_envios.fecha_creado',
            'usuarios.usuario_id', 
            'usuarios.email',
            'usuarios_info.nombres', 
            'usuarios_info.apellidos', 
            'usuarios_info.cedula',
            'empresas_transportes.id_empresa_transporte',
            'empresas_transportes.nombre',
            'trackings.id_tracking',
            'trackings.tracking',
        ];


        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
        $this->estado = ( $query != null && isset($query->estado) && $query->estado != '' ) ? $query->estado : "";
        $this->fecha_inicio = ( $query != null && isset($query->fecha_inicio) && $query->fecha_inicio != '' ) ? $query->fecha_inicio : "";
        $this->fecha_final = ( $query != null && isset($query->fecha_final) && $query->fecha_final != '' ) ? $query->fecha_final : "";
       
        $records = SolicitudesEnvios::select($select)
        ->leftJoin('trackings', 'trackings.id_solicitud', '=', 'solicitudes_envios.id_solicitud')
        ->leftJoin('usuarios', 'usuarios.usuario_id', '=', 'solicitudes_envios.usuario_id')
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'usuarios.usuario_id')
        ->leftJoin('empresas_transportes', 'empresas_transportes.id_empresa_transporte', '=', 'solicitudes_envios.id_empresa_transporte')
        ->where('solicitudes_envios.activo', '=', true)
        ->where('usuarios.activo', '=', true)
        ->where('empresas_transportes.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('empresas_transportes.nombre',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios.email',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.nombres',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.apellidos',  'LIKE', '%'.$this->search.'%')
                ->orWhere('trackings.tracking',  'LIKE', '%'.$this->search.'%');
        });

        if( $this->estado != '' && $this->estado != 'all' ){
            $records = $records->where('solicitudes_envios.estado', '=', $this->estado);
        }

        if( $this->fecha_inicio != '' || $this->fecha_final != ''){
            $this->fecha_inicio = ( $this->fecha_inicio == '' ) ? Carbon::now()->format('Y-m-d') : $this->fecha_inicio;
            $this->fecha_final = (  $this->fecha_final == '' ) ? Carbon::now()->format('Y-m-d') :  $this->fecha_final;
           
            $records = $records->whereBetween('solicitudes_envios.fecha_llegada', [$this->fecha_inicio, $this->fecha_final]);
        }

        

        $count = $records->count();
        $records->limit($limit)
            ->skip($limit * ($page - 1));

        if (isset($orderBy)) {
            $direction = $ascending == 1 ? 'ASC' : 'DESC';
            $records->orderBy($orderBy, $direction);
        }

        $results = $records->get()->toArray();

        

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


    public function show($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'estado' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $select = [
            'solicitudes_envios.id_solicitud',
            'solicitudes_envios.fecha_llegada',
            'solicitudes_envios.estado',
            'solicitudes_envios.fecha_creado',
            'usuarios.usuario_id', 
            'usuarios.email',
            'usuarios_info.nombres', 
            'usuarios_info.apellidos', 
            'usuarios_info.cedula',
            'usuarios_info.cod_usuario',
            'usuarios_info.telefono',
            'usuarios_info.direccion',
            'usuarios_info.ref_direccion',
            'geo_estados.estado AS estado_ve',
            'geo_ubigeo.zona',
            'geo_ubigeo.codigo_postal',
            'empresas_transportes.id_empresa_transporte',
            'empresas_transportes.nombre',
            'almacenes.id_almacen',
            'almacenes.status',
            'almacenes.tipo_envio',
            'almacenes.warehouse',
            'almacenes.total_seguro'
        ];

        $results = SolicitudesEnvios::select($select)
        ->leftJoin('empresas_transportes', 'empresas_transportes.id_empresa_transporte', '=', 'solicitudes_envios.id_empresa_transporte')
        ->leftJoin('usuarios', 'usuarios.usuario_id', '=', 'solicitudes_envios.usuario_id')
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'usuarios.usuario_id')
        ->leftJoin('geo_ubigeo', 'geo_ubigeo.id_ubigeo', '=', 'usuarios_info.id_ubigeo')
        ->leftJoin('geo_estados', 'geo_estados.id_estado', '=', 'usuarios_info.id_estado')
        ->leftJoin('almacenes', 'almacenes.id_solicitud', '=', 'solicitudes_envios.id_solicitud')
        ->where('solicitudes_envios.activo', '=', true)
        ->where('solicitudes_envios.id_solicitud', '=', $id)
        ->where('solicitudes_envios.estado', '=', $request->estado)
        ->first();

        if( $results != null ){
            $trackings = DB::table('trackings')
            ->where('trackings.id_solicitud', '=', $id)
            ->get()->toArray();

            $results->trackings = $trackings;
        }

        

        return response()->json([
            'status' => 200,
            'results' => $results 
        ], 200);

    }

    public function destroy($id)
    {
        $prealerta = SolicitudesEnvios::find($id);

        if( $prealerta->estado != 'pendiente' ){
            return response()->json([
                'status' => 422,
                'message' => 'No se puede eliminar',
            ], 422);
        }

        $prealerta->delete();

        return response()->json([
            'status' => 200,
            'message' => 'La Solicitud fue eliminado con exito con éxito',
        ], 200);
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
            $cantidad = SolicitudesEnvios::whereBetween('fecha_creado', [$from, $to])->count();
        }
        

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
            'valor' => $request->valor
        ], 200);
    }

    public function state()
    {
        $cantidad = SolicitudesEnvios::where([['activo', true], ['estado', 'pendiente']])->count();


        return response()->json([
            'status' => 200,
            'result' => $cantidad,
        ], 200);
    }
}
