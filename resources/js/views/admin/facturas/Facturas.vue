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
    name: 'IndexFacturas',
    url: 'facturas',
    params: {
        limit : 16,
        page : 1,
        orderBy : 'facturas.fecha_creado',
        ascending : 0,
        query: {
            search : '',
            estado: 'pendiente',
            fecha_inicio: '',
            fecha_final: ''
        }, 
    }
   }
};
export default {
    name: 'Facturas',
    data() {
        return {
            data: {
                th: [
                    {name: 'Nro Factura'},
                    {name: 'Nro Container'},                    
                    {name: 'Cliente'},
                    {name: 'Estado'},
                    {name: 'Tipo de Envio'},
                    {name: 'Total USD'},
                    {name: 'Moneda de Pago'},
                    {name: 'Fecha Factura'},
                    {name: ''},
                ],
                columns: [
                    {name: 'Nro Factura', value: 'facturas.nro_factura'},
                    {name: 'Nro Container', value: 'facturas.nro_container'},
                    {name: 'Fecha Creado', value: 'facturas.fecha_creado'},
                ]
            },
            view: 'FacturasDataTable',
            accion: {
               create: '',
               edit: '',
               delete: 'facturas'
            },
            request: request(),
            filters: {
                name: 'IndexFacturas',
                first: {
                    placeholder: 'Busca por numero de factura o por nombre, apellido y codigo de cliente'
                },
                second: [
                    {
                        name: 'estado',
                        type: 'select',
                        title: 'Filtra por estado de facturas',
                        option: {
                            name: 'title',
                            value: 'valor'
                        },
                        data: [
                            {
                                title: 'Pendiente',
                                valor: 'pendiente'
                            },
                            {
                                title: 'Verificando Pago',
                                valor: 'Verificacion-Pago'
                            },
                            {
                                title: 'Pago Verificado',
                                valor: 'Pago-Verificado'
                            },
                        ]
                       
                    },
                    {
                        name: 'fecha_inicio',
                        type: 'date',
                        title: 'Desde'
                    },
                     {
                        name: 'fecha_final',
                        type: 'date',
                        title: 'Hasta'
                    }
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
}
</script>