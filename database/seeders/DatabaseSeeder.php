<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(RolPermissionSeeder::class);
        $this->call(EstadosSeeder::class);
        $this->call(EstadosUbigeoSeeder::class);
        $this->call(TasasDestinosSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(TiposEnviosSeeder::class);
        $this->call(TasaCambiariaSeeder::class);
        $this->call(EmpresasTransporteSeeder::class);
        $this->call(SolicitudesEnviosSeeder::class);
        $this->call(GastosExtrasSeeder::class);

    }
}
