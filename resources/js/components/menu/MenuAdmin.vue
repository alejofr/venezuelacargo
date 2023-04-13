<template>
<ul class="navbar-nav">
    <li class="nav-item" :class="{'active': this.$route.name == 'IndexDashboard' }">
        <router-link class="nav-link" :to="{name:'IndexDashboard'}">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-home fs-18"></i>
            </span>
            <span class="nav-link-title">
                Escritorio
            </span>
        </router-link>
    </li>
        <li class="nav-item" :class="{'active': this.$route.matched.length > 1 && this.$route.matched[0].name == 'Clientes'}">
        <router-link class="nav-link" :to="{name:'IndexClientes'}">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-users fs-18"></i>
            </span>
            <span class="nav-link-title">
                Clientes
            </span>
        </router-link>
    </li>
    <li class="nav-item" :class="{'active': this.$route.matched.length > 1 && this.$route.matched[0].name == 'Prealertas'}">
        <router-link class="nav-link" :to="{name:'IndexPrealertas'}">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-file-alert fs-18"></i>
            </span>
            <span class="nav-link-title">
                Prealertas
            </span>
        </router-link>
    </li>
    <li class="nav-item" :class="{'active': this.$route.matched.length > 1 && this.$route.matched[0].name == 'Almacen'}">
        <router-link class="nav-link" :to="{name:'IndexAlmacen'}">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-building-warehouse fs-18"></i>
            </span>
            <span class="nav-link-title">
                Almacén
            </span>
        </router-link>
    </li>
    <li class="nav-item" :class="{'active': this.$route.matched.length > 1 && this.$route.matched[0].name == 'Facturas'}">
        <router-link class="nav-link" :to="{name:'IndexFacturas'}">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-file-invoice fs-18"></i>
            </span>
            <span class="nav-link-title">
                Facturas
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
    <li class="nav-item dropdown" :class="{'active': this.$route.matched.length != 0 && this.$route.matched[0].name == 'Configuracion' }">
        <button class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-settings fs-18"></i>
            </span>
            <span class="nav-link-title">
                Configuración
            </span>
        </button>
        <div class="dropdown-menu">
            <router-link class="dropdown-item" :to="{ name:'GeolocalizacionIndex' }" :class="{'active':this.$route.matched.length > 1 &&  this.$route.matched[1].name == 'Geolocalizacion' }">Geolocalización</router-link>
            <router-link class="dropdown-item" :to="{ name:'TasasDestinosIndex' }" :class="{'active':this.$route.matched.length > 1 &&  this.$route.matched[1].name == 'TasasDestinos' }">Tasas Destinos</router-link>
            <router-link class="dropdown-item" :to="{ name:'MonedasCambiosIndex' }" :class="{'active':this.$route.matched.length > 1 &&  this.$route.matched[1].name == 'MonedasCambios' }">Tasa del Dolar</router-link>
            <router-link class="dropdown-item" :to="{ name:'GastosExtrasIndex' }" :class="{'active':this.$route.matched.length > 1 &&  this.$route.matched[1].name == 'GastosExtras' }">Gastos Extras</router-link>
            <router-link class="dropdown-item" :to="{ name:'EmpresasTransportesIndex' }" :class="{'active':this.$route.matched.length > 1 &&  this.$route.matched[1].name == 'EmpresasTransportes' }">Empresas Transportes</router-link>
            <router-link class="dropdown-item" :to="{ name:'AddBannerApp' }" :class="{'active': this.$route.name == 'AddBannerApp' }">Banner App</router-link>
        </div>
    </li>
</ul>
</template>
<script>

export default {
    name: 'MenuAdmin',
};

</script>