window.Vue = require('vue').default;
import VueRouter from 'vue-router';
import App from './App.vue';
import VeeValidate, { Validator } from "vee-validate";
import es from 'vee-validate/dist/locale/es'
import Validate from "./validation"
import axios from 'axios'
import VueAxios from 'vue-axios';
import Vue from 'vue'

import { routes } from './router/router'; //rutas principales
import { routesAdmin } from './router/admin'; //rutas secundarias
import store  from './store';

import vTitle from 'vuejs-title'
Vue.use(vTitle)

Vue.use(VeeValidate, {
    classes: true,
	classNames: {
		valid: "is-valid",
		invalid: "is-invalid",
	},
    mode: 'passive',
    events: '',
    useConstraintAttrs: false
});
VeeValidate.setMode('passive');

Validator.localize('es', es);
Validator.localize('es', Validate);

Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.MIX_APP_API_URL;

if ( store.getters['auth/getUserLogged'] ){
    if ( !store.getters['auth/getUserStatus'] ){
        store.dispatch('auth/update_status', true);
    }
        
    axios.interceptors.request.use(function (config) {
        //console.log(config); 
        if( store.getters['auth/getUserRol'] === 'client'){
            const { usuario_id } = store.getters['auth/getUser'];
            if( config.method == 'get' ){
                if( !config.hasOwnProperty('params') ) config.params = {};
                config.params['usuario_id'] = usuario_id;
            }

            if( config.method == 'post' || config.method == 'put'){
                config.data['usuario_id'] = usuario_id;
            }
            
        }

        if ( store.getters['auth/getUserStatus'] ){
            let headers = {
               'Authorization' : "Bearer "+store.getters['auth/getToken'],
            };
            config['headers'] = headers;
        }

        return config;
    });
}


Vue.use(VueRouter);
//const { isNavigationFailure, NavigationFailureType } = VueRouter
const init = async () => {
    const router = new VueRouter({
        mode: 'history',
        routes: ( store.getters['auth/getUserStatus'] ) ? await axios.get('user').then(response => {
            const rutas = [];
            store.dispatch('auth/role_permissions', response.data)
            store.dispatch('auth/user', response.data.user)

            if( store.getters['auth/getUserRol'] != '' &&  store.getters['auth/getUserRol'] != 'client'){
                let notFound;
                for (let i = 0; i < routes.length; i++) {
                    if ( routes[i].id != 'cliente' &&  routes[i].name != 'NotFound')
                        rutas.push(routes[i]); //Guardamos la ruta declaradas en routes/router, la que no tenga como id: "cliente"
                    else if( routes[i].name == 'NotFound' )
                        notFound = routes[i];
                }
            
                let permiso_user = store.getters['auth/getUserPermissions'];
                //recorremos los permisos del usuario
                for (let i = 0; i < permiso_user.length; i++) {
                    //recorremos las rutas del admin
                    for (let j = 0; j < routesAdmin.length; j++) {
                        if( permiso_user[i] == '*' )
                            rutas.push(routesAdmin[j]); //Guardamos la ruta declaradas en routes/admin, solo lo que tenga permisos
                    }
                }

                rutas.push(notFound);
            }

            return ( rutas.length != 0 ) ? rutas : routes;
        }).catch((err) => {
            console.error(err)
            store.dispatch('auth/logout')
            return [];
        }) : routes
    });

    router.beforeEach((to, from, next) => {
        store.dispatch('online/checkOnline');
        
        
            document.title = process.env.MIX_APP_NAME +' - '+ to.meta.title;

            if(to.meta.requireAuth){
                if (store.getters['auth/getUserStatus']) {

                   // if( store.state.online.status){//si hay internet

                        const requestStoreTable =  { ...store.getters['tableadmin/getRequest'] };
                      
                        if ( requestStoreTable.url != '' && Object.keys(requestStoreTable.params).length != 0 && Object.keys(to.query).length != 0 ){
                            let query = to.query;
                        
                            if( query.hasOwnProperty('page') ){
                                requestStoreTable.params.page = parseInt(query.page)
                                delete query.page
                            }else{
                                requestStoreTable.params.page = 1
                            }

                            let aux = {}
                            for (const key in query) {
                                if( key != 'token' ){
                                    aux[key] = query[key];
                                }
                            }

                            query = aux;
                
                            requestStoreTable.params.query = query;
                            store.dispatch('tableadmin/initTable', requestStoreTable);
                        }else if( Object.keys(to.query).length === 0 ){
                            if( requestStoreTable.url != '' && Object.keys(requestStoreTable.params).length != 0 ){
                                /*if( to.name == requestStoreTable.name ){
                                    store.dispatch('tableadmin/updateParamsTable');
                                }else{
                                    store.dispatch('tableadmin/resetTable');
                                }*/
                                store.dispatch('tableadmin/resetTable');
                            }
                                
                            //console.log('requestStoreTable', store.getters['tableadmin/getRequest'])
                        }

                        next();
                    //}
                }else{
                    next({ name: 'Login' })
                }
            }else{
                next();
            }
        
    });

    const app = new Vue({
        el: '#app',
        router: router,
        store: store,
        render: h => h(App),
    })
}

//inicializamos la app
init()
