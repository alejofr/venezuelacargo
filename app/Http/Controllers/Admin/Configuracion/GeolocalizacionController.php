<?php

namespace App\Http\Controllers\Admin\Configuracion;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\Geolocalizacion\Estados;
use App\Models\Configuracion\Geolocalizacion\Ubigeo;
use App\Models\UsuariosInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class GeolocalizacionController extends Controller
{
    //
    public $search = "";
    
    public function index(Request $request)
    {
        $select = [
            'geo_estados.id_estado', 
            'geo_estados.estado',
            'geo_ubigeo.id_ubigeo',
            'geo_ubigeo.zona', 
            'geo_ubigeo.codigo_postal',
            'geo_ubigeo.activo' 
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 5;
        $page = (isset($page) && $page != 1) ? $page : 1;

        if ( (request()->only(['limit']) && request()->only(['limit'])['limit'] != '') || (request()->only(['page']) && request()->only(['page'])['page'] != '') ){
            request()->only(['limit'])['limit'] = $limit;
            request()->only(['page'])['page'] = $page;

            $validator = Validator::make(request()->only('limit'), [
                'limit' => ['integer', 'numeric'],
                'page' => ['integer', 'numeric']
            ]); 
        }
        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $query = isset($query) ? json_decode($query) : null;

        $id_estado = ( $query != null && isset($query->id_estado) && $query->id_estado != '' ) ? $query->id_estado : '';
        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";

        if(  $id_estado == "" ){
            $estado = DB::table('geo_estados')->orderBy('estado', 'ASC')->select('id_estado')->first();
            $id_estado = $estado->id_estado;
        }

        $records = DB::table('geo_ubigeo')
        ->leftJoin('geo_estados', 'geo_estados.id_estado', '=', 'geo_ubigeo.id_estado')
        ->where('geo_estados.id_estado', '=', $id_estado)
        ->Where(function($query) {
            $query->orWhere('geo_ubigeo.zona',  'LIKE', '%'.$this->search.'%')
                ->orWhere('geo_ubigeo.codigo_postal',  'LIKE', '%'.$this->search.'%');
        })
        ->select($select);

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

    public function get_estados(){
        $estados = Estados::all();

        $estado = DB::table('geo_estados')->orderBy('estado', 'ASC')->select('id_estado')->first();
        $init = $estado->id_estado;

        return response()->json([
            'status' => 200,
            'results' => [
                'all' => $estados,
                'init' => $init
            ]
        ], 200);
    }

    public function get_ubigeo(Request $request)
    {
        $select = [
            'geo_estados.id_estado', 
            'geo_estados.estado',
            'geo_ubigeo.id_ubigeo',
            'geo_ubigeo.zona', 
            'geo_ubigeo.codigo_postal',
        ];
        
        $this->search = $request->search;
        $results = DB::table('geo_ubigeo')
        ->leftJoin('geo_estados', 'geo_estados.id_estado', '=', 'geo_ubigeo.id_estado')
        ->where('geo_estados.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('geo_ubigeo.zona',  'LIKE', '%'.$this->search.'%')
                 ->orWhere('geo_estados.estado',  'LIKE', '%'.$this->search.'%')
                ->orWhere('geo_ubigeo.codigo_postal',  'LIKE', '%'.$this->search.'%');
        })
        ->select($select)->get()->toArray();

        return response()->json([
            'status' => 200,
            'results' => $results
        ], 200);
    }

    public function edit($id){
        $categoria = DB::table('geo_ubigeo')
        ->leftJoin('geo_estados', 'geo_estados.id_estado', '=', 'geo_ubigeo.id_estado')
        ->where('geo_ubigeo.id_ubigeo', '=', $id)->first([
            'geo_estados.id_estado', 
            'geo_estados.estado',
            'geo_ubigeo.id_ubigeo',
            'geo_ubigeo.zona', 
            'geo_ubigeo.codigo_postal',
            'geo_ubigeo.activo' 
        ]);

        $categorias = Estados::all();

        return response()->json([
            'status' => 200,
            'results' => [
                'categoria' => $categoria,
                'categorias' => $categorias
            ],
        ], 200);

    }

    public function update($id, Request $request)
    {
        $ubigeo = Ubigeo::find($id);
        $zona = $ubigeo->zona;
        $cod_postal = $ubigeo->codigo_postal;

        if( $ubigeo->id_estado != $request->id_estado )
            $ubigeo->id_estado = $request->id_estado;

        $ubigeo->zona = $request->zona;
        $ubigeo->codigo_postal = $request->codigo_postal;
        $ubigeo->activo = ( $request->activo == 1 ) ? true : false;

        $ubigeo->update();
        
        return response()->json([
            'status' => 200,
            'message' => 'La Ubicación o Zona '.$zona.' del código postal '.$cod_postal.' fue actualizado con éxito',
        ], 200);
    }

    public function state()
    {
        $estados = Estados::select(['estado', 'id_estado'])->get()->toArray();

        for ($i=0; $i < count($estados) ; $i++) { 
            $estados[$i]['cant'] = UsuariosInfo::where([['activo', true], ['id_estado', $estados[$i]['id_estado']]])->count();
        }

        return response()->json([
            'status' => 200,
            'result' => $estados,
        ], 200);
    }

    public function destroy($id){
        $geo = Ubigeo::find($id);

        $geo->delete();

        return response()->json([
            'status' => 200,
            'message' => 'La Ubicación o Zona '.$geo->zona.' del código postal '.$geo->codigo_postal.' fue eliminado con éxito'
        ], 200);
    }
}
