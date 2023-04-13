<?php

namespace App\Http\Controllers;

use App\Models\UsuariosInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsuariosInfoController extends Controller
{
    public $search = "";
    
    public function index(Request $request){

        $this->search = $request->search;

        $results = UsuariosInfo::where('usuarios_info.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('usuarios_info.nombres',  'LIKE', '%'.$this->search.'%')
            ->orWhere('usuarios_info.apellidos',  'LIKE', '%'.$this->search.'%')
            ->orWhere('usuarios_info.cod_usuario',  'LIKE', '%'.$this->search.'%');
        })->get()->toArray();

        return response()->json([
            'status' => 200,
            'results' => $results,
        ], 200);
    }
    
    public function show($id)
    {
        $select = [
            'usuarios_info.nombres', 
            'usuarios_info.apellidos', 
            'usuarios_info.telefono',
            'usuarios_info.cedula',
            'usuarios_info.direccion',
            'usuarios.email',
            'geo_estados.estado', 
            'geo_ubigeo.zona',
            'geo_ubigeo.codigo_postal'
        ];

        $results = DB::table('usuarios_info')
        ->leftJoin('usuarios', 'usuarios.usuario_id', '=', 'usuarios_info.usuario_id')
        ->leftJoin('geo_estados', 'geo_estados.id_estado', '=', 'usuarios_info.id_estado')
        ->leftJoin('geo_ubigeo', 'geo_ubigeo.id_ubigeo', '=', 'usuarios_info.id_ubigeo')
        ->where('usuarios_info.activo', '=', true)
        ->where('usuarios.activo', '=', true)
        ->where('usuarios_info.usuario_id', '=', $id)
        ->first($select);

        return response()->json([
            'status' => 200,
            'results' => $results,
        ], 200);
    }
}
