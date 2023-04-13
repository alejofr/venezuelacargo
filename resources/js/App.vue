<template>
    <div class="wrapper">
        <cabecera v-if="this.$store.getters['auth/getUserStatus']"></cabecera>
        <div class="page-wrapper">
             <router-view></router-view>
        </div>
        <footer class="footer footer-transparent d-print-none" v-show="this.$route.name != 'Login' && this.$route.name != 'Registro' && this.$route.name != 'RecoverPassword' && this.$route.name != 'ResetPassword' ">
          <div class="container-xl">
            <div class="text-center align-items-center flex-row-reverse">
                <ul class="list-inline list-inline-dots mb-0 dev-dev">
                    <li class="list-inline-item">
                        Desarrollado por
                        <a href="https://jamtechcorp.com/" target="_blank" class="link-secondary" rel="noopener">JAM Tech, C.A</a>
                    </li>
                    <li class="list-inline-item">
                        Programador
                        <a href="https://www.linkedin.com/in/abraham-freitez/" target="_blank" class="link-secondary" rel="noopener">Abraham Freitez</a>
                    </li>
                    <li class="list-inline-item">
                        Derechos de autor © 2022
                    <a href="." class="link-secondary">Venezuela Cargo</a>.
                    </li>
                </ul>
            </div>
          </div>
        </footer>
    </div>
</template>
<script>


export default {
    name: 'App',
    components: {
        cabecera : () => import(/* webpackChunkName: "Header" */'./components/HeaderComponent.vue'),
    },
    computed: {
        statusOnline(){
          return this.$store.state.online.status
        }
    },
    methods: {
     
    },
}
</script>