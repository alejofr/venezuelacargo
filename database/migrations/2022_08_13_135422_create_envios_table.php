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
        Schema::create('envios', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_envio');
            $table->uuid('id_factura');
            $table->text('historial_estado')->nullable();
            $table->uuid('estado')->default('FACTURADO'); //FACTURADO - ENVIADO-VENEZUELA - EN-TRANSITO-VENEZUELA - ADUENA-VENEZUELA - ALMACEN-VENEZUELA - ENVIADO-CLINTE - ENTREGADO
            $table->date('fecha_estimada')->nullable();
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
        Schema::dropIfExists('envios');
    }
};
