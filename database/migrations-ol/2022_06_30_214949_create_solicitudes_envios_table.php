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
        Schema::create('solicitudes_envios', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_solicitud')->primary();
            $table->uuid('usuario_id');
            $table->integer('cod_solicitud')->default(1);
            $table->uuid('id_empresa_transporte');
            $table->date('fecha_llegada');
            $table->uuid('estado')->default('pendiente'); //Pendiente (No ha LLegado), Almacen (LLego al Almacen) Entregado
            $table->text('ruta_pdf')->nullable();

            $table->boolean('activo')->default(true);
            $table->dateTime('fecha_creado');
            $table->dateTime('fecha_editado');

            $table->foreign('usuario_id')
            ->references('usuario_id')
            ->on('usuarios')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        
            $table->foreign('id_empresa_transporte')
                ->references('id_empresa_transporte')
                ->on('empresas_transportes')
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
        Schema::dropIfExists('solicitudes_envios');
    }
};
