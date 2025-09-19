<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\NoPagoInvoice;
use App\Mail\NotificationInvoiceResend;
use App\Models\Almacenes;
use App\Models\Configuracion\GastosExtras;
use App\Models\Configuracion\MonedasCambios;
use App\Models\Configuracion\MonedasCambiosTasas;
use App\Models\Envios;
use App\Models\Facturas\Facturas;
use App\Models\Facturas\FacturasContent;
use App\Models\Facturas\FacturasInfoExtras;
use App\Models\Facturas\FacturasInfoTrackings;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use PhpParser\Node\Stmt\TryCatch;

class FacturasController extends Controller
{
    public $search = "";
    public $estado = "";
    public $fecha_inicio = "";
    public $fecha_final = "";

    public function index()
    {
        $select = [
            'facturas.id_factura',
            'facturas.nro_factura',
            'facturas.nro_container',
            'facturas.cliente',
            'facturas.pago',
            'facturas.gastos_extras',
            'facturas.total_usd',
            'facturas.total_ves',
            'facturas.estado',
            'facturas.tipo_envio',
            'facturas.reempaque',
            'facturas.fecha_creado',
            'envios.estado AS estado_envio'
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 16;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
        $this->estado = ( $query != null && isset($query->estado) && $query->estado != '' ) ? $query->estado : "";
        $this->fecha_inicio = ( $query != null && isset($query->fecha_inicio) && $query->fecha_inicio != '' ) ? $query->fecha_inicio : "";
        $this->fecha_final = ( $query != null && isset($query->fecha_final) && $query->fecha_final != '' ) ? $query->fecha_final : "";
       
        $records = Facturas::select($select)
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'facturas.usuario_id')
        ->leftJoin('envios', 'envios.id_factura', '=', 'facturas.id_factura')
        ->where('facturas.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('facturas.nro_factura',  'LIKE', '%'.$this->search.'%')
                ->orWhere('facturas.nro_container',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.cod_usuario',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.nombres',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.apellidos',  'LIKE', '%'.$this->search.'%');
        });

        if( $this->estado != '' && $this->estado != 'all' ){
            $records = $records->where('facturas.estado', '=', $this->estado);
        }

        if( $this->fecha_inicio != '' || $this->fecha_final != ''){
            $this->fecha_inicio = ( $this->fecha_inicio == '' ) ? Carbon::now()->format('Y-m-d') : $this->fecha_inicio;
            $this->fecha_final = (  $this->fecha_final == '' ) ? Carbon::now()->format('Y-m-d') :  $this->fecha_final;
           
            $records = $records->whereBetween('facturas.fecha_creado', [$this->fecha_inicio, $this->fecha_final]);
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
            $results[$i]['cliente'] = json_decode($results[$i]['cliente']);
            $results[$i]['pago'] = json_decode($results[$i]['pago']);
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

    public function store_directo(Request $request)
    {
        $validator = Validator::make($request->all(), [
            //'nro_factura' => ['required','regex:/^[0-9]+$/', 'unique:facturas'],
            'nro_container' => ['required','regex:/^[0-9]+$/'],
            'tipo_envio' => ['required'],
            'cliente' => ['required'],
            'metodo' => ['required'],
            'warehouses' => ['required'],
            'data_content' => ['required'],
            'total_gastos_extras' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'total_usd' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'total_ves' => ['required', 'regex:/^-?[0-9]+(?:\,[0-9]{1,2})+$/'],
            'usuario_id' => ['required'],
            'monto_tc' => ['required'],
            'fecha_tc' => ['required'],
            'tarifa_envio' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'cost_x_tracking' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
        ]);

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        if( $request->metodo == 'store' ){
            $validator = Validator::make($request->all(), [
                'nro_factura' => ['required','regex:/^[0-9]+$/', 'unique:facturas'],
            ]);
    
            if ( isset($validator) && $validator->fails() ) {
                return response()->json([
                    'status' => 403,
                    'message' => $validator->errors()->first(),
                ], 403);
            }
        }
        if( $request->metodo == 'updated' ){
            $validator = Validator::make($request->all(), [
                'nro_factura' => ['required'],
                'id_factura' => ['required'],
            ]);
    
            if ( isset($validator) && $validator->fails() ) {
                return response()->json([
                    'status' => 403,
                    'message' => $validator->errors()->first(),
                ], 403);
            }
        }

        if( $request->metodo == 'store' ){
            $factura = new Facturas;
        }else{
            $factura = Facturas::find($request->id_factura);
            
        }

        if( $request->metodo == 'updated' ){
            if( $factura->nro_factura != $request->nro_factura ){
                $validator = Validator::make($request->all(), [
                    'nro_factura' => ['required','regex:/^[0-9]+$/', 'unique:facturas'],
                ]);
        
                if ( isset($validator) && $validator->fails() ) {
                    return response()->json([
                        'status' => 403,
                        'message' => $validator->errors()->first(),
                    ], 403);
                }
            }

            FacturasInfoTrackings::where([['id_factura', $request->id_factura]])->delete();
            FacturasContent::where([['id_factura', $request->id_factura]])->delete();
            FacturasInfoExtras::where([['id_factura', $request->id_factura]])->delete();
        }

        $warehouses= $request->warehouses;
        if( count($warehouses) == 0 ){
            return response()->json([
                'status' => 403,
                'message' => 'Error, Debe de agregar almenos un warehouse',
            ], 403);
        }

        $data_content= $request->data_content;
        if( count($data_content) == 0 ){
            return response()->json([
                'status' => 403,
                'message' => 'Error, la factura no se puede factuar sin datos',
            ], 403);
        }

        

        
        
        $factura->usuario_id = $request->usuario_id;
        $factura->nro_factura = $request->nro_factura;
        $factura->nro_container = $request->nro_container;
        $factura->cliente = json_encode($request->cliente);
        $factura->pago = json_encode([]);
        $factura->gastos_extras = $request->total_gastos_extras;
        $factura->total_usd = $request->total_usd;
        $factura->total_ves = $request->total_ves;
        $factura->tipo_envio = $request->tipo_envio;
        $factura->reempaque = 'no';

        $factura->monto_tc = $request->monto_tc;
        $factura->fecha_tc = $request->fecha_tc;
        $factura->tarifa_envio = $request->tarifa_envio;
        $factura->cost_x_tracking = $request->cost_x_tracking;
        

        if( $request->metodo == 'store' ){
            $factura->save();
        }else{
            $factura->update();
        }
        
        
        $memory_indice_content = '';
        for ($k=0; $k <count($warehouses) ; $k++) { 
            $factura_wh_children = new FacturasInfoTrackings;
            $factura_wh_children->id_factura = $factura->id_factura;
            $factura_wh_children->warehouse = $warehouses[$k]['warehouse'];
            $factura_wh_children->tracking = $warehouses[$k]['tracking'];
            $factura_wh_children->descripcion = $warehouses[$k]['descripcion'];
            $factura_wh_children->ancho = $warehouses[$k]['ancho'];
            $factura_wh_children->alto = $warehouses[$k]['alto'];
            $factura_wh_children->largo = $warehouses[$k]['largo'];
            $factura_wh_children->peso = $warehouses[$k]['peso'];
            $factura_wh_children->num_piezas = $warehouses[$k]['num_piezas'];
            $factura_wh_children->volumen = $warehouses[$k]['volumen'];
            $factura_wh_children->pie_cubico = $warehouses[$k]['pie_cubico'];
            $factura_wh_children->ruta_image = $warehouses[$k]['ruta_image'];
            $factura_wh_children->reempaque = $warehouses[$k]['reempaque'];
            $factura_wh_children->seguro = $warehouses[$k]['seguro']; 
            $factura_wh_children->total_seguro = $warehouses[$k]['total_seguro'];
            $factura_wh_children->save();

            //body content
            for ($j=0; $j <count($data_content) ; $j++) { 
                if( $j !== $memory_indice_content && $data_content[$j]['warehouse'] == $warehouses[$k]['warehouse']){
                    $factura_content = new FacturasContent;
                    $factura_content->id_factura_tracking = $factura_wh_children->id_factura_tracking;
                    $factura_content->id_factura = $factura->id_factura;
                    $factura_content->volumen = $data_content[$j]['volumen'];
                    $factura_content->pie_cubico = $data_content[$j]['pie_cubico'];
                    $factura_content->total_lb = $data_content[$j]['total_lb'];
                    $factura_content->peso = $data_content[$j]['peso'];
                    $factura_content->cost_env = $data_content[$j]['cost_env'];
                    $factura_content->seguro = $data_content[$j]['seguro'];
                    $factura_content->sub_total = $data_content[$j]['sub_total'];
                    $factura_content->save();
                    
                    $memory_indice_content = $j;

                    break 1;
                }
            }
        }

        for ($j=0; $j <count($data_content) ; $j++) { 
            if( $data_content[$j]['warehouse'] == '' ){
                $factura_content = new FacturasContent;
                $factura_content->id_factura = $factura->id_factura;
                $factura_content->volumen = $data_content[$j]['volumen'];
                $factura_content->pie_cubico = $data_content[$j]['pie_cubico'];
                $factura_content->total_lb = $data_content[$j]['total_lb'];
                $factura_content->peso = $data_content[$j]['peso'];
                $factura_content->cost_env = $data_content[$j]['cost_env'];
                $factura_content->seguro = $data_content[$j]['seguro'] == '' ? '0.00' : $data_content[$j]['seguro'];
                $factura_content->sub_total = $data_content[$j]['sub_total'];
                $factura_content->save();
                break;
            }
        }

        //agregar cajas
        $extras_cajas = $request->extras_cajas;
        for ($i=0; $i < count($extras_cajas) ; $i++) { 
            $factura_extra = new FacturasInfoExtras;
            $factura_extra->id_factura = $factura->id_factura; 
            $factura_extra->detalles = json_encode($extras_cajas[$i]); 
            $factura_extra->precio_unitario = $extras_cajas[$i]['monto_gasto_extra']; 
            $factura_extra->sub_total = $extras_cajas[$i]['sub_total']; 
            
            $factura_extra->save();
        }

        return response()->json([
            'status' => 200,
            'message' => 'La factura fue creada con exito. numero de factura '.$factura->nro_factura,
        ], 200);

    }

    public function store_reempaque(Request $request)
    {
        $validator = Validator::make($request->all(), [
            //'nro_factura' => ['required','regex:/^[0-9]+$/', 'unique:facturas'],
            'nro_container' => ['required','regex:/^[0-9]+$/'],
            'tipo_envio' => ['required'],
            'cliente' => ['required'],
            'metodo' => ['required'],
            'warehouses' => ['required'],
            'warehouses_new' => ['required'],
            'data_content' => ['required'],
            'total_gastos_extras' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'total_usd' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'total_ves' => ['required', 'regex:/^-?[0-9]+(?:\,[0-9]{1,2})+$/'],
            'usuario_id' => ['required'],
            'monto_tc' => ['required'],
            'fecha_tc' => ['required'],
            'tarifa_envio' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'cost_reempaque' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
            'cost_x_tracking' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
        ]);

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        if( $request->metodo == 'store' ){
            $validator = Validator::make($request->all(), [
                'nro_factura' => ['required','regex:/^[0-9]+$/', 'unique:facturas'],
            ]);
    
            if ( isset($validator) && $validator->fails() ) {
                return response()->json([
                    'status' => 403,
                    'message' => $validator->errors()->first(),
                ], 403);
            }
        }

        if( $request->metodo == 'updated' ){
            $validator = Validator::make($request->all(), [
                'nro_factura' => ['required'],
                'id_factura' => ['required'],
            ]);
    
            if ( isset($validator) && $validator->fails() ) {
                return response()->json([
                    'status' => 403,
                    'message' => $validator->errors()->first(),
                ], 403);
            }
        }

        if( $request->metodo == 'store' ){
            $factura = new Facturas;
        }else{
            $factura = Facturas::find($request->id_factura);
            
        }

        if( $request->metodo == 'updated' ){
            if( $factura->nro_factura != $request->nro_factura ){
                $validator = Validator::make($request->all(), [
                    'nro_factura' => ['required','regex:/^[0-9]+$/', 'unique:facturas'],
                ]);
        
                if ( isset($validator) && $validator->fails() ) {
                    return response()->json([
                        'status' => 403,
                        'message' => $validator->errors()->first(),
                    ], 403);
                }
            }

            FacturasInfoTrackings::where([['id_factura', $request->id_factura]])->delete();
            FacturasContent::where([['id_factura', $request->id_factura]])->delete();
            FacturasInfoExtras::where([['id_factura', $request->id_factura]])->delete();
        }

        $warehouses= $request->warehouses;
        if( count($warehouses) == 0 ){
            return response()->json([
                'status' => 403,
                'message' => 'Error, Debe de agregar almenos un warehouse',
            ], 403);
        }

        $warehouses_new= $request->warehouses_new;
        if( count($warehouses_new) == 0 ){
            return response()->json([
                'status' => 403,
                'message' => 'Error, Debe de agregar almenos un reempaque',
            ], 403);
        }

        $data_content= $request->data_content;
        if( count($data_content) == 0 ){
            return response()->json([
                'status' => 403,
                'message' => 'Error, la factura no se puede factuar sin datos',
            ], 403);
        }

    
        $factura->usuario_id = $request->usuario_id;
        $factura->nro_factura = $request->nro_factura;
        $factura->nro_container = $request->nro_container;
        $factura->cliente = json_encode($request->cliente);
        $factura->pago = json_encode([]);
        $factura->gastos_extras = $request->total_gastos_extras;
        $factura->total_usd = $request->total_usd;
        $factura->total_ves = $request->total_ves;
        $factura->tipo_envio = $request->tipo_envio;
        $factura->reempaque = 'si';

        $factura->monto_tc = $request->monto_tc;
        $factura->fecha_tc = $request->fecha_tc;
        $factura->tarifa_envio = $request->tarifa_envio;
        $factura->cost_reempaque = $request->cost_reempaque;
        $factura->cost_x_tracking = $request->cost_x_tracking;

        if( $request->metodo == 'store' ){
            $factura->save();
        }else{
            $factura->update();
        }
        
        $memory_indice_content = '';
        //agregar wh padre y hijo. tambien agregamos el body content
        for ($i=0; $i <count($warehouses_new) ; $i++) { 
            $factura_wh_father = new FacturasInfoTrackings;
            $factura_wh_father->id_factura = $factura->id_factura;
            $factura_wh_father->warehouse = $warehouses_new[$i]['warehouse'];
            $factura_wh_father->ancho = $warehouses_new[$i]['ancho'];
            $factura_wh_father->alto = $warehouses_new[$i]['alto'];
            $factura_wh_father->largo = $warehouses_new[$i]['largo'];
            $factura_wh_father->peso = $warehouses_new[$i]['peso'];
            $factura_wh_father->num_piezas = $warehouses_new[$i]['num_piezas'];
            $factura_wh_father->volumen = $warehouses_new[$i]['volumen'];
            $factura_wh_father->pie_cubico = $warehouses_new[$i]['pie_cubico'];
            $factura_wh_father->seguro = $warehouses_new[$i]['seguro']; 
            $factura_wh_father->total_seguro = $warehouses_new[$i]['total_seguro'];
            $factura_wh_father->save();

            //wh hijos
            for ($j=0; $j < count($warehouses_new[$i]['almacen_ids']) ; $j++) { 
                for ($k=0; $k <count($warehouses) ; $k++) { 
                    if( $warehouses[$k]['id_almacen'] == $warehouses_new[$i]['almacen_ids'][$j] ){
                        $factura_wh_children = new FacturasInfoTrackings;
                        $factura_wh_children->id_factura = $factura->id_factura;
                        $factura_wh_children->warehouse = $warehouses[$k]['warehouse'];
                        $factura_wh_children->warehouse_padre = $factura_wh_father->id_factura_tracking;
                        $factura_wh_children->tracking = $warehouses[$k]['tracking'];
                        $factura_wh_children->descripcion = $warehouses[$k]['descripcion'];
                        $factura_wh_children->ancho = $warehouses[$k]['ancho'];
                        $factura_wh_children->alto = $warehouses[$k]['alto'];
                        $factura_wh_children->largo = $warehouses[$k]['largo'];
                        $factura_wh_children->peso = $warehouses[$k]['peso'];
                        $factura_wh_children->num_piezas = $warehouses[$k]['num_piezas'];
                        $factura_wh_children->volumen = $warehouses[$k]['volumen'];
                        $factura_wh_children->pie_cubico = $warehouses[$k]['pie_cubico'];
                        $factura_wh_children->ruta_image = $warehouses[$k]['ruta_image'];
                        $factura_wh_children->reempaque = $warehouses[$k]['reempaque'];
                        $factura_wh_children->seguro = $warehouses[$k]['seguro']; 
                        $factura_wh_children->total_seguro = $warehouses[$k]['total_seguro'];
                        $factura_wh_children->save();
                        //break;
                    }
                }
            }

            //body content
            for ($j=0; $j <count($data_content) ; $j++) { 
                if( $data_content[$j]['warehouse'] != ''){
                    $factura_content = new FacturasContent;
                    $factura_content->id_factura_tracking = $factura_wh_father->id_factura_tracking;
                    $factura_content->id_factura = $factura->id_factura;
                    $factura_content->volumen = $data_content[$j]['volumen'];
                    $factura_content->pie_cubico = $data_content[$j]['pie_cubico'];
                    $factura_content->total_lb = $data_content[$j]['total_lb'];
                    $factura_content->peso = $data_content[$j]['peso'];
                    $factura_content->cost_env = $data_content[$j]['cost_env'];
                    $factura_content->seguro = $data_content[$j]['seguro'];
                    $factura_content->sub_total = $data_content[$j]['sub_total'];
                    $factura_content->save();
                    
                    unset($data_content[$j]);

                    break 1;
                }
            }

            $aux_content = [];
            foreach ($data_content as $value) {
                array_push($aux_content, $value);
            }

            $data_content = $aux_content;
        }

        for ($j=0; $j <count($data_content) ; $j++) { 
            if( $data_content[$j]['warehouse'] == '' ){
                $factura_content = new FacturasContent;
                $factura_content->id_factura = $factura->id_factura;
                $factura_content->volumen = $data_content[$j]['volumen'];
                $factura_content->pie_cubico = $data_content[$j]['pie_cubico'];
                $factura_content->total_lb = $data_content[$j]['total_lb'];
                $factura_content->peso = $data_content[$j]['peso'];
                $factura_content->cost_env = $data_content[$j]['cost_env'];
                $factura_content->seguro = $data_content[$j]['seguro'] == '' ? '0.00' : $data_content[$j]['seguro'];
                $factura_content->sub_total = $data_content[$j]['sub_total'];
                $factura_content->save();
                break;
            }
        }

        //agregar cajas
        $extras_cajas = $request->extras_cajas;
        for ($i=0; $i < count($extras_cajas) ; $i++) { 
            $factura_extra = new FacturasInfoExtras;
            $factura_extra->id_factura = $factura->id_factura; 
            $factura_extra->detalles = json_encode($extras_cajas[$i]); 
            $factura_extra->precio_unitario = $extras_cajas[$i]['monto_gasto_extra']; 
            $factura_extra->sub_total = $extras_cajas[$i]['sub_total']; 
            
            $factura_extra->save();
        }

        return response()->json([
            'status' => 200,
            'message' => 'La factura fue creada con exito. numero de factura '.$factura->nro_factura,
        ], 200);
    }


    public function edit($id)
    {
        $factura = Facturas::where([['id_factura', $id], ['activo', true]])->first();

        if($factura == null){
            return response()->json([
                'status' => 403,
                'message' => 'Error, no existe esta factura',
            ], 403);
        }
        
        if( $factura->estado == 'Pendiente'){

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
            
        }else{
            return response()->json([
                'status' => 403,
                'message' => 'Error, ya esta factura no se puede editar',
            ], 403);
        }
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

    public function pagoVerificado($id)
    {
        $factura = Facturas::find($id);

        $factura->estado = 'Pago-Verificado';

        $factura->update();

        return response()->json([
            'status' => 200,
            'message' => 'El pago de la factura '.$factura->nro_factura. ' fue verficado con exito',
        ], 200);

    }

    public function pagoNOVerificado($id)
    {
        $factura = Facturas::find($id);

        $factura->estado = 'Pendiente';
        $factura->pago = json_encode([]);

        

        $invoice = ['nro_factura' => $factura->nro_factura];
        $user = User::find($factura->usuario_id);

        if( $user != null ){
            try {
                Mail::to($user->email)
                ->send(new NoPagoInvoice($invoice));
                
                $factura->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'La notificacion de pago no verifiacdo de la factura '.$factura->nro_factura. ' fue enviado con exito a el cliente via email',
                ], 200);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => 403,
                    'message' => 'Ocurrio un error, por favor intente mas tarde.',
                ], 403);
            }
        }

        

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

