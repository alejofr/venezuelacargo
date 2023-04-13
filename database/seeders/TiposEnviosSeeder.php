<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Configuracion\TiposEnvios;

class TiposEnviosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TiposEnvios::create([
            'tipo_envio' => 'AEREO'
        ]);
        TiposEnvios::create([
            'tipo_envio' => 'MARITIMO'
        ]);
    }
}
