<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Configuracion\MonedasCambios;
use App\Models\Configuracion\MonedasCambiosTasas;
use Carbon\Carbon;

class TasaCambiariaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cambio = new MonedasCambios;

        $cambio->nombre_moneda_nc = 'Bolivares';
        $cambio->abreviatura_moneda_nc = 'VES';
        $cambio->nombre_moneda_divisa = 'Dolar Estadounidense';
        $cambio->abreviatura_moneda_divisa = 'USD';

        $cambio->save();

        MonedasCambiosTasas::create([
            'id_moneda_cambio' => $cambio->id_moneda_cambio,
            'monto_tc' => '5,89',
            'fecha_tc' => Carbon::now()
        ]);
    }
}
