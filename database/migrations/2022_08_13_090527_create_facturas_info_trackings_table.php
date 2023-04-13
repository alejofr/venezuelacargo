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
        Schema::create('facturas_info_trackings', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_factura_tracking')->primary();
            $table->uuid('id_factura');
            $table->char('warehouse_padre', 36)->nullable();
            $table->char('warehouse', 36);
            $table->string('tracking', 120)->nullable();;
            $table->text('descripcion')->nullable();;
            $table->string('ancho', 10);
            $table->string('alto', 10);
            $table->string('largo', 10);
            $table->string('peso', 10);
            $table->string('num_piezas', 10);
            $table->string('volumen', 10);
            $table->string('pie_cubico', 10);
            $table->text('ruta_image')->nullable();;
            $table->uuid('reempaque')->default('no'); 
            $table->string('seguro', 10)->default('0.00');
            $table->string('total_seguro', 10)->default('0.00');
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
        Schema::dropIfExists('facturas_info_trackings');
    }
};
