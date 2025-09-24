<template>
     <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12">
                <filters ref="filters" v-bind:filters="filters"  v-bind:request="request"  @consulReq="handleRequest" @consulReqQury="handleRequestQuery"></filters>
                <tables v-bind:columns="data" :viewData="view" v-bind:accion="accion"></tables>
            </div>
        </div>
    </div>
</template>
<script>
const request = () => {
   return {
    name: 'IndexEnvios',
    url: 'shipments',
    params: {
        limit : 8,
        page : 1,
        orderBy : 'envios.fecha_creado',
        ascending : 0,
        query: {
            search : '',
           // fecha_estimada: '',
        }, 
    }
   }
};
export default {
    name: 'IndexEnvios',

    data() {
        return {
             data: {
                th: [
                    {name: 'Nro Factura'}, 
                    {name: 'Nro Container'},                    
                    {name: 'Tipo de Envio'},
                    {name: 'Monto de Factura'},
                    {name: 'Estado de Pago'},
                    {name: 'Estado de Envio'},
                    {name: ''},
                ],
                columns: [
                    {name: 'Fecha', value: 'envios.fecha_creado'},
                    {name: 'Nro Factura', value: 'facturas.nro_factura'},
                    {name: 'Nro Container', value: 'facturas.nro_container'},
                
                ]
            },
            view: 'EnviosClientDataTable',
            accion: {
               create: '',
               edit: '',
               delete: ''
            },
            request: request(),
            filters: {
                name: 'IndexEnvios',
                first: {
                    placeholder: 'Busca por numero de warehouse, tracking, factura o container'
                },
                second: [
                   /* {
                        name: 'fecha_estimada',
                        type: 'date',
                        title: 'Fecha Estimada'
                    },*/
                ]
            }
        };
    },
    components: {
      tables: () => import(/* webpackChunkName: "TableAdminComponent" */'../../../components/tables/TableAdminComponent.vue'),
      filters: () => import(/* webpackChunkName: "FilterComponent" */'../../../components/FilterComponent.vue'),
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
    }
};
</script>