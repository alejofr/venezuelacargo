<template>
    <div class="w-100 h-100 img-size-0" style="background-image: url('/images/bg-01.jpg');">
        <div class="container h-100" >
            <div class="page-vzlc w-100 h-100">
                <div class="auth-page">
                    <alert v-if=" alert.msg != '' && alert.clss != '' " v-bind:alert="alert" :show="true"/>
                    <div class="forn_auth">
                        <div class="img"><img src="/images/venezuela-cargo-logo.svg" alt="" srcset=""></div>
                        <form class="form-lg_auth" method="POST" @submit.prevent="login($event)" name="formLogin" @change="formChange($event)">
                                <div class="form-group mb-3">
                                    <input type="email" v-model="user.email" name="email" v-validate="'required|email'" placeholder="Correo Electrónico"  class="form-control _input_style-0"  data-vv-validate-on="change" :class="{'is-invalid': errors.first('email')}">
                                    <div v-if="errors.has('email')" class="invalid-feedback">{{errors.first('email')}}</div>
                                </div>
                                <div class="form-group mb-3 position-relative">
                                    <input :type="typePass" v-model="user.password" name="password" v-validate="'required|max:12'" placeholder="Contraseña"  class="form-control _input_style-0" data-vv-validate-on="change" :class="{'is-invalid': errors.first('password')}">
                                    <button v-if="!errors.has('password')" type="button" @click="viewHidePass" class="button button-secondary wp-hide-pw hide-if-no-js"><i :class="pass"></i></button>
                                    <div v-if="errors.has('password')" class="invalid-feedback">{{errors.first('password')}}</div>
                                </div>
                                <div class="form-group mb-3 row">
                                    <div class="col-6 mt-1">
                                        <label class="form-check mb-0">
                                            <input type="checkbox" v-model="user.remenber" value="true" class="form-check-input check-input_0">
                                            <span class="form-check-label fs-14">Recordarme</span>
                                        </label>
                                    </div>
                                    <div class="col-6 text-end mt-1">
                                        <a href="#" class="nav-link text-end justify-content-end cl0 fw-bold fs-14 py-0 px-0">Olvidé mi Contraseña</a>
                                    </div>
                                </div>
                                <div class="w-100 mb-3">
                                    <button type="button" id="btnSubmit" class="btn_style_0 disable fw-bold mt-3" disabled>Iniciar Sessión</button>
                                </div>
                                <div class="form-group d-md-flex">
                                    <p class="fs-14 mt-2">¿No estás Registado?  <router-link :to="{name: 'Registro'}" class="cl0 fw-bold fs-14 py-0 px-0" >Crear Una Cuenta</router-link></p>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>

    export default {
        data () {
            return {
                user: {
                    email:'',
                    password: '',
                    remenber: false
                },
                pass: 'ti ti-eye',
                typePass: 'password',
                alert: {
                    msg: '',
                    clss: '' 
                }
            }
        },
        components: {
            alert: () => import(/* webpackChunkName: "AlertMessageComponent" */'../../components/AlertMessageComponent.vue')
                
        },
        methods: {
            viewHidePass(){
                this.typePass = ( this.pass == 'ti ti-eye' ) ? 'text' : 'password';
                this.pass = ( this.pass == 'ti ti-eye' ) ? 'ti ti-eye-off' : 'ti ti-eye';
            },
            formChange(event){
                let el  = event.target;
                let formSubmit = el.form.querySelector('#btnSubmit');
                let type = ( this.user.email != "" &&  !this.$validator.errors.has('email') && this.user.password != '' && !this.$validator.errors.has('password') ) ? 'submit' : 'button' 
                let disable = ( type == 'button' ) ? 'disable' : '';

                

                if ( disable == '' ){
                    formSubmit.classList.remove('disable')
                    formSubmit.removeAttribute('disabled');
                }else{
                    formSubmit.classList.add(disable);
                    formSubmit.setAttribute('disabled','disabled')
                }   

                formSubmit.setAttribute('type', type)

            },
            login(event){
                console.log(event);
                console.log(process.env.MIX_APP_URL);
                this.alert.msg = 'Oye que bien';
                this.alert.clss = 'updated';
            }
        }
    }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
</style>
