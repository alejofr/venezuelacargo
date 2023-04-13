<template>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12">
                <filters ref="filters" v-bind:filters="filters"  v-bind:request="request"  @consulReq="handleRequest" @consulReqQury="handleRequestQuery"></filters>
                <tables ref="TablesRef" v-bind:columns="data" :viewData="view" v-bind:accion="accion"></tables>
            </div>
        </div>
    </div>
</template>
<script>
const request = () => {
   return {
        name: 'TasasDestinosIndex',
        url: 'tasas-destinos',
        params: {
            limit : 8,
            page : 1,
            orderBy : 'config_tasas_destinos.tarifa_aereo',
            ascending : 1,
            query : {} 
        },
   }
};
export default {
    name: 'TasasDestinos',
    data() {
        return {
            data: {
                th: [
                    {name: 'Estados'},
                    {name: 'Tarifa Aereo'},
                    {name: 'Tarifa Maritimo'},
                    {name: 'Activo'}
                ],
                columns: [
                    {name: 'Tarifa Aereo', value: 'config_tasas_destinos.tarifa_aereo'},
                    {name: 'Tarifa Maritimo', value: 'config_tasas_destinos.tarifa_maritimo'},
                ]
            },
            view: 'TasasDestinosTableComponent',
            accion: {
               create: 'TasasDestinosCrear',
               edit: 'TasasDestinosEditar',
               delete: 'tasas-destinos'
            },
            request: request(),
            filters: {}
        };
    },
    beforeCreate() {
        this.$nextTick(function () {
            //this.$store.dispatch('tableadmin/initTable', this.request);
        })
    },
    components:{
        tables: () => import(/* webpackChunkName: "TableAdminComponent" */'../../../../components/tables/TableAdminComponent.vue'),
        filters: () => import(/* webpackChunkName: "FilterComponent" */'../../../../components/FilterComponent.vue')
    },
    methods: {
        handleRequest(){
            //console.log('handleRequest', request())
            this.$refs.filters.changeRequestPadre({...request()});
        },
        handleRequestQuery(){
            // console.log('handleRequestQuery', request().params.query)
            this.$refs.filters.changeQueryPadre({...request().params.query});
        }
    },
};
</script>