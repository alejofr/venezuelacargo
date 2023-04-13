<?php

namespace App\Models\Configuracion\Geolocalizacion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Estados extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_estado';
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
        'id_estado', 
        'estado',
        'activo',
        'fecha_creado', 
        'fecha_editado', 
    ];

    protected $table = 'geo_estados';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_estado = (string) Uuid::generate(4);
        });
    }

    public function ubigeo() 
    {
        
        return $this->hasMany('App\Models\Configuracion\Geolocalizacion\Ubigeo', 'id_estado', 'id_estado');
    }

    public function tasas_destinos_estados() 
    {
        return $this->hasMany('App\Models\Configuracion\TasasDestinosEstados', 'id_estado', 'id_estado');
    }
    
}
