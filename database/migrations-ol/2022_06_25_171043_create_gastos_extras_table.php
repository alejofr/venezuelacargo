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
        Schema::create('gastos_extras', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_gasto_extra')->primary();
            $table->string('nombre', 120);
            $table->char('tipo', 120);//TRACKING/CAJA/REEMPAQUE
            $table->char('monto_gasto_extra', 60);
            $table->char('accion', 120)->default('POR-DEFECTO');//POR-DEFECTO/MANUAL
            $table->boolean('condicion')->default(false);
            //si condicion es true
            $table->char('variable_cond')->nullable();//TRACKING/WAREHOUSE
            $table->char('tipo_cond')->nullable();//MAYOR/MENOR
            $table->string('cant_cond', 10)->nullable();
            $table->string('monto_cond', 60)->nullable();

            $table->boolean('activo')->default(true);
            $table->dateTime('fecha_creado');
            $table->dateTime('fecha_editado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gastos_extras');
    }
};
