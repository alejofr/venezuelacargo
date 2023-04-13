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
        name: 'MonedasCambiosIndex',
        url: 'monedas-cambios',
        params: {
            limit : 8,
            page : 1,
            orderBy : 'monedas_cambios.abreviatura_moneda_nc',
            ascending : 1,
            query: {} 
        },
   }
};
export default {
    name: 'MonedasCambios',

    data() {
        return {
            data: {
                th: [
                    {name: 'Moneda Nacional'},
                    {name: 'Moneda Extranjera'},
                    {name: 'Tasa de Cambio'},
                    {name: 'Ultima Actualizaión de Tasa'},
                    {name: ''},
                ],
                columns: [
                    {name: 'Moneda Nacional', value: 'monedas_cambios.abreviatura_moneda_nc'},
                    {name: 'Moneda Extranjera', value: 'monedas_cambios.abreviatura_moneda_divisa'},
                ]
            },
           
            view: 'MonedasCambiosDataTable',
            accion: {
               create: '',
               edit: '',
               delete: ''
            },
            request: request(),
            filters: {}
        };
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