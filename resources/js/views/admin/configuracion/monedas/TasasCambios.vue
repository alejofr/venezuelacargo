<template>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <div class="w-100" v-if="componentRender == ''">
                    <filters ref="filters" v-bind:filters="filters"  v-bind:request="request"  @consulReq="handleRequest" @consulReqQury="handleRequestQuery"></filters>
                    <tables v-bind:columns="data" :viewData="view" v-bind:accion="accion"></tables>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const request = () => {
   return {
        name: 'TasasCambiosIndex',
        url: 'tasas-cambios',
        params: {
            limit : 2,
            page : 1,
            orderBy : 'monedas_cambios_tasas.fecha_tc',
            ascending : 0,
            query : {
                search : '',
                id_cambio: ''
            } 
        },
   }
};
const Error404 = () => import('../../../../components/Error404Component.vue')
const LoaderComponent = (() => import('../../../../components/LoaderComponent.vue') );
export default {
    name: 'Monedas',

    data() {
        return {
            componentRender: LoaderComponent,
            data: {
                th: [
                    {name: 'Moneda Nacional'},
                    {name: 'Moneda Extranjera'},
                    {name: 'Tasa de Cambio'},
                    {name: 'Fecha Actualizado'}
                ],
                columns: [
                    {name: 'Fecha Actualizado', value: 'monedas_cambios_tasas.fecha_tc'},
                    {name: 'Moneda Nacional', value: 'monedas_cambios.abreviatura_moneda_nc'},
                    {name: 'Moneda Extranjera', value: 'monedas_cambios.abreviatura_moneda_divisa'},
                    {name: 'Monto taza', value: 'monedas_cambios_tasas.monto_tc'}
                ]
            },
            view: 'MonedasCambiosTasasDataTable',
            accion: {
               create: '',
               edit: '',
               delete: '',
               volver: ''
            },
            request: request(),
            filters: {}
        };
    },
    beforeCreate(){
         this.$nextTick(function () {
            const url = this.$route.query;
            if( Object.keys(url).length != 0 ){
                this.request.params.query.id_cambio = url.id;
                console.log(this.request, 'this.request')
                this.componentRender = '';
            }else{
                this.comp = Error404;
            }
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