<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Trackings extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_tracking';
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
        'id_tracking',
        'id_solicitud',
        'tracking',
        'descripcion',
        'ancho',
        'alto',
        'largo',
        'peso',
        'num_piezas',
        'volumen',
        'pie_cubico',
        'ruta_image',
        'original', // Original (true) o Modificado (false)
        'reempaque',
        'seguro', 
        'total_seguro',
        'activo',
        'fecha_creado',
        'fecha_editado',
    ];

    protected $table = 'trackings';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';

    protected $casts = [
        'fecha_editado' => 'datetime:Y-m-d',
    ];
    
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_tracking = (string) Uuid::generate(4);
        });
    }

    public function solicitudes_envios(){
        return $this->belongsTo('App\Models\SolicitudesEnvios');
    }
}
