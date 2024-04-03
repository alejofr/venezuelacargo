export const routesAdmin = [
	{
	
		name: 'UserAdmin',
		path: '/edit-user',
		meta: { title: 'Editar Usuario', requireAuth: true },
		component:  () => import(/* webpackChunkName: "UserAdmin" */ '../views/admin/UserAdmin.vue')
	},
	{
	
		name: 'IndexDashboard',
		path: '/',
		meta: { title: 'Escritorio', requireAuth: true },
		component:  () => import(/* webpackChunkName: "Escritorio" */ '../views/admin/Escritorio.vue')
	},
	{
		name: 'Clientes',
		path: '/clientes',
		meta: { title: 'Clientes', requireAuth: true },
		component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
		children: [
			{
				name: 'IndexClientes',
				path: 'all',
				meta: { title: 'Clientes', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Clientes" */ '../views/admin/clientes/Clientes.vue')
			},
			{
				name: 'CreateCliente',
				path: 'create',
				meta: { title: 'Crear un nuevo cliente', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Clientes" */ '../views/admin/clientes/ClientesForm.vue')
			},
			{
				name: 'EditCliente',
				path: 'edit/:id',
				meta: { title: 'Editar cliente', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Clientes" */ '../views/admin/clientes/ClientesForm.vue')
			},
		]
	},
	{
	
		name: 'Prealertas',
		path: '/prealertas',
		component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
		children: [
			{
				name: 'IndexPrealertas',
				path: 'all',
				meta: { title: 'Prealertas', requireAuth: true},
				component:  () => import(/* webpackChunkName: "PrealertasIndex" */ '../views/admin/prealertas/PrealertasIndex.vue')
			},
			{
				name: 'ProcesosPrealertas',
				path: 'solicitud/:id',
				meta: { title: 'Solicitud de Envio', requireAuth: true},
				component: () => import(/* webpackChunkName: "PreAlerta" */'../views/admin/prealertas/PreAlerta.vue')
			},
		]
	},
	{
	
		name: 'Almacen',
		path: '/almacen',
		component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
		children: [
			{
				name: 'IndexAlmacen',
				path: 'all',
				meta: { title: 'Almacen', requireAuth: true},
				component:  () => import(/* webpackChunkName: "Almacen" */ '../views/admin/almacenes/Almacen.vue')
			},
			{
				name: 'CreateAlmacen',
				path: 'create',
				meta: { title: 'Registrar Tracking', requireAuth: true},
				component:  () => import(/* webpackChunkName: "Create Almacen" */ '../views/admin/almacenes/CreateAlmacen.vue')
			},
			{
				name: 'InstructAlmacen',
				path: 'instruccion/:id',
				meta: { title: ': ', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Instruccion" */ '../views/admin/almacenes/Instruccion.vue'),
			},
			{
				name: 'EditarWarehose',
				path: 'editar-warehouse/:id',
				meta: { title: 'Editar WareHouse: ', requireAuth: true },
				component:  () => import(/* webpackChunkName: "EditarWarehouse" */ '../views/admin/almacenes/EditarWarehouse.vue'),
			}
		]
	},
	{
		name: 'Facturas',
		path: '/facturas',
		component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
		children: [
			{
				name: 'IndexFacturas',
				path: 'all',
				meta: { title: 'Facturacion', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Facturas" */ '../views/admin/facturas/Facturas.vue')
			},
			{
				name: 'CreateFacturas',
				path: 'crear-factura',
				meta: { title: 'Crear Nueva Factura', requireAuth: true },
				component:  () => import(/* webpackChunkName: "LayoutFormFacturar" */ '../views/admin/facturas/LayoutFormFacturar.vue')
			},
			{
				name: 'EditarFactura',
				path: 'editar',
				meta: { title: 'Editar Factura: ', requireAuth: true },
				component:  () => import(/* webpackChunkName: "LayoutFormFacturar" */ '../views/admin/facturas/LayoutFormFacturar.vue'),
			},
			{
				name: 'ShowFactura',
				path: 'show',
				meta: { title: 'Ver Factura: ', requireAuth: true },
				component:  () => import(/* webpackChunkName: "LayoutFormFacturar" */ '../views/admin/facturas/LayoutFormFacturar.vue'),
			},
			{
				name: 'CheckPagoFactura',
				path: 'check/:id',
				meta: { title: 'Comprobar Pago Factura: ', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Instruccion" */ '../views/admin/facturas/CheckPagoFactura.vue'),
			}
		]
	},
	{
		name: 'Envios',
		path: '/envios',
		component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
		children: [
			{
				name: 'IndexEnvios',
				path: 'all',
				meta: { title: 'Envíos', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Envios" */ '../views/admin/envios/Envios.vue')
			},
			{
				name: 'ChangeEstadoEnvio',
				path: 'change/:id',
				meta: { title: 'Cambiar el estado del envío', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Envios" */ '../views/admin/envios/ChangeEstadoEnvio.vue')
			},
		]
	},
	{
		name: 'Configuracion',
		path: '/configuracion',
		meta: { title: '', requireAuth: true },
		component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
		children: [
			{
				name: 'Geolocalizacion',
				path: 'geolocalizacion',
				meta: { title: '', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
				children: [
					{
						name: 'GeolocalizacionCrear',
						meta: { title: 'Crear Ubicación', requireAuth: true },
						path: 'crear',
						component: () => import(/* webpackChunkName: "AddGeolocalizacion" */ '../views/admin/configuracion/ubigeo/AddGeolocalizacion.vue')
					},
					{
						name: 'GeolocalizacionIndex',
						path: 'all',
						meta: { title: 'Geolocalización', requireAuth: true  },
						component: () => import(/* webpackChunkName: "IndexGeolocalizacion" */ '../views/admin/configuracion/ubigeo/Geolocalizacion.vue')
					},
					{
						name: 'GeolocalizacionEditar',
						meta: { title: 'Editar', requireAuth: true },
						path: 'editar/:id',
						component: () => import(/* webpackChunkName: "EditGeolocalizacion" */ '../views/admin/configuracion/ubigeo/EditGeolocalizacion.vue')
					}
				]
			},
			{
				name: 'TasasDestinos',
				path: 'tasas-destinos',
				meta: { title: '', requireAuth: true },
				component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
				children: [
					{
						name: 'TasasDestinosIndex',
						meta: { title: 'Tasas Por Destinos', requireAuth: true },
						path: 'all',
						component: () => import(/* webpackChunkName: "TasasDestino" */ '../views/admin/configuracion/tasasdestinos/TasasDestinos.vue')
					},
					{
						name: 'TasasDestinosCrear',
						meta: { title: 'Crear Tasa Por Destinos', requireAuth: true },
						path: 'crear',
						id: 'create',
						component: () => import(/* webpackChunkName: "FromsTasasDestino" */ '../views/admin/configuracion/tasasdestinos/FormsTasasDestino.vue')
					},
					{
						name: 'TasasDestinosEditar',
						meta: { title: 'Editar Tasa Destino', requireAuth: true },
						path: 'editar/:id',
						id: 'edit',
						component: () => import(/* webpackChunkName: "FromsTasasDestino" */ '../views/admin/configuracion/tasasdestinos/FormsTasasDestino.vue')
					}
				]
			},
			{
				name: 'MonedasCambios',
				path: 'monedas-cambios',
				component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
				children: [
					{
						name: 'MonedasCambiosIndex',
						meta: { title: 'Tasa del Dolar', requireAuth: true },
						path: 'all',
						component: () => import(/* webpackChunkName: "MonedasCambios" */ '../views/admin/configuracion/monedas/MonedasCambios.vue')
					},
					{
						name:'TasasCambiosIndex',
						path: 'tasas',
						meta: { title: 'Tazas de Cambios' },
						component: () => import(/* webpackChunkName: "Tasas de Cambios"*/  '../views/admin/configuracion/monedas/TasasCambios.vue')
					},
					{
						name:'TasasCambiosEditar',
						path: 'tasas/create/:id',
						meta: { title: 'Editar Tasa de Cambio - ' },
						component: () => import(/* webpackChunkName: "EditarTasasCambios"*/  '../views/admin/configuracion/monedas/TasasCambiosForm.vue')
					},
				]
			},
			{	//GastosExtrasForm
				name: 'GastosExtras',
				path: 'gastos-extras',
				component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
				children: [
					{
						name: 'GastosExtrasIndex',
						meta: { title: 'Gastos Extras', requireAuth: true },
						path: 'all',
						component: () => import(/* webpackChunkName: "GastosExtras" */ '../views/admin/configuracion/gastosextras/GastosExtras.vue')
					},
					{
						name: 'GastosExtrasCrear',
						meta: { title: 'Crear Un Nuevo Gasto Extra', requireAuth: true },
						path: 'crear',
						component: () => import(/* webpackChunkName: "GastosExtrasForm" */ '../views/admin/configuracion/gastosextras/GastosExtrasForm.vue')
					},
					{
						name: 'GastosExtrasEditar',
						meta: { title: 'Editar Gasto Extra', requireAuth: true },
						path: 'editar/:id',
						component: () => import(/* webpackChunkName: "GastosExtrasForm" */ '../views/admin/configuracion/gastosextras/GastosExtrasForm.vue')
					}
				]
			},
			{
				name: 'EmpresasTransportes',
				path: 'empresas-transportes',
				component:  () => import(/* webpackChunkName: "Admin" */ '../views/admin/Admin.vue'),
				children: [
					{
						name: 'EmpresasTransportesIndex',
						meta: { title: 'Empresas Transportes', requireAuth: true  },
						path: 'all',
						component: () => import(/* webpackChunkName: "EmpresasTransportesIndex" */ '../views/admin/configuracion/empresas/EmpresasTransportes.vue')
					},
					{
						name: 'EmpresasTransportesCrear',
						meta: { title: 'Crear una nueva empresa de transporte', requireAuth: true },
						path: 'crear',
						component: () => import(/* webpackChunkName: "EmpresasTransportesForm" */ '../views/admin/configuracion/empresas/EmpresasTransportesForm.vue')
					},
					{
					  name: 'EmpresasTransportesEditar',
					  meta: { title: 'Editar', requireAuth: true },
					  path: 'editar/:id',
					  component: () => import(/* webpackChunkName: "EmpresasTransportesForm" */ '../views/admin/configuracion/empresas/EmpresasTransportesForm.vue')
					}
				]
			},
			{
				name: 'AddBannerApp',
				path: 'banner-app',
				meta: { title: 'Banner App', requireAuth: true },
				component:  () => import(/* webpackChunkName: "BannerApp" */ '../views/admin/configuracion/BannerApp.vue')
			}
		]
	}
	
	
];