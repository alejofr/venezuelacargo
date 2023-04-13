<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Configuracion\EmpresasTransportes;

class EmpresasTransporteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EmpresasTransportes::create([
            'nombre' => 'Amazon',
            'codigo' => '1',
            'descripcion' => 'COURIER'
        ]);
    }
}
