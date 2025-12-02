<template>
<div class="page-body">
    <div class="container-xl mb-3">
        <div class="page-header d-print-none">
            <div class="row align-items-center">
            <div class="col">
                <address>
                    <p>Name: <strong>{{ name }}</strong></p>
                    <p>Last name: <strong>VZLACARGO</strong>.</p>
                    <p>Address: <strong>11017 NW 122ND ST #17</strong></p>
                    <p>City: <strong>MEDLEY</strong></p>
                    <p>State: <strong>FLORIDA</strong></p>
                    <p>Zip code: <strong>33178</strong></p>
                </address>
            </div>
            <div class="col-auto ms-auto d-print-none">
                <div class="btn-list">
                    <button type="button" class="btn btn-primary" @click="abrirCalculadora" >
                            <i class="ti ti-calculator me-2" style="font-size: 16px;"></i>
                            <span class="d-none d-sm-inline-block">Calculadora</span>
                    </button>
                </div>
                <transition name="component-fade" mode="out-in">
                    <keep-alive>
                        <component :is='CalcularEnvioComponent' @closeModalCalcularEnvio="closeModalCalcularEnvio" :show="showModalCalcular"></component>
                    </keep-alive>
                </transition>
            </div>
            </div>
        </div>
    </div>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12">
                <filters ref="filters" v-bind:filters="filters"  v-bind:request="request"  @consulReq="handleRequest" @consulReqQury="handleRequestQuery"></filters>
				<div class="mb-3 btn-list flex-nowrap" style="margin-bottom: 1rem !important;">
                    <div class="d-flex me-3">
                        <div class="btn semaforo-btn align-text-top me-2 btn-danger"></div>
                        <span>Instrucción Por Asignar</span>
                    </div>
                    <div class="d-flex me-3">
                        <div class="btn semaforo-btn align-text-top me-2 btn-success"></div>
                        <span>Instrucción Asignada</span>
                    </div>
                </div>
                <tables v-bind:columns="data" :viewData="view" v-bind:accion="accion"></tables>
            </div>
        </div>
    </div>
</div>
</template>
<script>
const CalculadoraEnvio = () => import ('../../components/CalculadoraEnvio.vue');
const request = () => {
   return {
    name: 'IndexDashboard',
    url: 'solicitudes',
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
    name: 'IndexDashboard',
    data() {
        return {
            CalcularEnvioComponent: '',
            showModalCalcular: false,
            name: '',
            data: {
                th: [
                    {name: 'Transporte'},               
                    {name: 'Nro. Tracking'},
                     {name: 'Descrip. Tracking'},
                    {name: 'Registro de PreAlertas'}, 
                    {name: 'Fecha Llegada'},
                    {name: ''},
                ],
                columns: [
                    {name: 'Fecha Llegada', value: 'solicitudes_envios.fecha_llegada'},
                    {name: 'Fecha Registro', value: 'solicitudes_envios.fecha_creado'},
                ]
            },
            view: 'SolicitudesClientDataTable',
            accion: {
               create: 'CreatePrelaerta',
               edit: '',
               delete: ''
            },
            request: request(),
            filters: {
                name: 'IndexDashboard',
                first: {
                    placeholder: 'Busca por numero de tracking o nombre de empresa'
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
      tables: () => import(/* webpackChunkName: "TableAdminComponent" */'../../components/tables/TableAdminComponent.vue'),
      filters: () => import(/* webpackChunkName: "FilterComponent" */'../../components/FilterComponent.vue'),
    },
    beforeCreate() {
        this.$nextTick(async function () {
            console.log(this.$store.state.auth.user);
            await this.axios.get(`edit-user/client`).then(response => {
                const result = {...response.data.result};

                let nombre_cod = `${result.nombres}${result.cod_usuario}`;
                this.name = nombre_cod.split(/\s+/).join('');
            
                console.log(result)
            }).catch(error => {
                console.log(error.response.data)
            });
        })
    },
    methods: {
        abrirCalculadora ( ) {
            if( this.CalcularEnvioComponent == '' ) this.CalcularEnvioComponent = CalculadoraEnvio;
            this.showModalCalcular = true;
        },
        closeModalCalcularEnvio(){
            this.showModalCalcular = false;
        },
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