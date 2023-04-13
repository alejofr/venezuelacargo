<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class SolicitudesEnvios extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_solicitud';
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
        'id_solicitud',
        'cod_solicitud',
        'usuario_id',
        'id_empresa_transporte',
        'fecha_llegada',
        'estado',
        'ruta_pdf',
        'activo',
        'fecha_creado',
        'fecha_editado',
    ];

    protected $table = 'solicitudes_envios';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';

    protected $casts = [
        'fecha_creado' => 'datetime:Y-m-d',
        'fecha_editado' => 'datetime:Y-m-d',
        'solicitud_fecha_creado' => 'datetime:Y-m-d'
    ];
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_solicitud = (string) Uuid::generate(4);
        });
    }

    public function trackings() 
    {
        return $this->hasMany('App\Models\Trackings', 'id_solicitud', 'id_solicitud');
    }

    public function almacenes() 
    {
        return $this->hasMany('App\Models\Almacenes', 'id_solicitud', 'id_solicitud');
    }
}
