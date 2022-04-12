/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import { defineAsyncComponent } from "vue";

import App from './App.vue';
import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from "vee-validate";
Vue.use(VeeValidate);



import VueRouter from 'vue-router';
import { routes } from './router/routes';

const dir = {
	attributes: {
		email: 'Correo',
		password:  'Contraseña',
		username: 'Nombre de Usuario'
	},
	messages: {
		alpha_num: 'Los Valores aceptados para el campo, son solo Letras y Numeros'
	}
	
  };

// Indicar uso de idioma español
Validator.localize("es", es); 
Validator.localize('es', dir);

 Vue.use(VueRouter);

 Vue.use(VeeValidate, {
    classes: true,
	classNames: {
		valid: "is-valid",
		invalid: "is-invalid",
	},
    events: 'change|blur|keyup',
 });
 
 //Vue.use(validate);
 //Vue.use(VueAxios, axios);

 Vue.prototype.$appUrl = process.env.MIX_APP_URL;


 const router = new VueRouter({
     mode: 'history',
     routes: routes
 });
 
 const app = new Vue({
     el: '#app',
     router: router,
     render: h => h(App),
 });