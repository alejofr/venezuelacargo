<template>
    <tbody>
        <tr v-for="(item, index) in data" :key="index">
            <td>
                
            </td>
            <td>
                <span class=""> {{ item.nro_factura }}</span>
            </td>
            <td>
                <span> {{ item.nro_container }} </span>
            </td>
             <td>
                <span class="" style="text-transform: uppercase;"> {{ item.tipo_envio }}</span>
            </td>
            <td>
                <span class=""> ${{ item.total_usd }} USD</span>
            </td>
            <td>
                <span class="avatar status-vzla" :class="{'bg-red-lt': item.estado_pago == 'Pendiente', 'bg-yellow-lt': item == 'Verificacion-Pago', 'bg-teal-lt': item.estado_pago == 'Pago-Verificado'}">{{ `${item.estado_pago == 'Pendiente'? 'Pendiente por Pago' : item.estado_pago == 'Verificacion-Pago' ? 'Verificando Pago' : 'Pago Verificado'}`  }}</span>
            </td>
            <td>
                <span class="" style="text-transform: uppercase;" v-if="item.estado_envio == 'ENVIO-VENEZUELA'"> PENDIENTE POR PAGO </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado_envio == 'ENTRANSITO-VENEZUELA'"> EN TRÁNSITO HACIA VENEZUELA </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado_envio == 'PUERTO-VENEZOLANO'"> EN PUERTO VENEZOLANO </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado_envio == 'ADUANA-VENEZUELA'"> ADUANA DE VENEZUELA </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado_envio == 'ALMACEN-VENEZUELA'"> EN ALMACÉN DE VENEZUELA </span>
                <span class="" style="text-transform: uppercase;" v-else-if="item.estado_envio == 'ENTREGADO'"> ENTREGADO </span>
            </td>
            <td>
                <div class="btn-list flex-nowrap">
                    <router-link
                        class="nav-link"
                        style="padding: 0;"
                        :to="{
                            name: 'ShowInvoice',
                            params:{id: item.id_factura},
                            query: { envio: item.reempaque, type: 'show' }
                        }"
                        title="Ver detalles de factura" 
                        v-title
                    >
                        <i class="ti ti-file-info fs-19"></i>
                    </router-link>
                    <button
                        :value="item.id_factura"
                        id="pagar"
                        @click="showModalFactura($event)"
                        type="button"
                        class="align-text-top me-2 nav-link mb-0" 
                        title="Pagar Factura" 
                        v-title
                        style="padding:0;"
                        v-if="item.estado_pago == 'Pendiente'"
                    >
                     <i class="ti ti-report-money fs-19"></i>
                    </button>
                    <button
                        :value="item.id_envio" 
                        type="button"
                        class="align-text-top me-2 nav-link mb-0" 
                        title="Ver estado de envio" 
                        v-title
                        style="padding:0;"
                        @click="showModalEstado($event)"
                        >
                        <i class="ti ti-truck-delivery fs-19"></i>
                    </button>
                    <button
                        :value="item.id_envio" 
                        type="button"
                        class="align-text-top me-2 nav-link mb-0" 
                        title="Ver seguimiento de envio" 
                        v-title
                        style="padding:0;"
                        @click="showModalMap($event)"
                        >
                        <i class="ti ti-location fs-19"></i>
                    </button>
                    <button
                        type="button"
                        class="nav-link"
                        style="padding: 0;"
                        :value="item.id_factura"
                        @click="download($event)"
                    >
                        <i class="ti ti-file-download fs-19"></i>
                    </button>
                </div>
            </td>
        </tr>
        <tr style="border: none;padding: 0;">
            <td style="border: none;padding: 0;">
            </td>
            <td style="border: none;padding: 0;">
                
            </td>
            <td style="border: none;padding: 0;">
                
            </td>
             <td style="border: none;padding: 0;">
                
            </td>
            <td style="border: none;padding: 0;">
                
            </td>
            <td style="border: none;padding: 0;">
                <div class="modal modal-blur fade" :class="{'show': showMap == true}"  tabindex="-1"  aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-full-width modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Número de factura: {{factura.nro_factura}}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal"></button>
                        </div>
                            <div class="modal-body">
                                <div v-if="showMap">
                                    <div class="avatar text-uppercase w-100 bg-green-lt">
                                            {{estado_map}}
                                    </div>
                                    <TravelMap class="travel-map" :markers="markers" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td style="border: none;padding: 0;">
            </td>
            <td style="border: none;padding: 0;">
                <div class="modal modal-blur fade" :class="{'show': showEstado == true}" tabindex="-1" aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div v-show="loader" class="div-loader_white" style="margin: 0;"><loader></loader></div>
                            <div class="modal-header">
                                <h5 class="modal-title">Número de factura: {{factura.nro_factura}}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal"></button>
                            </div>
                            <div class="modal-body">
                                <div class="text-muted mb-3 d-flex">
                                    <strong class="me-1">Estados del Envío</strong>
                                </div>
                                <div class="row" v-if="!loader">
                                    <div class="col-md-12 col-sm-12 col-12 mb-3" v-for="(estado, index) in estados" :key="index">
                                        <div class="avatar text-uppercase w-100" :class="{'bg-green-lt': estado.check, 'bg-muted-lt': !estado.check}">
                                            {{estado.title}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</template>


<script>

import TravelMap from "../../map/TravelMap.vue";
const check = (data = [], value, prop = '') => {
    for (let i = 0; i < data.length; i++) {
        for (const key in data[i]) {
            if( key == prop && data[i][key] == value ){
                return data[i];
            }
        }
    }

    return null
}

const LoaderComponent = () => import('../../LoaderComponent.vue');
const AlertMessageComponent = () => import('../../AlertMessageComponent.vue');

import { formatPrice } from '../../../formatPrice';
import { parseNum } from '../../../helpers/calcInvoice';
import { shippingStates } from '../../../helpers/shippingStates';

let estados = shippingStates;

export default {
    name: 'EnviosClientDataTable',
    props: ['data'], 
    data(){
        return {
            getId: '',
            showFactura: false,
            showEstado: false,
            showMap: false,
            modal: '',
            dato: '',
            tasa: '',
            factura: {
                id_factura: '',
                nro_factura: '',
                total_usd: ''
            },
            pago: {
                tipo_pago: '',
                comprobante: ''
            },
            markers: [],
            estado_map: '',
            loader: false,
            activeComponent: '',
             alert: {
                msg: '',
                clss: '' 
            },
            estados: []
        }
    },
    components: {
        loader: LoaderComponent,
        TravelMap
    },
    beforeCreate(){
        this.$nextTick( async function () {
            await this.axios.get(`tasas-monedas`)
            .then((response) => {
                this.tasa = response.data.results.monto_tc
            }).catch(error => {
                console.log(error.response.data);
            })
        })
    },
    methods: {
        async download(e){
            const { value } = e.target.parentNode;
            const data = this.data.filter(item => item.id_factura)[0];
            this.$emit('exporDonwload_pdf', { data, value });
        },
        showModalFactura(e){
            const { value } = e.target.parentNode;
            const { id_factura, nro_factura, total_usd } = check(this.data, value, 'id_factura');
            let total = formatPrice.desctPrice(total_usd, ',');
            let monto_tc = this.tasa;
                monto_tc = monto_tc.replace(',', '.');
                monto_tc = parseNum(monto_tc);

            let total_ves = total * monto_tc;
                total_ves = total_ves.toFixed(2);
                total_ves = total_ves.replace('.', ',');
                total_ves = formatPrice.constPrice(`${total_ves}`, '.', ',');
                
                let totalUSD = formatPrice.constPrice(total_usd, ',', '.');

            this.$emit('sendPagoFactura', {factura: { id_factura, nro_factura, total_usd: totalUSD, total_ves}, tasa: this.tasa})
            //this.$refs.childComponent.init(value);
        },
        showModalMap(e){
            const { value } = e.target.parentNode;
            const { nro_factura, estado_envio, historial_estado: {historial} } = check(this.data, value, 'id_envio');
            this.factura.nro_factura = nro_factura;
            this.loader = true;
            this.showMap = true;
            let markers = [];
            this.id = this.$route.params.id;
            const estado_actual = estados.filter((item) => item.valor == estado_envio)[0];
            this.estado_map = estado_actual.title;
          
            for (let j = 0; j < estados.length; j++) {
                if( estado_actual.valor == estados[j].valor ){
                    if( estados[j].hasOwnProperty('map') ){
                        markers.push({
                            id: estados[j].map.id,
                            position: estados[j].map.position
                        });
                    }
                }
                
            }
            

            this.markers = markers;
            console.log(this.markers)
        },
        showModalEstado(e){
            const { value } = e.target.parentNode;
            const { nro_factura, estado_envio, historial_estado: {historial} } = check(this.data, value, 'id_envio');
            this.factura.nro_factura = nro_factura;
            this.loader = true;
            this.showEstado = true;
            let h_estados = [];
            this.id = this.$route.params.id;

            if( historial.length != 0  )
                h_estados = [...historial];


            const estado_actual = estados.filter((item) => item.valor == estado_envio)[0];

            h_estados.push(estado_actual);
            console.log(h_estados)
        
            for (let i = 0; i < h_estados.length; i++) {
                for (let j = 0; j < estados.length; j++) {
                    if( h_estados[i].valor == estados[j].valor ){
                        estados[j].check = true;
                    }
                    
                }
            }
            this.estados = estados;
            setTimeout(() => {
                this.loader = false;
            }, 2000);
        },
        hiddenModal(){
            this.showFactura = false;
            this.showEstado = false;
            this.showMap= false;
        },
        resp(resp){
            setTimeout(() => {
                this.loader = false;
                this.respAlert(resp.status, resp.message);

                if( resp.status == 200 ){
                    setTimeout(() => {
                        this.showFactura = false;
                        this.factura.id_factura = '';
                        this.factura.nro_factura = '';
                        this.activeComponent = '';
                        this.$store.dispatch('tableadmin/resetInit');
                    }, 4000)
                }
            }, 2000);
        },
        respAlert(status, msg = ''){
            this.alert = {
                msg: msg,
                clss: ( status == 200 ) ? 'updated' : 'error'
            }

            this.activeComponent = AlertMessageComponent;
            return;
        },
    },
    watch: {
        getId: function (){
            this.$emit('getId', this.getId)
        }
    }
}
</script>
<style>
    .modal.show{
        display: block;
    }
</style>

<style lang="scss" scoped>
.travel-map {
  height: 480px;
}
 .modal.show{
        display: block;
    }
</style>