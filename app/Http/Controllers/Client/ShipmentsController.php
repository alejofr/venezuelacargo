<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\GastosExtras;
use App\Models\Configuracion\MonedasCambios;
use App\Models\Configuracion\MonedasCambiosTasas;
use App\Models\Envios;
use App\Models\Facturas\Facturas;
use App\Models\Facturas\FacturasContent;
use App\Models\Facturas\FacturasInfoExtras;
use App\Models\Facturas\FacturasInfoTrackings;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ShipmentsController extends Controller
{
    public $search = "";
    public $fecha_estimada = "";
    public $fecha_inicio = "";
    public $fecha_final = "";
    
    
    public function index()
    {
        $select = [
            'facturas.id_factura',
            'facturas.nro_factura',
            'facturas.nro_container',
            'facturas.tipo_envio',
            'facturas.total_usd',
            'facturas.reempaque',
            'facturas.estado AS estado_pago',
            'envios.id_envio',
            'envios.historial_estado',
            'envios.estado AS estado_envio', //FACTURADO - ENVIADO-VENEZUELA - EN-TRANSITO-VENEZUELA - ADUENA-VENEZUELA - ALMACEN-VENEZUELA - ENVIADO-CLINTE - ENTREGADO
            'envios.fecha_estimada',
            'envios.fecha_creado',
            'envios.fecha_editado',
        ];

        //warehouse
        // 

        extract(request()->only(['usuario_id','query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
       // $this->estado = ( $query != null && isset($query->estado) && $query->estado != '' ) ? $query->estado : "";
        $this->fecha_estimada = ( $query != null && isset($query->fecha_estimada) && $query->fecha_estimada != '' ) ? $query->fecha_estimada : "";
        $this->fecha_inicio = ( $query != null && isset($query->fecha_inicio) && $query->fecha_inicio != '' ) ? $query->fecha_inicio : "";
        $this->fecha_final = ( $query != null && isset($query->fecha_final) && $query->fecha_final != '' ) ? $query->fecha_final : "";

        

        $records = Envios::select($select)
        ->leftJoin('facturas', 'facturas.id_factura', '=', 'envios.id_factura')
        ->leftJoin('facturas_info_trackings', 'facturas_info_trackings.id_factura', 'facturas.id_factura')
        ->where('facturas.activo', '=', true)
        ->where('facturas.usuario_id', '=', $usuario_id)
        ->where('envios.estado', '<>', 'FACTURADO')
        ->Where(function($query) {
            $query->orWhere('facturas.nro_factura',  'LIKE', '%'.$this->search.'%')
                ->orWhere('facturas.nro_container',  'LIKE', '%'.$this->search.'%')
                ->orWhere('facturas_info_trackings.tracking',  'LIKE', '%'.$this->search.'%')
                ->orWhere('facturas_info_trackings.warehouse',  'LIKE', '%'.$this->search.'%');
        });


        /* if( $this->estado != '' && $this->estado != 'all' ){
            $records = $records->where('envios.estado', '=', $this->estado);
        }*/

        if( $this->fecha_estimada != ''){
           
            $records = $records->where('envios.fecha_estimada', '=', $this->fecha_estimada);
        }

        if( $this->fecha_inicio != '' && $this->fecha_final != ''){
            $this->fecha_inicio = ( $this->fecha_inicio == '' ) ? Carbon::now()->format('Y-m-d') : $this->fecha_inicio;
            $this->fecha_final = (  $this->fecha_final == '' ) ? Carbon::now()->format('Y-m-d') :  $this->fecha_final;
           
            $records = $records->whereBetween('facturas.fecha_creado', [$this->fecha_inicio, $this->fecha_final]);
        }

        if (isset($orderBy)) {
            $direction = $ascending == 1 ? 'ASC' : 'DESC';
            $records->orderBy($orderBy, $direction);
        }


        $results = $records->get()->toArray();

        for ($i=0; $i < count($results) ; $i++) { 

            if( $results[$i]['historial_estado'] != null )
            $results[$i]['historial_estado'] = json_decode($results[$i]['historial_estado']);
        }

        $new_results = [];
        
        for ($i=0; $i <count($results) ; $i++) { 
            $bol = true;
            for ($j=0; $j < count($new_results); $j++) { 
                if( in_array($results[$i]['id_factura'], $new_results[$j]) ){
                    $bol = false;
                    break 1;
                }
            }

            if( $bol ){
                array_push($new_results, $results[$i]);
            }
        }

        $count = count($new_results);
        $hasta = $limit * $page;
        $desde = $hasta - $limit;
        $results = [];
        for ($i=0; $i < count($new_results) ; $i++) { 
            if( $i >= $desde && $i < $hasta ){
                array_push($results, $new_results[$i]);
            }   
        }

    

        return response()->json([
            'status' => 200,
            'results' => $results,
            'pagination' => [
                'numPage' => intval($page),
                'resultPage' => count($results) ,
                'totalResult' => $count
            ]
        ], 200);
    }

    public function show($id)
    {

        $factura = Facturas::where([['id_factura', $id], ['activo', true]])->first();

        if($factura != null){
            $factura->warehouses = FacturasInfoTrackings::where([['id_factura', $id]])->get()->toArray();
            $factura->contents = FacturasContent::where([['id_factura', $id]])->get()->toArray();
            $extras = FacturasInfoExtras::where([['id_factura', $id]])->get()->toArray();
            $factura->pago = json_decode($factura->pago);
            $factura->cliente = json_decode($factura->cliente);

            for ($i=0; $i < count($extras) ; $i++) { 
                $extras[$i]['detalles'] = json_decode($extras[$i]['detalles']);
            }

            $factura->extras = $extras;

            $tasa = null;
            $records = MonedasCambios::select(['id_moneda_cambio', 'abreviatura_moneda_nc'])
            ->where('monedas_cambios.activo', '=', true)
            ->first();

            if( $records != null ){
                $tasa = MonedasCambiosTasas::select(['monto_tc', 'fecha_tc'])
                ->where('id_moneda_cambio', '=', $records->id_moneda_cambio)
                ->where('activo', '=', true)
                ->orderBy('fecha_tc', 'DESC')
                ->first();
            }

            return response()->json([
                'status' => 200,
                'result' => $factura,
                'tasa' => $tasa,
                'extras' => GastosExtras::select('*')->where([['activo', true], ['tipo', 'CAJA']])->get()->toArray()
            ], 200);
        }
        
    }

    public function savePago(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_factura' => ['required'],
            'tipo_moneda' => ['required'],
            'usuario_id' => ['required'],
            'comprobante' => ['required'],
            'nro_comprobante' => ['required'],
            'titular' => ['required'],
            'tasa' => ['required', 'regex:/^-?[0-9]+(?:\,[0-9]{1,2})+$/'],
            'total_ves' => ['required', 'regex:/^-?[0-9]+(?:\,[0-9]{1,2})+$/']
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        if( Facturas::where([['id_factura', $request->id_factura], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe factura',
            ], 422);
        }

        $factura = Facturas::find($request->id_factura);
        if( $factura->estado == 'Pago-Verificado' ){
            return response()->json([
                'status' => 422,
                'message' => 'Esta factura ya tiene el pago verificado',
            ], 422);
        }

        if( $factura->estado == 'Verificacion-Pago' ){
            return response()->json([
                'status' => 422,
                'message' => 'Esta factura tiene un pago que esta en verificacion',
            ], 422);
        }

        $pago = [
            'tasa' => $request->tasa,
            'tipo_moneda' => $request->tipo_moneda,
            'comprobante' => asset(Storage::url($request->comprobante->store('public/images'))),
            'nro_comprobante' => $request->nro_comprobante,
            'titular' => $request->titular,
        ];

        $factura->total_ves = $request->total_ves;
        $factura->pago = json_encode($pago);
        $factura->monto_tc = $request->tasa;
        $factura->estado = 'Verificacion-Pago';
        $factura->fecha_pago =  Carbon::now()->format('Y-m-d');
        $factura->update();

        return response()->json([
            'status' => 200,
            'message' => 'Fue agregado el comprobante de pago de la factura: '.$factura->nro_factura
        ], 200);
    }
}
