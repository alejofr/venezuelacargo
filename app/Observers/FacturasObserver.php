<?php

namespace App\Observers;

use App\Models\Facturas\Facturas;
use App\Models\Envios;
use App\Models\Almacenes;
use App\Models\Facturas\FacturasInfoTrackings;

class FacturasObserver
{
    /**
     * Handle the Facturas "created" event.
     *
     * @param  \App\Models\Facturas\Facturas  $facturas
     * @return void
     */
    public function created(Facturas $facturas)
    {
        Envios::create([
            'id_factura' => $facturas->id_factura
        ]);
    }

    /**
     * Handle the Facturas "updated" event.
     *
     * @param  \App\Models\Facturas\Facturas  $facturas
     * @return void
     */
    public function updated(Facturas $facturas)
    {
        
    }

    /**
     * Handle the Facturas "deleted" event.
     *
     * @param  \App\Models\Facturas\Facturas  $facturas
     * @return void
     */
    public function deleted(Facturas $facturas)
    {
        
    }

    /**
     * Handle the Facturas "restored" event.
     *
     * @param  \App\Models\Facturas\Facturas  $facturas
     * @return void
     */
    public function restored(Facturas $facturas)
    {
        //
    }

    /**
     * Handle the Facturas "force deleted" event.
     *
     * @param  \App\Models\Facturas\Facturas  $facturas
     * @return void
     */
    public function forceDeleted(Facturas $facturas)
    {
        //
    }
}
