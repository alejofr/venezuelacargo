<template>
<div class="w-100 page-vzlc img-size-0 reg" style="background-color: #24298D;">
    <div class="container h-100" >
        <div class="auth-page">
            <component :is='activeComponent' v-bind:alert="alert"></component>
            <div class="forn_auth re">
                <div v-show="loader" class="div-loader_white"><loader></loader></div>
                <div class="img"><img src="/images/venezuela-cargo-logo.svg" alt="" srcset=""></div>
                  <div class="form-group d-md-flex" style="justify-content: center;margin-bottom: 10px;">
                    <p class="fs-14 mt-2">¿Ya estás registado?  <router-link :to="{name: 'Login'}" class="cl0 fw-bold fs-14 py-0 px-0" >Iniciar sesión</router-link></p>
                </div>
                <form-wizard @on-complete="onComplete" :errorColor="'#24298D'" finish-button-text="Crear Cuenta" back-button-text="Anterior" next-button-text="Continuar" :color="'#24298D'" :title="''" :subtitle="''" :stepSize="'sm'" >
                    <tab-content title="Datos personales" :before-change="nextPersonales" >
                        <div class="form-group mb-3">
                            <input type="text" v-model="user.nombres" name="nombre_completo" placeholder="Nombre Completo"  class="form-control _input_style-0">
                        </div>
                        <div class="form-group mb-3">
                            <input type="text" v-model="user.apellidos" name="apellido_completo" placeholder="Apellido Completo"  class="form-control _input_style-0">
                        </div>
                        <div class="form-group mb-3">
                            <input type="text" v-model="user.cedula" name="cedula" placeholder="Cédula"  class="form-control _input_style-0 " pattern="[0-9]+">
                        </div>
                        <div class="form-group mb-3">
                            <input type="text" v-model="user.telefono" name="telefono" placeholder="Teléfono"  class="form-control _input_style-0" pattern="[0-9]+">
                        </div>
                    </tab-content>
                    <tab-content title="Estado y dirección" :before-change="nextDireccion">
                        <div class="form-floating mb-3">
                            <input type="text"   class="form-control dropdown-toggle" data-bs-toggle="dropdown" v-model="ubicacion" value="" id="ubicacion" name="ubicacion" @keyup="inputSearch($event)" aria-expanded="false" />
                            <label for="ubicacion">Buscar por estado, ciudad o codigo postal</label>
                            <ul class="dropdown-menu input-result-search" id="ubicacion" style="max-height: 220px;overflow: overlay;">
                                <li v-if="datos.length == 0">No se encontraron resultados</li>
                                <li v-for="(data, index) in datos" :key="index">
                                    <label class="form-check" :for="index">
                                        <input type="radio"  class="form-check-input" :value="data.id_ubigeo"  :id="index" @click="clickRadioCheck($event)">
                                        <span class="form-check-label">{{data.zona}} -  {{data.codigo_postal}}</span>  
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="form-group mb-3">
                            <input type="text" v-model="user.direccion" name="direccion" placeholder="Dirección"  class="form-control _input_style-0">
                        </div>
                        <div class="form-group mb-3">
                            <input type="text" v-model="user.ref_direccion" name="ref_direccion" placeholder="Referencia de Dirección (opcional)"  class="form-control _input_style-0">
                        </div>
                    </tab-content>
                    <tab-content title="Información adicional">
                        <div class="form-group mb-3">
                            <input type="text" v-model="user.nombre_usuario" name="nombre_usuario" placeholder="Nombre de Usuario"  class="form-control _input_style-0">
                        </div>
                        <div class="form-group mb-3">
                            <input type="email" v-model="user.email" name="email" placeholder="Correo Electrónico"  class="form-control _input_style-0">
                        </div>
                            <div class="form-group mb-3 position-relative">
                                <input :type="typePass" v-model="user.password" name="password" placeholder="Contraseña"  class="form-control _input_style-0" >
                                <button type="button" @click="viewHidePass" class="button button-secondary wp-hide-pw hide-if-no-js"><i :class="pass"></i></button>
                            </div>
                    </tab-content>
                </form-wizard>
            </div>
        </div>
    </div>
    <!--<router-link :to="{name: 'Login'}" >Regístrate Aquí</router-link>-->
