<template>
     <header class="navbar navbar-expand-md navbar-light navbar-overlap d-print-none">
        <div class="container-xl">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <router-link :to="{name: 'IndexDashboard'}" >
                    <img src="/images/venezuela-cargo-logo.svg" width="110" height="32" alt="Venezuela Cargo" class="navbar-brand-image">
                </router-link>
            </h1>
            <div class="navbar-nav flex-row order-md-last">
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                        <span class="avatar avatar-sm fs-18">{{ user.nombre_usuario.charAt(0) }}</span>
                        <div class="d-none d-xl-block ps-2" style="max-width: 100px;">
                            <div class="text-lg-dcam"><span>{{user.nombre_usuario}}</span></div>
                            <div class="mt-1 small text-muted text-lg-dcam"><span><small>{{ user.email }}</small></span></div>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <router-link v-if="rol_user == 'admin'" :to="{name: 'UserAdmin'}" :class="{'active': this.$route.name == 'UserAdmin' }" class="dropdown-item">Mi Cuenta</router-link>
                        <router-link v-else :to="{name: 'UserClient'}" :class="{'active': this.$route.name == 'UserClient' }" class="dropdown-item">Mi Cuenta</router-link>
                        <div class="dropdown-divider"></div>
                        <button type="button" @click="logout" class="dropdown-item">Salir</button>
                    </div>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbar-menu">
                <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                    <transition name="component-fade" mode="out-in">
                        <keep-alive>
                            <component :is='MenuComponent'></component>
                        </keep-alive>
                    </transition>
                </div>
            </div>
        </div>
      </header>
</template>
<script>
const MenuSkeleton = () => import('./menu/MenuSkeleton.vue');
const MenuClient = () => import('./menu/MenuClient.vue');
const MenuAdmin = () => import('./menu/MenuAdmin.vue');
export default {
    name: 'Header',
     data() {
        return {
            links: [],
            theme: 'theme-light',
            MenuComponent: MenuSkeleton
            //user: {},
            
        }
    },
    beforeCreate(){
        const re = (val) => setTimeout(() => {
            switch (val) {
                case 1:
                    this.MenuComponent = MenuClient
                    break;
                case 2:
                    this.MenuComponent = MenuAdmin
                    break;
                default:
                    break;
            }
        }, 2000);


        if( this.$store.state.auth.role  == 'client'){
            re(1)
        }else if( this.$store.state.auth.role  == 'admin' ){
            re(2)
        }
    },
    created(){
        if( window.localStorage.getItem('myTheme') != null ){
            this.theme = window.localStorage.getItem('myTheme');
        }

        document.body.classList.add(this.theme);
    },
    computed: {
        user(){
            return this.$store.state.auth.user;
        },
        rol_user(){
            return this.$store.state.auth.role;
        }
    },
    methods: {
        changeTheme(){
            const theme = this.theme;
            this.theme = ( theme == 'theme-light' ) ? 'theme-dark' : 'theme-light';
            if( window.localStorage.getItem('myTheme') != null ){
                window.localStorage.removeItem('myTheme');
            }
            document.body.classList.remove(theme)
            document.body.classList.add(this.theme);
            localStorage.setItem('myTheme', this.theme);
        },
        async logout(){
            console.log('logout')
            this.axios.delete('logout').then( (response) => {
                console.log(response.data)
                this.$store.dispatch('auth/logout');
            }).catch(error => {
                console.log(error.response)
            });
        }
    }
}
</script>