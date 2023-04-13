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
        Schema::create('almacenes', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';
            
            $table->uuid('id_almacen')->primary();
            $table->uuid('id_solicitud');
            $table->integer('warehouse');
            $table->uuid('estado')->default('MIAMI'); // MIAMI, Enviado a Venezuela, GUATIRE VENEZUELA, Despachado
            
            $table->uuid('tipo_envio')->nullable(); //Envio y Maritimo
            $table->boolean('status')->default(false);

            $table->boolean('activo')->default(true);
            $table->dateTime('fecha_creado');
            $table->dateTime('fecha_editado');

            $table->foreign('id_solicitud')
            ->references('id_solicitud')
            ->on('solicitudes_envios')
            ->onDelete('cascade')
            ->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('almacenes');
    }
};
