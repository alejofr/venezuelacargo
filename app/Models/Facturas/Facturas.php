<?php

namespace App\Models\Facturas;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;


class Facturas extends Model
{
    use HasFactory;
     /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_factura';
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
        'id_factura',
        'usuario_id',
        'nro_factura',
        'nro_container',
        'cliente',
        'pago',
        'gastos_extras',
        'total_usd',
        'total_ves',
        'monto_tc',
        'fecha_tc',
        'estado', //Pendiente de pago y cancelado
        'tipo_envio', //Envio y Maritimo
        'tarifa_envio',
        'reempaque',
        'cost_reempaque',
        'cost_x_tracking',
        'activo',
        'fecha_pago',
        'fecha_creado',
        'fecha_editado',

        
        
    ];

    protected $table = 'facturas';

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
            $model->id_factura = (string) Uuid::generate(4);
        });
    }

    public function facturas_info_trackings() 
    {
        return $this->hasMany('App\Models\Facturas\FacturasInfoTrackings', 'id_factura', 'id_factura');
    }

    public function facturas_content() 
    {
        return $this->hasMany('App\Models\Facturas\FacturasContent', 'id_factura', 'id_factura');
    }

    public function facturas_info_extras() 
    {
        return $this->hasMany('App\Models\Facturas\FacturasInfoExtras', 'id_factura', 'id_factura');
    }

    public function envios() 
    {
        return $this->hasMany('App\Models\Envios', 'id_factura', 'id_factura');
    }
}
