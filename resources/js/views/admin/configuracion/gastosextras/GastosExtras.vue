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
        name: 'GastosExtrasIndex',
        url: 'gastos-extras',
        params: {
            limit : 8,
            page : 1,
            orderBy : 'nombre',
            ascending : 1,
            query : {} 
        },
   }
};
export default {
    name: 'GastosExtras',

    data() {
        return {
            data: {
                th: [
                    {name: 'Nombre'},
                    {name: 'Tipo'},
                    {name: 'Costo'},
                    {name: 'Acción'},
                    {name: 'Condición'}
                ],
                columns: [
                    {name: 'Nombre', value: 'nombre'},
                    {name: 'Tipo', value: 'tipo'},
                    {name: 'Costo', value: 'costo'},
                ]
            },
           
            view: 'GastosExtrasDataTable',
            accion: {
               create: 'GastosExtrasCrear',
               edit: 'GastosExtrasEditar',
               delete: 'gastos-extras'
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