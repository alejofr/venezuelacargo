# Informe Técnico del Proyecto: VenezuelaCargo

## 1. Introducción
Este documento presenta el análisis técnico y lógico del proyecto **VenezuelaCargo**. El sistema es una aplicación web construida sobre el framework **Laravel** (versión 9.2), diseñada para la gestión logística de envíos, incluyendo funcionalidades para administradores y clientes. La arquitectura combina una API RESTful robusta para el manejo de datos y lógica de negocio, sirviendo a una interfaz de usuario integrada.

## 2. Arquitectura del Proyecto
El proyecto sigue el patrón de diseño **MVC (Modelo-Vista-Controlador)** característico de Laravel, estructurado de la siguiente manera:

*   **Framework**: Laravel 9.2 (Backend y API).
*   **Gestión de Dependencias**: Composer (`composer.json` incluye librerías clave como `laravel/passport` para autenticación OAuth2 y `barryvdh/laravel-dompdf` para generación de facturas PDF).
*   **Base de Datos**: ORM Eloquent para interacción con la base de datos (evidenciado por los Modelos y Migraciones).
*   **Seguridad**: Implementación de `spatie/laravel-permission` para manejo de Roles y Permisos (Admin vs Cliente).

## 3. Estructura de Directorios Clave
*   **`app/Http/Controllers`**: Contiene la lógica principal dividida en módulos:
    *   **`Admin/`**: Lógica para el panel administrativo (Gestión de almacenes, facturas, usuarios).
    *   **`Client/`**: Lógica para el portal del cliente (Solicitudes de envío, seguimiento, pagos).
    *   **`Auth/`**: Controladores para autenticación y registro de usuarios (`ApiAuthController`).
    *   **`Configuracion/`**: Ajustes del sistema como tasas de cambio, geolocalización y tarifas.
*   **`database/`**: Definiciones de estructura de datos (migraciones) y datos semilla.
*   **`routes/`**: Definición de los puntos de entrada de la aplicación (`web.php` y `api.php`).

## 4. Análisis de Lógica y Rutas

### 4.1. Rutas Web (`routes/web.php`)
El archivo `routes/web.php` define un punto de entrada principal para una aplicación de una sola página (SPA) o híbrida.
*   **Ruta `/{any}`**: Captura cualquier ruta no definida y retorna la vista `layouts.app`. Esto indica que el enrutamiento visual probablemente es manejado por el frontend (posiblemente Vue.js o React dentro de las vistas Blade), delegando la carga de datos a la API.

### 4.2. Rutas API (`routes/api.php`)
Este es el núcleo lógico del sistema. Las rutas están protegidas y organizadas por funcionalidad.

#### **A. Autenticación y Acceso Público**
*   **POST `/login`**: Inicia sesión mediante `ApiAuthController@login`.
*   **POST `user/crear-cuenta`**: Registro de nuevos usuarios clientes.
*   **GET `estados`, `ubigeos`**: Obtiene datos geográficos para formularios de registro y envío.
*   **Recuperación de Contraseña**: Endpoints para solicitar (`user/forgout_password`) y validar tokens de recuperación.

#### **B. Módulo Administrativo (Middleware `validAdmin`)**
Estas rutas requieren autenticación y permisos de administrador.
*   **Usuarios (`/usuarios`)**: Gestión CRUD de usuarios del sistema.
*   **Configuración**:
    *   **`tasas-destinos`**: Tarifas de envío por destino.
    *   **`monedas-cambios`**: Gestión de tasas de cambio de divisas (USD/VES).
    *   **`almacenes`**: Gestión central de la lógica logística. `Admin\AlmacenesController`.
        *   Permite crear recepciones, procesar instrucciones de envío y gestionar paquetes en almacén.
    *   **`facturas` (`Admin\FacturasController`)**:
        *   Generación, análisis e impresión de facturas.
        *   Validación de pagos (`pago-factura/{id}`).
        *   Análisis de métricas: pies cúbicos, volumen y libras enviadas.
*   **Envíos (`/envios`)**: Control de salía de mercancía (`Admin\EnviosController`).
*   **Prealertas (`/prealertas`)**: Gestión de avisos de paquetes recibidos (`Admin\SolicitudesEnviosController`).

#### **C. Módulo Cliente (Middleware `validClient`)**
Rutas exclusivas para que los clientes gestionen sus cargas.
*   **Solicitudes (`/solicitudes`)**: Los clientes crean "prealertas" o solicitudes de envío (`Client\PrealertasController`).
*   **Almacén (`/almacen`)**: Visualización de paquetes recibidos en su casillero.
*   **Envíos (`/shipments`)**:
    *   Listado de envíos en curso e históricos.
    *   **Pagos (`save-pago`)**: Registro de pagos para sus envíos.
    *   **Rastreo (`/rastreo`)**: Seguimiento del estatus de la carga.

#### **D. Utilidades y Facturación**
*   **`invoice/print`**: Generación de facturas en PDF u otro formato imprimible (`Client\ShipmentsController`).
*   **Calculadora (`/calculadora`)**: Permite estimar costos de envío basado en configuraciones.
*   **Métodos de Pago (`/methods-payments`)**: Retorna JSON con cuentas bancarias activas (Banca Amiga, Zelle, Binance, etc.) para que el cliente realice pagos.

## 5. Descripción de la Lógica de Negocio Detectada
El flujo lógico principal del negocio parece ser:
1.  **Registro/Login**: El cliente se registra y obtiene acceso.
2.  **Prealerta**: El cliente notifica que un paquete llegará al almacén (`Solicitudes`).
3.  **Recepción (Almacén)**: El administrador recibe el paquete y lo carga en el sistema (`AlmacenesController`).
4.  **Procesamiento**: Se calculan costos basados en peso/volumen y tarifas configuradas (`TasasDestinos`).
5.  **Facturación**: Se genera una factura (`FacturasController`).
6.  **Pago**: El cliente registra su pago (`methods-payments`, `save-pago`).
7.  **Despacho**: El administrador valida el pago y autoriza el envío (`envios`).
8.  **Seguimiento**: El cliente rastrea su paquete hasta la entrega final (`rastreo`).

## 6. Conclusión
El proyecto **VenezuelaCargo** cuenta con una estructura backend sólida y bien organizada mediante módulos claros (Admin/Client). Utiliza estándares modernos de Laravel para seguridad (Middlewares), manejo de datos (Eloquent) y estructura de API REST. La lógica de negocio cubre el ciclo completo de logística de courier: desde la recepción y alerta del paquete, hasta su facturación, pago y entrega.
