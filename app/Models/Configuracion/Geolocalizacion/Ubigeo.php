<?php

namespace App\Models\Configuracion\Geolocalizacion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Ubigeo extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_ubigeo';
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
        'id_ubigeo',
        'id_estado',
        'zona',
        'codigo_postal', 
        'activo',
        'fecha_creado', 
        'fecha_editado', 
    ];

    protected $table = 'geo_ubigeo';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_ubigeo = (string) Uuid::generate(4);
        });
    }

    public function estados(){
        return $this->belongsTo('App\Models\Configuracion\Geolocalizacion\Estados');
    }
}
