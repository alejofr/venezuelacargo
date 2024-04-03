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
const LoaderComponent = (() => import('../../../../components/LoaderComponent.vue') );
const Error500 = (() => import('../../../../components/Error500Component.vue'));

let id_state; 
const request = () => {
   return {
    name: 'GeolocalizacionIndex',
    url: 'geolocalizacion',
    params: {
        limit : 8,
        page : 1,
        orderBy : 'geo_estados.estado',
        ascending : 1,
        query : {
            id_estado : id_state,
            search : ''
        } 
    },
   }
};

export default {
    name: 'IndexGeolocalizacion',
    data() {
        return {
            componentRender: LoaderComponent,
            data: {
                th: [
                    {name: 'Estado'},
                    {name: 'Zona'},                    
                    {name: 'Codigo Postal'},
                    {name: ''},
                ],
                columns: [
                    {name: 'Estado', value: 'geo_estados.estado'},
                    {name: 'Zona', value: 'geo_ubigeo.zona'},
                    {name: 'Codigo Postal', value: 'geo_ubigeo.codigo_postal'},
                ]
            },
            view: 'GeoDataTableComponent',
            accion: {
               create: 'GeolocalizacionCrear',
               edit: 'GeolocalizacionEditar',
               delete: 'geolocalizacion'
            },
            request: {},
            estados: [],
            filters: {
                name: 'GeolocalizacionIndex',
                first: {
                    placeholder: 'Busca por Zona o Código Postal'
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
                    }
                ]
            },
        }
    },
    components: {
       tables: () => import(/* webpackChunkName: "TableAdminComponent" */'../../../../components/tables/TableAdminComponent.vue'),
       filters: () => import(/* webpackChunkName: "FilterComponent" */'../../../../components/FilterComponent.vue')
    },
    beforeCreate() {
        this.$nextTick(async function () {
            await this.axios.get('estados').then(response => {
                this.filters.second[0].data = response.data.results.all;
                id_state = response.data.results.init;
                this.request = request();
                
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
    },
};
</script>