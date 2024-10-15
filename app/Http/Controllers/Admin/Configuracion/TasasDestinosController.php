<?php

namespace App\Http\Controllers\Admin\Configuracion;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\GastosExtras;
use App\Models\Configuracion\Geolocalizacion\Estados;
use App\Models\Configuracion\TasasDestinos;
use App\Models\Configuracion\TasasDestinosEstados;
use App\Models\Configuracion\TiposEnvios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class TasasDestinosController extends Controller
{
    public $search = "";
    
    public function index()
    {
        $select = [
            'config_tasas_destinos.id_tasa_destino',
            'config_tasas_destinos.tarifa_aereo',
            'config_tasas_destinos.tarifa_maritimo',
            'config_tasas_destinos.activo',
        ];

        extract(request()->only(['query', 'limit', 'page', 'orderBy', 'ascending',]));

        $limit = (isset($limit) && $limit != '') ? $limit : 8;
        $page = (isset($page) && $page != 1) ? $page : 1;
        $query = isset($query) ? json_decode($query) : null;

        $this->search = ( $query != null && isset($query->search) && $query->search != '' ) ? $query->search : "";

        $records = DB::table('config_tasas_destinos')
        ->where('config_tasas_destinos.activo', '=', true)
        ->Where(function($query) {
            $query->orWhere('tarifa_aereo',  'LIKE', '%'.$this->search.'%')
            ->orWhere('tarifa_maritimo',  'LIKE', '%'.$this->search.'%');
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

        for ($i=0; $i <count($results) ; $i++) { 
            $results[$i]->estados = DB::table('config_tasas_destinos_estados')
            ->leftJoin('geo_estados', 'geo_estados.id_estado', 'config_tasas_destinos_estados.id_estado')
            ->where('config_tasas_destinos_estados.id_tasa_destino', '=', $results[$i]->id_tasa_destino)
            ->where('config_tasas_destinos_estados.activo', '=', true)
            ->select(['geo_estados.id_estado', 'geo_estados.estado'])->get()->toArray();
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
            'estados' => ['required'],
            'tarifa_aereo' => ['required'],
            'tarifa_maritimo' => ['required'],
            'activo' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        
        $estados = $request->estados;

        for ($i=0; $i <count($estados) ; $i++) { 
            $count =  DB::table('config_tasas_destinos_estados')
            ->where('config_tasas_destinos_estados.id_estado', '=', $estados[$i])
            ->where('config_tasas_destinos_estados.activo', '=', true)
            ->count();
            if( $count > 0 ){
                $estado = Estados::find($estados[$i]);
                return response()->json([
                    'status' => 422,
                    'message' => 'El Estado: '.$estado->estado.' ya se encuentra en uso.',
                ], 422);
            }
        }

        $tasas_destinos = new TasasDestinos;
        $tasas_destinos->activo = ( $request->activo == 1 ) ? true : false;
        $tasas_destinos->tarifa_aereo = $request->tarifa_aereo;
        $tasas_destinos->tarifa_maritimo = $request->tarifa_maritimo;
        $tasas_destinos->save();

        for ($j=0; $j < count($estados) ; $j++) { 
            TasasDestinosEstados::create([
                'id_tasa_destino' => $tasas_destinos->id_tasa_destino,
                'id_estado' => $estados[$j],
                'activo' => ( $request->activo == 1 ) ? true : false
            ]);
        }
        

        return response()->json([
            'status' => 200,
            'message' => 'Las Tarifas, fueron agregados con éxito',
        ], 200);

    }

    public function edit($id)
    {
        $tasa_destino = TasasDestinos::where('activo', '=', true)->where('id_tasa_destino', '=', $id)->first();

        if( $tasa_destino != null ){
          
            $destinos = DB::table('config_tasas_destinos_estados')
            ->where('id_tasa_destino', '=', $tasa_destino->id_tasa_destino)
            ->where('activo', '=', true)
            ->select('id_estado')->get()->toArray();
            $arreglo = [];

            for ($i=0; $i < count($destinos); $i++) { 
                array_push($arreglo, $destinos[$i]->id_estado);
            }
                
            $tasa_destino->estados = $arreglo;
        }

        return response()->json([
            'status' => 200,
            'results' => $tasa_destino
        ], 200);
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'estados' => ['required'],
            'tarifa_aereo' => ['required'],
            'tarifa_maritimo' => ['required'],
            'activo' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $estados = $request->estados;
        $tasa_destino = TasasDestinos::find($id);
        $destinos = DB::table('config_tasas_destinos_estados')
        ->leftJoin('geo_estados', 'geo_estados.id_estado', 'config_tasas_destinos_estados.id_estado')
        ->where('config_tasas_destinos_estados.id_tasa_destino', '=', $id)
        ->where('config_tasas_destinos_estados.activo', '=', true)
        ->select(['geo_estados.id_estado', 'geo_estados.estado'])->get()->toArray();

        
        for ($i=0; $i < count($destinos) ; $i++) { 
            if (!in_array($destinos[$i]->id_estado, $estados)){
                DB::table('config_tasas_destinos_estados')
                ->where('config_tasas_destinos_estados.id_tasa_destino', '=', $id)
                ->where('config_tasas_destinos_estados.id_estado', '=', $destinos[$i]->id_estado)
                ->where('config_tasas_destinos_estados.activo', '=', true)
                ->update(['activo' => false]);
            }
        }

        $tasa_destino->activo = ( $request->activo == 1 ) ? true : false;
        $tasa_destino->tarifa_aereo = $request->tarifa_aereo;
        $tasa_destino->tarifa_maritimo = $request->tarifa_maritimo;
        $tasa_destino->update();

        for ($j=0; $j < count($estados) ; $j++) { 
            $count = DB::table('config_tasas_destinos_estados')
            ->where('config_tasas_destinos_estados.id_tasa_destino', '=', $id)
            ->where('config_tasas_destinos_estados.id_estado', '=', $estados[$j])
            ->where('config_tasas_destinos_estados.activo', '=', true)
            ->count();

            if($count == 0){
                TasasDestinosEstados::create([
                    'id_tasa_destino' => $id,
                    'id_estado' => $estados[$j],
                    'activo' => ( $request->activo == 1 ) ? true : false
                ]);
            }
        }

        return response()->json([
            'status' => 200,
            'message' => 'La Tarifa fue actualizada.',
        ], 200);
    }

    public function destroy($id)
    {
        $tasa_destino = TasasDestinos::where('activo', '=', true)->where('id_tasa_destino', '=', $id)->first();

        if( $tasa_destino != null ){
          
            $tasa_destino->delete();
        }

        return response()->json([
            'status' => 200,
            'results' => $tasa_destino
        ], 200);
    }

    public function calculadora(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'estado_id' => ['required'],
            'tipo_envio' => ['required'],
            'reempaque' => ['required'],
            'alto' => ['required'],
            'ancho' => ['required'],
            'largo' => ['required'],
            'peso' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors()->first(),
            ], 422);
        }

    

        $tasa_destino = TasasDestinosEstados::select([
            'config_tasas_destinos.tarifa_aereo',
            'config_tasas_destinos.tarifa_maritimo',
        ])
        ->leftJoin('config_tasas_destinos', 'config_tasas_destinos.id_tasa_destino', 'config_tasas_destinos_estados.id_tasa_destino')
        ->where('config_tasas_destinos_estados.id_estado', '=', $request->estado_id)
        ->where('config_tasas_destinos_estados.activo', '=', true)
        ->first();

        $tarifa = ( $request->tipo_envio === 'aereo' ) ? $tasa_destino->tarifa_aereo : $tasa_destino->tarifa_maritimo;
        $ancho = $request->ancho;
        $alto = $request->alto;
        $largo =$request->largo;
        $peso = $request->peso;
        $volumen = ( $alto *  $largo * $ancho ) / 166; //alto * largo * ancho / 166
        $volumen = $volumen >  ? $volumen : 8.5;
        $volumen = round( $volumen * 100 ) / 100;
        //$volumen = ( $volumen >= 3.33 && $vo) ? $volumen : 3.33;

        $pie_cubico = ( $alto *  $largo * $ancho ) / 1728; //alto * largo * ancho / 1728
        $pie_cubico = round( $pie_cubico * 100 ) / 100;
        $pie_cubico = ( $pie_cubico > 1.72 ) ? $pie_cubico : 1.72;
        $pie_cubico = round( $pie_cubico * 100 ) / 100;
        $xTarifa = 0;
        $msg = 'La tarifa de envío, es de '.$tarifa.' USD. El Volumen calculado es de '.$volumen.' y el pie cúbico es de '.$pie_cubico.'.';

        /*if( 8.5 > $volumen ){
            $volumen = 8.5;
        }*/

        if( $peso > 8.5 && $peso > $volumen ){
            $volumen = $peso;
        }

        if( $request->tipo_envio === 'aereo' ){
            
            $xTarifa = $volumen;
        }else{
            $xTarifa = $pie_cubico;
        }

        $cost = $xTarifa * $tarifa;
        $cost_reempaque = 0;
        

        if( $request->reempaque === 'si' ){
            $gastos_extras = GastosExtras::select(['monto_gasto_extra'])
            ->where('tipo', '=', 'REEMPAQUE')
            ->first();

            $cost_reempaque = $gastos_extras->monto_gasto_extra;
            $msg = $msg.' El costo reempaque es de '.$cost_reempaque.' USD.';
        }

        $tracking = GastosExtras::select(['monto_gasto_extra'])
            ->where('tipo', '=', 'TRACKING')
            ->first();

        $const_track = $tracking->monto_gasto_extra;

        $subtotal = ($cost + $cost_reempaque) + $const_track;
        $total = round( $subtotal * 100 ) / 100;

        

        $msg = $msg.' Y el costo total del envío es de '.$total.' USD';

       

        return response()->json([
            'status' => 200,
            'result' => [
                'tarifa' => $tarifa,
                'volumen' => $volumen,
                'pie_cubico' => $pie_cubico,
                'total' => $total,
                'cost_reempaque' => $cost_reempaque,
                'cost_tracking' => $tracking->monto_gasto_extra
            ]
        ], 200);
        
    }

}
