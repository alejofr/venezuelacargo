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

import { shippingStates } from '../../../helpers/shippingStates.js';

const request = () => {
   return {
    name: 'IndexEnvios',
    url: 'envios',
    params: {
        limit : 16,
        page : 1,
        orderBy : 'envios.fecha_editado',
        ascending : 0,
        query: {
            search : '',
            estado: 'FACTURADO',
            tipo_envio: 'all'
        }, 
    }
   }
};
export default {
    name: 'Envios',
    data() {
        return {
            data: {
                th: [
                    {name: 'Nro Factura'}, 
                    {name: 'Nro Container'},  
                    {name: 'Cliente'},                  
                    {name: 'Tipo de Envio'},
                    {name: 'Estado de Envio'},
                    {name: 'Actualización de Envío'},
                    {name: 'Historial de Envío'},
                    {name: ''},
                ],
                columns: [
                    {name: 'Nro Factura', value: 'facturas.nro_factura'},
                    {name: 'Nro Container', value: 'facturas.nro_container'},
                    {name: 'Actualización de Envío', value: 'envios.fecha_editado'},
                ]
            },
            view: 'EnviosDataTable',
            accion: {
               create: '',
               edit: '',
               delete: ''
            },
            request: request(),
            filters: {
                name: 'IndexEnvios',
                first: {
                    placeholder: 'Busca por numero de factura, contenedor ó cliente ( nombre, apellido o codigo )'
                },
                second: [
                    {
                        name: 'estado',
                        type: 'select',
                        title: 'Filtra por estado de envios',
                        option: {
                            name: 'title',
                            value: 'valor'
                        },
                        data: shippingStates
                       
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