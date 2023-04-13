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
}
