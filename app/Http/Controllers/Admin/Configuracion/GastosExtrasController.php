<?php

namespace App\Http\Controllers\Admin\Configuracion;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\GastosExtras;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class GastosExtrasController extends Controller
{
    public $search = "";
    
    public function index()
    {
        $select = [
            'id_gasto_extra',
            'nombre',
            'tipo', //TRACKING/CAJA/REEMPAQUE
            'monto_gasto_extra',
            'accion', //POR-DEFECTO/MANUAL
            'condicion',
            //si condicion es true
            'variable_cond', //TRACKING/WAREHOUSE
            'tipo_cond', //MAYOR/MENOR
            'cant_cond',
            'monto_cond',
            'activo',
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
    
        $records = DB::table('gastos_extras')
        ->where('activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('nombre',  'LIKE', '%'.$this->search.'%')
            ->orWhere('tipo',  'LIKE', '%'.$this->search.'%');
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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => ['required'],
            'tipo' => ['required'],
            'monto_gasto_extra' => ['required'],
            'accion' => ['required'],
            'condicion' => ['required'],
        ]);

        if( $request->condicion == 1 ){
            $validator = Validator::make($request->all(), [
                'variable_cond' => ['required'],
                'tipo_cond' => ['required'],
                'cant_cond' => ['required'],
                'monto_cond' => ['required'],
            ]);
        }

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        if( $request->tipo == 'TRACKING' ){
            if( GastosExtras::where([['tipo', 'TRACKING'], ['activo', true]])->count() > 0 ){
                return response()->json([
                    'status' => 422,
                    'message' => 'Ya existe un gasto extra para el tipo Tracking',
                ], 422);
            }
        }

        if( $request->tipo == 'REEMPAQUE' ){
            if( GastosExtras::where([['tipo', 'REEMPAQUE'], ['activo', true]])->count() > 0 ){
                return response()->json([
                    'status' => 422,
                    'message' => 'Ya existe un gasto extra para el tipo Reempaque',
                ], 422);
            }
        }

        if( $request->tipo == 'CAJA' ){
            if( GastosExtras::where([['tipo', 'CAJA'], ['nombre', $request->nombre], ['activo', true]])->count() > 0 ){
                return response()->json([
                    'status' => 422,
                    'message' => 'Ya existe un gasto extra con el nombre: '.$request->nombre,
                ], 422);
            }

            if( $request->condicion == true || $request->accion == 'POR-DEFECTO' ){
                return response()->json([
                    'status' => 422,
                    'message' => 'para el tipo de gastos extras en Caja, la accion es manual y sin condicion',
                ], 422);
            }
        }

        $gasto_extra = new GastosExtras;

        $gasto_extra->nombre = $request->nombre;
        $gasto_extra->tipo = $request->tipo; //TRACKING/CAJA/REEMPAQUE
        $gasto_extra->monto_gasto_extra = $request->monto_gasto_extra;
        $gasto_extra->accion = $request->accion; //POR-DEFECTO/MANUAL
        $gasto_extra->condicion = $request->condicion;

        if( $request->condicion == 1 ){
            $gasto_extra->variable_cond = $request->variable_cond; //TRACKING/WAREHOUSE
            $gasto_extra->tipo_cond =  $request->tipo_cond; //MAYOR/MENOR
            $gasto_extra->cant_cond = $request->cant_cond;
            $gasto_extra->monto_cond = $request->monto_cond;
        }

        $gasto_extra->save();

        return response()->json([
            'status' => 200,
            'message' => 'El Gasto Extra con el nombre: '.$gasto_extra->nombre.' fueron agregados con éxito',
        ], 200);
    }

    public function edit($id)
    {
        $gasto_extra = GastosExtras::where('activo', '=', true)
        ->where('id_gasto_extra', '=', $id)->first();

        return response()->json([
            'status' => 200,
            'results' => $gasto_extra
        ], 200);
    }

    public function update($id, Request $request){
        $validator = Validator::make($request->all(), [
            'nombre' => ['required'],
            'tipo' => ['required'],
            'monto_gasto_extra' => ['required'],
            'accion' => ['required'],
            'condicion' => ['required'],
        ]);

        if( $request->condicion == 1 ){
            $validator = Validator::make($request->all(), [
                'variable_cond' => ['required'],
                'tipo_cond' => ['required'],
                'cant_cond' => ['required'],
                'monto_cond' => ['required'],
            ]);
        }

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $gasto_extra = GastosExtras::find($id);

        if( $gasto_extra->tipo != $request->tipo ){
            if( GastosExtras::where([['tipo', $request->tipo], ['activo', true]])->count() > 0 ){
                return response()->json([
                    'status' => 422,
                    'message' => 'Ya existe un gasto extra para el tipo '.$request->tipo,
                ], 422);
            }
        }

        if( $request->tipo == 'CAJA' ){
            if( $gasto_extra->nombre != $request->nombre ){
                if( GastosExtras::where([['tipo', 'CAJA'], ['nombre', $request->nombre], ['activo', true]])->count() > 0 ){
                    return response()->json([
                        'status' => 422,
                        'message' => 'Ya existe un gasto extra con el nombre: '.$request->nombre,
                    ], 422);
                }
            }
            
            if( $request->condicion == true || $request->accion == 'POR-DEFECTO' ){
                return response()->json([
                    'status' => 422,
                    'message' => 'para el tipo de gastos extras en Caja, la accion es manual y sin condicion',
                ], 422);
            }
        }

        $nombre =  $gasto_extra->nombre;
        $gasto_extra->nombre = $request->nombre;
        $gasto_extra->tipo = $request->tipo; //TRACKING/CAJA/REEMPAQUE
        $gasto_extra->monto_gasto_extra = $request->monto_gasto_extra;
        $gasto_extra->accion = $request->accion; //POR-DEFECTO/MANUAL

        if( $request->condicion == 0 && $gasto_extra->condicion == 1 ){
            $gasto_extra->condicion = false;
            $gasto_extra->variable_cond = null; //TRACKING/WAREHOUSE
            $gasto_extra->tipo_cond =  null; //MAYOR/MENOR
            $gasto_extra->cant_cond = null;
            $gasto_extra->monto_cond = null;
        }
        if( $request->condicion == 1 ){
            $gasto_extra->condicion = true;
            $gasto_extra->variable_cond = $request->variable_cond; //TRACKING/WAREHOUSE
            $gasto_extra->tipo_cond =  $request->tipo_cond; //MAYOR/MENOR
            $gasto_extra->cant_cond = $request->cant_cond;
            $gasto_extra->monto_cond = $request->monto_cond;
        }

        $gasto_extra->update();

        return response()->json([
            'status' => 200,
            'message' => 'El Gasto Extra con el nombre: '.$nombre.' fueron actualizado con éxito',
        ], 200);
    }

    public function destroy($id){
        $gasto_extra = GastosExtras::find($id);

        $gasto_extra->activo = false;

        $gasto_extra->update();

        return response()->json([
            'status' => 200,
            'message' => 'El Gasto Extra con el nombre '.$gasto_extra->nombre.' fue eliminado con éxito'
        ], 200);
    }
}
