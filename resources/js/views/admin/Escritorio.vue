<template>
<div class="page-body">
    <div class="container-xl mb-3">
        <div class="page-header d-print-none">
            <div class="row align-items-center">
            <div class="col">
                <div class="page-pretitle">
                Visión general
                </div>
                <h2 class="page-title">
                Tablero
                </h2>
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
        <div class="row row-deck row-cards mb-3">
                <div class="col-sm-6 col-lg-3">
                    <transition name="component-fade" mode="out-in">
                        <keep-alive>
                            <component :is='CardClientsComponent' v-bind:data="dataClients" @changeCardSmall="changeCardSmall" ref="dataClientsCard"></component>
                        </keep-alive>
                    </transition>
                </div>
                <div class="col-sm-6 col-lg-3">
                        <transition name="component-fade" mode="out-in">
                        <keep-alive>
                            <component :is='CardPrealertasComponent' v-bind:data="dataPrealertas" @changeCardSmall="changeCardSmall" ref="dataPrealertasCard"></component>
                        </keep-alive>
                    </transition>
                </div>
                    <div class="col-sm-6 col-lg-3">
                    <transition name="component-fade" mode="out-in">
                        <keep-alive>
                            <component :is='CardEnviosComponent' v-bind:data="dataEnviados" @changeCardSmall="changeCardSmall" ref="dataEnviosCard"></component>
                        </keep-alive>
                    </transition>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <transition name="component-fade" mode="out-in">
                        <keep-alive>
                            <component :is='CardFacturasComponent' v-bind:data="dataFacturas" @changeCardSmall="changeCardSmall" ref="dataFacturasCard"></component>
                        </keep-alive>
                    </transition>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <transition name="component-fade" mode="out-in">
                        <keep-alive>
                            <component :is='CardPieCubicoEnviadosComponent' v-bind:data="dataPieCubicoEnviados" @changeCardSmall="changeCardSmall" ref="dataPieCubicoEnviadosCard"></component>
                        </keep-alive>
                    </transition>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <transition name="component-fade" mode="out-in">
                        <keep-alive>
                            <component :is='CardVolumenEnviadosComponent' v-bind:data="dataVolumenEnviados" @changeCardSmall="changeCardSmall" ref="dataVolumenEnviadosCard"></component>
                        </keep-alive>
                    </transition>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <transition name="component-fade" mode="out-in">
                        <keep-alive>
                            <component :is='CardLibrasEnviadosComponent' v-bind:data="dataLibrasEnviados" @changeCardSmall="changeCardSmall" ref="dataLibrasEnviadosCard"></component>
                        </keep-alive>
                    </transition>
                </div>
            </div>
            <div class="row row-deck row-cards">
                <div class="col-md-8">
                <div class="card" style="height: calc(20rem + 15px);">
                    <div class="card-table table-responsive">
                        <table class="table table-vcenter">
                        <thead>
                            <tr>
                                <th>Estado</th>
                                <th colspan="2">Clientes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="( item, index ) in dataEstUsers" :key="index">
                            <td class="td-truncate text-muted" >
                                <div class="text-truncate">
                                    {{item.estado}}
                                </div>
                            </td>
                            <td class="text-center">
                                <router-link :to="{ 
                                    name: 'IndexClientes', 
                                    query: {
                                        id_estado : item.id_estado,
                                        cod_user: '0',
                                        search : '',
                                        fecha_inicio: '',
                                        fecha_final: ''
                                    } 
                                }">
                                    {{item.cant}}
                                </router-link>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row row-cards">
                    <div class="col-12">
                        <transition name="component-fade" mode="out-in">
                            <keep-alive>
                                <component :is='CardSmClientStateComponent' v-bind:data="dataClientState"></component>
                            </keep-alive>
                        </transition>
                    </div>
                    <div class="col-12">
                        <transition name="component-fade" mode="out-in">
                            <keep-alive>
                                <component :is='CardSmPrealertsComponent' v-bind:data="dataPreAlerts"></component>
                            </keep-alive>
                        </transition>
                    </div>
                    <div class="col-12">
                        <transition name="component-fade" mode="out-in">
                            <keep-alive>
                                <component :is='CardSmWarehouseComponent' v-bind:data="dataWarehouse"></component>
                            </keep-alive>
                        </transition>
                    </div>
                     <div class="col-12">
                        <transition name="component-fade" mode="out-in">
                            <keep-alive>
                                <component :is='CardSmInvoicesComponent' v-bind:data="dataInvoices"></component>
                            </keep-alive>
                        </transition>
                    </div>
                </div>
            </div>
            
            </div>
    </div>
</div>
</template>
<script>
const CardSmallSkeleton = () => import('../../components/cards/CardSmallSkeleton.vue');
const CardSmall = () => import('../../components/cards/CardSmall.vue');
const CardSmSkeleton = () => import('../../components/cards/CardSmSkeleton.vue');
const CardSm = () => import('../../components/cards/CardSm.vue');
const CalculadoraEnvio = () => import ('../../components/CalculadoraEnvio.vue');
import { formatPrice } from '../../formatPrice.js';

