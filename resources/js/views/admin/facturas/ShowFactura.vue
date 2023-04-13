<template>
    <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <div class="card card-lg" v-if="componentRender == ''">
                    <div class="card-body">
                        <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="row mb-4">
                            
                            <div class="col-6">
                                <p class="h3">Detalles</p>
                                <address>
                                    <p>Fecha Factura: <span style="text-transform: uppercase;">{{details.fecha_factura}}</span> </p>
                                    <p>Numero Factura: {{details.nro_factura}}</p>
                                    <p>Tarifa Envio: {{details.tarifa_envio}} USD</p>
                                    <p>Tipo Envio:  <span style="text-transform: uppercase;">{{details.tipo_envio}}</span></p>
                                    <p>Monto de tasa de cambio: {{details.monto_tc}} VES</p>
                                </address>
                            </div>
                            <div class="col-6 text-end">
                                <p class="h3">Cliente</p>
                                <address>
                                    <p>Nombre Completo: {{user.nombres}} {{user.apellidos}}</p>
                                    <p v-if="user.cod_usuario != 1">Código Usuario: {{user.cod_usuario}}</p>
                                    <p>Teléfono: {{user.telefono}}</p>
                                    <p>Cédula: {{user.cedula}}</p>
                                    <p>Dirección: {{user.estado}}. {{user.zona}}, {{user.codigo_postal}} </p>
                                    <p v-if="user.ref_direccion != null">Ref. Dirección: {{user.ref_direccion}}</p>
                                </address>
                            </div>
                        </div>
                        <table class="table table-transparent table-responsive mb-3">
                            <thead>
                                <tr>
                                    <th style="width: 15%;">Nro. WareHouse</th>
                                    <th style="width: 15%;">Nro. Tracking</th>
                                    <th style="width: 30%;">Detalles</th>
                                    <th style="width: 5%;">Cost. Caja</th>
                                    <th style="width: 5%;">Reemp.</th>
                                    <th style="width: 10%;">Cost. Reemp.</th>
                                    <th style="width: 10%;">Cost. x Tracking.</th>
                                    <th style="width: 10%;">Cost. Seguro</th>
                                   
                                    <th style="width: 15%;">SubTotal</th>
                                    <th style="width: 5%;"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in trackings" :key="index">
                                    <td>
                                        <span class=""> {{ item.warehouse }}</span>
                                    </td>
                                    <td>
                                        <span class=""> {{ item.tracking }}</span>
                                    </td>
                                    <td>
                                        <div>
                                            <p><small>Nro. Piezas:</small> <strong>{{ item.num_piezas }}</strong>. <small>Ancho:</small> <strong>{{ item.ancho }}</strong>. <small>Largo:</small> <strong>{{ item.largo }}</strong></p>
                                            <p><small>Alto:</small> <strong>{{ item.alto }}</strong>. <small>Peso (LB):</small> <strong>{{ item.peso }}</strong></p>
                                            <p><small>Pie Cúbico:</small> <strong>{{ item.pie_cubico }}</strong>. <small>Volumen (LB):</small> <strong>{{ item.volumen }}</strong></p>
                                             <p><small>Total Seguro:</small> <strong>{{ item.total_seguro }}</strong></p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td>
                                        <span class="" style="text-transform: uppercase;">{{ item.reempaque }}</span>
                                    </td>
                                    <td>
                                        <span class="" v-if="item.reempaque == 'no'">0.00</span>
                                        <span v-else>{{item.cost_reempaque}}</span>
                                    </td>
                                    <td>
                                        <span class="">{{item.cost_x_tracking}}</span>
                                    </td>
                                    <td>
                                        <span class="" v-if="item.seguro == '0'">0.00</span>
                                        <span class="" v-else>{{ item.seguro }}</span>
                                    </td>
                                    <td>
                                        <span>{{item.subTotal}}</span>
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>
                                <tr v-for="(item) in extras_cajas" :key="item.id_gasto_extra">
                                    <td></td>
                                    <td></td>  
                                    <td>
                                        <div>
                                            <p><small>Tipo de caja:</small> <strong>{{ item.nombre }}</strong>. <small>Costo:</small> <strong>{{ item. monto_gasto_extra }}</strong>. <small>Cantidad:</small> <strong>{{ item.cant }}</strong></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{{item.monto_gasto_extra}}</span>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><span></span></td>
                                    <td>{{item.total_caja}}</td>
                                    <td>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><p>Gastos Extras</p></td>
                                    <td>
                                        {{total_gastos_extras}}
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><p>Total USD</p></td>
                                    <td>{{total_usd}}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><p>Total VES</p></td>
                                    <td>{{total_ves}}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex align-items-center mt-5">
                            <div class=" m-0 ms-auto" style="width: 330px;">
                                <div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" name="nro_factura" v-model="nro_factura" id="nro_factura" disabled >
                                    <label for="nro_factura">Nro. Factura</label>
                                </div>
                                <div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" name="nro_container" v-model="nro_container" id="nro_container"  disabled >
                                    <label for="nro_container">Nro. Container</label>
                                </div>
                            </div>
                        </div>
                         <div class="d-flex align-items-center mt-3">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../components/Error404Component.vue');

import BtnVolver from '../../../components/BtnVolver.vue';
import {formatPrice} from '../../../formatPrice.js';

const parseIntOrFloat = (valor) => valor % 1 == 0 ? parseInt(valor)  : parseFloat(valor);