    public function print_invoice($id)
    {
        
        $factura = Facturas::where([['id_factura', $id], ['activo', true]])->first();

        if($factura != null){
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

            $cajas = 0;

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
                if( $invoice_contents[$i]['id_factura_tracking'] !== null ){
                    $cajas++;
                }
                
                $invoice_contents[$i] = json_encode($invoice_contents[$i]);
                $invoice_contents[$i] = json_decode($invoice_contents[$i]);

                
            }
            
            $client = json_decode($factura->cliente);
            $invoice['cajas'] = $cajas;

            $data = [
                "invoice" => $invoice,
                "user" => $client,
                "invoice_info_trackings" => $invoice_info_trackings,
                "invoice_info_extras" => $invoice_info_extras,
                "invoice_contents" => $invoice_contents
            ];

            //print_r($invoice_info_trackings);
            $pdf = PDF::loadView('reports.invoice', $data);
            $nameInvoice = $factura->nro_factura.'-'.$client->cod_usuario.'';
            $path = public_path('pdf');
            $fileName =  time().'-'.''.$nameInvoice. '.pdf' ;
            $pdf->save($path . '/' . $fileName);

            $pdf = public_path('pdf/'.$fileName);
            return response()->download($pdf);
        }else{
            return response()->json([
                'status' => 403,
                'message' => 'Error, No encuentra esta factura',
            ], 403);
        }
    }

    public function send_invoice($id)
    {
        $factura = Facturas::where([['id_factura', $id], ['activo', true]])->first();
        $user = User::find($factura->usuario_id);
        
        
        if( $factura == null ){
            return response()->json([
                'status' => 403,
                'message' => 'Error, No encuentra esta factura',
            ], 403);
        }

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

        
        if( $factura->estado = 'Verificacion-Pago'  ){
            $invoice['pago'] = 'VERIFICANDO PAGO';
        }else if( $factura->estado = 'Pago-Verificado' ){
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

        if( $user != null ){
            $pdf = PDF::loadView('reports.invoice', $data);
            try {
                Mail::to($user->email)
                ->send(new NotificationInvoiceResend($invoice, $pdf->output()));

                return response()->json([
                    'status' => 200,
                    'message' => 'La Factura: '. $factura->nro_factura.' fue enviada con exito',
                ], 200);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => 403,
                    'message' => 'Ocurrio un error, por favor intente mas tarde.',
                ], 403);
            }
        }
    }

    public function destroy($id)
    {
        $factura = Facturas::find($id);

        if( $factura->estado != 'Pendiente' ){
            return response()->json([
                'status' => 422,
                'message' => 'No se puede eliminar',
            ], 422);
        }

        $envio = Envios::where('id_factura', '=', $factura->id_factura)->first();

        if( $envio->estado != 'FACTURADO' ){
            return response()->json([
                'status' => 422,
                'message' => 'No se puede eliminar, porque hay un envio en camino a Venezuela',
            ], 422);
        }

        $facturasInfoTrackings= FacturasInfoTrackings::where('id_factura', '=', $factura->id_factura)->get()->toArray();

        if( count($facturasInfoTrackings) > 0){
            for ($i=0; $i <count($facturasInfoTrackings); $i++) { 
                $almacen = Almacenes::where('warehouse', '=', $facturasInfoTrackings[$i]['warehouse'])
                ->where('activo', '=', true)
                ->first();
    
                if( $almacen != null ){
                    $almacen->estado = 'recibido';
                    $almacen->update();
                }
            }
           
        }

        $factura->delete();

        return response()->json([
            'status' => 200,
            'message' => 'La Factura: '. $factura->nro_factura.' fue eliminado con exito con éxito',
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
            $results = Facturas::select(['total_usd'])
            ->whereBetween('fecha_creado', [$from, $to])->get()->toArray();
            for ($i=0; $i < count($results) ; $i++) { 
                $cantidad = $cantidad + $results[$i]['total_usd'];
            }
        }
        

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
            'valor' => $request->valor
        ], 200);
    }

    public function analyzePieCubicoSending(Request $request){
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
            $results = Facturas::select([
                'facturas_content.pie_cubico'
            ])
            ->leftJoin('facturas_content', 'facturas_content.id_factura', '=', 'facturas.id_factura')
            ->where([['facturas.activo', true] ])
            ->whereNotNull('facturas_content.pie_cubico')
            ->whereBetween('facturas.fecha_creado', [$from, $to])->get()->toArray();

            for ($i=0; $i < count($results) ; $i++) { 
                $cantidad = $cantidad + $results[$i]['pie_cubico'];
            }

            return response()->json([
                'status' => 200,
                'result' => $cantidad,
                'valor' => $request->valor
            ], 200);
        }

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
            'valor' => $request->valor
        ], 200);
    }

    public function analyzeVolumenSending(Request $request){
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
            $results = Facturas::select([
                'facturas_content.volumen'
            ])
            ->leftJoin('facturas_content', 'facturas_content.id_factura', '=', 'facturas.id_factura')
            ->where([['facturas.activo', true] ])
            ->whereNotNull('facturas_content.volumen')
            ->whereBetween('facturas.fecha_creado', [$from, $to])->get()->toArray();

            for ($i=0; $i < count($results) ; $i++) { 
                $cantidad = $cantidad + $results[$i]['volumen'];
            }

            return response()->json([
                'status' => 200,
                'result' => $cantidad,
                'valor' => $request->valor
            ], 200);
        }

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
            'valor' => $request->valor
        ], 200);
    }

    public function analyzeLibrasSending(Request $request){
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
            $results = Facturas::select([
                'facturas_content.total_lb'
            ])
            ->leftJoin('facturas_content', 'facturas_content.id_factura', '=', 'facturas.id_factura')
            ->where([['facturas.activo', true] ])
            ->whereNotNull('facturas_content.total_lb')
            ->whereBetween('facturas.fecha_creado', [$from, $to])->get()->toArray();

            for ($i=0; $i < count($results) ; $i++) { 
                $cantidad = $cantidad + $results[$i]['total_lb'];
            }

            return response()->json([
                'status' => 200,
                'result' => $cantidad,
                'valor' => $request->valor
            ], 200);
        }

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
            'valor' => $request->valor
        ], 200);
    }



    public function state()
    {
        $cantidad = Facturas::where([['activo', true], ['estado', 'Pendiente']])->count();

        

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
        ], 200);
    }
}
