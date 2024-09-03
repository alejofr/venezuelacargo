<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\NotificationCodeUser;
use App\Models\SolicitudesEnvios;
use App\Models\User;
use App\Models\UsuariosInfo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class ClientesController extends Controller
{
    public $search = "";
    public $nombres = "";
    public $apellidos = "";
    public $fecha_inicio = "";
    public $fecha_final = "";
    public $cod_user = "0";

    public function index()
    {
        $select = [
            'geo_estados.id_estado', 
            'geo_estados.estado',
            //'geo_ubigeo.zona', 
            //'geo_ubigeo.codigo_postal',
            'usuarios_info.cod_usuario',
            'usuarios_info.nombres', 
            'usuarios_info.apellidos', 
            'usuarios_info.telefono',
            'usuarios_info.cedula',
            'usuarios_info.direccion',
            'usuarios_info.ref_direccion',
            'usuarios.usuario_id',
            'usuarios.email',
            'usuarios.fecha_creado'
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 16;
        $page = (isset($page) && $page != 1) ? $page : 1;

        $query = isset($query) ? json_decode($query) : null;

        $id_estado = ( $query != null && isset($query->id_estado) && $query->id_estado != '' ) ? $query->id_estado : 'all';
        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
        $this->nombres = $this->search;
        $this->apellidos = $this->search;
        $this->fecha_inicio = ( $query != null && isset($query->fecha_inicio) && $query->fecha_inicio != '' ) ? $query->fecha_inicio : "";
        $this->fecha_final = ( $query != null && isset($query->fecha_final) && $query->fecha_final != '' ) ? $query->fecha_final : "";
        $this->cod_user = ( $query != null && isset($query->cod_user) && $query->cod_user != '' ) ? $query->cod_user : "0";

        if(  $id_estado == "" ){
            $estado = DB::table('geo_estados')->orderBy('estado', 'ASC')->select('id_estado')->first();
            $id_estado = $estado->id_estado;
        }//cod_user

        if( strpos($this->search, " ") ){
            $arrSearch = explode(" ", $this->search);

            if( count($arrSearch) == 2 ){
                $this->nombres = $arrSearch[0];
                $this->apellidos = $arrSearch[1];
            }elseif( count($arrSearch) > 2 ){
                $this->nombres = $arrSearch[0].' '.$arrSearch[1];
                $this->apellidos = $arrSearch[3];

                if( count($arrSearch) > 3 ){
                    $this->apellidos = $this->apellidos.' '.$arrSearch[4];
                }
            }
        }

        $records = User::select($select)
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'usuarios.usuario_id')
        ->leftJoin('geo_estados', 'geo_estados.id_estado', '=', 'usuarios_info.id_estado')
        ->where('usuarios.activo', '=', true)
        ->whereNotNull('usuarios_info.usuario_id');

        if( $id_estado != 'all' ){
            $records = $records->where('geo_estados.id_estado', '=', $id_estado);
        }

        $records = $records->Where(function($query) {
            $query->orWhere('usuarios_info.nombres',  'LIKE', '%'.$this->nombres.'%')
                ->orWhere('usuarios_info.apellidos',  'LIKE', '%'.$this->apellidos.'%')
                ->orWhere('usuarios_info.cedula',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios_info.cod_usuario',  'LIKE', '%'.$this->search.'%')
                ->orWhere('usuarios.email',  'LIKE', '%'.$this->search.'%');
        });

        if( $this->fecha_inicio != '' || $this->fecha_final != ''){
            $this->fecha_inicio = ( $this->fecha_inicio == '' ) ? Carbon::now()->format('Y-m-d') : $this->fecha_inicio;
            $this->fecha_final = (  $this->fecha_final == '' ) ? Carbon::now()->format('Y-m-d') :  $this->fecha_final;
           
            $records = $records->whereBetween('usuarios.fecha_creado', [$this->fecha_inicio, $this->fecha_final]);
        }

        if( $this->cod_user == '0'){
            $records = $records->whereNotNull('usuarios_info.cod_usuario');
        }else{
            $records = $records->whereNull('usuarios_info.cod_usuario');
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
            //$user = User::find($results[$i]['usuario_id']);
            
            //$results[$i]->roles = $mod;
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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cod_usuario' => ['required','regex:/^[0-9]+$/', 'unique:usuarios_info'],
            'id_estado' => ['required'],
            'id_ubigeo' => ['required'],
            'nombre_usuario' => ['required', 'unique:usuarios'],
            'email' => ['required', 'unique:usuarios'],
            'password' => ['required'],
            'nombres' => ['required'], 
            'apellidos' => ['required'],
            'telefono' => ['required', 'regex:/^[0-9]+$/'],
            'cedula' => ['required', 'regex:/^[0-9]+$/', 'unique:usuarios_info'],
            'direccion' => ['required']
        ]);

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $usuario = new User;

        $usuario->nombre_usuario = $request->nombre_usuario;
        $usuario->email = $request->email; 
        $usuario->password = bcrypt($request->password);
        $usuario->save();

        $usuario_info = new UsuariosInfo;

        $usuario_info->usuario_id = $usuario->usuario_id;
        $usuario_info->id_estado = $request->id_estado;
        $usuario_info->id_ubigeo = $request->id_ubigeo; 
        $usuario_info->cod_usuario = $request->cod_usuario;
        $usuario_info->nombres = $request->nombres; 
        $usuario_info->apellidos = $request->apellidos; 
        $usuario_info->telefono = $request->telefono;
        $usuario_info->cedula = $request->cedula;
        $usuario_info->direccion = $request->direccion;
        $usuario_info->ref_direccion = $request->ref_direccion != '' ? $request->ref_direccion : null;

        $usuario_info->save();

        return response()->json([
            'status' => 200,
            'message' => 'El usuario '.$usuario_info->nombres.' '.$usuario_info->apellidos.' fue registrado con exito',
        ], 200);

    }

    public function edit($id)
    {
        $select = [
            'geo_estados.id_estado', 
            'geo_estados.estado',
            'geo_ubigeo.id_ubigeo', 
            'geo_ubigeo.zona', 
            'geo_ubigeo.codigo_postal',
            'usuarios_info.id_usuario_info',
            'usuarios_info.id_estado',
            'usuarios_info.id_ubigeo', 
            'usuarios_info.cod_usuario',
            'usuarios_info.nombres', 
            'usuarios_info.apellidos', 
            'usuarios_info.telefono',
            'usuarios_info.cedula',
            'usuarios_info.direccion',
            'usuarios_info.ref_direccion',
            'usuarios.usuario_id', 
            'usuarios.nombre_usuario',
            'usuarios.email',
            'usuarios.password', 
        ];

        $result = User::select($select)
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'usuarios.usuario_id')
        ->leftJoin('geo_estados', 'geo_estados.id_estado', '=', 'usuarios_info.id_estado')
        ->leftJoin('geo_ubigeo', 'geo_ubigeo.id_ubigeo', '=', 'usuarios_info.id_ubigeo')
        ->where('usuarios.activo', '=', true)
        ->where('usuarios.usuario_id', '=', $id)->first();

        return response()->json([
            'status' => 200,
            'result' => $result,
        ], 200);        
    }

    public function update($id, Request $request)
    {
        $user = User::find($id);
        $userInfo = UsuariosInfo::find($request->id_usuario_info);
        $bol = true;

        $validator = Validator::make($request->all(), [
            'id_estado' => ['required'],
            'id_ubigeo' => ['required'],
            'nombres' => ['required'], 
            'apellidos' => ['required'],
            'telefono' => ['required', 'regex:/^[0-9]+$/'],
            'direccion' => ['required']
        ]);

        if ( isset($validator) && $validator->fails() ) $bol = false;

        if( $user->email != $request->email && $bol ){
            $validator = Validator::make($request->all(), [
                'email' => ['required', 'unique:usuarios'],
            ]);

            if ( isset($validator) && $validator->fails() ) $bol = false;
        }
        if ( $user->nombre_usuario != $request->nombre_usuario && $bol ){
            $validator = Validator::make($request->all(), [
                'nombre_usuario' => ['required', 'unique:usuarios'],
            ]);

            if ( isset($validator) && $validator->fails() ) $bol = false;
        }

        if ( $userInfo->cedula != $request->cedula && $bol ){
            $validator = Validator::make($request->all(), [
                'cedula' => ['required', 'regex:/^[0-9]+$/', 'unique:usuarios_info'],
            ]);

            if ( isset($validator) && $validator->fails() ) $bol = false;
        }

        if ( $userInfo->cod_usuario != $request->cod_usuario && $bol ){
            $validator = Validator::make($request->all(), [
                'cod_usuario' => ['required','regex:/^[0-9]+$/', 'unique:usuarios_info'],
            ]);

            if ( isset($validator) && $validator->fails() ) $bol = false;
        }

        if ( !$bol ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $user->nombre_usuario = $request->nombre_usuario;
        $user->email = $request->email; 

        if ($request->password != '') {
            $user->password = bcrypt($request->password);
        }
       
        $user->update();

        
        $code = $userInfo->cod_usuario;

        $userInfo->id_estado = $request->id_estado;
        $userInfo->id_ubigeo = $request->id_ubigeo; 
        $userInfo->cod_usuario = $request->cod_usuario;
        $userInfo->nombres = $request->nombres; 
        $userInfo->apellidos = $request->apellidos; 
        $userInfo->telefono = $request->telefono;
        $userInfo->cedula = $request->cedula;
        $userInfo->direccion = $request->direccion;
        $userInfo->ref_direccion = $request->ref_direccion != '' ? $request->ref_direccion : null;

        $userInfo->update();
        
        if( $code === null && $request->cod_usuario != '' ){
            $details = [ 
                'username' => $userInfo->nombres,
                'code' => $userInfo->cod_usuario,
                'url' => route('run', '/login')
            ];
			
			try {
				Mail::to($user->email)
				->send(new NotificationCodeUser($details));


				return response()->json([
					'status' => 200,
					'message' => 'El usuario '.$userInfo->nombres.' '.$userInfo->apellidos.' fue actualizado con exito',
				], 200);
			} catch (\Throwable $th) {
				return response()->json([
					'message' => 'Se actualizo el usuario, pero ocurrio un error en enviar la ntoficacion al correo del cliente, por favor intente mas tarde.',
				], 200);
			}
        }

        
		return response()->json([
			'status' => 200,
			'message' => 'El usuario '.$userInfo->nombres.' '.$userInfo->apellidos.' fue actualizado con exito',
		], 200);
        
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $userInfo = UsuariosInfo::where([['usuario_id', $id], ['activo', true]])->first();
        $nombres = $userInfo->nombres;
        $apellidos = $userInfo->apellidos;

        if( SolicitudesEnvios::where([['usuario_id', $id], ['activo', true]])->count() > 0 ){
            return response()->json([
                'status' => 403,
                'message' => 'No se puede eliminar el usuario: '.$nombres.' '.$apellidos.' porque tiene una solicitud activa',
            ], 403);
        }

        if( SolicitudesEnvios::where([['usuario_id', $id], ['activo', false]])->count() > 0 ){
            $user->activo = false;
            $userInfo->activo = false;
        }else{
            $user->delete();
        }

        return response()->json([
            'status' => 200,
            'message' => 'El usuario '.$nombres.' '.$apellidos.' fue eliminado con exito',
        ], 200);
    }

    public function analyze(Request $request)
    {

        $from = null;
        //$to = Carbon::now()->format('Y-m-d');
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
            $cantidad = UsuariosInfo::where('usuarios_info.activo', '=', true)
            ->leftJoin('usuarios', 'usuarios.usuario_id', '=', 'usuarios_info.usuario_id')
            ->whereBetween('usuarios_info.fecha_creado', [$from, $to])
            ->whereNotNull('usuarios_info.cod_usuario')
            ->count();
        }
        

        return response()->json([
            'status' => 200,
            'result' => $cantidad,
            'valor' => $request->valor
        ], 200);
    }

    public function state()
    {
        $result = UsuariosInfo::where('usuarios_info.activo', '=', true)
        ->whereNull('usuarios_info.cod_usuario')
        ->count();

        return response()->json([
            'status' => 200,
            'result' => $result
        ], 200);
    }
}
