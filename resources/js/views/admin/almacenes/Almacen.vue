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
    url: 'almacenes',
    name: 'IndexAlmacen',
    params: {
        limit : 16,
        page : 1,
        orderBy : 'almacenes.warehouse',
        ascending : 0,
        query: {
            search : '',
            estado: 'all',
            instrucciones: 'all',
            tipo_envio: 'all',
            envio: 'all'
        }
    }
   }
};
export default {
    name: 'Almacen',

    data() {
        return {
            data: {
                th: [
                    {name: 'Cliente'},
                    {name: 'Warehouse'},
                    {name: 'Nro. Tracking'},
                    {name: 'Peso LB'},
                    {name: 'Vol'},
                    {name: 'FT³'},
                    {name: 'tipo de Envio'},
                    {name: 'Envio'},
                    {name: 'Estado'},
                    {name: ''}
                ],
                columns: [
                    {name: 'Warehouse', value: 'almacenes.warehouse'},
                    {name: 'Fecha', value: 'almacenes.fecha_editado'}
                ]
            },
           
            view: 'AlmacenesDataTable',
            accion: {
               create: 'CreateAlmacen',
               edit: '',
               delete: ''
            },
            request: request(),
            //copyRequest: request(), 
            filters: {
                name: 'IndexAlmacen',
                first: {
                    placeholder: 'Buscar por cliente, número de tracking ó warehose'
                },
                second: [
                    {
                        name: 'instrucciones',
                        type: 'select',
                        title: 'Filtra por instrucciones',
                        option: {
                            name: 'title',
                            value: 'valor'
                        },
                        data: [
                            {
                                title: 'Con Instruccion',
                                valor: 'si'
                            },
                            {
                                title: 'Sin Instruccion',
                                valor: 'no'
                            },
                            {
                                title: 'Instrucciones',
                                valor: 'all'
                            }
                        ]
                       
                    },
                    {
                        name: 'tipo_envio',
                        type: 'select',
                        title: 'Filtra por tipo de envio',
                        option: {
                            name: 'title',
                            value: 'valor'
                        },
                        data: [
                            {
                                title: 'Aereo',
                                valor: 'aereo'
                            },
                            {
                                title: 'Maritimo',
                                valor: 'maritimo'
                            },
                            {
                                title: 'Seleccion Tipo Envio',
                                valor: 'all'
                            }
                        ]
                       
                    },
                    {
                        name: 'envio',
                        type: 'select',
                        title: 'Filtra por envio',
                        option: {
                            name: 'title',
                            value: 'valor'
                        },
                        data: [
                            {
                                title: 'Directo',
                                valor: 'no'
                            },
                            {
                                title: 'Con Reempaque',
                                valor: 'si'
                            },
                            {
                                title: 'Seleccion Envio',
                                valor: 'all'
                            }
                        ]
                       
                    }
                ]
            }
        };
    },
    components: {
       tables: () => import(/* webpackChunkName: "TableAdminComponent" */'../../../components/tables/TableAdminComponent.vue'),
       filters: () => import(/* webpackChunkName: "FilterComponent" */'../../../components/FilterComponent.vue')
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