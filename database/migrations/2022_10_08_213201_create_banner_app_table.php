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
        Schema::create('banner_app', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->uuid('id_banner');
            $table->uuid('estado')->default('no-visible'); // 'no-visible - visible
            $table->boolean('activo')->default(true);
            $table->text('ruta_image');
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
        Schema::dropIfExists('banner_app');
    }
};
