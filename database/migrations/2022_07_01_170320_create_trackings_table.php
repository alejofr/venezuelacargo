<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trackings', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_tracking')->primary();
            $table->uuid('id_solicitud');
            //$table->uuid('id_tracking_padre')->nullable();
            $table->string('tracking', 120);
            $table->text('descripcion');
            $table->string('ancho', 10)->nullable();
            $table->string('alto', 10)->nullable();
            $table->string('largo', 10)->nullable();
            $table->string('peso', 10)->nullable();
            $table->string('num_piezas', 10)->nullable();
            $table->string('volumen', 10)->nullable();
            $table->string('pie_cubico', 10)->nullable();
            $table->text('ruta_image')->nullable();
            $table->boolean('original')->default(true); // Original (true) o Modificado (false)
            $table->uuid('reempaque')->default('no'); 
            $table->string('seguro', 10)->default(0);
            $table->string('total_seguro', 10)->default(0);

            //$table->uuid('estado')->default('Solicitud'); //Solicitud (modulo de prealertas), Almacen (modulo de Almacen)

            $table->boolean('activo')->default(true);
            $table->dateTime('fecha_creado');
            $table->dateTime('fecha_editado');

            $table->foreign('id_solicitud')
            ->references('id_solicitud')
            ->on('solicitudes_envios')
            ->onDelete('cascade')
            ->onUpdate('cascade');

        });

       /* Schema::table('trackings', function (Blueprint $table) {
            $table->foreign('id_tracking_padre')
                ->references('id_tracking')
                ->on('trackings')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trackings');
    }
};
