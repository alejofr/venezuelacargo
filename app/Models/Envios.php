<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Envios extends Model
{
    use HasFactory;
     /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_envio';
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_envio',
        'id_factura',
        'historial_estado',
        'estado', //FACTURADO - ENVIADO-VENEZUELA - EN-TRANSITO-VENEZUELA - ADUENA-VENEZUELA - ALMACEN-VENEZUELA - ENVIADO-CLINTE - ENTREGADO
        'fecha_estimada',
        'fecha_creado',
        'fecha_editado',
    ];

    protected $table = 'envios';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';

    protected $casts = [
        'fecha_creado' => 'datetime:Y-m-d',
        'fecha_editado' => 'datetime:Y-m-d',
    ];
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_envio = (string) Uuid::generate(4);
        });
    }

    public function facturas(){
        return $this->belongsTo('App\Models\Facturas\Facturas');
    }

    public static function shippingStates(){
        return [
            [
              'title' => 'ALMACÉN MIAMI',
              'valor' => 'FACTURADO',
              "map" => [],
              'check' => true,
              'active' => false,
            ],
            [
              'title' => 'PENDIENTE POR PAGO',
              'valor' => 'ENVIO-VENEZUELA',
              'map' => [
                'id' => 'a',
                'position' => [
                  'lat' => 25.7745431,
                  'lng' => -80.1708802,
                ],
              ],
              'check' => false,
              'active' => false,
            ],
            [
              'title' => 'EN TRÁNSITO HACIA VENEZUELA',
              'valor' => 'ENTRANSITO-VENEZUELA',
              'map' => [
                'id' => 'b',
                'position' => [
                  'lat' => 23.732230669979263,
                  'lng' => -71.19582448995914,
                ],
              ],
              'check' => false,
              'active' => false,
            ],
            [
              'title' => 'EN PUERTO VENEZOLANO',
              'valor' => 'PUERTO-VENEZOLANO',
              'map' => [
                'id' => 'c',
                'position' => [
                  'lat' => 10.601428576954985,
                  'lng' => -66.96054375984357,
                ],
              ],
              'check' => false,
              'active' => false,
            ],
            [
              'title' => 'HACIENDO ADUANA VENEZUELA',
              'valor' => 'ADUANA-VENEZUELA',
              'map' => [
                'id' => 'd',
                'position' => [
                  'lat' => 10.6012894,
                  'lng' => -66.9466783,
                ],
              ],
              'check' => false,
              'active' => false,
            ],
            [
              'title' => 'ALMACEN EXTERNO ADUANA',
              'valor' => 'ALMACEN-EXTERNO-ADUANA',
              'map' => [
                'id' => 'e',
                'position' => [
                  'lat' => 10.601428576954985,
                  'lng' => -66.96054375984357,
                ],
              ],
              'check' => false,
              'active' => false,
            ],
            [
              'title' => 'ALMACÉN VENEZUELA CARGO LA GUAIRA',
              'valor' => 'ALMACEN-VENEZUELA',
              'map' => [
                'id' => 'h',
                'position' => [
                  'lat' => 10.5997551,
                  'lng' => -66.954827,
                ],
              ],
              'check' => false,
              'active' => false,
            ],
            [
              'title' => 'EN RUTA NACIONAL',
              'valor' => 'EN-RUTA-NACIONAL',
              'map' => [
                'id' => 'i',
                'position' => [
                  'lat' => 10.458737617888016,
                  'lng' => -66.91349306300683,
                ],
              ],
              'check' => false,
              'active' => false,
            ],
            [
              'title' => 'ENTREGADO',
              'valor' => 'ENTREGADO',
              "map" => [],
              'check' => false,
              'active' => false,
            ],
        ];
    }
}
