<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class UsuariosInfo extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_usuario_info';
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
        'id_usuario_info',
        'usuario_id',
        'id_estado',
        'id_ubigeo', 
        'cod_usuario',
        'nombres', 
        'apellidos', 
        'telefono',
        'cedula',
        'direccion',
        'ref_direccion',
        'activo',
        'fecha_creado', 
        'fecha_editado', 
    ];


    protected $table = 'usuarios_info';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id_usuario_info = (string) Uuid::generate(4);
        });
    }
}
