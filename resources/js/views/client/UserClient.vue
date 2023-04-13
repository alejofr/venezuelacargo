<template>
<div class="page-body">
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <form name="user" @submit.prevent="save()"  enctype="multipart/form-data" class="card card-lg" v-if="componentRender == ''">
                    <div v-show="loader" class="div-loader_white"><loader></loader></div>
                    <div class="card-body">
                        <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="row mb-3">
                            <div class="col-12 col-md-6 col-lg-6 col-sm-12 mb-3">
                                <p class="h3">Nombres</p>
                                <div class="form-floating mt-2">
                                    <input type="text"   class="form-control" v-model="nombres"  id="nombres" name="nombres" aria-expanded="false" v-validate="'required|max:45'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('nombres')}">
                                    <label for="nombres">Nombres</label>
                                    <div v-if="errors.has('nombres')" class="invalid-feedback">{{errors.first('nombres')}}</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-sm-12 mb-3">
                                <p class="h3">Apellidos</p>
                                <div class="form-floating mt-2">
                                    <input type="text"   class="form-control" v-model="apellidos"  id="apellidos" name="apellidos" aria-expanded="false" v-validate="'required|max:45'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('apellidos')}">
                                    <label for="apellidos">Apellidos</label>
                                    <div v-if="errors.has('apellidos')" class="invalid-feedback">{{errors.first('apellidos')}}</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-sm-12 mb-3">
                                <p class="h3">Número de Teléfono</p>
                                <div class="form-floating mt-2">
                                    <input type="text"   class="form-control" v-model="telefono"  id="telefono" name="telefono" aria-expanded="false" v-validate="'required|numeric|max:11'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('telefono')}">
                                    <label for="telefono">Número de Teléfono</label>
                                    <div v-if="errors.has('telefono')" class="invalid-feedback">{{errors.first('telefono')}}</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-sm-12 mb-3">
                                <p class="h3">Cédula</p>
                                <div class="form-floating mt-2">
                                    <input type="text"   class="form-control" v-model="cedula"  id="cedula" name="cedula" aria-expanded="false" v-validate="'required|numeric|max:8'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('cedula')}">
                                    <label for="cedula">Cédula</label>
                                    <div v-if="errors.has('cedula')" class="invalid-feedback">{{errors.first('cedula')}}</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-sm-12 mb-3">
                                <p class="h3">Nombre Usuario</p>
                                <div class="form-floating mt-2">
                                    <input type="text"   class="form-control" v-model="nom_user"  id="nom_user" name="nom_user" aria-expanded="false" v-validate="'required|max:25'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('nom_user')}">
                                    <label for="nom_user">Nombre Usuario</label>
                                    <div v-if="errors.has('nom_user')" class="invalid-feedback">{{errors.first('nom_user')}}</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-sm-12 mb-3">
                                <p class="h3">Correo</p>
                                <div class="form-floating mt-2">
                                    <input type="text"   class="form-control" v-model="email"  id="email" name="email" aria-expanded="false" v-validate="'required|email'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('email')}">
                                    <label for="email">Correo</label>
                                    <div v-if="errors.has('email')" class="invalid-feedback">{{errors.first('email')}}</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-sm-12 mb-3">
                                <p class="h3">Contraseña</p>
                                <div class="form-floating mt-2">
                                    <input @change="changePassword" type="text" class="form-control" v-model="password"  id="password" name="password" aria-expanded="false" v-validate="'max:12'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('password')}" ref="password">
                                    <label for="password">Contraseña</label>
                                    <div v-if="errors.has('password')" class="invalid-feedback">{{errors.first('password')}}</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-sm-12 mb-3">
                                <p class="h3">Repetir Contraseña</p>
                                <div class="form-floating mt-2">
                                    <input type="text" class="form-control" v-model="password_confirmation"  id="password_confirmation" name="password_confirmation" aria-expanded="false" v-validate="passV" data-vv-validate-on="change" :class="{'is-invalid': errors.first('password_confirmation')}" data-vv-as="password">
                                    <label for="password_confirmation">Repetir Contraseña</label>
                                    <div v-if="errors.has('password_confirmation')" class="invalid-feedback">{{errors.first('password_confirmation')}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-5">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                            <button type="submit" class="btn btn-info ms-auto">
                                Actualizar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
const LoaderComponent = () => import('../../components/LoaderComponent.vue');
const Error404 = () => import('../../components/Error404Component.vue');
const AlertMessageComponent = () => import('../../components/AlertMessageComponent.vue');

import BtnVolver from '../../components/BtnVolver.vue';

export default {
    name: 'UserAdmin',

    data() {
        return {
            componentRender: LoaderComponent,
            loader: false,
            activeComponent: '',
             alert: {
                msg: '',
                clss: '' 
            },
            usuario_id: '',
            nombres: '',
            apellidos: '',
            telefono: '',
            cedula: '',
            nom_user: '',
            email: '',
            password: '',
            password_confirmation: '',
            passV: 'max:12'
        };
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

            await this.axios.get(`edit-user/client`).then(response => {
                const result = {...response.data.result};
                if ( result != null ){
                    document.title = document.title +'  '+ result.nombre_usuario;
                    this.nombres = result.nombres;
                    this.apellidos = result.apellidos;
                    this.telefono = result.telefono;
                    this.cedula = result.cedula;
                    this.nom_user = result.nombre_usuario;
                    this.email = result.email;
                    this.usuario_id = result.usuario_id;
                    reCom();
                }else{
                    reErr();
                }
                
            
                console.log(result)
            }).catch(error => {
                console.log(error.response.data)
                reErr();
            });

        })
    },
    components: {
        BtnVolver,
        loader: LoaderComponent,
    },
    methods: {
        changePassword(){
            if( this.password != '' ){
                this.passV = 'required|max:12|confirmed:password';
            }else{
                this.passV = 'max:12';
            }
        },
        save(){
            this.$validator.validate().then(valid => {
                if( valid ){

                    let formData = {
                        apellidos: this.apellidos,
                        cedula: this.cedula,
                        email: this.email,
                        nombre_usuario: this.nom_user,
                        nombres: this.nombres,
                        telefono: this.telefono,
                        password: this.password, 
                    }

                    
                    this.loader = true;
                    this.axios.put(`user/client/${this.usuario_id}`, formData).then(response => {
                        console.log(response.data)
                        this.$store.dispatch('auth/user', response.data.user)
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