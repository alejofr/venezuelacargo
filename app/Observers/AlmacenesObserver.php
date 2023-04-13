<?php

namespace App\Observers;

use App\Mail\NotificationPackageRegister;
use App\Models\Almacenes;
use App\Models\SolicitudesEnvios;
use App\Models\Trackings;
use Illuminate\Support\Facades\Mail;

class AlmacenesObserver
{
    /**
     * Handle the Almacenes "created" event.
     *
     * @param  \App\Models\Almacenes  $almacenes
     * @return void
     */
    public function created(Almacenes $almacenes)
    {
        //
        $select = [
            'solicitudes_envios.id_solicitud',
            'usuarios.email',
        ];

        $tracking = Trackings::where('id_solicitud', '=', $almacenes->id_solicitud)->first();

        $solictudUsuario = SolicitudesEnvios::select($select)
        ->leftJoin('usuarios', 'usuarios.usuario_id', '=', 'solicitudes_envios.usuario_id')
        ->where('solicitudes_envios.id_solicitud', '=', $almacenes->id_solicitud)->first();


        $arreglo = [ 
            'warehouse' => $almacenes->warehouse,
            'tracking' => $tracking->tracking,
            'descripcion' => $tracking->descripcion,
            'ancho' => $tracking->ancho,
            'alto' => $tracking->alto,
            'largo' => $tracking->largo,
            'peso' => $tracking->peso,
            'num_piezas' => $tracking->num_piezas,
        ];

        $image = public_path($tracking->ruta_image);

        Mail::to($solictudUsuario->email)->send(new NotificationPackageRegister($arreglo, $image));

    }

    /**
     * Handle the Almacenes "updated" event.
     *
     * @param  \App\Models\Almacenes  $almacenes
     * @return void
     */
    public function updated(Almacenes $almacenes)
    {
    
        if( $almacenes->estado == 'ENVIADO' ){
            SolicitudesEnvios::where('id_solicitud', '=', $almacenes->id_solicitud)
            ->where('activo', '=', true)
            ->update(['estado' => 'enviado']);
        }

    }

    /**
     * Handle the Almacenes "deleted" event.
     *
     * @param  \App\Models\Almacenes  $almacenes
     * @return void
     */
    public function deleted(Almacenes $almacenes)
    {
        //if( $almacenes->estado == 'Miami' ){
            SolicitudesEnvios::where('id_solicitud', '=', $almacenes->id_solicitud)
            ->where('activo', '=', true)
            ->update(['estado' => 'pendiente']);

            Trackings::where('id_solicitud', '=', $almacenes->id_solicitud)
            ->update([
                'ancho' => null,
                'alto' => null,
                'largo' => null,
                'peso' => null,
                'num_piezas' => null,
                'volumen' => null,
                'pie_cubico' => null,
                'ruta_image' => null,
                'original' => true, // Original (true) o Modificado (false)
                'reempaque' => 'no', 
                'seguro' => 0,
                'total_seguro' => 0
            ]);
        //}
    }

    /**
     * Handle the Almacenes "restored" event.
     *
     * @param  \App\Models\Almacenes  $almacenes
     * @return void
     */
    public function restored(Almacenes $almacenes)
    {
        //
    }

    /**
     * Handle the Almacenes "force deleted" event.
     *
     * @param  \App\Models\Almacenes  $almacenes
     * @return void
     */
    public function forceDeleted(Almacenes $almacenes)
    {
        //
    }
}
