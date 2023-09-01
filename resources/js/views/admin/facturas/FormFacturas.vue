<template>
    <div class="container-xl">
       <div class="row row-cards">
        
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <form name="createFactura" @submit.prevent="guardarFactura()"  enctype="multipart/form-data" class="card card-lg" v-if="componentRender == ''">
                    <div class="card-body">
                        <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="row mb-4">
                            <div class="col-6">
                                <p class="h3">Detalles</p>
                                <address>
                                    <p>Tipo de Envio: <span style="text-transform: uppercase;">{{details.tipo_envio}}</span> </p>
                                    <p>Tarifa de Envio: {{details.tarifa}} USD</p>
                                    <p>Tasa del Dolar: {{details.tasa}} VES</p>
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
                        <div class="w-100 mb-4">
                            <div class="row">
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group mb-3 ">
                                                <label class="form-label">Cajas</label>
                                                <div>
                                                    <select class="form-select" v-model="caja">
                                                        <option v-for="(item, index) in cajas" :key="index" :value="item.id_gasto_extra">{{item.nombre}} - ${{item.monto_gasto_extra}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row col-6" style="padding-left: 0;">
                                            <div class="form-group mb-3 col-6">
                                                <label class="form-label">Cant.</label>
                                                <input type="number" class="form-control" name="example-password-input" placeholder="Cantidad Caja" v-model="cant_caja">
                                            </div>
                                            <div class="form-group mb-3 col-6" style="padding-left: 0;">
                                                <label class="form-label" style="opacity:0;">agegar</label>
                                                <div>
                                                    <button type="button" class="btn btn-light" @click="addCaja">
                                                        Agregar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group mb-3 ">
                                                <label class="form-label">Cost Reemp. Tracking</label>
                                                <input type="text" class="form-control" name="example-password-input" placeholder="Costo Reempaque de tracking" v-model="cost_reemp_track" @keyup="changeCosto_RT($event)">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group mb-3 ">
                                                <label class="form-label" style="opacity:0;">----</label>
                                                <div>
                                                    <button type="button" class="btn btn-light" @click="addCosto_RT">
                                                        Agregar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group mb-3 ">
                                                <label class="form-label">Costo x Tracking</label>
                                                <input type="text" class="form-control" name="example-password-input" placeholder="Costo por tracking" v-model="cost_x_track" @keyup="changeCosto_XT($event)">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group mb-3 ">
                                                <label class="form-label" style="opacity:0;">----</label>
                                                <div>
                                                    <button type="button" class="btn btn-light" @click="addCosto_XT">
                                                        Agregar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                        <div class="btn-list flex-nowrap">
                                            <button v-if="item.reempaque == 'si'" class="btn-acticon_spalert" type="button" id='paquete' :value="item.id_tracking" @click="showModal($event)" title="Reempacar" v-title>
                                                <i class="ti ti-package" style="font-size: 21px;"></i>
                                            </button>
                                        </div>
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
                                        <button class="btn-acticon_spalert" type="button" :value="item.id_gasto_extra" @click="deleteCajaExtra($event)" title="Elimnar Caja" v-title>
                                            <i class="ti ti-trash" style="font-size: 21px;"></i>
                                        </button>
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
                                        <input type="text" class="form-control" v-model="total_gastos_extras" name="gastos_extras" style="padding: 0.4375rem 5px;" @keyup="changeTotalGastosExtras($event)" @change="addTotalGastosExtras">
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
                                    <input type="text" class="form-control" name="nro_factura" v-model="nro_factura" id="nro_factura"  >
                                    <label for="nro_factura">Nro. Factura</label>
                                </div>
                                <div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" name="nro_container" v-model="nro_container" id="nro_container"  >
                                    <label for="nro_container">Nro. Container</label>
                                </div>
                                <div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" name="tarifa" v-model="details.tarifa" id="tarifa" @keyup="keyUpTarifa($event)" @change="changeTarifa" >
                                    <label for="tarifa">Tarifa de Envio ( {{details.tipo_envio}} )</label>
                                </div>
                            </div>
                        </div>
                         <div class="d-flex align-items-center mt-3">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                            <button type="submit" class="btn btn-info ms-auto">
                                <span>Guardar</span>
                            </button>
                        </div>
                    </div>
                </form>
                <div class="modal modal-blur fade" id="modal-success" tabindex="-1" :class="{'show': showConfirmeFactura == true}" aria-hidden="true">
                    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenConfirmeFactura()"></button>
                        <div class="modal-status bg-success"></div>
                        <div class="modal-body text-center py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-green icon-lg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M9 12l2 2l4 -4"></path></svg>
                            <h3>¿Estás seguro de crear la factura?</h3>
                            <div class="text-muted">
                                Para crear la factura, asegurate que los datos esten correctos...
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="w-100">
                            <div class="row">
                                <div class="col">
                                    <button type="button" class="btn w-100" data-bs-dismiss="modal" @click="hiddenConfirmeFactura()">
                                        Cancelar
                                    </button>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal" @click="sendFactura">
                                        Crear Factura
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                 <form class="modal modal-blur fade" :class="{'show': show == true}"  id="paquete" tabindex="-1" aria-modal="true" role="dialog" >
                        <div name="paquete"  class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Reempacar tracking: {{title}}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal()"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-floating mb-3">
                                        <input type="text" v-validate="'required|numeric'" name="ancho" class="form-control" :class="{'is-invalid': errors.first('ancho')}" id="ancho" v-model="dato.ancho" 
                                        :data-vv-validate-on="'change'">
                                        <label for="ancho">Ancho</label>
                                        <div v-if="errors.has('ancho')" class="invalid-feedback">{{errors.first('ancho')}}</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" v-validate="'required|numeric'" name="alto" class="form-control" :class="{'is-invalid': errors.first('alto')}" id="alto" v-model="dato.alto" 
                                        :data-vv-validate-on="'change'">
                                        <label for="alto">Alto</label>
                                        <div v-if="errors.has('alto')" class="invalid-feedback">{{errors.first('alto')}}</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" v-validate="'required|numeric'" name="largo" class="form-control" :class="{'is-invalid': errors.first('largo')}" id="largo" v-model="dato.largo" 
                                        :data-vv-validate-on="'change'">
                                        <label for="largo">Largo</label>
                                        <div v-if="errors.has('largo')" class="invalid-feedback">{{errors.first('largo')}}</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" v-validate="'required'" name="peso" class="form-control" :class="{'is-invalid': errors.first('peso')}" id="largo" v-model="dato.peso" 
                                        :data-vv-validate-on="'change'">
                                        <label for="peso">Peso</label>
                                        <div v-if="errors.has('peso')" class="invalid-feedback">{{errors.first('peso')}}</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" v-validate="'required|numeric'" name="num_piezas" class="form-control" :class="{'is-invalid': errors.first('num_piezas')}" id="largo" v-model="dato.num_piezas" 
                                        :data-vv-validate-on="'change'">
                                        <label for="num_piezas">Numero de Piezas</label>
                                        <div v-if="errors.has('num_piezas')" class="invalid-feedback">{{errors.first('num_piezas')}}</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" name="total_seguro" class="form-control" id="total_seguro" v-model="dato.total_seguro" @keyup="changeTotalSeguro($event)">
                                        <label for="total_seguro">Total Seguro</label>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal()">Cerrar</button>
                                    <button type="button" id="paquete" class="btn btn-primary" data-bs-dismiss="modal" @click="saveDataPaquete">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
       </div>
    </div>
</template>
<script>
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../components/Error404Component.vue');
const AlertMessageComponent = () => import('../../../components/AlertMessageComponent.vue');

import BtnVolver from '../../../components/BtnVolver.vue';
import {formatPrice} from '../../../formatPrice.js';
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
export default {
    name: 'FormFacturas',

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
    components: {
        BtnVolver,
    },
    watch: {
        trackings(){
            this.calcSubTotal()
        }
    },
    beforeCreate(){
        this.$nextTick(async function () {
            if( Object.keys(this.$route.query).length !== 0 && this.$route.query.hasOwnProperty('id')){
                let request = this.$route.query;
                console.log(this.$route.query)
                if( !Array.isArray(request.id) ) request.id = [request.id];
                this.axios.get('almacen/paquetes/data', {params : this.$route.query}).then(response => {
                    console.log(response.data)
                    const cliente = response.data.result.cliente;
                    const almacen = response.data.result.almacen;

                    if( cliente.tarifa_maritimo != null && cliente.tarifa_aereo != null ){
                         this.user = {
                            usuario_id: cliente.usuario_id,
                            cod_usuario: cliente.cod_usuario,
                            nombres: cliente.nombres,
                            apellidos: cliente.apellidos,
                            cedula: cliente.cedula,
                            telefono: cliente.telefono,
                            estado: cliente.estado_ve,
                            zona: cliente.zona,
                            ref_direccion: cliente.ref_direccion,
                            codigo_postal: cliente.codigo_postal
                        };

                        this.details = {
                            tipo_envio: almacen[0].tipo_envio,
                            tarifa: (almacen[0].tipo_envio == 'aereo') ? cliente.tarifa_aereo : cliente.tarifa_maritimo,
                            tasa: formatPrice.constPrice(response.data.result.tasaDolar.monto_tc, '.', ','),
                            fecha_tasa: response.data.result.tasaDolar.fecha_tc
                        }

                        this.details.tarifa = formatPrice.constPrice(this.details.tarifa, ',', '.')

                        const extras = response.data.result.extras;

                        for (let i = 0; i < extras.length; i++) {
                            if( extras[i].tipo == 'CAJA' ){
                                const { id_gasto_extra, nombre, monto_gasto_extra} = extras[i];
                                this.cajas.push(
                                    {
                                        id_gasto_extra,
                                        nombre,
                                        monto_gasto_extra: formatPrice.constPrice(monto_gasto_extra, ',', '.')
                                    }
                                )
                            }
                        }

                        let newTrancking = [];

                        for (let i = 0; i < almacen.length; i++) {
                            const item = {
                                id_almacen: almacen[i].id_almacen,
                                id_solicitud: almacen[i].id_solicitud,
                                warehouse: almacen[i].warehouse
                            }

                            const trackings = almacen[i].trackings;
                            
                            for (let j = 0; j < trackings.length; j++) {
                                trackings[j].warehouse = almacen[i].warehouse;
                                trackings[j].total_seguro = formatPrice.constPrice(trackings[j].total_seguro, ',', '.');
                                if( !trackings[j].seguro.includes(',') && !trackings[j].seguro.includes('.') ){
                                    trackings[j].seguro = trackings[j].seguro+'.00'
                                }else{
                                    trackings[j].seguro = formatPrice.constPrice(trackings[j].seguro, ',', '.');
                                }
                                newTrancking.push(trackings[j])
                            }

                            this.almacen.push(item);
                        }
                        
                        //cALCULO para determinar que tracking y cuantos son para reempaque
                        let cant_trancking_reempaque = 0;
                        let post_extras = 0;
                        let post_array_trackings_reempaque = [];
                        let cant_tracking = 0;
                        let post_extra_tracking = 0;

                        console.log(newTrancking, 'sdjsdo')
                
                        for (let i = 0; i < newTrancking.length; i++) {
                            for (let j = 0; j < extras.length; j++) {
                                if( extras[j].accion == 'POR-DEFECTO' && newTrancking[i].reempaque == 'si' && extras[j].tipo == 'REEMPAQUE' && extras[j].activo == 1){
                                    if( extras[j].variable_cond == 'TRACKING' ){
                                        cant_trancking_reempaque++;
                                        post_extras = j;
                                        post_array_trackings_reempaque.push(i);
                                    }
                                }
                                if( newTrancking[i].reempaque == 'si' && extras[j].accion == 'MANUAL' && extras[j].tipo == 'REEMPAQUE' && extras[j].activo == 1){
                                    newTrancking[i].cost_reempaque = formatPrice.constPrice('0.00', ',', '.');;
                                    this.cost_reemp_track = formatPrice.constPrice(extras[j].monto_gasto_extra, ',', '.');
                                }
                                if( extras[j].accion == 'POR-DEFECTO' && extras[j].tipo == 'TRACKING' && extras[j].activo == 1 ){
                                    cant_tracking++;
                                    post_extra_tracking = j;
                                }
                            }
                        }

                        //Agregar const reempaque segun condicion en tracking
                        for (let i = 0; i < post_array_trackings_reempaque.length; i++) {
                            const { condicion, cant_cond, monto_cond, monto_gasto_extra, tipo_cond } = extras[post_extras];
                            let cost_reempaque =  monto_gasto_extra;

                            if( condicion == 1 &&  (tipo_cond == 'MAYOR' && post_array_trackings_reempaque.length > cant_cond) || (tipo_cond == 'MENOR' && post_array_trackings_reempaque.length < cant_cond)){
                                cost_reempaque = monto_cond;
                            }

                            newTrancking[post_array_trackings_reempaque[i]].cost_reempaque = formatPrice.constPrice(cost_reempaque, ',', '.');
                            this.cost_reemp_track = formatPrice.constPrice(cost_reempaque, ',', '.');
                        }
                        
                        let tarifa = formatPrice.desctPrice(this.details.tarifa, ',');
                        //Calcular SubTotal
                        for (let i = 0; i < newTrancking.length; i++) {
                            let cost_x_tracking = 0;
                            let volumen = newTrancking[i].volumen;
                            let pie_cubico = newTrancking[i].pie_cubico;
                            let vol = 3.33;
                            let pie = 1.37;
                            let peso = newTrancking[i].peso;
                            let reempaque = 0;
                            let seguro = 0;
                            let xTarifa = 0;


                            
                            if( cant_tracking > 0 ){
                                const { condicion, cant_cond, monto_cond, monto_gasto_extra, tipo_cond } = extras[post_extra_tracking];
                                cost_x_tracking = monto_gasto_extra;

                                if( condicion == 1 &&  (tipo_cond == 'MAYOR' && cant_tracking > cant_cond) || (tipo_cond == 'MENOR' && cant_tracking < cant_cond)){
                                    cost_x_tracking = monto_cond;
                                }
                            } 


                            if( cost_x_tracking % 1 == 0 ){
                                cost_x_tracking = parseInt(cost_x_tracking)
                            }else{
                                cost_x_tracking = parseFloat(cost_x_tracking)
                            }

                            //cost_x_tracking = cost_x_tracking.toFixed(2);

                            if( tarifa % 1 == 0 ){
                                tarifa = parseInt(tarifa)
                            }else{
                                tarifa = parseFloat(tarifa)
                            }

                            if( newTrancking[i].seguro % 1 == 0 ){
                                seguro = parseInt(newTrancking[i].seguro)
                            }else{
                                seguro = parseFloat(newTrancking[i].seguro)
                            }


                            if( volumen % 1 == 0 ){
                                volumen = parseInt(volumen)
                            }else{
                                volumen = parseFloat(volumen)
                            }

                            if( peso % 1 == 0 ){
                                peso = parseInt(peso)
                            }else{
                                peso = parseFloat(peso)
                            }

                            if( pie_cubico % 1 == 0 ){
                                pie_cubico = parseInt(pie_cubico)
                            }else{
                                pie_cubico = parseFloat(pie_cubico)
                            }

                            if( pie_cubico < pie ){
                                pie_cubico = pie;
                                newTrancking[i].pie_cubico = pie.toFixed(2);
                            }

                            if( vol > volumen ){
                                volumen = vol;
                                newTrancking[i].volumen = vol;
                            }

                            if( volumen > peso ){
                                volumen = volumen;
                            }
                            if( peso > vol && peso > volumen ){
                                volumen = peso;
                            }

                            console.log('volumen', volumen)

                            if( this.details.tipo_envio == 'maritimo'){
                                xTarifa = pie_cubico;
                            }else{
                                xTarifa = volumen;
                                console.log('volumen', volumen)
                            }

                            

                            if ( newTrancking[i].reempaque == 'si'  ){
                                reempaque = newTrancking[i].cost_reempaque;
                            }

                            if( reempaque % 1 == 0 ){
                                reempaque = parseInt(reempaque)
                            }else{
                                reempaque = parseFloat(reempaque)
                            }
                            

                             console.log(xTarifa)
                            let cost = xTarifa * tarifa;
                            //cost_aereo  = cost_aereo.toFixed(2);
                            //console.log(cost_aereo)

                            let subTotal = (cost + seguro) + (reempaque + cost_x_tracking);
                            subTotal = subTotal.toFixed(2);
                        

                            newTrancking[i].subTotal = formatPrice.constPrice(`${subTotal}`, ',', '.');
                            cost_x_tracking = cost_x_tracking.toFixed(2);
                            newTrancking[i].cost_x_tracking = formatPrice.constPrice(`${cost_x_tracking}`, ',', '.');
                            this.cost_x_track = newTrancking[i].cost_x_tracking;
                            //console.log(subTotal)
                            
                            //console.log(formatPrice.constPrice(''+subTotal, ',', '.'))
                            //console.log('ahh', formatPrice.constPrice(subTotal, ',', '.'));
                            
                        }

                        console.log(newTrancking)
                        this.trackings = newTrancking;
                        console.log(this.almacen)
                        this.componentRender = '';
                    }
                   
            
                }).catch(error => {
                    console.log(error.response.data)
                    this.componentRender = Error404;
                });
            }else{
                this.componentRender = Error404;
            }
        })  
    },
    methods: {
        showModal(e){
            const { value } = e.target.parentNode;
            let { tracking, id_tracking, alto, ancho, largo, peso, num_piezas, volumen, pie_cubico, total_seguro, seguro} = check(this.trackings, value, 'id_tracking');
            this.title = tracking;
             this.dato = {
                id_tracking,
                alto,
                ancho,
                largo,
                peso,
                num_piezas,
                volumen,
                pie_cubico,
                seguro,
                total_seguro
            };
            console.log(tracking, id_tracking)
            this.show = true;
        },
        hiddenModal(){
            this.show = false;
        },
        hiddenConfirmeFactura(){
            this.showConfirmeFactura = false;
        },
        saveDataPaquete(){
             this.$validator.validate().then(valid => {
                if( valid ){
                    const tracking = {...this.dato};
                    let tarifa = formatPrice.desctPrice(this.details.tarifa, ',');
                    tracking.total_seguro = formatPrice.desctPrice(tracking.total_seguro, ',');

                    tracking.pie_cubico = (tracking.ancho * tracking.alto * tracking.largo ) / 1728;
                    tracking.pie_cubico = tracking.pie_cubico.toFixed(2);
                    tracking.volumen = (tracking.ancho * tracking.alto * tracking.largo ) / 166;
                    tracking.volumen = tracking.volumen.toFixed(2);
                    tracking.seguro = ( tracking.total_seguro * 10 ) / 100;
                   
                    //tracking.seguro = tracking.seguro.toFixed(2);

                    let volumen = tracking.volumen;
                    let pie_cubico = tracking.pie_cubico;
                    let vol = 3.33;
                    let pie = pie_cubico; //1.37;
                    let peso = tracking.peso;
                    let reempaque = 0;
                    let seguro = tracking.seguro;
                    let xTarifa = 0;

                    if( tarifa % 1 == 0 ){
                        tarifa = parseInt(tarifa)
                    }else{
                        tarifa = parseFloat(tarifa)
                    }

                    if( seguro % 1 == 0 ){
                        seguro = parseInt(seguro)
                    }else{
                        seguro = parseFloat(seguro)
                    }

                    if( volumen % 1 == 0 ){
                        volumen = parseInt(volumen)
                    }else{
                        volumen = parseFloat(volumen)
                    }

                    if( peso % 1 == 0 ){
                        peso = parseInt(peso)
                    }else{
                        peso = parseFloat(peso)
                    }


                    if( pie_cubico % 1 == 0 ){
                        pie_cubico = parseInt(pie_cubico)
                    }else{
                        pie_cubico = parseFloat(pie_cubico)
                    }

                    if( pie_cubico < pie ){
                        pie_cubico = pie;
                        tracking.pie_cubico = pie.toFixed(2);
                    }

                    if( vol > volumen ){
                        volumen = vol;
                        tracking.volumen = vol;
                    }

                    if( volumen > peso ){
                        volumen = volumen;
                    }
                    if( peso > vol && peso > volumen ){
                        volumen = peso;
                    }

                    if( this.details.tipo_envio == 'maritimo'){
                        xTarifa = pie_cubico;
                    }else{
                        xTarifa = volumen;
                    }



                    for (let i = 0; i < this.trackings.length; i++) {
                        if( this.trackings[i].id_tracking === tracking.id_tracking){
                            let cost_x_tracking = 0;
                            if( this.trackings[i].cost_reempaque % 1 == 0 ){
                                reempaque = parseInt(this.trackings[i].cost_reempaque)
                            }else{
                                reempaque = parseFloat(this.trackings[i].cost_reempaque)
                            }

                            if( this.trackings[i].cost_x_tracking % 1 == 0 ){
                                cost_x_tracking = parseInt(this.trackings[i].cost_x_tracking)
                            }else{
                                cost_x_tracking = parseFloat(this.trackings[i].cost_x_tracking)
                            }

                            let cost = xTarifa * tarifa;
                            console.log('cost', cost)

                            let subTotal = (cost + seguro) + ( reempaque + cost_x_tracking );
                            subTotal = subTotal.toFixed(2);
                            console.log('cost', cost)
                          

                            this.trackings[i].alto = tracking.alto;
                            this.trackings[i].ancho = tracking.ancho;
                            this.trackings[i].largo = tracking.largo;
                            this.trackings[i].peso = tracking.peso;
                            this.trackings[i].num_piezas = tracking.num_piezas;
                            this.trackings[i].pie_cubico = tracking.pie_cubico;
                            this.trackings[i].volumen = tracking.volumen;
                            this.trackings[i].total_seguro = formatPrice.constPrice(`${tracking.total_seguro}`, ',', '.');
                            this.trackings[i].seguro = formatPrice.constPrice(`${tracking.seguro.toFixed(2)}`, ',', '.');
                            this.trackings[i].subTotal = formatPrice.constPrice(`${subTotal}`, ',', '.');
                            break;

                        }
                        
                    }
                    
                    this.show = false;
                    this.dato = {}
                    this.calcSubTotal()
                }
            })
        },
        changeTotalSeguro(e){
            const re = formatPrice.constPrice(e.target.value, ',', '.');
            this.dato.total_seguro = re;

            //if( e.target.id == 'total_seguro')  this.dato.total_seguro = re;
            //else this.trackings[e.target.id].total_seguro = re;
       },
       changeCosto_RT(e){
            this.cost_reemp_track = formatPrice.constPrice(e.target.value, ',', '.');
       },
        addCosto_RT(){
            if( this.cost_reemp_track != '' ){
                this.addCostoXtCostoRT(formatPrice.desctPrice(this.cost_reemp_track, ','), 'cost_reempaque');
            }else{
                alert('debe agregar un precio, no debe ir vacio');
            }
       },
       changeCosto_XT(e){
            this.cost_x_track = formatPrice.constPrice(e.target.value, ',', '.');
       },
       addCosto_XT(){
            if( this.cost_x_track != '' ){
                this.addCostoXtCostoRT(formatPrice.desctPrice(this.cost_x_track, ','), 'cost_x_tracking');
            }else{
                alert('debe agregar un precio, no debe ir vacio');
            }
       },
       changeTotalGastosExtras(e){
            this.total_gastos_extras = formatPrice.constPrice(e.target.value, ',', '.');
       },
       keyUpTarifa(e){
        this.details.tarifa = formatPrice.constPrice(e.target.value, ',', '.');
       },
       changeTarifa(){
            console.log('this.details.tarifa', this.details.tarifa);
            let tarifa = formatPrice.desctPrice(this.details.tarifa, ',');

            if( tarifa % 1 == 0 ){
                tarifa = parseInt(tarifa)
            }else{
                tarifa = parseFloat(tarifa)
            }

            for (let i = 0; i < this.trackings.length; i++) {
                let { pie_cubico, volumen, reempaque, cost_x_tracking, seguro, peso  } = {...this.trackings[i]};
                cost_x_tracking = formatPrice.desctPrice(cost_x_tracking, ',');
                seguro = formatPrice.desctPrice(seguro, ',');
                let xTarifa = 0;
                let cost_reempaque = 0;
                //console.log(pie_cubico, volumen, reempaque, cost_x_tracking, seguro, tarifa)

                if( peso % 1 == 0 ){
                    peso = parseInt(peso)
                }else{
                    peso = parseFloat(peso)
                }

                if( seguro % 1 == 0 ){
                    seguro = parseInt(seguro)
                }else{
                    seguro = parseFloat(seguro)
                }

                if( volumen % 1 == 0 ){
                    volumen = parseInt(volumen)
                }else{
                    volumen = parseFloat(volumen)
                }

                if( pie_cubico % 1 == 0 ){
                    pie_cubico = parseInt(pie_cubico)
                }else{
                    pie_cubico = parseFloat(pie_cubico)
                }


                if( peso > volumen ){
                    volumen = peso;
                }

                if( reempaque == 'si' ){
                    cost_reempaque = formatPrice.desctPrice(this.trackings[i].cost_reempaque, ',');
                }

                if( cost_reempaque % 1 == 0 ){
                    cost_reempaque = parseInt(cost_reempaque)
                }else{
                    cost_reempaque = parseFloat(cost_reempaque)
                }

                if( cost_x_tracking % 1 == 0 ){
                    cost_x_tracking = parseInt(cost_x_tracking)
                }else{
                    cost_x_tracking = parseFloat(cost_x_tracking)
                }

                if( this.details.tipo_envio == 'maritimo'){
                    xTarifa = pie_cubico;
                }else{
                    xTarifa = volumen;
                }

                let cost = xTarifa * tarifa;
                let subTotal = (cost + seguro) + ( cost_reempaque + cost_x_tracking );
                subTotal = subTotal.toFixed(2);

                this.trackings[i].subTotal = formatPrice.constPrice(`${subTotal}`, ',', '.');
            }

            this.calcSubTotal();
       },
       addTotalGastosExtras(){
            this.calcSubTotal();
       },
        addCaja(){
            if( !isNaN(this.cant_caja) && this.cant_caja % 1 == 0 && this.cant_caja > 0){

                if( this.caja != '' ){
                    const { id_gasto_extra, nombre, monto_gasto_extra } = this.cajas.filter( caja => caja.id_gasto_extra  == this.caja)[0];
                    let monto = formatPrice.desctPrice(monto_gasto_extra, ',');
                    let cant = parseInt(this.cant_caja);
                    let  total_caja = 0;

                    if( monto % 1 == 0 ){
                        monto = parseInt(monto)
                    }else{
                        monto= parseFloat(monto)
                    }

                    const check = this.extras_cajas.filter( caja => caja.id_gasto_extra == this.caja )

                    if( check.length == 0 ){
                        total_caja = cant * monto;
                        total_caja = total_caja.toFixed(2);
                        this.extras_cajas.push({
                            id_gasto_extra, 
                            nombre, 
                            monto_gasto_extra,
                            cant: cant,
                            total_caja: formatPrice.constPrice(total_caja, ',', '.')
                        });
                    }else{
                        for (let i = 0; i < this.extras_cajas.length; i++) {
                           if( this.extras_cajas[i].id_gasto_extra == this.caja ){
                                cant = cant + this.extras_cajas[i].cant;
                                total_caja = cant * monto;
                                total_caja = total_caja.toFixed(2);
                                this.extras_cajas[i].cant = cant;
                                this.extras_cajas[i].total_caja = formatPrice.constPrice(total_caja, ',', '.');
                                break;
                           }
                        }
                    }

                    this.calcSubTotal();
                }else{
                    alert('Debe Seleccionar un tipo de caja')
                }
                
            }else{
                alert('Por favor debe agregar una cantidad, solo numeros enteros y mayor a cero')
            }
           
        },
        deleteCajaExtra(e){
            const { value } = e.target.parentNode;
            let newExtrasCajas = [];

            for (let i = 0; i < this.extras_cajas.length; i++) {
               if( this.extras_cajas[i].id_gasto_extra != value ){
                    newExtrasCajas.push(this.extras_cajas[i]);
               }
            }

            this.extras_cajas = newExtrasCajas;
            this.calcSubTotal();
        },
       addCostoXtCostoRT(precio, field){
            for (let i = 0; i < this.trackings.length; i++) {
                let newSubTotal = 0;
                let subTotal = 0;
                
                for (const key in this.trackings[i]) {
                    if( key == field ){
                        let valorOld  = formatPrice.desctPrice(this.trackings[i][key], ',');
                        let newPrecio = precio;
                        if( key == 'cost_reempaque' && this.trackings[i].reempaque == 'no'){
                            newPrecio = 0;
                            valorOld = 0;
                        }

                        if( valorOld % 1 == 0 ){
                            valorOld = parseInt(valorOld)
                        }else{
                            valorOld = parseFloat(valorOld)
                        }

                        subTotal = formatPrice.desctPrice(this.trackings[i].subTotal, ',');
                        if( subTotal % 1 == 0 ){
                            subTotal = parseInt(subTotal)
                        }else{
                            subTotal = parseFloat(subTotal)
                        }

                        if( newPrecio % 1 == 0 ){
                            newPrecio = parseInt(newPrecio)
                        }else{
                            newPrecio = parseFloat(newPrecio)
                        }

                        subTotal = subTotal - valorOld;
                        newSubTotal = subTotal + newPrecio;

                        newSubTotal =  newSubTotal.toFixed(2)
                        
                        this.trackings[i].subTotal = formatPrice.constPrice(`${newSubTotal}`, ',', '.');
                        newPrecio = newPrecio.toFixed(2);

                        this.trackings[i][key] = formatPrice.constPrice(`${newPrecio}`, ',', '.');
                    }
                }
                
            }

           this.calcSubTotal();
       },
       calcSubTotal(){
            const tranckins = [...this.trackings]; 
            let acum_subtotal = 0;
            let acum_extras_cajas = 0;
            let total_gastos_extras = this.total_gastos_extras;

            total_gastos_extras = formatPrice.desctPrice(total_gastos_extras, ',');

            if( total_gastos_extras % 1 == 0 ){
                total_gastos_extras = parseInt(total_gastos_extras)
            }else{
                total_gastos_extras = parseFloat(total_gastos_extras)
            }

            for (let i = 0; i < tranckins.length; i++) {
                let { subTotal } = tranckins[i];
                subTotal = formatPrice.desctPrice(subTotal, ',');
                if( subTotal % 1 == 0 ){
                    subTotal = parseInt(subTotal)
                }else{
                    subTotal = parseFloat(subTotal)
                }

                acum_subtotal = acum_subtotal + subTotal;
            }

            if( this.extras_cajas.length > 0 ){
                for (let i = 0; i < this.extras_cajas.length; i++) {
                    let { total_caja  } = this.extras_cajas[i];

                    total_caja = formatPrice.desctPrice(total_caja, ',');
                    if( total_caja % 1 == 0 ){
                        total_caja = parseInt(total_caja)
                    }else{
                        total_caja = parseFloat(total_caja)
                    }

                    acum_extras_cajas = acum_extras_cajas + total_caja;
                }
            }

            acum_subtotal = (acum_subtotal + acum_extras_cajas) + total_gastos_extras;
            acum_subtotal = acum_subtotal.toFixed(2)

            this.total_usd = formatPrice.constPrice(`${acum_subtotal}`, ',', '.');

            let tasa = this.details.tasa;
                tasa = formatPrice.desctPrice(tasa, '.')
                tasa = tasa.replace(',', '.');
                if( tasa % 1 == 0 ){
                    tasa = parseInt(tasa)
                }else{
                    tasa = parseFloat(tasa)
                }

                tasa = tasa.toFixed(2);
                let tota_ves = tasa * acum_subtotal;
                    tota_ves = tota_ves.toFixed(2);
                    tota_ves = tota_ves.replace('.', ',');

                this.total_ves = formatPrice.constPrice(`${tota_ves}`, '.', ',');

            //console.log('sub Total general', acum_subtotal)
       },
       guardarFactura(){
            if( this.nro_factura != '' && this.nro_container != '' && (this.details.tarifa != '0' || this.details.tarifa != '0.00') ){
                this.showConfirmeFactura = true;
            }else{
                alert('Error, el numero factura, numero de container y el costo de tarifa, no puede ir vacio')
            }
       },
       sendFactura(){
            this.componentRender = LoaderComponent;
            this.showConfirmeFactura = false;
            let trackings = [];
            let extras_cajas = [];
            let total_usd = formatPrice.desctPrice(this.total_usd, ',');
            let total_ves = formatPrice.desctPrice(this.total_ves, '.');
            let total_gastos_extras = formatPrice.desctPrice(this.total_gastos_extras, ',');


            for (let i = 0; i < this.trackings.length; i++) {
                let track = {...this.trackings[i]}
                for (const key in track) {
                    if (key === 'cost_x_tracking') {
                        track.cost_x_tracking = formatPrice.desctPrice(track.cost_x_tracking,',');
                    }else if( key === 'cost_reempaque,' ){
                        track.cost_reempaque = formatPrice.desctPrice(track.cost_reempaque, ',');
                    }
                }

                track.total_seguro = formatPrice.desctPrice(track.total_seguro,',');
                track.seguro = formatPrice.desctPrice(track.seguro,',');
                track.subTotal = formatPrice.desctPrice(track.subTotal,',');  

                trackings.push(track);
            }

            for (let i = 0; i < this.extras_cajas.length; i++) {
                let caja = {...this.extras_cajas[i]}
              
                caja.total_caja = formatPrice.desctPrice(caja.total_caja,',');
                caja.monto_gasto_extra = formatPrice.desctPrice(caja.monto_gasto_extra,',');

                extras_cajas.push(caja);
            }

            console.log('enviar trackings ', trackings)
            console.log('enviar extras_cajas ', extras_cajas)
            console.log('enviar total_usd', total_usd);
            console.log('enviar total_ves', total_ves);
            console.log('enviar total_gastos_extras', total_gastos_extras);
        

            const formData = {
                nro_factura: this.nro_factura,
                nro_container: this.nro_container,
                tipo_envio: this.details.tipo_envio,
                tarifa_envio:  formatPrice.desctPrice(this.details.tarifa,','),
                usuario_id: this.user.usuario_id,
                cliente: this.user,
                trackings,
                extras_cajas,
                total_usd,
                total_ves,
                monto_tc: formatPrice.desctPrice(this.details.tasa,'.'),
                fecha_tc: this.details.fecha_tasa,
                total_gastos_extras
            }
            console.log(formData)
            this.alert = {};
            this.activeComponent = '';
            this.axios.post('facturas', formData)
            .then(response => {

                this.alert = {
                    msg: response.data.message,
                    clss: 'updated'
                }

                this.activeComponent = AlertMessageComponent;
        
                setTimeout(() => {
                    this.$router.go(-1)
                }, 4000)
                console.log(response.data)

                setTimeout(() => {
                    this.componentRender = '';
                }, 2000);
                
            }).catch(error => {
                this.loader = false;
                this.alert = {
                    msg: error.response.data.message,
                    clss: 'error'
                }

                console.log(error.response.data)

                this.activeComponent = AlertMessageComponent;
                setTimeout(() => {
                    this.componentRender = '';
                }, 2000);
            });
       }
    },
};
</script>
<style>
    .modal.show{
        display: block;
    }
</style>