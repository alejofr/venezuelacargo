<?php

namespace App\Http\Controllers\Admin\Configuracion;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\Geolocalizacion\Estados;
use App\Models\Configuracion\TasasDestinosEstados;
use Illuminate\Http\Request;

class TasasDestinosEstadosController extends Controller
{
    public function getEstadosHabilitados()
    {
        $estados = Estados::where('activo', '=', true)->select(['id_estado', 'estado'])->get()->toArray();

        $arreglo = [];
        for ($i=0; $i < count($estados) ; $i++) { 
            $tasa_estado = TasasDestinosEstados::where('id_estado', '=', $estados[$i]['id_estado'])
            ->where('activo', '=', true)->count();
            if ( $tasa_estado == 0 ){
                array_push($arreglo, $estados[$i]);
            }
        }

        $estados = $arreglo;

        return response()->json([
            'status' => 200,
            'results' => $estados
        ], 200);
    }
}
