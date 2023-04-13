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
        Schema::create('usuarios_info', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_usuario_info')->primary();
            $table->uuid('usuario_id');
            $table->uuid('id_estado');
            $table->uuid('id_ubigeo')->nullable();
            $table->char('cod_usuario', 36)->nullable();
            $table->string('nombres', 80);
            $table->string('apellidos', 80);
            $table->string('telefono', 20);
            $table->integer('cedula');
            $table->string('direccion', 180);
            $table->string('ref_direccion', 180)->nullable();
            $table->boolean('activo')->default(true);
            $table->dateTime('fecha_creado');
            $table->dateTime('fecha_editado');

            $table->foreign('usuario_id')
                ->references('usuario_id')
                ->on('usuarios')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('id_estado')
                ->references('id_estado')
                ->on('geo_estados')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('id_ubigeo')
                ->references('id_ubigeo')
                ->on('geo_ubigeo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios_info');
    }
};
