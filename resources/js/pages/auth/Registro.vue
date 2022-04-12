<template>
    <div class="w-100 h-100 img-size-0" style="background-image: url('/images/bg-01.jpg');">
        <div class="container h-100" >
            <div class="page-vzlc w-100 h-100">
                <div class="auth-page">
                    <div class="forn_auth">
                        <div class="img"><img src="/images/venezuela-cargo-logo.svg" alt="" srcset=""></div>
                        <form class="form-lg_auth form-rgtr_auth" method="POST" @submit.prevent="register($event)" @change="formChange($event)" name="formRegister">
                            <div class="form-group mb-3">
                                <input type="text" v-model="user.username" name="username" v-validate="'required|alpha_num|max:15'" placeholder="Nombre de Usuario"  class="form-control _input_style-0"  data-vv-validate-on="change" :class="{'is-invalid': errors.first('username')}">
                                <div v-if="errors.has('username')" class="invalid-feedback">{{errors.first('username')}}</div>
                            </div>
                            <div class="form-group mb-3">
                                <input type="email" v-model="user.email" name="email" v-validate="'required|email'" placeholder="Correo Electrónico"  class="form-control _input_style-0"  data-vv-validate-on="change" :class="{'is-invalid': errors.first('email')}">
                                <div v-if="errors.has('email')" class="invalid-feedback">{{errors.first('email')}}</div>
                            </div>
                            <div class="form-group mb-3 position-relative">
                                <input :type="typePass" v-model="user.password" name="password" v-validate="'required|max:12'" placeholder="Contraseña"  class="form-control _input_style-0" data-vv-validate-on="change" :class="{'is-invalid': errors.first('password')}">
                                <button v-if="!errors.has('password')" type="button" @click="viewHidePass" class="button button-secondary wp-hide-pw hide-if-no-js"><i :class="pass"></i></button>
                                <div v-if="errors.has('password')" class="invalid-feedback">{{errors.first('password')}}</div>
                            </div>
                             <div class="w-100 mb-3">
                                <button type="button" id="btnSubmit" class="btn_style_0 disable fw-bold mt-3" disabled>Crear Cuenta</button>
                            </div>
                             <div class="form-group d-md-flex">
                                <p class="fs-14 mt-2">¿Ya tienes Cuenta?  <router-link :to="{name: 'Login'}" class="cl0 fw-bold fs-14 py-0 px-0" >Ingresar Ahora</router-link></p>
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
                username: '',
                email:'',
                password: ''
            },
            pass: 'ti ti-eye',
            typePass: 'password'
        }
    },
    methods: {
        register(event){
            console.log(event);
        },
        viewHidePass(){
            this.typePass = ( this.pass == 'ti ti-eye' ) ? 'text' : 'password';
            this.pass = ( this.pass == 'ti ti-eye' ) ? 'ti ti-eye-off' : 'ti ti-eye';
        },
        formChange(event){
            let el  = event.target;
            let formSubmit = el.form.querySelector('#btnSubmit');
            let type = ( this.user.email != "" &&  !this.$validator.errors.has('email') && this.user.password != '' && !this.$validator.errors.has('password') && this.user.username != '' && !this.$validator.errors.has('username') ) ? 'submit' : 'button' 
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
    }
}
</script>

<style>

</style>
