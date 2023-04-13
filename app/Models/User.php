<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Webpatser\Uuid\Uuid;
use Spatie\Permission\Traits\HasRoles;
//use Illuminate\Support\Str;
//use Laravel\Sanctum\NewAccessToken;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasRoles;

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'usuario_id';
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
        'usuario_id', 
        'nombre_usuario',
        'email',
        'password', 
        'activo',
        'eliminado', 
        'fecha_creado', 
        'fecha_editado', 
        'fecha_eliminado', 
    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'fecha_creado' => 'datetime:Y-m-d',
        'fecha_editado' => 'datetime:Y-m-d',
    ];

    protected $table = 'usuarios';

    const CREATED_AT = 'fecha_creado';
    const UPDATED_AT = 'fecha_editado';
    
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->usuario_id = (string) Uuid::generate(4);
        });
    }

    
}
