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
                            <div class="w-100 mb-3">
                                <button :type="typeButton" id="btnSubmit" class="btn_style_0 fw-bold mt-3 d-flex align-items-center justify-content-center">
                                    <i class="ti ti-loader me-2 ti-spin"></i> Recuperar Cuenta
                                </button>
                            </div>
                            <div class="form-group d-md-flex">
                                <p class="fs-14 mt-2">¿Tienes una cuenta?  <router-link :to="{name: 'Login'}" class="cl0 fw-bold fs-14 py-0 px-0" >Iniciar sesión</router-link></p>
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
            },
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
                    this.axios.post('user/forgout_password', this.user)
                    .then(response => {
                        console.log(response.data)
                        this.alert ={ 
                            msg: response.data.message,
                            clss: 'updated'
                        }
                        this.activeComponent = (this.activeComponent == 'alert') ? this.activeComponent : 'alert';
                        this.user.email = '';
                        setTimeout(() => this.typeButton = 'submit', 1000);
                    })
                    .catch(error => {
                        //Ha ocurrido un error en enviar el correro de recuperacion de cuenta
                        console.log('error.response.data', error.response.data)
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