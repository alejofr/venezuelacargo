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
        Schema::create('facturas', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_factura')->primary();
            $table->uuid('usuario_id');
            $table->char('nro_factura', 36)->unique();
            $table->char('nro_container', 36);
            $table->json('cliente');
            $table->json('pago');
            $table->char('gastos_extras', 36);
            $table->char('total_usd', 36);
            $table->char('total_ves', 36);
            $table->char('monto_tc', 36);
            $table->dateTime('fecha_tc');
            $table->uuid('estado')->default('Pendiente');
            $table->uuid('tipo_envio'); //Envio y Maritimo
            $table->char('tarifa_envio', 36);
            $table->uuid('reempaque')->default('no'); 
            $table->char('cost_reempaque', 36)->default('0.00');
            $table->char('cost_x_tracking', 36)->default('0.00');
            
            $table->boolean('activo')->default(true);
            $table->date('fecha_pago')->nullable();
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
        Schema::dropIfExists('facturas');
    }
};
