<?php

namespace App\Models\Configuracion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class MonedasCambios extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_moneda_cambio';
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
        'id_moneda_cambio', 
        'nombre_moneda_nc',
        'abreviatura_moneda_nc',
        'nombre_moneda_divisa',
        'abreviatura_moneda_divisa', 
        'activo',
        'fecha_creado',
        'fecha_editado',
    ];

    protected $table = 'monedas_cambios';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_moneda_cambio = (string) Uuid::generate(4);
        });
    }

    public function monedas_cambios_tazas() 
    {
        return $this->hasMany('App\Models\Configuracion\MonedasCambiosTasas', 'id_moneda_cambio', 'id_moneda_cambio');
    }
}
