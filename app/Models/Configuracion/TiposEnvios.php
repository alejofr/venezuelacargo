<?php

namespace App\Models\Configuracion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;


class TiposEnvios extends Model
{
    use HasFactory;/**
    * The primary key associated with the table.
    *
    * @var string
    */
   protected $primaryKey = 'id_tipo_envio';
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
       'id_tipo_envio', 
       'tipo_envio',
       'activo',
       'fecha_creado', 
       'fecha_editado', 
   ];

   protected $table = 'config_tipos_envios';

   const CREATED_AT = 'fecha_creado';
   const UPDATED_AT = 'fecha_editado';
   
   public static function boot()
   {
       parent::boot();
       self::creating(function ($model) {
           $model->id_tipo_envio = (string) Uuid::generate(4);
       });
   }
}
