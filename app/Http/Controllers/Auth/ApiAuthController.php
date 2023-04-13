<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use App\Models\Configuracion\Geolocalizacion\Estados;
use App\Models\Configuracion\Geolocalizacion\Ubigeo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\UsuariosInfo;
use App\Mail\RecoverPassword;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ApiAuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);     

        if ($validator->fails()) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        if (!$token=Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json([
                'status' => 401,
                'message' => 'Estas credenciales no coinciden con nuestros registros.'
            ], 401);
        }

        $rol = $request->user()->getRoleNames()[0];

        if( $rol === 'client' ){
            if ( UsuariosInfo::where('usuario_id', '=', $request->user()->usuario_id)->where('cod_usuario', '=', null)->count() > 0 ) {
                return response()->json([
                    'status' => 403,
                    'message' => 'Su cuenta se encuentra en verificacion',
                ], 403);
            }
        }

        $tokenResult = $request->user()->createToken('Venezuela Cargo Personal Access Client');

        

        

        $token = $tokenResult->token;        
        if ( !isset($request->remember)) {
            $token->expires_at = Carbon::now()->addDay(1);
        }        
        $token->save(); 

        return response()->json([
            'status' => 200,
            'access_token' => $tokenResult->accessToken,
            'token_type'   => 'Bearer',
            'expires_at'   => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString(),
            'user' => $request->user()
        ], 200);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
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

        if( Estados::where([['id_estado', $request->id_estado], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe este estado',
            ], 422);
        }

        if( Ubigeo::where([['id_ubigeo', $request->id_ubigeo], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe esta ubicacion',
            ], 422);
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
        $usuario_info->nombres = $request->nombres; 
        $usuario_info->apellidos = $request->apellidos; 
        $usuario_info->telefono = $request->telefono;
        $usuario_info->cedula = $request->cedula;
        $usuario_info->direccion = $request->direccion;
        $usuario_info->ref_direccion = $request->ref_direccion != '' ? $request->ref_direccion : null;

        $usuario_info->save();


        return response()->json([
            'status' => 200,
            'message' => 'Cuenta Creada'
        ], 200);
    }

    public function getRolePermission(Request $request){
        $permissions = [];
        $userPermission = $request->user()->getAllPermissions();


        foreach ($userPermission as $permission) {
            $result = ( count($userPermission) !=  0 ) ? explode('.',$permission->name) : '*';
            array_push($permissions, ucwords($result[0]));
        }

        return response()->json([
            'status' => 200,
            'user' => $request->user(),
            'role' => $request->user()->getRoleNames()[0],
            'permissions' => $permissions
        ]);

    }

    public function edit(Request $request)
    {
        return response()->json([
            'status' => 200,
            'result' => $request->user(),
        ]);

    }

    public function editClient(Request $request)
    {
        $select = [
            'usuarios.usuario_id',
            'usuarios.nombre_usuario',
            'usuarios.email',
            'usuarios_info.nombres', 
            'usuarios_info.apellidos', 
            'usuarios_info.telefono', 
            'usuarios_info.cedula',
            'usuarios_info.cod_usuario',
        ];
        $validator = Validator::make($request->all(), [
            'usuario_id' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        if( User::where([['usuario_id', $request->usuario_id], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe este usuario',
            ], 422);
        }

        $user = User::select($select)
        ->leftJoin('usuarios_info', 'usuarios_info.usuario_id', '=', 'usuarios.usuario_id')
        ->where('usuarios.usuario_id', '=', $request->usuario_id)
        ->first();

        return response()->json([
            'status' => 200,
            'result' => $user,
        ]);

    }

    public function updateClient($id, Request $request)
    {
        
        if( User::where([['usuario_id', $request->usuario_id], ['activo', true]])->count() == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'No existe este usuario',
            ], 422);
        }

        $user = User::find($id);
        $userInfo = UsuariosInfo::where('usuario_id', '=', $id)->first();

        $bol = true;

        if( isset($request->email) && $request->email != $user->email ){
            return response()->json([
                'status' => 422,
                'message' => $request->email,
            ], 422);
            $validator = Validator::make($request->all(), [
                'email' => ['required', 'unique:usuarios'],
            ]);

            if ( isset($validator) && $validator->fails() ) $bol = false;
        }
        if ( isset($request->nombre_usuario) && $user->nombre_usuario != $request->nombre_usuario && $bol ){
            $validator = Validator::make($request->all(), [
                'nombre_usuario' => ['required', 'unique:usuarios'],
            ]);

            if ( isset($validator) && $validator->fails() ) $bol = false;
        }

        if ( isset($request->cedula) && $userInfo->cedula != $request->cedula && $bol ){
            $validator = Validator::make($request->all(), [
                'cedula' => ['required', 'unique:usuarios_info'],
            ]);

            if ( isset($validator) && $validator->fails() ) $bol = false;
        }

        if ( !$bol ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $user->nombre_usuario = isset($request->nombre_usuario) && $request->nombre_usuario != '' ? $request->nombre_usuario : $user->nombre_usuario;
        $user->email = isset($request->email) && $request->email != '' ? $request->email : $user->email; 

        if ( isset($request->password) && $request->password != '') {
            $user->password = bcrypt($request->password);
        }
       
        $user->update();

        $userInfo->nombres = isset($request->nombres) && $request->nombres != '' ? $request->nombres : $userInfo->nombres;
        $userInfo->apellidos = isset($request->apellidos) && $request->apellidos != '' ? $request->apellidos : $userInfo->apellidos;
        $userInfo->telefono = isset($request->telefono) && $request->telefono != '' ? $request->telefono : $userInfo->telefono;
        $userInfo->cedula = isset($request->cedula) && $request->cedula != '' ? $request->cedula : $userInfo->cedula;
        $userInfo->update();

        $user->info = $userInfo;

        return response()->json([
            'status' => 200,
            'message' => 'Tu Cuenta fue actualizado con exito',
            'user' => $user
        ], 200);
        
    }

    public function forgout_password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'exists:usuarios'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $token = Str::random(64);

        User::where('email', $request->email)->update([
            'remember_token' => $token,
        ]);

        $details = [ 
            'url' => route('run', '/reset-password/'.$token)
        ];

        Mail::to($request->email)->send(new RecoverPassword($details));

        return response()->json([
            'status' => 200,
            'message' => 'Hemos enviado su enlace de restablecimiento de contraseña por correo electrónico!',
        ], 200);
    }

    public function forgout_password_verify_token(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => ['required' ],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $user = User::where('remember_token', $request->token)->first();

        if( !isset($user->email) ){
            return response()->json([
                'status' => 422,
                'message' => 'token no valido',
            ], 422);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Token Valido',
        ], 200);
    }

    public function change_password_user(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => ['required' ],
            'password' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $user = User::where('remember_token', $request->token)->first();

        if( !isset($user->email) ){
            return response()->json([
                'status' => 422,
                'message' => 'token no valido',
            ], 422);
        }

        $user->password = bcrypt($request->password);
        $user->remember_token = null;

        $user->update();

        return response()->json([
            'status' => 200,
            'message' => 'Tu contraseña fue cambiada, inicia sesion',
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();   
        return response()->json([
            'status' => 200,
            'message' => 'Cerraste sesión',
        ], 200);
    }
}
