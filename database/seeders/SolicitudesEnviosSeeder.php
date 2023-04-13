<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SolicitudesEnvios;
use App\Models\User;
use App\Models\Configuracion\EmpresasTransportes;
use App\Models\Trackings;

class SolicitudesEnviosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::where('email', '=', 'client@client.com')->first();
        $empresa = EmpresasTransportes::where('codigo', '=', '1')->first();

        $solicitud = new SolicitudesEnvios;
        $solicitud->usuario_id = $user->usuario_id;
        $solicitud->id_empresa_transporte = $empresa->id_empresa_transporte;
        $solicitud->fecha_llegada = '2022-10-15';
        $solicitud->save();

        Trackings::create([
            'id_solicitud' => $solicitud->id_solicitud,
            'tracking' => '1234',
            'descripcion' => 'docena de zapatos nike',
        ]);
        
    }
}
