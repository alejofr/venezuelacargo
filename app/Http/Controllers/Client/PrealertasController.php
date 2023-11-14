<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Almacenes;
use App\Models\SolicitudesEnvios;
use App\Models\Trackings;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PrealertasController extends Controller
{
    public $search = "";
    public $estado = "";
    public $fecha_inicio = "";
    public $fecha_final = "";
    
    public function index(Request $request)
    {
        $select = [
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

        extract(request()->only(['usuario_id', 'query', 'limit', 'page', 'orderBy', 'ascending']));

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
        ->leftJoin('empresas_transportes', 'empresas_transportes.id_empresa_transporte', '=', 'solicitudes_envios.id_empresa_transporte')
        ->where('solicitudes_envios.activo', '=', true)
        ->where('usuarios.usuario_id', '=', $usuario_id)
        ->Where(function($query) {
            $query->orWhere('trackings.tracking',  'LIKE', '%'.$this->search.'%')
            ->orWhere('trackings.descripcion',  'LIKE', '%'.$this->search.'%')
            ->orWhere('empresas_transportes.nombre',  'LIKE', '%'.$this->search.'%');
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
    	
		if( $this->estado == 'recibido' ){
            for ($i=0; $i <count($results) ; $i++) { 
               $almacen = Almacenes::select(['status'])->where('id_solicitud', '=', $results[$i]['id_solicitud'])->first();
               if( $almacen != null )
                $results[$i]['status_instruct'] = $almacen->status;
            }
        }

        return response()->json([
            'status' => 200,
            'results' => $results,
            'url' => env('APP_URL'),
            'pagination' => [
                'numPage' => intval($page),
                'resultPage' => count($results),
                'totalResult' => $count
            ]
        ], 200);
    }

    public function count_almacen(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'usuario_id' => ['required'],
            //'estado' => ['required', 'in:recibido,pendiente']
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $count = Almacenes::leftJoin('solicitudes_envios', 'solicitudes_envios.id_solicitud', '=', 'almacenes.id_solicitud')
        ->where('almacenes.activo', '=', true)
        ->where('almacenes.estado', '=', 'recibido')
        ->where('solicitudes_envios.usuario_id', '=', $request->usuario_id)
        ->count();
        
        return response()->json([
            'status' => 200,
            'result' => $count
        ], 200);
    }

    public function almacen()
    {
        $select = [
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

        extract(request()->only(['usuario_id', 'query', 'limit', 'page', 'orderBy', 'ascending']));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;
        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";

        $records = Almacenes::select($select)
        ->leftJoin('solicitudes_envios', 'solicitudes_envios.id_solicitud', '=', 'almacenes.id_solicitud')
        ->leftJoin('trackings', 'trackings.id_solicitud', '=', 'solicitudes_envios.id_solicitud')
        ->where('almacenes.activo', '=', true)
        ->where('solicitudes_envios.usuario_id', '=', $usuario_id)
        ->where('almacenes.estado', '=', 'recibido')
        ->Where(function($query) {
            $query->orWhere('almacenes.warehouse',  'LIKE', '%'.$this->search.'%')
            ->orWhere('trackings.descripcion',  'LIKE', '%'.$this->search.'%');
        });

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
            'url' => env('APP_URL'),
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
            'usuario_id' => ['required'],
            'trackings' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $trackings = $request->trackings;

        if( !is_array($trackings) ){
            return response()->json([
                'status' => 422,
                'message' => 'Trackings debe ser un arreglo',
            ], 422);
        }

        for ($i=0; $i <count($trackings) ; $i++) { 

            $track = $trackings[$i]['tracking'];

            if( Trackings::where([['tracking', $track], ['activo', true]])->count() > 0 ){
                return response()->json([
                    'status' => 403,
                    'message' => 'Error, ya existe un tracking con este mismo numero '.$track,
                ], 403);
            }
        }

        $vtrackings = $trackings;
        for ($i=0; $i <count($trackings) ; $i++) { 

            $validator = Validator::make($trackings[$i], [
                'id_empresa_transporte' => ['required'],
                'tracking' => ['required'],
                //'transporte' => ['required'],
                'descripcion' => ['required'],
                'fecha_llegada' => ['required', 'date', 'date_format:Y-m-d']
            ]);
    
            if ( isset($validator) && $validator->fails()) {
                return response()->json([
                    'status' => 422,
                    'message' => $validator->errors()->first(),
                ], 422);
            }

            $track = $trackings[$i]['tracking'];
            $transporte = $trackings[$i]['id_empresa_transporte'];
            //$nombreT = $trackings[$i]['transporte'];
            
            for ($j=0; $j < count($vtrackings) ; $j++) { 
                if( $transporte != $vtrackings[$j]['id_empresa_transporte'] && $i != $j){
                    return response()->json([
                        'status' => 403,
                        'message' => 'No puede agregar mas de una empresa de transporte '.$vtrackings[$j]['transporte'],
                    ], 403);
                }
                if( $track == $vtrackings[$j]['tracking'] && $i != $j){
                    return response()->json([
                        'status' => 403,
                        'message' => 'No puede haber dos tracking con el mismo número '.$track,
                    ], 403);
                }
            }
            
        }

        

        for ($i=0; $i <count($trackings) ; $i++) { 

            //$track = $trackings[$i]['tracking'];
            $solicitud = new SolicitudesEnvios;
            $solicitud->usuario_id = $request->usuario_id;
            $solicitud->id_empresa_transporte = $trackings[$i]['id_empresa_transporte'];
            $solicitud->fecha_llegada = $trackings[$i]['fecha_llegada'];
            $solicitud->save();

            Trackings::create([
                'id_solicitud' => $solicitud->id_solicitud,
                'tracking' => $trackings[$i]['tracking'],
                'descripcion' => $trackings[$i]['descripcion'],
            ]);
        }

        

        return response()->json([
            'status' => 200,
            'message' => '¡Éxito!, tu solicitud fue enviada'
        ], 200);
    }

    public function show($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'usuario_id' => ['required'],
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
            'solicitudes_envios.fecha_llegada AS solicitud_fecha_llegada',
            'solicitudes_envios.estado AS solicitud_estado',
            'solicitudes_envios.fecha_creado AS solicitud_fecha_creado',
            'empresas_transportes.id_empresa_transporte',
            'empresas_transportes.nombre AS transporte_nombre',
        ];

        $bolConsul = false;
        if( $request->estado == 'recibido' || Almacenes::where('id_solicitud', '=', $id)->count() > 0){
            $sl = ['almacenes.id_almacen',
            'almacenes.warehouse AS almacen_warehouse',
            'almacenes.estado AS almacen_estado',
            'almacenes.status AS almacen_status',
            'almacenes.fecha_creado AS almacen_fecha_recibido',
            'almacenes.tipo_envio AS almacen_tipo_envio'];
            for ($i=0; $i < count($sl) ; $i++) { 
                array_push($select, $sl[$i]);
            }
            $bolConsul = true;
        }

        $result = SolicitudesEnvios::select($select)
        ->leftJoin('usuarios', 'usuarios.usuario_id', '=', 'solicitudes_envios.usuario_id')
        ->leftJoin('empresas_transportes', 'empresas_transportes.id_empresa_transporte', '=', 'solicitudes_envios.id_empresa_transporte');

        if( $bolConsul ){
            $result = $result->leftJoin('almacenes', 'almacenes.id_solicitud', '=', 'solicitudes_envios.id_solicitud')
            ->where('almacenes.activo', '=', true);
        }

        $result = $result->where('solicitudes_envios.activo', '=', true)
        ->where('usuarios.usuario_id', '=', $request->usuario_id)
        ->where('solicitudes_envios.id_solicitud', '=', $id)
        ->first();

        if( $result != null ){
            $result->tracking = Trackings::where('id_solicitud', '=', $result->id_solicitud)->get()->toArray();
        }

        return response()->json([
            'status' => 200,
            'results' => $result,
            'url' => env('APP_URL'),
        ], 200);
    }

    public function save_instruccion($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'usuario_id' => ['required'],
            'tipo_envio' => ['required'],
            'id_almacen' => ['required'],
            'id_tracking' => ['required'],
            'reempaque' => ['required'],
            'total_seguro' => ['required', 'regex:/^-?[0-9]+(?:\.[0-9]{1,2})+$/'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        if( SolicitudesEnvios::where([['id_solicitud', $id], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe esta solicitud',
            ], 422);
        }

        if( Almacenes::where([['id_almacen', $request->id_almacen], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe esta solicitud en el almacen',
            ], 422);
        }

        $prealerta = SolicitudesEnvios::find($id);

        if( $prealerta->estado != 'recibido' ){
            return response()->json([
                'status' => 422,
                'message' => 'No puede agregar instruccion',
            ], 422);
        }

        $almacen = Almacenes::find($request->id_almacen);

        if( $almacen->status == true ){
            return response()->json([
                'status' => 422,
                'message' => 'Ya existe la instruccion',
            ], 422);
        }

        if( Trackings::where('id_tracking', '=', $request->id_tracking)->count() == 0){
            return response()->json([
                'status' => 403,
                'message' => 'Error, el tracking No existe, en esta solicitud',
            ], 403);
        }

        $tracking = Trackings::find($request->id_tracking);

        $date = Carbon::now();
        $fecha_actual = $date->format('Y-m-d');
        $dia_semana = date('w', strtotime($fecha_actual));

        if( $request->reempaque == 'si' && $dia_semana != 5 && $dia_semana != 0 && $dia_semana != 2 && $dia_semana != 1 ){
			return response()->json([
				'status' => 403,
				'message' => 'Error, Para las instrucciones de envio con REEMPAQUE, son de Sabados a Martes hasta la 04:30 PM',
			], 403);
        }
		
		$hora = $date->toTimeString();
        $hora = strtotime($hora);
		if( $request->reempaque == 'si' && $dia_semana == 2 && $hora > strtotime('16:30:00')  ){
			return response()->json([
				'status' => 403,
				'message' => 'Error, Para las instrucciones de envio con REEMPAQUE, son de Sabados a Martes hasta la 04:30 PM',
			], 403);
		}

        

        $tracking->reempaque =  $request->reempaque;
        $tracking->total_seguro = $request->total_seguro;
        $tracking->seguro = ( $tracking->total_seguro != '0' || $tracking->total_seguro != '0.00' ) ? ( $tracking->total_seguro * 10 ) / 100 : '0';
        $tracking->seguro = round( $tracking->seguro * 100 ) /100;
        $tracking->update();

        $almacen->status = true;
        $almacen->tipo_envio = $request->tipo_envio;//Envio y Maritimo
        $almacen->update();

        return response()->json([
            'status' => 200,
            'message' => 'Fueron Agregados las intrucciones a los paquetes del WareHose: '.$almacen->warehouse
        ], 200);
    }
}
