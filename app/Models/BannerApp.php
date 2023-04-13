<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class BannerApp extends Model
{
    use HasFactory;
     /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_banner';
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
        'id_banner',
        'estado', // 'no-visible - visible
        'activo',
        'ruta_image'
    ];

    protected $table = 'banner_app';

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
            $model->id_banner = (string) Uuid::generate(4);
        });
    }
}
