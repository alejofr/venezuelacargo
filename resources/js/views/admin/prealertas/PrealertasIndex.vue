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
    name: 'IndexPrealertas',
    url: 'prealertas',
    params: {
        limit : 8,
        page : 1,
        orderBy : 'solicitudes_envios.fecha_llegada',
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
    name: 'PrealertasIndex',
    data() {
        return {
            data: {
                th: [
                    {name: 'Usuario'},
                    {name: 'Nro. Tracking'},  
                    {name: 'Registro de PreAlertas'},                    
                    {name: 'Nom. Empresa Transporte'},
                    {name: 'Fecha Llegada de Tracking'},
                    {name: ''},
                ],
                columns: [
                    {name: 'Fecha Llegada', value: 'solicitudes_envios.fecha_llegada'},
                    {name: 'Fecha Registro', value: 'solicitudes_envios.fecha_creado'},
                    {name: 'Usuarios', value: 'usuarios_info.nombres'},
                ]
            },
            view: 'PreAlertasDataTable',
            accion: {
               create: '',
               edit: '',
               delete: 'prealertas'
            },
            request: request(),
            filters: {
                name: 'IndexPrealertas',
                first: {
                    placeholder: 'Escribe el nro. Tracking, nombre, apellido, C.I, código del usuario ó nombre de empresa'
                },
                second: [
                    {
                        name: 'estado',
                        type: 'select',
                        title: 'Filtra por estado de prelaertas',
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
                                title: 'Recibido',
                                valor: 'recibido'
                            },
                            {
                                title: 'Ver Todos',
                                valor: 'all'
                            }
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
};
</script>