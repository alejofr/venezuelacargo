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
const LoaderComponent = (() => import('../../../components/LoaderComponent.vue') );
const Error500 = (() => import('../../../components/Error500Component.vue'));
let id_state; 
const request = () => {
   return {
    name: 'IndexClientes',
    url: 'clientes',
    params: {
        limit : 16,
        page : 1,
        orderBy : 'usuarios.fecha_creado',
        ascending : 1,
        query : {
            id_estado : 'all',
            cod_user: '0',
            search : '',
            fecha_inicio: '',
            fecha_final: ''
        } 
    },
   }
};
export default {
    name: 'Clientes',
    data() {
        return {
            componentRender: LoaderComponent,
            data: {
                th: [
                    {name: 'Estado'},
                    {name: 'Codigo Usuario'},
                    {name: 'Nombres'},                    
                    {name: 'Apellidos'},
                    {name: 'Email'},
                    {name: 'Fecha Registro'},
                ],
                columns: [
                    {name: 'Estado', value: 'geo_estados.estado'},
                    {name: 'Nombres', value: 'usuarios_info.nombres'},
                    {name: 'Apellidos', value: 'usuarios_info.apellidos'},
                    {name: 'Fecha Registro', value: 'usuarios.fecha_creado'},
                ]
            },
            view: 'ClientesDataTable',
            accion: {
               create: 'CreateCliente',
               edit: 'EditCliente',
               delete: 'clientes'
            },
            request: request(),
            estados: [],
            filters: {
                name: 'IndexClientes',
                first: {
                    placeholder: 'Busca por nombre, apellidos, codigo de usuario, email o cedula'
                },
                second: [
                    {
                        name: 'id_estado',
                        type: 'select',
                        title: 'Filtra por estado',
                        option: {
                            name: 'estado',
                            value: 'id_estado'
                        },
                        data: []
                    },
                    {
                        name: 'cod_user',
                        type: 'select',
                        title: 'Filtra por usuario con codigo o no',
                        option: {
                            name: 'title',
                            value: 'valor'
                        },
                        data: [
                            {
                                title: 'Con Codigo',
                                valor: '0'
                            },
                            {
                                title: 'Sin Codigo',
                                valor: '1'
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
            },
        }
    },
    components: {
      tables: () => import(/* webpackChunkName: "TableAdminComponent" */'../../../components/tables/TableAdminComponent.vue'),
      filters: () => import(/* webpackChunkName: "FilterComponent" */'../../../components/FilterComponent.vue'),
    },
    beforeCreate() {
        this.$nextTick(async function () {
            await this.axios.get('estados').then(response => {
                this.filters.second[0].data = response.data.results.all;
                this.filters.second[0].data.push({
                    estado: 'Ver Todos',
                    id_estado: 'all'
                })
                //id_state = response.data.results.init;
                //this.request = request();
                
                setTimeout(() => {
                    this.componentRender = '';
                }, 2000);
            }).catch(error => {
                console.log(error)
                this.componentRender = Error500;
            });
        })
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