export default {
    name: 'Escritorio',
     data() {
        return {
            CalcularEnvioComponent: '',
            showModalCalcular: false,
           CardClientsComponent: CardSmallSkeleton,
           CardPrealertasComponent: CardSmallSkeleton,
           CardEnviosComponent: CardSmallSkeleton,
           CardFacturasComponent: CardSmallSkeleton,
           CardPieCubicoEnviadosComponent: CardSmallSkeleton,
           CardVolumenEnviadosComponent: CardSmallSkeleton,
           CardLibrasEnviadosComponent: CardSmallSkeleton,
           dataClients: {
                title: 'Clientes',
                value: 7,
                result: '',
                var: 'dataClients',
                event: 'changeCardSmall'
           },
           dataPrealertas: {
                title: 'Paq. Recibidos',
                value: 7,
                result: '',
                var: 'dataPrealertas',
                event: 'changeCardSmall'
           },
           dataEnviados: {
                title: 'Enviados',
                value: 7,
                result: '',
                var: 'dataEnvios',
                event: 'changeCardSmall'
           },
           dataFacturas: {
                title: 'Ingresos',
                value: 7,
                result: '',
                var: 'dataFacturas',
                event: 'changeCardSmall'
           },
           dataPieCubicoEnviados: {
                title: 'Pies cúbicos enviados',
                value: 7,
                result: '',
                var: 'dataPieCubicoEnviados',
                event: 'changeCardSmall'
           },
           dataVolumenEnviados: {
                title: 'Volumenes enviados',
                value: 7,
                result: '',
                var: 'dataVolumenEnviados',
                event: 'changeCardSmall'
           },
           dataLibrasEnviados: {
                title: 'Libras enviados',
                value: 7,
                result: '',
                var: 'dataLibrasEnviados',
                event: 'changeCardSmall'
           },
           CardSmPrealertsComponent: CardSmSkeleton,
           dataPreAlerts: {
                title: 'Prealertas',
                subtitle: 'SOLICITUDES DE ENVÍOS',
                icon: 'ti ti-bell-ringing',
                bg: 'bg-red',
                result: '',
                name: 'IndexPrealertas',
                query: {
                    search : '',
                    estado: 'pendiente',
                    fecha_inicio: '',
                    fecha_final: ''
                }
           },
           CardSmClientStateComponent: CardSmSkeleton,
           dataClientState: {
                title: 'Clientes',
                subtitle: 'SIN CÓDIGOS',
                icon: 'ti ti-users',
                bg: 'bg-blue',
                result: '',
                name: 'IndexClientes',
                query : {
                    id_estado : 'all',
                    cod_user: '1',
                    search : '',
                    fecha_inicio: '',
                    fecha_final: ''
                } 
           },
           CardSmWarehouseComponent: CardSmSkeleton,
           dataWarehouse: {
                title: 'Warehouse',
                subtitle: 'SIN INTRUCCIONES',
                icon: 'ti ti-building-warehouse',
                bg: 'bg-yellow',
                result: '',
                name: 'IndexAlmacen',
                query: {
                    search : '',
                    estado: 'all',
                    instrucciones: 'no',
                    fecha_inicio: '',
                    fecha_final: ''
                }
           },
           CardSmInvoicesComponent: CardSmSkeleton,
           dataInvoices: {
                title: 'Por Cobrar',
                subtitle: 'FACTURAS',
                icon: 'ti ti-file-invoice',
                bg: 'bg-lime',
                result: '',
                name: 'IndexFacturas',
                query: {
                    search : '',
                    estado: 'pendiente',
                    fecha_inicio: '',
                    fecha_final: ''
                }
           },
           dataEstUsers: [],
        };
    },
    beforeCreate() {
        this.$nextTick(async function () {
            await this.getCardSmallWhereFech('clientes-analyze', this.dataClients.value, this.dataClients.var);
            await this.getCardSmallWhereFech('prealertas-analyze', this.dataPrealertas.value, this.dataPrealertas.var);
            await this.getCardSmallWhereFech('envios-analyze', this.dataEnviados.value, this.dataEnviados.var);
            await this.getCardSmallWhereFech('facturas-analyze', this.dataFacturas.value, this.dataFacturas.var);
            await this.getCardSmallWhereFech('pies-cubicos-enviados-analyze', this.dataPieCubicoEnviados.value, this.dataPieCubicoEnviados.var);
            await this.getCardSmallWhereFech('volumen-enviados-analyze', this.dataVolumenEnviados.value, this.dataVolumenEnviados.var);
            await this.getCardSmallWhereFech('libras-enviados-analyze', this.dataLibrasEnviados.value, this.dataLibrasEnviados.var);
            await this.getCardSmallWhereFech('clientes-sincodigos', '', 'dataClientState');
            await this.getCardSmallWhereFech('prealertas-pendientes', '', 'dataPreAlerts');
            await this.getCardSmallWhereFech('warehouse-pendientes', '', 'dataWarehouse');
            await this.getCardSmallWhereFech('facturas-pendientes', '', 'dataInvoices');
            await this.getCardSmallWhereFech('estados-usuarios', '', 'dataEstUsers');
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
        async getCardSmallWhereFech(url, value, val){
            const re = (val) => {
                setTimeout(() => {
                    switch (val) {
                        case 1:
                            this.CardClientsComponent = CardSmall;
                            break;
                        case 2:
                            this.CardPrealertasComponent = CardSmall;
                            break;
                        case 3:
                            this.CardEnviosComponent = CardSmall;
                            break;
                        case 4:
                            this.CardFacturasComponent = CardSmall;
                            break;
                        case 5:
                            this.CardSmPrealertsComponent = CardSm;
                            break;
                        case 6:
                            this.CardSmWarehouseComponent = CardSm;
                            break;
                        case 7:
                            this.CardSmInvoicesComponent = CardSm;
                            break;
                        case 8:
                            this.CardSmClientStateComponent = CardSm;
                            break;
                        case 9:
                            this.CardPieCubicoEnviadosComponent = CardSmall;
                            break;
                        case 10:
                            this.CardVolumenEnviadosComponent = CardSmall;
                            break;
                        case 11:
                            this.CardLibrasEnviadosComponent = CardSmall;
                            break;
                        default:
                            break;
                    }
                }, 2000)
            }
            await this.axios.get(url, {params : { valor: value }}).then(response => {
                console.log(response.data)
                if( val === 'dataClients' ){
                    this.dataClients.value = response.data.valor;
                    this.dataClients.result = response.data.result;
                    re(1)
                }else if ( val === 'dataPrealertas' ){
                    this.dataPrealertas.value = response.data.valor;
                    this.dataPrealertas.result = response.data.result;
                    re(2)
                }else if( val == 'dataEnvios' ){
                    this.dataEnviados.value = response.data.valor;
                    this.dataEnviados.result = response.data.result;
                    re(3)
                }else if( val == 'dataFacturas' ){
                    this.dataFacturas.value = response.data.valor;
                    let total = response.data.result;
                    if( total % 1 == 0 ){
                        total = parseInt(total)
                    }else{
                        total = parseFloat(total)
                    }

                    if( total % 1 == 0 ){
                        total = parseInt(total)
                    }else{
                        total = parseFloat(total)
                    }

                    total = total.toFixed(2);
                    total = formatPrice.constPrice(`${total}`, ',', '.');
                    this.dataFacturas.result = `$${total}`;
                    re(4)
                }else if( val == 'dataPreAlerts' ){
                    this.dataPreAlerts.result = response.data.result;
                    re(5)
                }else if( val == 'dataWarehouse' ){
                    this.dataWarehouse.result = response.data.result;
                    re(6)
                }else if( val == 'dataInvoices' ){
                    this.dataInvoices.result = response.data.result;
                    re(7);
                }else if( val == 'dataClientState' ){
                    this.dataClientState.result = response.data.result;
                    re(8);
                }else if( val == 'dataEstUsers' ){
                    this.dataEstUsers = response.data.result;
                }else if( val === 'dataPieCubicoEnviados' ){
                    this.dataPieCubicoEnviados.value = response.data.valor;
                    this.dataPieCubicoEnviados.result = response.data.result;
                    re(9);
                }else if( val === 'dataVolumenEnviados' ){
                    this.dataVolumenEnviados.value = response.data.valor;
                    this.dataVolumenEnviados.result = response.data.result.toFixed(2);
                    re(10);
                }else if( val === 'dataLibrasEnviados' ){
                    this.dataLibrasEnviados.value = response.data.valor;
                    this.dataLibrasEnviados.result = response.data.result;
                    re(11);
                }               
            }).catch(error => {
               console.log(error.response.data);
            });
        },
        async changeCardSmall([value, valor]){
            let url = 'clientes-analyze';

            if( valor === 'dataClients' ){
                this.CardClientsComponent = CardSmallSkeleton;
            }else if( valor === 'dataPrealertas' ){
                url = 'prealertas-analyze';
                this.CardPrealertasComponent = CardSmallSkeleton;
            }else if( valor == 'dataEnvios' ){
                url = 'envios-analyze';
                this.CardEnviosComponent = CardSmallSkeleton;
            }else if( valor == 'dataFacturas' ){
                url = 'facturas-analyze';
                this.CardFacturasComponent = CardSmallSkeleton;
            }else if( valor === 'dataPieCubicoEnviados' ){
                url = 'pies-cubicos-enviados-analyze';
                this.CardPieCubicoEnviadosComponent = CardSmallSkeleton;
            }else if( valor === 'dataVolumenEnviados' ){
                url = 'volumen-enviados-analyze';
                this.CardVolumenEnviadosComponent = CardSmallSkeleton;
            }else if( valor === 'dataLibrasEnviados' ){
                url = 'libras-enviados-analyze';
                this.CardLibrasEnviadosComponent = CardSmallSkeleton;
            }


            await this.getCardSmallWhereFech(url, value, valor);
        },
    }
}
</script>