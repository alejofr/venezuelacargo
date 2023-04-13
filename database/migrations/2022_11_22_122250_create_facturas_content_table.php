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
        Schema::create('facturas_content', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_factura_content')->primary();
            $table->uuid('id_factura');
            $table->uuid('id_factura_tracking')->nullable();

            $table->string('volumen', 10)->nullable();
            $table->string('pie_cubico', 10)->nullable();
            $table->string('total_lb', 10)->nullable();
            $table->string('peso', 10)->nullable();
            $table->string('cost_env', 10)->default('0.00');
            $table->string('seguro', 10)->default('0.00');
            $table->char('sub_total', 36)->default('0.00');

            $table->dateTime('fecha_creado');
            $table->dateTime('fecha_editado');

            $table->foreign('id_factura')
            ->references('id_factura')
            ->on('facturas')
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->foreign('id_factura_tracking')
            ->references('id_factura_tracking')
            ->on('facturas_info_trackings')
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
        Schema::dropIfExists('facturas_content');
    }
};
