<?php

namespace App\Observers;

use App\Models\Facturas\FacturasInfoTrackings;
use App\Models\Almacenes;

class FacturasInfoTrackingsObserver
{
    /**
     * Handle the FacturasInfoTrackings "created" event.
     *
     * @param  \App\Models\Facturas\FacturasInfoTrackings  $facturasInfoTrackings
     * @return void
     */
    public function created(FacturasInfoTrackings $facturasInfoTrackings)
    {
        if( $facturasInfoTrackings->warehouse ){
            $almacen = Almacenes::where('warehouse', '=', $facturasInfoTrackings->warehouse)
            ->where('activo', '=', true)
            ->first();

            if( $almacen != null ){
                $almacen->estado = 'FACTURADO';
                $almacen->update();
            }
        }
    }

    /**
     * Handle the FacturasInfoTrackings "updated" event.
     *
     * @param  \App\Models\Facturas\FacturasInfoTrackings  $facturasInfoTrackings
     * @return void
     */
    public function updated(FacturasInfoTrackings $facturasInfoTrackings)
    {
        //
    }

    /**
     * Handle the FacturasInfoTrackings "deleted" event.
     *
     * @param  \App\Models\Facturas\FacturasInfoTrackings  $facturasInfoTrackings
     * @return void
     */
    public function deleted(FacturasInfoTrackings $facturasInfoTrackings)
    {
        //
    }

    /**
     * Handle the FacturasInfoTrackings "restored" event.
     *
     * @param  \App\Models\Facturas\FacturasInfoTrackings  $facturasInfoTrackings
     * @return void
     */
    public function restored(FacturasInfoTrackings $facturasInfoTrackings)
    {
        //
    }

    /**
     * Handle the FacturasInfoTrackings "force deleted" event.
     *
     * @param  \App\Models\Facturas\FacturasInfoTrackings  $facturasInfoTrackings
     * @return void
     */
    public function forceDeleted(FacturasInfoTrackings $facturasInfoTrackings)
    {
        //
    }
}
