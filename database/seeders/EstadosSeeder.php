<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Configuracion\Geolocalizacion\Estados;

class EstadosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        $estados = [ 
            'Amazonas', 
            'Anzoátegui', 
            'Apure', 
            'Aragua', 
            'Barinas', 
            'Bolívar', 
            'Carabobo', 
            'Cojedes', 
            'Distrito Federal', 
            'Falcón', 
            'Guárico', 
            'Lara', 
            'Mérida', 
            'Miranda', 
            'Monagas', 
            'Nueva Esparta', 
            'Portuguesa', 
            'Sucre', 
            'Táchira', 
            'Trujillo', 
            'Vargas', 
            'Yaracuy',
            'Zulia'
        ];

        for ($i=0; $i < count($estados) ; $i++) { 
            Estados::create([
                'estado' => $estados[$i]
            ]);
        }
    }
}
