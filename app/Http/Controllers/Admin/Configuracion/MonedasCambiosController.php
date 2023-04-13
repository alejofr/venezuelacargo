<?php

namespace App\Http\Controllers\Admin\Configuracion;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\MonedasCambios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MonedasCambiosController extends Controller
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
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";

        $records = DB::table('monedas_cambios')
        ->where('monedas_cambios.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('monedas_cambios.nombre_moneda_nc',  'LIKE', '%'.$this->search.'%')
            ->orWhere('monedas_cambios.abreviatura_moneda_nc',  'LIKE', '%'.$this->search.'%')
            ->orWhere('monedas_cambios.nombre_moneda_divisa',  'LIKE', '%'.$this->search.'%')
            ->orWhere('monedas_cambios.abreviatura_moneda_divisa',  'LIKE', '%'.$this->search.'%');
        })->select($select);

        $count = $records->count();
        $records->limit($limit)
            ->skip($limit * ($page - 1));

        if (isset($orderBy)) {
            $direction = $ascending == 1 ? 'ASC' : 'DESC';
            $records->orderBy($orderBy, $direction);
        }

        $results = $records->get()->toArray();
        for ($i=0; $i < count($results) ; $i++) { 
            $taza = DB::table('monedas_cambios_tasas')
                ->where('id_moneda_cambio', '=', $results[$i]->id_moneda_cambio)
                ->where('activo', '=', true)
                ->orderBy('fecha_tc', 'DESC')
                ->select(['id_cambio_tasa','monto_tc', 'fecha_tc'])
                ->first();

            $results[$i]->id_cambio_tasa = ( $taza != null ) ? $taza->id_cambio_tasa : '';
            $results[$i]->monto_tc = ( $taza != null ) ? $taza->monto_tc : '';
            $results[$i]->fecha_tc = ( $taza != null ) ? $taza->fecha_tc : '';
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

    public function getTasa()
    {
        $result =  DB::table('monedas_cambios')
        ->leftJoin('monedas_cambios_tasas', 'monedas_cambios_tasas.id_moneda_cambio', '=', 'monedas_cambios.id_moneda_cambio')
        ->where('monedas_cambios_tasas.activo', '=', true)
        ->orderBy('monedas_cambios_tasas.fecha_tc', 'DESC')
        ->select(['monedas_cambios_tasas.id_cambio_tasa','monedas_cambios_tasas.monto_tc', 'monedas_cambios_tasas.fecha_tc'])
        ->first();

        return response()->json([
            'status' => 200,
            'results' => $result,
        ], 200);

    }
    
    public function edit($id)
    {
        $tipo_cambio = MonedasCambios::where('id_moneda_cambio', '=', $id)
        ->where('activo', '=', true)->first();

        return response()->json([
            'status' => 200,
            'results' => $tipo_cambio
        ], 200);
    }
}
