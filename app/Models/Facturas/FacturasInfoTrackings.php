<?php

namespace App\Models\Facturas;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class FacturasInfoTrackings extends Model
{
    use HasFactory;
       /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_factura_tracking';
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
        'id_factura_tracking',
        'id_factura',
        'warehouse_padre',
        'warehouse',
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
        'reempaque',
        'seguro', 
        //'total_seguro',
        'sub_total',
        'fecha_creado',
        'fecha_editado',
    ];

    protected $table = 'facturas_info_trackings';

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
            $model->id_factura_tracking = (string) Uuid::generate(4);
        });
    }

    public function facturas(){
        return $this->belongsTo('App\Models\Facturas\Facturas');
    }
}