</div>
</template>
<script>
import {FormWizard, TabContent} from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
const LoaderComponent = () => import('../../components/LoaderComponent.vue');
export default {
    name: 'Login',
    data( ){
        return {
            datos: [],
            ubicacion: '',
            pass: 'ti ti-eye',
            typePass: 'password',
            user: {
                nombres: '',
                apellidos: '',
                cedula: '',
                telefono: '',
                id_estado: '',
                id_ubigeo: '',
                direccion: '',
                ref_direccion: '',
                nombre_usuario: '', 
                email: '',
                password: ''
            },
            loader: true,
            showAlert: false,
            alert: {
                msg: '',
                clss: '' 
            },
            activeComponent: '',
        }
    },
     beforeCreate() {
        if( this.$store.getters['auth/getUserStatus'] == true ){
            this.$router.go(-1);
        }
        this.$nextTick(async function () {
            setTimeout(() => {
                this.loader = false;
            }, 2000);
        })
    },
    components: {
        alert: () => import(/* webpackChunkName: "AlertMessageComponent" */'../../components/AlertMessageComponent.vue'),
        loader: LoaderComponent,
        FormWizard,
        TabContent
    },
    methods: {
        onComplete() {
            let valoresAceptados = /^[0-9]+$/;
            if( this.user.nombres == '' || this.user.apellidos == '' || this.user.telefono == '' || this.user.cedula == ''){
                this.respAlert(422, 'Debe completar todos los campos para continuar');
                return false;
            }
            if( this.user.nombres.length > 80 || this.user.apellidos.length > 80 ){
                this.respAlert(422, 'Los Campos Nombre y Apellido no debe ser mas de 80 caracteres');
                return false;
            }

            if( !this.user.cedula.match(valoresAceptados) || this.user.cedula.length > 8 ){
                this.respAlert(422, 'El Campo Cédula debe ser numerico y no mayor a 8 numeros');
                return false;
            }

            if( !this.user.telefono.match(valoresAceptados) || this.user.telefono.length > 11 ){
                this.respAlert(422, 'El Campo Teléfono debe ser numerico y no mayor a 11 numeros');
                return false;
            }

            if( this.user.id_estado == '' || this.user.id_ubigeo == ''){
                this.respAlert(422, 'Debe selecionar una ubicacion, en los resultados de búsqueda');
                return false;
            }

            if( this.user.direccion == '' || this.user.direccion.length > 180 ){
                this.respAlert(422, 'Debe completar el campo Dirección, y el campo no debe ser mayor a 180 caracteres');
                return false;
            }

            if( this.user.ref_direccion != '' && this.user.ref_direccion.length > 180 ){
                this.respAlert(422, 'Ell campo Referencia de Dirección, no debe ser mayor a 180 caracteres');
                return false;
            }

            if( this.user.ref_direccion != '' && this.user.ref_direccion.length > 180 ){
                this.respAlert(422, 'Ell campo Referencia de Dirección, no debe ser mayor a 180 caracteres');
                return false;
            }

            if( this.user.email == '' || this.user.nombre_usuario == '' || this.user.password == '' ){
                this.respAlert(422, 'Debe completar todos los campos para registrarte');
                return false;
            }
            let validoEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if( !validoEmail.test(this.user.email) ){
                this.respAlert(422, 'El campo Correo Electrónico debe ser una direccion de correo válida');
                return false;
            }
            let noValido = /\s/;

            if( noValido.test(this.user.nombre_usuario) || this.user.nombre_usuario.length > 15){
                this.respAlert(422, 'El campo Nombre Usuario no puede contener espacios en blanco, y debe contener más de 15 caracteres');
                return false;
            }

            if( noValido.test(this.user.password) || this.user.password.length > 15){
                this.respAlert(422, 'El campo contraseña no puede contener espacios en blanco, y debe contener más de 15 caracteres');
                return false;
            }

            const resp = (resp) => {
                setTimeout(() => {
                    this.loader = false;
                    this.respAlert(resp.status, resp.message);
                }, 2000);
            }

            this.loader = true;
            this.axios.post('user/crear-cuenta', this.user).then(response => {
                console.log(response.data)
                resp({
                    status: 200,
                    message: '¡Cuenta Creada!'
                });

                setTimeout(() => {
                    this.$router.go(-1)
                }, 4000)
            }).catch(error => {
                console.log(error.response)
                console.log(error.response.data)
                let status = error.response.status;
                let message = error.response.data.message;

                if( status == 500 ){
                    message = 'Error inesperado. por favor intentar más tarde.';
                }

                resp({
                    status: status,
                    message: message
                })
            });


        },
        nextPersonales(){
            let valoresAceptados = /^[0-9]+$/;

            if( this.user.nombres == '' || this.user.apellidos == '' || this.user.telefono == '' || this.user.cedula == ''){
                this.respAlert(422, 'Debe completar todos los campos para continuar');
                return false;
            }
            if( this.user.nombres.length > 80 || this.user.apellidos.length > 80 ){
                this.respAlert(422, 'Los Campos Nombre y Apellido no debe ser mas de 80 caracteres');
                return false;
            }

            if( !this.user.cedula.match(valoresAceptados) || this.user.cedula.length > 8 ){
                this.respAlert(422, 'El Campo Cédula debe ser numerico y no mayor a 8 numeros');
                return false;
            }

            if( !this.user.telefono.match(valoresAceptados) || this.user.telefono.length > 11 ){
                this.respAlert(422, 'El Campo Teléfono debe ser numerico y no mayor a 11 numeros');
                return false;
            }
            return true;
        },
        nextDireccion() {
            if( this.user.id_estado == '' || this.user.id_ubigeo == ''){
                this.respAlert(422, 'Debe selecionar una ubicacion, en los resultados de búsqueda');
                return false;
            }

            if( this.user.direccion == '' || this.user.direccion.length > 180 ){
                this.respAlert(422, 'Debe completar el campo Dirección, y el campo no debe ser mayor a 180 caracteres');
                return false;
            }

            if( this.user.ref_direccion != '' && this.user.ref_direccion.length > 180 ){
                this.respAlert(422, 'Ell campo Referencia de Dirección, no debe ser mayor a 180 caracteres');
                return false;
            }

            return true
        },  
        respAlert(status, msg = ''){
            this.alert = {
                msg: msg,
                clss: ( status == 200 ) ? 'updated' : 'error'
            }

            this.activeComponent = (this.activeComponent == 'alert') ? this.activeComponent : 'alert';
        },
        async inputSearch(e){
            const parent = e.target.offsetParent;
            const query = this.ubicacion;

                console.log(this.ubicacion)
            await this.axios.get('ubigeos', {params : { search: this.ubicacion }}).then(response => {
                this.datos = response.data.results;
                parent.querySelector('.dropdown-menu').classList.add('show-search');
            }).catch(error => {
               console.log(error.response.data);
            });
        },
        clickRadioCheck(e){
            const parent = e.target.parentNode.parentNode.parentNode;
            const value = e.target.value;
            const arreglo = this.datos;           

            if(  arreglo.length != 0 ){
                for (let i = 0; i < arreglo.length; i++) {
                    if( value == arreglo[i].id_ubigeo ){
                        this.user.id_estado = arreglo[i].id_estado;
                        this.user.id_ubigeo = arreglo[i].id_ubigeo;
                        this.ubicacion = `${arreglo[i].estado}, ${arreglo[i].zona} - ${arreglo[i].codigo_postal}`;
                        break;
                    }
                }
            }
           
            

            parent.classList.remove('show-search');
            this.datos = [];
        },
        viewHidePass(){
            this.typePass = ( this.pass == 'ti ti-eye' ) ? 'text' : 'password';
            this.pass = ( this.pass == 'ti ti-eye' ) ? 'ti ti-eye-off' : 'ti ti-eye';
        },
    }
}
</script>
<style>
    .page-vzlc{
        min-height: 100vh;
        align-items: center;
        display: flex;
    }

    .page-vzlc .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .forn_auth.re{
        padding: 25px 25px 0;
    }
    .forn_auth .div-loader_white{
        margin: -25px;
    }

    .forn_auth .wizard-header{display: none;}
    .forn_auth .vue-form-wizard.sm .wizard-icon-circle{
        width: 40px;
        height: 40px;
        font-size: 16px;
        border: 2px solid #e6e7e9;
        color: #e6e7e9;
    }
    .forn_auth .vue-form-wizard *{
        font-size: 14px;
        color: #cbd5e1;
    }

    .forn_auth .vue-form-wizard .wizard-tab-content {
        padding: 30px 0px 10px;
    }

    .forn_auth .vue-form-wizard input, .forn_auth .vue-form-wizard select, .forn_auth .vue-form-wizard option, .forn_auth .vue-form-wizard label, .forn_auth .form-check-label, .forn_auth i{
        color: #222;
    }

    .forn_auth .vue-form-wizard .wizard-card-footer{
        padding: 0;
    }
    .input-file_s{
        position: absolute;
        z-index: 1;
        opacity: 0;
        height: 100%;
    }
       .dropdown-menu.input-result-search.show{
        display: none;
    }

    .dropdown-menu.input-result-search.show.show-search{
        inset: auto !important;
        transform: none !important;
        width:100%;
        padding: 10px 15px;
    }
    .input-result-search.show.show-search{
        display: block;
    }
    .forn_auth.re .img {
        width: 145px;
        height: 80px;
        margin-bottom: 15px;
    }
    @media ( max-width: 480px ){
        /*.reg .container { padding: 0;}*/
        .reg .auth-page{
            width: 100%;
        }

        .auth-page .forn_auth{
            padding: 25px 15px;
                margin: 0;
        }

        /*.reg .auth-page .forn_auth.re{max-width: 100%;}*/

        .forn_auth .div-loader_white{
            margin: -15px;
        }
    }
</style>
