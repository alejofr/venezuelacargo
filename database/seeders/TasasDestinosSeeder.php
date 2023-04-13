<?php

namespace Database\Seeders;

use App\Models\Configuracion\Geolocalizacion\Estados;
use App\Models\Configuracion\TasasDestinos;
use App\Models\Configuracion\TasasDestinosEstados;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TasasDestinosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tasas = 
        [
            0 => [
                'maritimo' => '16.50',
                'aereo' => '4.55',
                'estados' => [
                    'Distrito Federal',
                    'Miranda',
                    'Carabobo',
                    'Aragua'
                ]
            ],
            1 => [
                'maritimo' => '21.00',
                'aereo' => '6.55',
                'estados' => [
                    'Nueva Esparta',
                    'Sucre'
                ]
            ],
            2 => [
                'maritimo' => '19.50',
                'aereo' => '5.55',
                'estados' => [
                    'Amazonas', 
                    'Anzoátegui', 
                    'Apure', 
                    'Barinas', 
                    'Bolívar',
                    'Cojedes',
                    'Falcón', 
                    'Guárico', 
                    'Lara', 
                    'Mérida',
                    'Monagas',
                    'Portuguesa', 
                    'Táchira', 
                    'Trujillo', 
                    'Vargas', 
                    'Yaracuy',
                    'Zulia'   
                ]
            ],
        ];

        
        for ($i=0; $i < count($tasas) ; $i++) { 
            $tasas_destinos = new TasasDestinos;
            $tasas_destinos->activo = true;
            $tasas_destinos->tarifa_aereo = $tasas[$i]['aereo'];
            $tasas_destinos->tarifa_maritimo = $tasas[$i]['maritimo'];
            $tasas_destinos->save();

            $estados = $tasas[$i]['estados'];

            for ($j=0; $j < count($estados) ; $j++) { 
                $id_estado = Estados::where('estado','=',$estados[$j])->select(['id_estado'])->first();
                TasasDestinosEstados::create([
                    'id_tasa_destino' => $tasas_destinos->id_tasa_destino,
                    'id_estado' => $id_estado->id_estado,
                    'activo' => true
                ]);
            }
        }
    }
}
