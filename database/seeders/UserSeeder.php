<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UsuariosInfo;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'nombre_usuario' => 'admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin123')
        ])->assignRole('admin');

        User::create([
            'nombre_usuario' => 'admin',
            'email' => 'jamtechca@gmail.com',
            'password' => bcrypt('admin123')
        ])->assignRole('admin');
        
        User::create([
            'nombre_usuario' => 'client',
            'email' => 'client@client.com',
            'password' => bcrypt('admin123')
        ])->assignRole('client');

        $geo = DB::table('geo_estados')
        ->leftJoin('geo_ubigeo', 'geo_ubigeo.id_estado', '=', 'geo_estados.id_estado')
        ->where('geo_estados.estado', '=', 'Lara')
        ->where('geo_ubigeo.zona', '=', 'Barquisimeto')
        ->first();
        
        $cliente = User::where('email', '=', 'client@client.com')->first();
   

        UsuariosInfo::create([
            'usuario_id' => $cliente->usuario_id,
            'id_estado' => $geo->id_estado,
            'id_ubigeo' => $geo->id_ubigeo, 
            'cod_usuario' => '1',
            'nombres' => 'Juan', 
            'apellidos'  => 'Rodriguez', 
            'telefono' => '4245153163',
            'cedula' => 26904790,
            'direccion' => 'Ruezga Norte Sector 3 Av. Principal, casa numero 59.',
        ]);
    }
}
