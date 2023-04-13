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
        Schema::create('facturas_info_extras', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_factura_extra');
            $table->uuid('id_factura');
            $table->json('detalles');
            $table->char('precio_unitario', 36)->default('0.00');
            $table->char('sub_total', 36)->default('0.00');

            $table->dateTime('fecha_creado');
            $table->dateTime('fecha_editado');

            $table->foreign('id_factura')
            ->references('id_factura')
            ->on('facturas')
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
        Schema::dropIfExists('facturas_info_extras');
    }
};
