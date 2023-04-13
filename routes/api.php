<?php

use Illuminate\Support\Facades\Route;


//Login Auntentificacion
Route::post('/login', 'App\Http\Controllers\Auth\ApiAuthController@login');
Route::post('user/crear-cuenta', 'App\Http\Controllers\Auth\ApiAuthController@register');

//get estados all
Route::get('estados', 'App\Http\Controllers\Admin\Configuracion\GeolocalizacionController@get_estados');

//get_ubigeo
Route::get('ubigeos', 'App\Http\Controllers\Admin\Configuracion\GeolocalizacionController@get_ubigeo');

//enviar token para recuperar contraseña
Route::post('user/forgout_password', 'App\Http\Controllers\Auth\ApiAuthController@forgout_password');

Route::post('user/forgout/validate-token', 'App\Http\Controllers\Auth\ApiAuthController@forgout_password_verify_token');

Route::post('user/change_password_user', 'App\Http\Controllers\Auth\ApiAuthController@change_password_user');

Route::post('users-old', 'App\Http\Controllers\Admin\UsersOldController@store');


        
Route::middleware('auth:api')->group(function() { 

        

        //cerrar session usuario
        Route::delete('logout', 'App\Http\Controllers\Auth\ApiAuthController@logout');

        //obtener rol y permisos
        Route::get('user', 'App\Http\Controllers\Auth\ApiAuthController@getRolePermission');

        //ruta tasas destinos
        Route::get('calculadora', 'App\Http\Controllers\Admin\Configuracion\TasasDestinosController@calculadora');

        
        //Banner App
        Route::resource('banner-app', App\Http\Controllers\Admin\BannerAppController::class);
        

        //Imprimir factura o descargar 
        Route::get('print-invoice/{id}', 'App\Http\Controllers\Admin\FacturasController@print_invoice');


        /**
         * Ruta Admin
         * 
         */

       

        Route::middleware('validAdmin')->group(function() { 
                //get user
                Route::get('edit-user', 'App\Http\Controllers\Auth\ApiAuthController@edit');
                Route::put('user/admin/{id}', 'App\Http\Controllers\Auth\ApiAuthController@update_admin');

                //obtener informacion de usuarios
                Route::resource('usuarios',  App\Http\Controllers\UsuariosInfoController::class);
                
                //tasas cambios
                Route::get('tasas-cambios', 'App\Http\Controllers\Admin\Configuracion\MonedasCambiosTasasController@index');
        
                //ruta geolocalizacion
                Route::resource('geolocalizacion', App\Http\Controllers\Admin\Configuracion\GeolocalizacionController::class);
                //get estados all
                Route::get('estados-usuarios', 'App\Http\Controllers\Admin\Configuracion\GeolocalizacionController@state');
                //get_ubigeo
                //Route::get('ubigeos', 'App\Http\Controllers\Admin\Configuracion\GeolocalizacionController@get_ubigeo');
        
                //ruta tasas destinos
                Route::resource('tasas-destinos', App\Http\Controllers\Admin\Configuracion\TasasDestinosController::class);

                //obtener tipo de cambio
                Route::resource('monedas-cambios', App\Http\Controllers\Admin\Configuracion\MonedasCambiosController::class);
        
                //actualizar tasa de cambio
                Route::put('tasas-cambios/{cambio}', 'App\Http\Controllers\Admin\Configuracion\MonedasCambiosTasasController@update');
        
                //ruta gastos extras
                Route::resource('gastos-extras', App\Http\Controllers\Admin\Configuracion\GastosExtrasController::class); 
                
                //ruta empresas transportes
                Route::resource('empresas-transportes', App\Http\Controllers\Admin\Configuracion\EmpresasTransportesController::class);
                Route::get('transportes/all', 'App\Http\Controllers\Admin\Configuracion\EmpresasTransportesController@all');
        
                //ruta solicitudes de envios o preoalertas
                Route::resource('prealertas', App\Http\Controllers\Admin\SolicitudesEnviosController::class);
                Route::get('prealertas-analyze', 'App\Http\Controllers\Admin\SolicitudesEnviosController@analyze');
                Route::get('prealertas-pendientes', 'App\Http\Controllers\Admin\SolicitudesEnviosController@state');
           
                Route::post('store-trackings/{id}', 'App\Http\Controllers\Admin\TrackingsController@store_info_trackings');
                
                //almacen
                Route::resource('almacenes', App\Http\Controllers\Admin\AlmacenesController::class);
                Route::post('almacenes-actualizar', 'App\Http\Controllers\Admin\AlmacenesController@update_prealerta');
                Route::post('almacenes-crear', 'App\Http\Controllers\Admin\AlmacenesController@create');
                Route::post('almacen/instrucciones', 'App\Http\Controllers\Admin\AlmacenesController@storeAlmacenForInstruction');
                Route::get('almacen/paquetes/data', 'App\Http\Controllers\Admin\AlmacenesController@getDatosForInvoice');
                Route::get('warehouse-pendientes', 'App\Http\Controllers\Admin\AlmacenesController@state');
        
                //facturas
                Route::resource('facturas', App\Http\Controllers\Admin\FacturasController::class);
                Route::get('facturas-analyze', 'App\Http\Controllers\Admin\FacturasController@analyze');
                Route::get('facturas-pendientes', 'App\Http\Controllers\Admin\FacturasController@state');
                Route::put('pago-factura/{id}', 'App\Http\Controllers\Admin\FacturasController@pagoVerificado');
                Route::put('no-pago-factura/{id}', 'App\Http\Controllers\Admin\FacturasController@pagoNoVerificado');
                Route::post('save-invoice-reempaque', 'App\Http\Controllers\Admin\FacturasController@store_reempaque');
                Route::post('save-invoice-directo', 'App\Http\Controllers\Admin\FacturasController@store_directo');
                Route::post('send-factura/{id}', 'App\Http\Controllers\Admin\FacturasController@send_invoice');
        
                //envios
                Route::resource('envios', App\Http\Controllers\Admin\EnviosController::class);
                Route::get('envios-analyze', 'App\Http\Controllers\Admin\EnviosController@analyze');
        
                //clientes
                Route::resource('clientes', App\Http\Controllers\Admin\ClientesController::class);
                Route::get('clientes-analyze', 'App\Http\Controllers\Admin\ClientesController@analyze');
                Route::get('clientes-sincodigos', 'App\Http\Controllers\Admin\ClientesController@state');

        });
       

        


        /**
         * Ruta Client
         * Para la peticiones a todas la rutas clientes, debe enviar como parametro siempre el usuario_id del cliente.
         */

        Route::middleware('validClient')->group(function() { 
                Route::get('transport-companies', 'App\Http\Controllers\Client\TransportesController@index');

                Route::resource('solicitudes', App\Http\Controllers\Client\PrealertasController::class);
                Route::post('solicitudes-instruccion/{id}', 'App\Http\Controllers\Client\PrealertasController@save_instruccion');

                Route::get('shipments', 'App\Http\Controllers\Client\ShipmentsController@index');
                Route::post('save-pago', 'App\Http\Controllers\Client\ShipmentsController@savePago');
                
                Route::get('shipments/{id}', 'App\Http\Controllers\Client\ShipmentsController@show');
                //obtener tipo de cambio
                Route::get('tasas-monedas', 'App\Http\Controllers\Admin\Configuracion\MonedasCambiosController@getTasa');

                Route::get('edit-user/client', 'App\Http\Controllers\Auth\ApiAuthController@editClient');
                Route::put('user/client/{id}', 'App\Http\Controllers\Auth\ApiAuthController@updateClient');
        });
       
});

