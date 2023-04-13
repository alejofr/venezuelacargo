<?php

namespace App\Http\Controllers\Admin\Configuracion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Configuracion\MonedasCambios;
use App\Models\Configuracion\MonedasCambiosTasas;
use Illuminate\Support\Facades\DB;

class MonedasCambiosTasasController extends Controller
{
    public $search = "";
    
    public function index()
    {
        $select = [
            'monedas_cambios.id_moneda_cambio', 
            'monedas_cambios.nombre_moneda_nc',
            'monedas_cambios.abreviatura_moneda_nc',
            'monedas_cambios.nombre_moneda_divisa',
            'monedas_cambios.abreviatura_moneda_divisa',
            'monedas_cambios_tasas.monto_tc',
            'monedas_cambios_tasas.fecha_tc'
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";
        $id_tipo_cambio = ( $query != null && isset($query->id_cambio) && $query->id_cambio != '' ) ? $query->id_cambio : '';

        $records = DB::table('monedas_cambios')
        ->leftJoin('monedas_cambios_tasas', 'monedas_cambios_tasas.id_moneda_cambio', '=', 'monedas_cambios.id_moneda_cambio')
        ->where('monedas_cambios.activo', '=', true)
        ->where('monedas_cambios_tasas.activo', '=', true)
        ->where('monedas_cambios.id_moneda_cambio', '=', $id_tipo_cambio)
        
        ->Where(function($query) {
            $query->orWhere('monedas_cambios.nombre_moneda_nc',  'LIKE', '%'.$this->search.'%')
            ->orWhere('monedas_cambios.abreviatura_moneda_nc',  'LIKE', '%'.$this->search.'%')
            ->orWhere('monedas_cambios.nombre_moneda_divisa',  'LIKE', '%'.$this->search.'%')
            ->orWhere('monedas_cambios.abreviatura_moneda_divisa',  'LIKE', '%'.$this->search.'%')
            ->orWhere('monedas_cambios_tasas.monto_tc',  'LIKE', '%'.$this->search.'%');
        })->select($select);

        $count = $records->count();
        /*$records->limit($limit)
            ->skip($limit * ($page - 1));*/

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

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'monto_tc' => ['required'],
            'fecha_tc' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $count = MonedasCambios::where('id_moneda_cambio', '=', $id)
        ->where('activo', '=', true)->count();

        if( $count == 0 ){
            return response()->json([
                'status' => 422,
                'message' => 'El tipo de cambio creado, no se encuentra disponible.',
            ], 422);
        }

        date_default_timezone_set('America/Caracas');
        $fecha_actual = $request->fecha_tc;
        $time = strtotime($fecha_actual);
        $fechaLocal = date("Y-m-d H:i", $time);

        MonedasCambiosTasas::create([
            'id_moneda_cambio' => $id,
            'monto_tc' => $request->monto_tc,
            'fecha_tc' => $fechaLocal
        ]);
        
        return response()->json([
            'status' => 200,
            'message' => 'La tasa de Cambio: '.$request->monto_tc.'Fue agregadoi con Éxito',
        ], 200);
    }
}
