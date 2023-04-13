<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Almacenes;
use App\Models\SolicitudesEnvios;
use App\Models\Trackings;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

class TrackingsController extends Controller
{
    public function store_info_trackings($id, Request $request)
    {
        if( $request->warehouse != '' ){
            $warehouse = intval($request->warehouse);

            if( Almacenes::where('warehouse', '=', $warehouse)->count() > 0 ){
                return response()->json([
                    'status' => 403,
                    'message' => 'El warehouse: '.$warehouse.' se encuentra en uso'
                ], 403);
            }
        }else{
            $warehouse = Almacenes::latest('warehouse')->first();
            $warehouse = ( $warehouse != null ) ? $warehouse->warehouse : 1;
        }


        if( Almacenes::where('id_solicitud', '=', $id)->where('activo', '=', true)->count() > 0 ){
            return response()->json([
                'status' => 403,
                'message' => 'Ya esta prealerta esta registrada y los trackings se encuentra en el almacen'
            ], 403);
        }

      

        $trackings = $request->trackings;

        for ($i=0; $i <count($trackings) ; $i++) { 

            $track = json_decode($trackings[$i]);

            $tracking = Trackings::find($track->id_tracking);
            $tracking->ancho = $track->ancho;
            $tracking->alto = $track->alto;
            $tracking->largo =$track->largo;
            $tracking->peso = $track->peso;
            $tracking->num_piezas =  $track->num_piezas;
            $tracking->volumen = ( $track->alto *  $track->largo * $track->ancho ) / 166; //alto * largo * ancho / 166
            $tracking->volumen = round( $tracking->volumen * 100 ) / 100;

            $tracking->pie_cubico = ( $track->alto *  $track->largo * $track->ancho ) / 1728; //alto * largo * ancho / 1728
            $tracking->pie_cubico = round( $tracking->pie_cubico * 100 ) /100;
            $tracking->ruta_image = Storage::url($request->images[$track->id_tracking]->store('public/images'));

            $tracking->update();

        }

        
        $prealerta = SolicitudesEnvios::find($id);
        $prealerta->estado = 'Almacen';
        $prealerta->update();

        Almacenes::create([
            'id_solicitud' => $id,
            'warehouse' => $warehouse,
        ]);

   
        return response()->json([
            'status' => 200,
            'message' => 'Los Tracking de la prealerta fueron agregados en el almacen',
        ], 200);
    }

}