export default {
    name: 'ShowFactura',

    data() {
        return {
            componentRender: LoaderComponent,
            activeComponent: '',
            user: {},
            details: {},
            trackings: [],
            almacen: [],
            dato: {},
            show: false,
            showConfirmeFactura: false,
            title: '',
            total_usd: '0.00',
            total_ves: '0,00',
            gastos_extra: [],
            cajas: [],
            caja: '',
            extras_cajas: [],
            cant_caja: 1,
            cost_reemp_track: '',
            cost_x_track: '',
            nro_factura: '',
            nro_container: '',
            total_gastos_extras: '0.00',
            alert: {}
        };
    },
    beforeCreate(){
        this.$nextTick(async function () {
            if( Object.keys(this.$route.params).length && this.$route.params.hasOwnProperty('id') ){

                this.axios.get(`facturas/${this.$route.params.id}`).then( (response) => {
                    
                    if(response.data.result != null){
                        const extras = response.data.result.extras;
                        console.log(response.data)

                        let { total_usd, total_ves, nro_container, nro_factura, gastos_extras, fecha_creado, tarifa_envio, tipo_envio, estado, id_factura, fecha_pago, pago} = response.data.result;

                        let { monto_tc, fecha_tc } = response.data.tasa;
                        monto_tc = monto_tc.replace(',', '.');
                        monto_tc = parseIntOrFloat(monto_tc);

                        this.user = JSON.parse(response.data.result.cliente);
                    

                        let tasa = response.data.result.monto_tc;
                            tasa = tasa.replace(',', '.');
                            tasa = parseIntOrFloat(tasa)

                        let fecha_tasa = response.data.result.fecha_tc;

                        if( monto_tc > tasa ){
                            tasa = monto_tc;
                            fecha_tasa = fecha_tc;
                        }

                        if( fecha_pago == null){
                            total_usd = parseIntOrFloat(total_usd);
                            total_ves = total_usd * tasa;
                            total_ves = total_ves.toFixed(2);
                            total_ves = total_ves.replace('.', ',');

                            tasa = String(tasa)
                            tasa = tasa.replace('.', ',');
                        }

                        
                        
                        this.details = {
                            id_factura,
                            estado,
                            fecha_factura: fecha_creado,
                            nro_factura: nro_factura,
                            tarifa_envio: formatPrice.constPrice(tarifa_envio,',','.'),
                            tipo_envio: tipo_envio,
                            monto_tc: formatPrice.constPrice(`${tasa}`, '.', ','),
                            fecha_tc: fecha_tasa,
                            fecha_pago
                        }

                        if(  pago != null && !Array.isArray(pago) ){
                            this.details.monto_tc = pago.tasa
                        }

                        this.nro_factura = nro_factura;
                        this.nro_container = nro_container;
                        this.total_usd = formatPrice.constPrice(`${total_usd}`,',','.') ;
                        this.total_ves = formatPrice.constPrice(`${total_ves}`,'.',',');
                        this.total_gastos_extras = formatPrice.constPrice(gastos_extras, ',', '.');


                        for (let i = 0; i < extras.length; i++) {
                            let estra = JSON.parse(extras[i].detalles);
                                estra.monto_gasto_extra = formatPrice.constPrice(estra.monto_gasto_extra, ',', '.');
                                estra.total_caja = formatPrice.constPrice(estra.total_caja, ',', '.');
                            this.extras_cajas.push(estra);
                        }

                        const extrasCajas = response.data.extras;
                        for (let i = 0; i < extrasCajas.length; i++) {
                            if( extrasCajas[i].tipo == 'CAJA' ){
                                const {id_gasto_extra, nombre, monto_gasto_extra} = extrasCajas[i];
                                this.cajas.push(
                                    {
                                        id_gasto_extra,
                                        nombre,
                                        monto_gasto_extra: formatPrice.constPrice(monto_gasto_extra, ',', '.')
                                    }
                                )
                            }
                        }

                        const trackings = response.data.result.trackings;
                        for (let i = 0; i < trackings.length; i++) {
                            let tracking = {...trackings[i]}
                                tracking.total_seguro = formatPrice.constPrice(tracking.total_seguro, ',', '.')
                            tracking.seguro = formatPrice.constPrice(tracking.seguro,',', '.');
                                tracking.subTotal = formatPrice.constPrice(tracking.sub_total,',', '.')
                                //tracking.subTotal = tracking.sub_total;

                            if( tracking.hasOwnProperty('cost_x_tracking') ){
                                tracking.cost_x_tracking = formatPrice.constPrice(tracking.cost_x_tracking, ',', '.');
                                if(this.cost_x_track == '') this.cost_x_track = tracking.cost_x_tracking
                            }

                            if( tracking.hasOwnProperty('cost_reempaque') ){
                                tracking.cost_reempaque = formatPrice.constPrice(tracking.cost_reempaque, ',', '.')
                                if(this.cost_reemp_track == '') this.cost_reemp_track = tracking.cost_reempaque
                            }

                            this.trackings.push(tracking);
                            
                        }

                        this.componentRender = '';
                    }else{
                        this.componentRender = Error404;
                    }

                }).catch((error) => {
                    console.log(error.response.data);
                    this.componentRender = Error404;
                })

                this.componentRender = '';
            }else{
                this.componentRender = Error404;
            }
        })
    },
    components: {
        BtnVolver,
    },
};
</script>