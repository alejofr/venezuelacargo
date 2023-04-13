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
        Schema::create('config_tasas_destinos_estados', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_tasa_destino_estado')->primary();
            $table->uuid('id_tasa_destino');
            $table->uuid('id_estado');
            
            $table->boolean('activo')->default(true);
            $table->dateTime('fecha_creado');
            $table->dateTime('fecha_editado');
            
            $table->foreign('id_estado')
                ->references('id_estado')
                ->on('geo_estados')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('id_tasa_destino')
                ->references('id_tasa_destino')
                ->on('config_tasas_destinos')
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
        Schema::dropIfExists('config_tasas_destinos_estados');
    }
};
