<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\Geolocalizacion\Estados;
use App\Models\Configuracion\Geolocalizacion\Ubigeo;
use App\Models\User;
use App\Models\UsuariosInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersOldController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'users' => ['required'],
            'address' => ['required'],
            'states' => ['required'],
            'cities' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $users = $request->users;
        $address = $request->address;
        $states = $request->states;
        $cities = $request->cities;


        //users para guardar
        $users_new = [];

        //users_not_save
        $not_users= [];
        
        for ($i=0; $i < count($users); $i++) { 
            $id_estado = '';
            $id_ubigeo = '';
            $direccion = '';


            if( $users[$i]['username'] != 'ADMINISTRADOR' ){

                for ($j=0; $j < count($address) ; $j++) { 
                    if( $address[$j]['users_id'] == $users[$i]['id'] ){
                        $direccion = $address[$j]['address'];

                        //buscar estado y compararlo con la bd
                        for ($k=0; $k <count($states) ; $k++) { 
                            if( $address[$j]['states_id'] == $states[$k]['id'] ){
                                $estado = Estados::where('estado', '=', $states[$k]['name'])->first();

                                if( $estado != null ){
                                    $id_estado = $estado->id_estado;
                                }
                                break 1;
                            }
                        }

                        //buscar ciudad y compararlo con zona de la bd ubigeo
                        for ($u=0; $u < count($cities) ; $u++) { 
                            if( $address[$j]['cities_id'] == $cities[$u]['id'] ){
                                $ubigeo = Ubigeo::where('zona', '=', $cities[$u]['name'])->first();

                                if( $ubigeo != null ){
                                    $id_ubigeo = $ubigeo->id_ubigeo;
                                }
                                break 1;
                            }
                        }
    
                        break 1;
                    }
                }
                
    
                if( $id_estado != '' ){
                    array_push($users_new, [
                        'id_estado' => $id_estado,
                        'id_ubigeo' => $id_ubigeo,
                        'nombre_usuario' => $users[$i]['username'],
                        'email' => $users[$i]['email'],
                        'password' => bcrypt('123456'),
                        'cod_usuario' => $users[$i]['code'],
                        'nombres' => $users[$i]['name'], 
                        'apellidos' => $users[$i]['last_name'], 
                        'telefono' => $users[$i]['phone'],
                        'cedula' => $users[$i]['dni'],
                        'direccion' => $direccion
                    ]);

                }else{
                    array_push($not_users, $users[$i]);
                }
            }

            

        }

        for ($i=0; $i <count($users_new) ; $i++) { 
            $user = User::create([
                'nombre_usuario' => $users_new[$i]['nombre_usuario'],
                'email' => $users_new[$i]['email'],
                'password' => $users_new[$i]['password']
            ])->assignRole('client');

            UsuariosInfo::create([
                'usuario_id' => $user->usuario_id,
                'id_estado' => $users_new[$i]['id_estado'],
                $users_new[$i]['id_ubigeo'] != '' && 'id_ubigeo' => $users_new[$i]['id_ubigeo'],
                'cod_usuario' => $users_new[$i]['cod_usuario'],
                'nombres' => $users_new[$i]['nombres'], 
                'apellidos'  => $users_new[$i]['apellidos'], 
                'telefono' => $users_new[$i]['telefono'],
                'cedula' => $users_new[$i]['cedula'],
                'direccion' => $users_new[$i]['direccion'],
            ]);
        }

        return response()->json([
            'message' => 'Datos guardos '. count($users_new) .' de '. count($users),
            'users_not_save' => $not_users
        ], 200);
    }
}
