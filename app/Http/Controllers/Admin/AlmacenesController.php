<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Almacenes;
use App\Models\Configuracion\GastosExtras;
use App\Models\Configuracion\MonedasCambios;
use App\Models\Configuracion\MonedasCambiosTasas;
use App\Models\Facturas\Facturas;
use App\Models\Facturas\FacturasInfoTrackings;
use App\Models\Trackings;
use App\Models\SolicitudesEnvios;
use App\Models\UsuariosInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class AlmacenesController extends Controller
{
    public $search = "";
    public $estado = "";
    public $instrucciones = "";
    public $tipo_envio = "all";
    public $envio = "all";

    public function index()
    {
        $select = [
            'almacenes.id_almacen',
            'almacenes.warehouse',
            'almacenes.estado',
            'almacenes.status',
            'almacenes.activo',
            'almacenes.fecha_creado',
            'almacenes.tipo_envio',
            'solicitudes_envios.id_solicitud',
            'solicitudes_envios.estado AS estado_prealerta',
            'trackings.tracking',
            'trackings.peso',
            'trackings.volumen',
            'trackings.pie_cubico',
            'trackings.reempaque',
            'trackings.fecha_editado as fecha_editado_tracking',
            'usuarios_info.usuario_id',
            'usuarios_info.nombres', 
            'usuarios_info.apellidos',
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 16;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
        $this->estado = ( $query != null && isset($query->estado) && $query->estado != '' ) ? $query->estado : "";
        $this->instrucciones = ( $query != null && isset($query->instrucciones) && $query->instrucciones != '' ) ? $query->instrucciones : "";
        $this->tipo_envio = ( $query != null && isset($query->tipo_envio) && $query->tipo_envio != '' ) ? $query->tipo_envio : "all";
        $this->envio = ( $query != null && isset($query->envio) && $query->envio != '' ) ? $query->envio : "all";
       
       
        $records = Almacenes::select($select)
        ->leftJoin('solicitudes_envios', 'solicitudes_envios.id_solicitud', '=', 'almacenes.id_solicitud')
        ->leftJoin('trackings', 'trackings.id_solicitud', '=', 'solicitudes_envios.id_solicitud')
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'solicitudes_envios.usuario_id')
        ->where('solicitudes_envios.activo', '=', true)
        ->where('almacenes.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('usuarios_info.nombres',  'LIKE', '%'.$this->search.'%')
            ->orWhere('usuarios_info.apellidos',  'LIKE', '%'.$this->search.'%')
            ->orWhere('almacenes.warehouse',  'LIKE', '%'.$this->search.'%')
            ->orWhere('usuarios_info.cod_usuario',  'LIKE', '%'.$this->search.'%')
            ->orWhere('usuarios_info.cedula',  'LIKE', '%'.$this->search.'%')
            ->orWhere('trackings.tracking',  'LIKE', '%'.$this->search.'%');
        });
 
        if( $this->instrucciones != ''  ){  
            $records = $records->where('almacenes.estado', '<>', 'FACTURADO')
                ->where('almacenes.estado', '<>', 'ENVIADO');
            if( $this->instrucciones == 'no'){
                $records = $records->where('almacenes.status', '=', false);
            }else if($this->instrucciones == 'si') {
                $records = $records->where('almacenes.status', '=', true);
            }
        }

        if( $this->tipo_envio != 'all'){
            $records = $records->where('almacenes.tipo_envio', '=', $this->tipo_envio);
        }

        if( $this->envio != 'all'){
            $records = $records->where('trackings.reempaque', '=', $this->envio);
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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'warehouse' => ['required','regex:/^[0-9]+$/', 'unique:almacenes'],
        ]);

        $usuario = UsuariosInfo::where('usuario_id', '=', $request->usuario_id)->first();

        if( $usuario->cod_usuario === null ){
            $validator = Validator::make($request->all(), [
                'cod_usuario' => ['required','regex:/^[0-9]+$/', 'unique:usuarios_info'],
            ]);
        }

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }
        //Almacen-Miami

        $trackings = $request->trackings;
     
        for ($i=0; $i <count($trackings) ; $i++) { 

            $track = json_decode($trackings[$i]);

            $tracking = Trackings::find($track->id_tracking);
            $tracking->descripcion = $track->descripcion;
            $tracking->ancho = $track->ancho;
            $tracking->alto = $track->alto;
            $tracking->largo =$track->largo;
            $tracking->peso = $track->peso;
            $tracking->num_piezas =  $track->num_piezas;
            $tracking->volumen = ( $track->alto *  $track->largo * $track->ancho ) / 166; //alto * largo * ancho / 166
            $tracking->volumen = round( $tracking->volumen * 100 ) / 100;
            $tracking->volumen = ( $tracking->volumen >= 5 ) ? $tracking->volumen : 5;

            $tracking->pie_cubico = ( $track->alto *  $track->largo * $track->ancho ) / 1728; //alto * largo * ancho / 1728
            $tracking->pie_cubico = round( $tracking->pie_cubico * 100 ) /100;
            $tracking->pie_cubico = ( $tracking->pie_cubico > 1.25 ) ? $tracking->pie_cubico : 1.25;
            $tracking->ruta_image = Storage::url($request->images[$track->id_tracking]->store('public/images'));
                //$tracking->ruta_image = $tracking->ruta_image;
            

            //$tracking->descripcion = $track->descripcion;

            $tracking->update();

        }

        $prealerta = SolicitudesEnvios::find($request->id_solicitud);
        $prealerta->estado = 'recibido';

        $prealerta->update();

        Almacenes::create([
            'id_solicitud' => $request->id_solicitud,
            'warehouse' => $request->warehouse,
        ]);

        if( $usuario->cod_usuario == 1 ){
            //$usuario = UsuariosInfo::find($usuario->id_usuario_info);
            $usuario->cod_usuario = $request->cod_usuario;
            $usuario->update();
        }
       

        return response()->json([
            'status' => 200,
            'message' => 'Los Tracking de la prealerta fueron agregados en el almacen',
        ], 200);
    }


    public function show($id)
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
        ->where('almacenes.id_almacen', '=', $id)
        ->first();

        if( $results != null ){
            $trackings = DB::table('trackings')
            ->where('trackings.id_solicitud', '=', $results->id_solicitud)
            ->get()->toArray();

            $results->trackings = $trackings;
        }

        

        return response()->json([
            'status' => 200,
            'results' => $results 
        ], 200);
    }

    public function update_prealerta(Request $request)
    {

        //

        
            $almacen = Almacenes::find($request->id_almacen);
        if( $almacen->estado == 'recibido'){

            if($almacen->warehouse != $request->warehouse  ){
                $validator = Validator::make($request->all(), [
                    'warehouse' => ['required','regex:/^[0-9]+$/', 'unique:almacenes'],
                ]);
            }
        

            if ( isset($validator) && $validator->fails() ) {
                return response()->json([
                    'status' => 403,
                    'message' => $validator->errors()->first(),
                ], 403);
            }
            //Almacen-Miami

            $trackings = $request->trackings;
            
            for ($i=0; $i <count($trackings) ; $i++) { 

                $track = json_decode($trackings[$i]);

                $tracking = Trackings::find($track->id_tracking);
                $tracking->descripcion = $track->descripcion;
                $tracking->ancho = $track->ancho;
                $tracking->alto = $track->alto;
                $tracking->largo =$track->largo;
                $tracking->peso = $track->peso;
                $tracking->num_piezas =  $track->num_piezas;
                $tracking->volumen = ( $track->alto *  $track->largo * $track->ancho ) / 166; //alto * largo * ancho / 166
                $tracking->volumen = round( $tracking->volumen * 100 ) / 100;
                $tracking->volumen = ( $tracking->volumen >= 5 ) ? $tracking->volumen : 5;

                $tracking->pie_cubico = ( $track->alto *  $track->largo * $track->ancho ) / 1728; //alto * largo * ancho / 1728
                $tracking->pie_cubico = round( $tracking->pie_cubico * 100 ) /100;
                $tracking->pie_cubico = ( $tracking->pie_cubico > 1.25 ) ? $tracking->pie_cubico : 1.25;

                if( $request->images != null ){
                    $tracking->ruta_image = Storage::url($request->images[$track->id_tracking]->store('public/images'));
                }

                $tracking->update();

            }

            $prealerta = SolicitudesEnvios::find($request->id_solicitud);
            $prealerta->estado = 'recibido';

            $prealerta->update();

            
            $almacen->warehouse = $request->warehouse;
            $almacen->update();


            return response()->json([
                'status' => 200,
                'message' => 'Los Tracking de la prealerta fueron actualizados en el almacen',
            ], 200);
        }else{
            return response()->json([
                'status' => 403,
                'message' => 'Error, no se puede actualizar este '.$request->warehouse.' WareHouse',
            ], 403);
        }
        
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'warehouse' => ['required','regex:/^[0-9]+$/', 'unique:almacenes'],
        ]);

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $trackings = $request->trackings;

        

        for ($i=0; $i <count($trackings) ; $i++) { 

            $track = json_decode($trackings[$i]);

            if( Trackings::where([['tracking', $track->tracking], ['activo', true]])->count() > 0 ){
                return response()->json([
                    'status' => 403,
                    'message' => 'Error, ya existe un tracking con este mismo numero '.$track->tracking,
                ], 403);
            }

            //Trackings::find($track->id_tracking);
        }

        $prealerta = new SolicitudesEnvios;
        $prealerta->usuario_id = $request->id_cliente;
        $prealerta->id_empresa_transporte = $request->id_empresa_transporte;
        $prealerta->fecha_llegada = Carbon::now()->format('Y-m-d');
        $prealerta->estado = 'recibido';
        $prealerta->save();

      
        for ($i=0; $i <count($trackings) ; $i++) { 

            $track = json_decode($trackings[$i]);

            $tracking = new Trackings;
            $tracking->id_solicitud = $prealerta->id_solicitud;
            $tracking->tracking = $track->tracking;
            $tracking->descripcion = $track->descripcion;
            $tracking->ancho = $track->ancho;
            $tracking->alto = $track->alto;
            $tracking->largo =$track->largo;
            $tracking->peso = $track->peso;
            $tracking->num_piezas =  $track->num_piezas;
            $tracking->volumen = ( $track->alto *  $track->largo * $track->ancho ) / 166; //alto * largo * ancho / 166
            $tracking->volumen = round( $tracking->volumen * 100 ) / 100;
            $tracking->volumen = ( $tracking->volumen >= 5 ) ? $tracking->volumen : 5;

            $tracking->pie_cubico = ( $track->alto *  $track->largo * $track->ancho ) / 1728; //alto * largo * ancho / 1728
            $tracking->pie_cubico = round( $tracking->pie_cubico * 100 ) /100;
            $tracking->pie_cubico = ( $tracking->pie_cubico > 1.25 ) ? $tracking->pie_cubico : 1.25;
            $tracking->ruta_image = Storage::url($request->images[$track->tracking]->store('public/images'));

            $tracking->save();
            
        }

        Almacenes::create([
            'id_solicitud' => $prealerta->id_solicitud,
            'warehouse' => $request->warehouse,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Los Tracking de la prealerta fueron agregados en el almacen',
        ], 200);
    }

    public function storeAlmacenForInstruction(Request  $request)
    {
        $solicitud = $request->solicitud;
        $almacen = Almacenes::find($solicitud['id_almacen']);

        if( $almacen->estado == 'recibido'){
            $trackings = $solicitud['trackings'];
            
     
            for ($i=0; $i <count($trackings) ; $i++) { 
    
    
                $tracking = Trackings::find($trackings[$i]['id_tracking']);
    
                $tracking->reempaque =  $trackings[$i]['reempaque'];
                $tracking->total_seguro = $trackings[$i]['total_seguro'];
                $tracking->seguro = ( $tracking->total_seguro != '0' || $tracking->total_seguro != '0.00' ) ? ( $tracking->total_seguro * 10 ) / 100 : '0';
                $tracking->seguro = round( $tracking->seguro * 100 ) /100;
                $tracking->update();
    
            }
    
            $almacen->status = true;
            $almacen->tipo_envio = $solicitud['tipo_envio'];//Envio y Maritimo
            if( $solicitud['total_seguro'] != '0' || $solicitud['total_seguro'] != '0.00' ){
                $almacen->total_seguro = $solicitud['total_seguro'];
                $almacen->seguro = ( $almacen->total_seguro != '0' || $almacen->total_seguro != '0.00' ) ? ( $almacen->total_seguro * 10 ) / 100 : '0';
                $almacen->seguro = round( $almacen->seguro * 100 ) / 100;
            }
            $almacen->update();
    
            return response()->json([
                'status' => 200,
                'message' => 'Fueron Agregados las intrucciones a los paquetes del WareHose: '.$almacen->warehouse
            ], 200);
        }else{
            return response()->json([
                'status' => 403,
                'message' => 'Error, no se puede actualizar este '.$solicitud['warehouse'].' WareHouse',
            ], 403);
        }
       
    }
    


    public function getDatosForInvoice(Request $request)
    {

        $select = [
            'almacenes.id_almacen',
            'almacenes.warehouse',
            'almacenes.tipo_envio',
            'solicitudes_envios.id_solicitud',
            'solicitudes_envios.usuario_id',
        ];

        $id = $request->id;
        if( !is_array($id) ){
            $new_id = [];
            array_push($new_id, $id);
            $id = $new_id;
        }
        $usuario_id = '';
        $results = [
            'almacen' => [],
            'cliente' => '',
            'tasaDolar' => '',
            'extras' => ''
        ];

        if( count($id) > 0 ){
           for ($i=0; $i < count($id) ; $i++) { 
                $records = Almacenes::select($select)
                ->leftJoin('solicitudes_envios', 'solicitudes_envios.id_solicitud', '=', 'almacenes.id_solicitud')
                ->where('solicitudes_envios.activo', '=', true)
                ->where('almacenes.activo', '=', true)
                ->where('almacenes.id_almacen', '=', $id[$i])
                ->first();

                if( $records != null ){
                    if( $usuario_id == '' )
                        $usuario_id = $records->usuario_id;

                    
                    $trackings = DB::table('trackings')
                    ->where('trackings.id_solicitud', '=', $records->id_solicitud)
                    ->get()->toArray();

                    $records->trackings = $trackings;

                    array_push($results['almacen'], $records);
                }
           }
        }

        if( $usuario_id != '' ){
            $select = [
                'usuarios_info.cod_usuario',
                'usuarios_info.nombres', 
                'usuarios_info.apellidos', 
                'usuarios_info.telefono',
                'usuarios_info.cedula',
                'usuarios_info.direccion',
                'usuarios_info.ref_direccion',
                'usuarios_info.usuario_id',
                'geo_estados.estado AS estado_ve',
                'geo_ubigeo.zona',
                'geo_ubigeo.codigo_postal',
                'config_tasas_destinos.tarifa_aereo',
                'config_tasas_destinos.tarifa_maritimo',
            ];
            $cliente = UsuariosInfo::select($select)
            ->leftJoin('geo_estados', 'geo_estados.id_estado', '=', 'usuarios_info.id_estado')
            ->leftJoin('geo_ubigeo', 'geo_ubigeo.id_ubigeo', '=', 'usuarios_info.id_ubigeo')
            ->leftJoin('config_tasas_destinos_estados', 'config_tasas_destinos_estados.id_estado', '=', 'geo_estados.id_estado')
            ->leftJoin('config_tasas_destinos', 'config_tasas_destinos.id_tasa_destino', '=', 'config_tasas_destinos_estados.id_tasa_destino')
            ->where('config_tasas_destinos_estados.activo', '=', true)
            ->where('usuarios_info.usuario_id', '=', $usuario_id)->first();

            $results['cliente'] = $cliente;
        }

        if( $results['tasaDolar'] == '' ){
            $records = MonedasCambios::select(['id_moneda_cambio', 'abreviatura_moneda_nc'])
                ->where('monedas_cambios.activo', '=', true)
                ->first();

            if( $records != null ){
                $tasa = MonedasCambiosTasas::select(['monto_tc', 'fecha_tc'])
                ->where('id_moneda_cambio', '=', $records->id_moneda_cambio)
                ->where('activo', '=', true)
                ->orderBy('fecha_tc', 'DESC')
                ->first();

                $results['tasaDolar'] = $tasa;
            }
        }

        $results['extras'] = GastosExtras::select('*')->where('activo', '=', true)->get()->toArray();

        return response()->json([
            'status' => 200,
            'result' => $results 
        ], 200);
    }

    public function state()
    {
        $cantidad = Almacenes::where([['activo', true], ['status', false]])->count();


        return response()->json([
            'status' => 200,
            'result' => $cantidad,
        ], 200);
    }

    public function destroy($id)
    {
        $almacen = Almacenes::find($id);

        if ( FacturasInfoTrackings::where('warehouse', '=', $almacen->warehouse)->count() > 0 ) {
            return response()->json([
                'status' => 422,
                'message' => 'El WH no puede ser eliminado porque ya se encuentra facturado',
            ], 422);
        }

        $warehouse = $almacen->warehouse;

        $almacen->delete();

        return response()->json([
            'status' => 200,
            'message' => 'El warehouse: '. $warehouse.' fue eliminado con éxito',
        ], 200);
    }
}
