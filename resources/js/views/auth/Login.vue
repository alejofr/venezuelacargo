<template>
    <div class="w-100 page-vzlc img-size-0" style="background-color: #24298D;">
    <div class="container h-100" >
            <div class="auth-page">
                <component :is='activeComponent' v-bind:alert="alert"></component>
                <div class="forn_auth">
                    <div class="img"><img src="/images/venezuela-cargo-logo.svg" alt="" srcset=""></div>
                    <form class="form-lg_auth" method="POST" @submit.prevent="login($event)" name="formLogin">
                            <div class="form-group mb-3">
                                <input type="email" v-model="user.email" name="email" v-validate="'required|email'" placeholder="Correo Electrónico"  class="form-control _input_style-0" :class="{'is-invalid': errors.first('email')}">
                                <div v-if="errors.has('email')" class="invalid-feedback">{{errors.first('email')}}</div>
                            </div>
                            <div class="form-group mb-3 position-relative">
                                <input :type="typePass" v-model="user.password" name="password" v-validate="'required|max:12'" placeholder="Contraseña"  class="form-control _input_style-0" :class="{'is-invalid': errors.first('password')}">
                                <button type="button" @click="viewHidePass" class="button button-secondary wp-hide-pw hide-if-no-js"><i :class="pass"></i></button>
                                <div v-if="errors.has('password')" class="invalid-feedback">{{errors.first('password')}}</div>
                            </div>
                            <div class="form-group mb-3 row">
                                <div class="col-6 mt-1">
                                    <label class="form-check mb-0">
                                        <input type="checkbox" v-model="user.remenber" value="true" class="form-check-input check-input_0">
                                        <span class="form-check-label fs-14">Recuérdame</span>
                                    </label>
                                </div>
                                <div class="col-6 text-end mt-1">
                                    <router-link :to="{ name: 'RecoverPassword' }" class="nav-link text-end justify-content-end cl0 fw-bold fs-14 py-0 px-0">¿Olvidó su contraseña?</router-link>
                                </div>
                            </div>
                            <div class="w-100 mb-3">
                                <button :type="typeButton" id="btnSubmit" class="btn_style_0 fw-bold mt-3 d-flex align-items-center justify-content-center">
                                    <i class="ti ti-loader me-2 ti-spin"></i> Iniciar sesión
                                </button>
                            </div>
                            <div class="form-group d-md-flex">
                                <p class="fs-14 mt-2">¿No estás registado?  <router-link :to="{name: 'Registro'}" class="cl0 fw-bold fs-14 py-0 px-0" >Crear Una Cuenta</router-link></p>
                            </div>
                    </form>
                </div>
                
            </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                email:'',
                password: '',
                remenber: false
            },
            pass: 'ti ti-eye',
            typePass: 'password',
            showAlert: false,
            alert: {
                msg: '',
                clss: '' 
            },
            activeComponent: '',
            typeButton: 'submit'
        }
    },
    components: {
        alert: () => import(/* webpackChunkName: "AlertMessageComponent" */'../../components/AlertMessageComponent.vue')    
    },
    beforeCreate() {
        if( this.$store.getters['auth/getUserStatus'] == true ){
            this.$router.go(-1);
        }
    },
    methods: {
        login(){
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.typeButton = 'button';
                    this.axios.post('login', this.user)
                    .then(response => {
                        console.log(response.data)
                        let user = {
                            access_token: response.data.access_token,
                            expires_at: response.data.expires_at,
                        }
                        this.$store.dispatch('auth/login', user);
                        //window.location.href = "http://127.0.0.1:8000/"
                    })
                    .catch(error => {
                        this.alert ={ 
                            msg: error.response.data.message,
                            clss: 'error'
                        }
                        this.activeComponent = (this.activeComponent == 'alert') ? this.activeComponent : 'alert';
                        setTimeout(() => this.typeButton = 'submit', 1000);
                    });
                }
            });
           
            
        },
        viewHidePass(){
            this.typePass = ( this.pass == 'ti ti-eye' ) ? 'text' : 'password';
            this.pass = ( this.pass == 'ti ti-eye' ) ? 'ti ti-eye-off' : 'ti ti-eye';
        },
    }
}
</script>
<style>
/*background-image: url('/images/bg-01.jpg');*/
    .page-vzlc{
        height: 100vh;
    }

    .page-vzlc .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media ( max-width: 480px ){
        .auth-page{
            width: 100%;
        }

        .auth-page .forn_auth{
            padding: 25px 15px;
                margin: 0;
        }
    }
</style>