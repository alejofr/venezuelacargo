<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Almacenes;
use App\Models\Configuracion\GastosExtras;
use App\Models\Configuracion\MonedasCambios;
use App\Models\Configuracion\MonedasCambiosTasas;
use App\Models\Envios;
use App\Models\Facturas\Facturas;
use App\Models\Facturas\FacturasContent;
use App\Models\Facturas\FacturasInfoExtras;
use App\Models\Facturas\FacturasInfoTrackings;
use App\Models\SolicitudesEnvios;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Barryvdh\DomPDF\Facade\Pdf;

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

        $statusShipment = $this->status_shipment();

        for ($i=0; $i < count($results) ; $i++) { 
            for ($j=0; $j <count($statusShipment) ; $j++) { 
                if( $statusShipment[$j]['valor'] == $results[$i]['estado_envio'] ){
                    $results[$i]['map'] = $statusShipment[$j]['map'];
                }
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

    public function status_shipment()
    {
        return [
            [
                "title" => 'ALMACÉN MIAMI',
                "valor" => 'FACTURADO',
                "check" => true,
            ],
            [
                "title" => 'ENVIADO HACIA VENEZUELA',
                "valor" => 'ENVIO-VENEZUELA',
                "map" => [
                    "id" => "a",
                    "position" => [ "lat" => 25.7745431, "lng" => -80.1708802 ],
                ],
                "check" => false,
            ],
            [
                "title" => 'EN TRÁNSITO HACIA VENEZUELA',
                "valor" => 'ENTRANSITO-VENEZUELA',
                "map" => [
                    "id" => "b",
                    "position" => [ "lat" => 23.732230669979263, "lng" => -71.19582448995914 ],
                ],
                "check" => false,
            ],
            [
                "title" => 'ADUANA DE VENEZUELA',
                "valor" => 'ADUANA-VENEZUELA',
                "map" => [
                    "id" => "c",
                    "position" => [ "lat" => 10.6012894, "lng" => -66.9466783 ],
                ],
                "check" => false,
            ],
            [
                "title" => 'ALMACÉN VENEZUELA',
                "valor" => 'ALMACEN-VENEZUELA',
                "map" => [
                    "id" => "d",
                    "position" => [ "lat" => 10.5997551, "lng" => -66.954827 ],
                ],
                "check" => false,
            ],
            [
                "title" => 'ENTREGADO',
                "valor" => 'ENTREGADO',
                "check" => false,
            ]
        ];
    }

    public function rastreo(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'usuario_id' => ['required'],
            'nro_search' => ['required']
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $usuario_id = $request->usuario_id;
        $this->search = $request->nro_search;
        $result = [
            'module' => 'Solicitud',
            'data' => null
        ];

        $selectAlmacen = [
            'almacenes.id_almacen',
            'almacenes.warehouse',
            'almacenes.tipo_envio', //Envio y Maritimo
            'almacenes.estado',
            'almacenes.status',
            'almacenes.fecha_creado AS fecha_llegada',
            'trackings.id_tracking',
            'trackings.tracking',
            'trackings.descripcion',
            'solicitudes_envios.id_solicitud'
        ];

        $selectFactAndEnvios = [
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

        $almacen = Almacenes::select($selectAlmacen)
        ->leftJoin('solicitudes_envios', 'solicitudes_envios.id_solicitud', '=', 'almacenes.id_solicitud')
        ->leftJoin('trackings', 'trackings.id_solicitud', '=', 'solicitudes_envios.id_solicitud')
        ->where('almacenes.activo', '=', true)
        ->where('solicitudes_envios.usuario_id', '=', $usuario_id)
        ->Where(function($query) {
            $query->orWhere('almacenes.warehouse',  '=', $this->search)
            ->orWhere('trackings.descripcion',  '=', $this->search);
        })->first();


        if( $almacen != null  ){
            $result['module'] = 'Almacen';
            $result['data'] = $almacen;

            $facturaAndEnvio = Envios::select($selectFactAndEnvios)
            ->leftJoin('facturas', 'facturas.id_factura', '=', 'envios.id_factura')
            ->leftJoin('facturas_info_trackings', 'facturas_info_trackings.id_factura', 'facturas.id_factura')
            ->where('facturas.activo', '=', true)
            ->where('facturas.usuario_id', '=', $usuario_id)
            ->where('envios.estado', '<>', 'FACTURADO')
            ->Where(function($query) {
                $query->orWhere('facturas_info_trackings.tracking',  '=', $this->search)
                    ->orWhere('facturas_info_trackings.warehouse',  '=', $this->search);
            })->first();

            if( $facturaAndEnvio != null ){
                $result['module'] = 'Factura-Envio';
                $result['data'] = $facturaAndEnvio;
            }

        }else{
            $selectSolicEnvio = [
                'solicitudes_envios.id_solicitud',
                'solicitudes_envios.fecha_llegada',
                'solicitudes_envios.estado',
                'solicitudes_envios.fecha_creado',
                'empresas_transportes.id_empresa_transporte',
                'empresas_transportes.nombre',
                'trackings.id_tracking',
                'trackings.tracking',
                'trackings.descripcion'
            ];

            $solicitudEnvio = SolicitudesEnvios::select($selectSolicEnvio)
            ->leftJoin('trackings', 'trackings.id_solicitud', '=', 'solicitudes_envios.id_solicitud')
            ->leftJoin('usuarios', 'usuarios.usuario_id', '=', 'solicitudes_envios.usuario_id')
            ->leftJoin('empresas_transportes', 'empresas_transportes.id_empresa_transporte', '=', 'solicitudes_envios.id_empresa_transporte')
            ->where('solicitudes_envios.activo', '=', true)
            ->where('usuarios.usuario_id', '=', $usuario_id)
            ->Where('trackings.tracking', '=', $this->search)
            ->first();

            $result['data'] = $solicitudEnvio;
        }

        return response()->json([
            'status' => 200,
            'result' => $result
        ], 200);

    }

    public function count_invoice(Request $request)
    {
        

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $countInvoice = Facturas::leftJoin('envios', 'envios.id_factura', '=', 'facturas.id_factura')
        ->where([['usuario_id', $request->usuario_id], ['activo', true]])
        ->where('envios.estado', '<>', 'FACTURADO')
        ->count();

        return response()->json([
            'status' => 200,
            'result' => $countInvoice
        ], 200);
    }

    public function count_shipment(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'usuario_id' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $countShipment = Envios::leftJoin('facturas', 'facturas.id_factura', '=', 'envios.id_factura')
        ->where('facturas.activo', '=', true)
        ->where('facturas.usuario_id', '=', $request->usuario_id)
        ->where('envios.estado', '<>', 'FACTURADO')
        ->where('envios.estado', '<>', 'ENTREGADO')
        ->count();

        return response()->json([
            'status' => 200,
            'result' => $countShipment
        ], 200);
    }

    public function print_invoice(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_factura' => ['required'],
            'usuario_id' => ['required'],
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

        if( User::where([['usuario_id', $request->usuario_id], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe usuario',
            ], 422);
        }

        $factura = Facturas::find($request->id_factura);

        $invoice = [
            'nro_factura' => $factura->nro_factura,
            'fecha_estimada' => '',
            'tipo_envio' => $factura->tipo_envio,
            'nro_container' => $factura->nro_container,
            'gastos_extras' => $factura->gastos_extras,
            'total_usd' => $factura->total_usd,
            'total_ves' => $factura->total_ves,
            'fecha_creado' => $factura->fecha_creado,
            'monto_tc' => '',
            'cost_reempaque' => $factura->cost_reempaque,
            'cost_x_tracking' => $factura->cost_x_tracking,
            'pago' => 'POR PAGAR'
        ];

        $envio = Envios::where('id_factura', '=', $factura->id_factura)->first();

        if( $factura->estado == 'Verificacion-Pago'  ){
            $invoice['pago'] = 'VERIFICANDO PAGO';
        }else if( $factura->estado == 'Pago-Verificado' ){
            $invoice['pago'] = 'FACTURA PAGADA';
        }

        if( $envio->estado != 'FACTURADO' ){
            $invoice['fecha_estimada'] = Carbon::parse($envio->fecha_estimada)->format('d-m-Y');
        }

        $invoice_info_trackings = FacturasInfoTrackings::where([['id_factura', $factura->id_factura]])->get()->toArray();
        $invoice_info_extras = FacturasInfoExtras::where([['id_factura', $factura->id_factura]])->get()->toArray();
        $invoice_contents = FacturasContent::where([['id_factura', $factura->id_factura]])->get()->toArray();

        $type_envio = $factura->reempaque == 'si' ? 'reempaque' : 'directo';
        $invoice['type_envio'] = $type_envio; 

        for ($i=0; $i < count($invoice_info_extras) ; $i++) { 
            $invoice_info_extras[$i] = json_decode($invoice_info_extras[$i]['detalles']);
        }

        $invoice_info_trackings = $this->wharehouses($invoice_info_trackings, $type_envio);
        $invoice_contents = $this->contents_wh($invoice_contents, $invoice_info_trackings);

        for ($i=0; $i < count($invoice_info_trackings); $i++) { 
            $invoice_info_trackings[$i] = json_encode($invoice_info_trackings[$i]);
            $invoice_info_trackings[$i] = json_decode($invoice_info_trackings[$i]);
        }

        for ($i=0; $i < count($invoice_contents) ; $i++) { 
            $invoice_contents[$i] = json_encode($invoice_contents[$i]);
            $invoice_contents[$i] = json_decode($invoice_contents[$i]);
        }
        
        $client = json_decode($factura->cliente);
        $data = [
            "invoice" => $invoice,
            "user" => $client,
            "invoice_info_trackings" => $invoice_info_trackings,
            "invoice_info_extras" => $invoice_info_extras,
            "invoice_contents" => $invoice_contents
        ];

        //print_r($invoice_info_trackings);
        $pdf = PDf::loadView('reports.invoice', $data);
        $nameInvoice = $factura->nro_factura.'-'.$client->cod_usuario.'';
        $path = public_path('pdf');
        $fileName =  time().'-'.''.$nameInvoice. '.pdf' ;
        $pdf->save($path . '/' . $fileName);

        $pdf = public_path('pdf/'.$fileName);
        return response()->download($pdf);
    }

      //
      public function wharehouses($data = [], $envio = 'directo')
      {
          $warehouses = [];
          for ($i=0; $i <count($data) ; $i++) { 
              if( $data[$i]['warehouse_padre'] == null && $envio == 'directo' ){
                  array_push($warehouses, $data[$i]);
              }
  
              if( $envio == 'reempaque' && $data[$i]['warehouse_padre'] == null ){
                  $wh = '';
                  for ($j=0; $j <count($data) ; $j++) { 
                      if(  $data[$i]['id_factura_tracking'] == $data[$j]['warehouse_padre'] ){
                          $wh = ( $wh == '' ) ? $data[$j]['warehouse'] : $wh.','.$data[$j]['warehouse'];
                      }
                  }
  
                  $data[$i]['wh_second'] = $wh;
  
                  array_push($warehouses, $data[$i]);
              }
          }
  
          return $warehouses;
      }
  
      //
      public function contents_wh($contents = [], $wh = [])
      {
          
          for ($i=0; $i <count($contents) ; $i++) { 
              for ($j=0; $j <count($wh) ; $j++) { 
                  if( $contents[$i]['id_factura_tracking'] == $wh[$j]['id_factura_tracking'] ){
                      $contents[$i]['warehouse'] = $wh[$j]['warehouse'];
                      break 1;
                  }
              }
  
              if( $contents[$i]['id_factura_tracking'] === null ){
                  $contents[$i]['warehouse'] = '';
              }
          }
  
          return $contents;
      }
}
