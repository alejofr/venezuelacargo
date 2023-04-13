<template>
<div class="container-xl">
    <div class="row row-cards">
        <div class="col-12" style="min-height: 60vh;">
            <component :is='componentRender'></component>
            <form name="prealerta" @submit.prevent="save()"  enctype="multipart/form-data" class="card card-lg" v-if="componentRender == ''">
                <div v-show="loader" class="div-loader_white"><loader></loader></div>
                <div class="card-body">
                    <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                    <div class="row mb-3">
                        <div class="col-4 mb-3">
                            <p class="h3">Ubicacion del cliente</p>
                                <div class="form-floating mt-2">
                                <input type="text"   class="form-control dropdown-toggle" data-bs-toggle="dropdown" v-model="ubicacion" value="" id="ubicacion" name="ubicacion" @keyup="inputSearch($event)" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('ubicacion')}">
                                <label for="ubicacion">Buscar por zona o codigo postal</label>
                                <ul class="dropdown-menu input-result-search" id="ubicacion" style="max-height: 220px;overflow: overlay;">
                                    <li v-if="datos.length == 0">No se encontraron resultados</li>
                                    <li v-for="(data, index) in datos" :key="index">
                                        <label class="form-check" :for="index">
                                            <input type="radio"  class="form-check-input" :value="data.id_ubigeo"  :id="index" @click="clickRadioCheck($event)">
                                            <span class="form-check-label">{{data.zona}} -  {{data.codigo_postal}}</span>  
                                        </label>
                                    </li>
                                </ul>
                                <div v-if="errors.has('ubicacion')" class="invalid-feedback">{{errors.first('ubicacion')}}</div>
                            </div>
                        </div>
                         <div class="col-4 mb-3">
                            <p class="h3">Nombre Usuario</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="nom_user"  id="nom_user" name="nom_user" aria-expanded="false" v-validate="'required|max:25'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('nom_user')}">
                                <label for="nom_user">Nombre Usuario</label>
                                <div v-if="errors.has('nom_user')" class="invalid-feedback">{{errors.first('nom_user')}}</div>
                            </div>
                        </div>
                        <div class="col-4 mb-3">
                            <p class="h3">Correo</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="email"  id="email" name="email" aria-expanded="false" v-validate="'required|email'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('email')}">
                                <label for="email">Correo</label>
                                <div v-if="errors.has('email')" class="invalid-feedback">{{errors.first('email')}}</div>
                            </div>
                        </div>
                        <div class="col-4 mb-3">
                            <p class="h3">Contraseña</p>
                            <div class="form-floating mt-2">
                                <input type="text" class="form-control" v-model="password"  id="password" name="password" aria-expanded="false" v-validate="passV" data-vv-validate-on="change" :class="{'is-invalid': errors.first('password')}">
                                <label for="password">Contraseña</label>
                                <div v-if="errors.has('password')" class="invalid-feedback">{{errors.first('password')}}</div>
                            </div>
                        </div>
                        <div class="col-4 mb-3">
                            <p class="h3">Nombres</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="nombres"  id="nombres" name="nombres" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('nombres')}">
                                <label for="nombres">Nombres Completo</label>
                                <div v-if="errors.has('nombres')" class="invalid-feedback">{{errors.first('nombres')}}</div>
                            </div>
                        </div>
                        <div class="col-4 mb-3">
                            <p class="h3">Apellidos</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="apellidos"  id="apellidos" name="apellidos" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('apellidos')}">
                                <label for="apellidos">Apellidos Completo</label>
                                <div v-if="errors.has('apellidos')" class="invalid-feedback">{{errors.first('apellidos')}}</div>
                            </div>
                        </div>
                        <div class="col-4 mb-3">
                            <p class="h3">Telefono</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="telefono"  id="telefono" name="telefono" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('telefono')}">
                                <label for="telefono">Telefono</label>
                                <div v-if="errors.has('telefono')" class="invalid-feedback">{{errors.first('telefono')}}</div>
                            </div>
                        </div>
                        <div class="col-4 mb-3">
                            <p class="h3">Codigo Usuario</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="cod_usuario"  id="cod_usuario" name="cod_usuario" aria-expanded="false" v-validate="'required|numeric'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('cod_usuario')}">
                                <label for="cod_usuario">Codigo Usuario</label>
                                <div v-if="errors.has('cod_usuario')" class="invalid-feedback">{{errors.first('cod_usuario')}}</div>
                            </div>
                        </div>
                        <div class="col-4 mb-3">
                            <p class="h3">Cedula</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="cedula"  id="cedula" name="cedula" aria-expanded="false" v-validate="'required|numeric'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('cedula')}">
                                <label for="cedula">Cedula</label>
                                <div v-if="errors.has('cedula')" class="invalid-feedback">{{errors.first('cedula')}}</div>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <p class="h3">Direccion</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="direccion"  id="direccion" name="direccion" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('direccion')}">
                                <label for="direccion">Direccion</label>
                                <div v-if="errors.has('direccion')" class="invalid-feedback">{{errors.first('direccion')}}</div>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <p class="h3">Referencia Direccion</p>
                            <div class="form-floating mt-2">
                                <input type="text"   class="form-control" v-model="ref_direccion"  id="ref_direccion" name="ref_direccion" aria-expanded="false">
                                <label for="ref_direccion">Referencia Direccion</label>
                                
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-5">
                        <btn-volver :classe="'btn-light'"></btn-volver>
                        <button type="submit" class="btn btn-info ms-auto">
                            <span v-if="id_usuario_info == ''">
                                Guardar
                            </span>
                            <span v-else>
                                Actualizar
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>

