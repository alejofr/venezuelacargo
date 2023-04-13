<?php

namespace App\Models\Configuracion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class TasasDestinosEstados extends Model
{
    use HasFactory;
    /* The primary key associated with the table.
    *
    * @var string
    */
   protected $primaryKey = 'id_tasa_destino_estado';
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
       'id_tasa_destino_estado',
       'id_tasa_destino',
       'id_estado', 
       'activo',
       'fecha_creado', 
       'fecha_editado', 
   ];

   protected $table = 'config_tasas_destinos_estados';

   const CREATED_AT = 'fecha_creado';
   const UPDATED_AT = 'fecha_editado';
   
   public static function boot()
   {
       parent::boot();
       self::creating(function ($model) {
           $model->id_tasa_destino_estado = (string) Uuid::generate(4);
       });
   }

    public function tasas_destinos(){
        return $this->belongsTo('App\Models\Configuracion\TasasDestinos');
    }

    public function estados(){
        return $this->belongsTo('App\Models\Configuracion\Geolocalizacion\Estados');
    }
}
