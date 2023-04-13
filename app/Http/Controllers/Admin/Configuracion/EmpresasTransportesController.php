<?php

namespace App\Http\Controllers\Admin\Configuracion;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\EmpresasTransportes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class EmpresasTransportesController extends Controller
{
    public $search = "";
    
    public function index()
    {

        $select = [
            'id_empresa_transporte',
            'nombre',
            'codigo',
            'descripcion'
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
    
        $records = DB::table('empresas_transportes')
        ->where('activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('nombre',  'LIKE', '%'.$this->search.'%')
            ->orWhere('codigo',  'LIKE', '%'.$this->search.'%');
        })->select($select);

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

    public function all()
    {
        return response()->json([
            'status' => 200,
            'results' => EmpresasTransportes::where('activo', '=', true)->get()->toArray()
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => ['required','max:120', 'unique:empresas_transportes'],
            'codigo' => ['required','max:36', 'unique:empresas_transportes'],
            'descripcion' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $empresa = new EmpresasTransportes;
        $empresa->nombre = $request->nombre;
        $empresa->codigo = $request->codigo;
        $empresa->descripcion = $request->descripcion;

        $empresa->save();

        return response()->json([
            'status' => 200,
            'message' => 'La Empresa de Transorte: '.$empresa->nombre.' fue agregado con éxito',
        ], 200);        
    }

    public function edit($id)
    {
        return response()->json([
            'status' => 200,
            'results' => EmpresasTransportes::where([['id_empresa_transporte', $id], ['activo', true]])->first()
        ], 200);
    }

    public function update($id, Request $request)
    {   
        $validator = Validator::make($request->all(), [
            'nombre' => ['required','max:120'],
            'codigo' => ['required','max:36'],
            'descripcion' => ['required'],
        ]);

        $empresa = EmpresasTransportes::find($id);

        if( $empresa->nombre !=  $request->nombre){
            $validator = Validator::make($request->all(), [
                'nombre' => ['unique:empresas_transportes'],
            ]);
        }else if( $empresa->codigo != $request->codigo ){
            $validator = Validator::make($request->all(), [
                'codigo' => ['unique:empresas_transportes'],
            ]);
        }

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        $nombre = $request->nombre;
        $empresa->nombre = $request->nombre;
        $empresa->codigo = $request->codigo;
        $empresa->descripcion = $request->descripcion;

        $empresa->update();

        return response()->json([
            'status' => 200,
            'message' => 'La Empresa de Transorte: '.$nombre.' fue actualizado con éxito',
        ], 200);       
    }

    public function destroy($id){
        $empresa = EmpresasTransportes::find($id);

        $empresa->activo = false;

        $empresa->update();

        return response()->json([
            'status' => 200,
            'message' => 'La Empresa de Transorte: '.$empresa->nombre.' fue eliminado con exito con éxito',
        ], 200);
    }
}
