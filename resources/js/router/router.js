export const routes = [
	{
		name: 'Login',
		path: '/login',
		meta: { title: 'Iniciar sesión' },
		component: () => import(/* webpackChunkName: "Login" */ '../views/auth/Login.vue')
	},
	{
		name: 'Registro',
		path: '/crear-cuenta',
		meta: { title: 'Crear Cuenta' },
		component:  () => import(/* webpackChunkName: "Registro" */ '../views/auth/Registro.vue')
	},
	{
		name: 'RecoverPassword',
		path: '/forgout',
		meta: { title: 'Recuperar Cuenta' },
		component:  () => import(/* webpackChunkName: "RecoverPassword" */ '../views/auth/RecoverPassword.vue')
	},
	{
		name: 'ResetPassword',
		path: '/reset-password/:id',
		meta: { title: 'Nueva Contraseña' },
		component:  () => import(/* webpackChunkName: "ResetPassword" */ '../views/auth/ResetPassword.vue')
	},
	{
	
		name: 'IndexDashboard',
		path: '/',
		meta: { title: 'Inicio', requireAuth: true },
		id: 'cliente',
		component:  () => import(/* webpackChunkName: "Dashboard" */ '../views/client/Dashboard.vue'),
	},
	{
		name: 'CreatePrelaerta',
		path: '/crear-solicitud',
		meta: { title: 'Crear nueva solicitud', requireAuth: true },
		id: 'cliente',
		component:  () => import(/* webpackChunkName: "CreatePrelaerta" */ '../views/client/CreatePrelaerta.vue'),
	},
	{
		name: 'InfoPrelaerta',
		path: '/info-solicitud/:id',
		meta: { title: 'Información de solicitud', requireAuth: true },
		id: 'cliente',
		component:  () => import(/* webpackChunkName: "InfoPrealerta" */ '../views/client/InfoPrealerta.vue'),
	},
	{
		name: 'Envios',
		path: '/envios',
		meta: { title: '', requireAuth: true },
		id: 'cliente',
		component:  () => import(/* webpackChunkName: "Client" */ '../views/client/Client.vue'),
		children: [
			{
				name: 'IndexEnvios',
				path: 'all',
				meta: { title: 'Envíos', requireAuth: true },
				component:  () => import(/* webpackChunkName: "IndexEnvio" */ '../views/client/Envios/IndexEnvios.vue')
			},
			{
				name: 'ShowInvoice',
				path: 'show/:id',
				meta: { title: 'Ver Factura: ', requireAuth: true },
				component:  () => import(/* webpackChunkName: "ShowInvoice" */ '../views/client/Envios/ShowInvoice.vue'),
			},
		]
	},
	{
		name: 'UserClient',
		path: '/mi-cuenta',
		meta: { title: 'Mi Cuenta', requireAuth: true },
		id: 'cliente',
		component:  () => import(/* webpackChunkName: "UserClient" */ '../views/client/UserClient.vue')
	},
	//Pagina 404
	{ path: '/:pathMatch(.*)*', name: 'NotFound', meta: { title: 'Pagina No Encontrada' }, component: () => import(/* webpackChunkName: "Error404" */ '../components/Error404Component.vue') }
];