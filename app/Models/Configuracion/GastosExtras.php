<?php

namespace App\Models\Configuracion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class GastosExtras extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_gasto_extra';
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
        'id_gasto_extra',
        'nombre',
        'tipo', //TRACKING/CAJA/REEMPAQUE
        'monto_gasto_extra',
        'accion', //POR-DEFECTO/MANUAL
        'condicion',
        //si condicion es true
        'variable_cond', //TRACKING/WAREHOUSE
        'tipo_cond', //MAYOR/MENOR
        'cant_cond',
        'monto_cond',
        'activo',
        'fecha_creado',
        'fecha_editado',
    ];

    protected $table = 'gastos_extras';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_gasto_extra = (string) Uuid::generate(4);
        });
    }
}
