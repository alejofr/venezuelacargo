<template>
<div class="w-100 page-vzlc img-size-0" :class="{'baactive': componentRender == ''}">
    <component :is='componentRender'></component>
    <div class="container h-100" v-if="componentRender == ''">
        <div class="auth-page">
            <component :is='activeComponent' v-bind:alert="alert"></component>
            <div class="forn_auth" v-if="componentRender == ''">
                <div class="img"><img src="/images/venezuela-cargo-logo.svg" alt="" srcset=""></div>
                <form class="form-lg_auth" method="POST" @submit.prevent="login($event)" name="formLogin">
                        <div class="form-group mb-3 position-relative">
                            <input :type="typePass" v-model="user.password" name="password" v-validate="'required|max:12'" placeholder="Nueva Contraseña"  class="form-control _input_style-0" :class="{'is-invalid': errors.first('password')}" ref="password" data-vv-validate-on="change">
                            <button type="button" @click="viewHidePass" class="button button-secondary wp-hide-pw hide-if-no-js"><i :class="pass"></i></button>
                            <div v-if="errors.has('password')" class="invalid-feedback">{{errors.first('password')}}</div>
                        </div>
                        <div class="form-group mb-3">
                            <input type="password" v-model="user.password_confirmation" name="password_confirmation" v-validate="'required|max:12|confirmed:password'" placeholder="Confirmar Contraseña"  class="form-control _input_style-0" :class="{'is-invalid': errors.first('password_confirmation')}" data-vv-as="password" data-vv-validate-on="change">
                            <div v-if="errors.has('password_confirmation')" class="invalid-feedback">{{errors.first('password_confirmation')}}</div>
                        </div>
                        <div class="w-100 mb-3">
                            <button :type="typeButton" id="btnSubmit" class="btn_style_0 fw-bold mt-3 d-flex align-items-center justify-content-center">
                                <i class="ti ti-loader me-2 ti-spin"></i> Cambiar Contraseña
                            </button>
                        </div>
                        <div class="form-group d-md-flex">
                            <p class="fs-14 mt-2">¿Ya estás registado? <router-link :to="{name: 'Login'}" class="cl0 fw-bold fs-14 py-0 px-0" >Iniciar sesión</router-link></p>
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

export default {
    data() {
        return {
            componentRender: LoaderComponent,
            user: {
                token: '',
                password: '',
                password_confirmation: '',
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
    beforeCreate(){
        if( this.$store.getters['auth/getUserStatus'] == true ){
            this.$router.go(-1);
        }
        this.$nextTick(async function () {
            if( Object.keys(this.$route.params).length !== 0 && this.$route.params.hasOwnProperty('id') ){
                const response = { token:  this.$route.params.id};
                this.user.token = this.$route.params.id;

                this.axios.post('user/forgout/validate-token', response).then(resp => {
                    setTimeout(() => {
                        this.componentRender = '';
                    }, 1500);
                }).catch(error => {
                    setTimeout(() => {
                        this.componentRender = Error404;
                    }, 1500);
                });
            }
        });
    },
    components: {
        alert: () => import(/* webpackChunkName: "AlertMessageComponent" */'../../components/AlertMessageComponent.vue')    
    },
    methods: {
        login(){
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.typeButton = 'button';
                    this.axios.post('user/change_password_user', { token: this.user.token, password: this.user.password })
                    .then(response => {
                         this.alert ={ 
                            msg: response.data.message,
                            clss: 'updated'
                        }
                        this.activeComponent = (this.activeComponent == 'alert') ? this.activeComponent : 'alert';
                        setTimeout(() => {
                            this.typeButton = 'submit';
                            this.user.password = '';
                            this.user.password_confirmation = '';
                            this.user.token = '';
                        }, 1000);
                        setTimeout(() => {
                            this.$router.push('/login');
                        }, 2000);
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
    .baactive {
        background-color: #24298D;
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