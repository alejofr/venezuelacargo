<template>
    <ul class="navbar-nav">
        <li class="nav-item" :class="{'active': this.$route.name == 'IndexDashboard' || this.$route.name == 'CreatePrelaerta' || this.$route.name == 'InfoPrelaerta'}">
            <router-link class="nav-link" :to="{name:'IndexDashboard'}">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <i class="ti ti-home fs-18"></i>
                </span>
                <span class="nav-link-title">
                    Escritorio
                </span>
            </router-link>
        </li>
        <li class="nav-item" :class="{'active': this.$route.matched.length > 1 && this.$route.matched[0].name == 'Envios'}">
        <router-link class="nav-link" :to="{name:'IndexEnvios'}">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-truck-delivery fs-18"></i>
            </span>
            <span class="nav-link-title">
                Envíos
            </span>
        </router-link>
    </li>
    </ul>
</template>
<script>
export default {
    name: 'MenuClient',
};
</script>