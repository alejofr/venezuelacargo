<?php

namespace App\Models\Configuracion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class MonedasCambiosTasas extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_cambio_tasa';
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
        'id_cambio_tasa',
        'id_moneda_cambio', 
        'monto_tc',
        'fecha_tc',
        'activo',
        'fecha_creado',
        'fecha_editado',
    ];

    protected $table = 'monedas_cambios_tasas';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_cambio_tasa = (string) Uuid::generate(4);
        });
    }

    public function monedas(){
        return $this->belongsTo('App\Models\Configuracion\MonedasCambios');
    }
}
