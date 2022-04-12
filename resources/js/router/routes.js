
//Carga Diferida de Componentes
function lazyLoad(view){
	return() => import(`../pages/${view}.vue`)
}

export const routes = [
	{
		name: 'Login',
		path: '/login',
		meta: { title: 'Iniciar sesión' },
		component: lazyLoad('auth/Login')
	},
	{
		name: 'Registro',
		path: '/crear-cuenta',
		meta: { title: 'Crear Cuenta' },
		component: lazyLoad('auth/Registro')
	}
];