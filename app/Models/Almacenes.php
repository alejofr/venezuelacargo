<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Almacenes extends Model
{
    use HasFactory;
      /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_almacen';
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
        'id_almacen',
        'id_solicitud',
        'warehouse',
        'tipo_envio', //Envio y Maritimo
        'estado',
        'status',
        'activo',
        'procesado',
        'fecha_creado',
        'fecha_editado',
    ];

    protected $table = 'almacenes';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';

    protected $casts = [
        'fecha_creado' => 'datetime:Y-m-d',
        'fecha_editado' => 'datetime:Y-m-d',
        'almacen_fecha_recibido' => 'datetime:Y-m-d',
    ];
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_almacen = (string) Uuid::generate(4);
        });
    }

    public function solicitudes_envios(){
        return $this->belongsTo('App\Models\SolicitudesEnvios');
    }
}