const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../components/Error404Component.vue');
const AlertMessageComponent = () => import('../../../components/AlertMessageComponent.vue');

import BtnVolver from '../../../components/BtnVolver.vue';

export default {
    name: 'ClientesForm',

    data() {
        return {
            componentRender: LoaderComponent,
            loader: false,
            activeComponent: '',
             alert: {
                msg: '',
                clss: '' 
            },
            ubicacion: '',
            id_estado: '',
            id_ubigeo: '',
            nom_user: '',
            email: '',
            password: '',
            nombres: '',
            apellidos: '',
            telefono: '',
            cod_usuario: '',
            cedula: '',
            direccion: '',
            ref_direccion: '',
            id_usuario_info: '',
            passV: 'required|max:12',
            datos: []
        };
    },
    components: {
        BtnVolver,
        loader: LoaderComponent,
    },
    beforeCreate(){
        this.$nextTick(async function () {
            const reCom = () => {
                setTimeout(() => {
                    this.componentRender = '';
                }, 2000);
            }
            const reErr = () => {
                setTimeout(() => {
                    this.componentRender = Error404;
                }, 2000);
            }

            if( this.$route.name == 'CreateCliente' ){
                reCom();
            }

            if( this.$route.name == 'EditCliente' && Object.keys(this.$route.params).length !== 0 && this.$route.params.hasOwnProperty('id') ){
                
                await this.axios.get(`clientes/${this.$route.params.id}/edit`).then(response => {
                    const result = {...response.data.result};
                    console.log(result)
                    if ( result != null ){
                        document.title = document.title +'  '+ result.nombre_usuario;
                        
                        //this.categorias = response.data.results.categorias;
                        this.ubicacion = `${result.zona != null ? result.zona + ' - '+ result.codigo_postal: result.estado}`;
                        this.id_estado = result.id_estado;
                        this.id_ubigeo = result.id_ubigeo;
                        this.nom_user = result.nombre_usuario;
                        this.email = result.email;
                        this.nombres = result.nombres;
                        this.apellidos = result.apellidos;
                        this.telefono = result.telefono;
                        this.cod_usuario = result.cod_usuario;
                        this.cedula = result.cedula;
                        this.direccion = result.direccion;
                        this.ref_direccion = result.ref_direccion == null ? '' : result.ref_direccion;

                        this.id_usuario_info = result.id_usuario_info;
                        this.passV = 'max:12';
                         reCom();
                    }else{
                       reErr();
                    }
                    
                
                    //console.log(response.data)
                }).catch(error => {
                    console.log(error.response)
                    reErr();
                });
               

            }else if( this.$route.name == 'EditCliente' && Object.keys(this.$route.params).length === 0 ) {
                reErr();
            }

           
        })  
    },
    methods: {
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
                        this.id_estado = arreglo[i].id_estado;
                        this.id_ubigeo = arreglo[i].id_ubigeo;
                        this.ubicacion = `${arreglo[i].zona} - ${arreglo[i].codigo_postal}`;
                        break;
                    }
                }
            }
           
            

            parent.classList.remove('show-search');
            this.datos = [];
        },
        save(){
            this.$validator.validate().then(valid => {
                if( valid ){
                    console.log(this.id_estado, this.id_ubigeo)
                    if( this.id_estado != '' && this.id_ubigeo != '' ){

                        let url = 'clientes';

                        let formData = {
                            cod_usuario: this.cod_usuario,
                            id_estado: this.id_estado, 
                            id_ubigeo: this.id_ubigeo, 
                            nombre_usuario: this.nom_user,
                            email: this.email,
                            password: this.password, 
                            nombres: this.nombres,  
                            apellidos: this.apellidos, 
                            telefono: this.telefono,
                            cedula: this.cedula,
                            direccion: this.direccion,
                            ref_direccion: this.ref_direccion
                        }

                        if( this.$route.name == 'EditCliente' ){
                            formData.id_usuario_info = this.id_usuario_info;
                            url = `clientes/${this.$route.params.id}`
                        }

                        console.log(this.$route.name)
                        this.loader = true;
                        const request = ( this.$route.name == 'CreateCliente' ) ? this.axios.post(url, formData) : this.axios.put(url, formData);
                        request.then(response => {
                            console.log(response.data)
                            resp(response.data)
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

                        const resp = (resp) => {
                            setTimeout(() => {
                                this.loader = false;
                                this.respAlert(resp.status, resp.message);
                            }, 2000);

                            if( resp.status == 200 ){
                                setTimeout(() => {
                                    this.$router.go(-1)
                                }, 4000)
                            }
                        }

                    }else{
                        alert('Debe seleccionar una ubicacion de los resultados de busqueda')
                    }
                }
            })
        },
        respAlert(status, msg = ''){
            this.alert = {
                msg: msg,
                clss: ( status == 200 ) ? 'updated' : 'error'
            }

            this.activeComponent = AlertMessageComponent;
        },
    },
};
</script>
<style>
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
    .invalid-feedback{
        display: block;
    }
     .div-loader_white{
        margin: 0;
    }
</style>