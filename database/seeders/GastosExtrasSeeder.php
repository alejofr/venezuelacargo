<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Configuracion\GastosExtras;

class GastosExtrasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GastosExtras::create([
            'nombre' => 'SMALL',
            'tipo' => 'CAJA', //TRACKING/CAJA/REEMPAQUE
            'monto_gasto_extra' => '3.00',
            'accion' => 'MANUAL'
        ]);

        GastosExtras::create([
            'nombre' => 'MEDIUM',
            'tipo' => 'CAJA', //TRACKING/CAJA/REEMPAQUE
            'monto_gasto_extra' => '4.00',
            'accion' => 'MANUAL'
        ]);

        GastosExtras::create([
            'nombre' => 'Costo por tracking',
            'tipo' => 'TRACKING', //TRACKING/CAJA/REEMPAQUE
            'monto_gasto_extra' => '1.00',
            'accion' => 'POR-DEFECTO'
        ]);

        GastosExtras::create([
            'nombre' => 'Costo Reempaque por cada tracking',
            'tipo' => 'REEMPAQUE', //TRACKING/CAJA/REEMPAQUE
            'monto_gasto_extra' => '15.00',
            'accion' => 'POR-DEFECTO',
            'condicion' => true,
            //si condicion es true
            'variable_cond' => 'TRACKING', //TRACKING/WAREHOUSE
            'tipo_cond' => 'MAYOR', //MAYOR/MENOR
            'cant_cond' => '15',
            'monto_cond' => '1.00',
        ]);
    }
}
