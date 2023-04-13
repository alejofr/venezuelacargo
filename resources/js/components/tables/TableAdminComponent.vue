<template>
    <div class="card">
        <div v-show="loaderCard" class="div-loader_white" style="margin: 0;"><loader></loader></div>
        <div class="card-body border-bottom py-3 " style="border-radius: 3px 3px 0 0;position:relative;">
            <transition name="component-fade" mode="out-in">
                <keep-alive>
                    <component :is='cardBodyComponent' v-bind:alert="msgAlert" v-bind:deleteData="deleteData" @getMessageDelete="getMessageDelete" @getResetId="getResetId"></component>
                </keep-alive>
            </transition>
            <div class="modal modal-blur fade" id="modal-success" tabindex="-1" :class="{'show': showCheckPago == true}" aria-hidden="true">
                <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div v-show="loader" class="div-loader_white" style="margin: 0;"><loader></loader></div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenCheckPago()"></button>
                    <div class="modal-status bg-success"></div>
                    <div class="modal-body text-center py-4">
                        
                    </div>
                    <div class="modal-footer">
                        <div class="w-100">
                        <div class="row">
                            <div class="col">
                                <button type="button" class="btn w-100" data-bs-dismiss="modal" @click="hiddenCheckPago()">
                                    Cancelar
                                </button>
                            </div>
                            <div class="col">
                                <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal" @click="guadarCheckPago">
                                    Pagado
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal modal-blur fade" :class="{'show': showCheckPago == true}" tabindex="-1" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div v-show="loader" class="div-loader_white" style="margin: 0;"><loader></loader></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Número de factura: {{factura.nro_factura}}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenCheckPago"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-floating mb-3 w-100">
                                <input disabled type="text" class="form-control" name="titular" v-model="factura.titular" id="titular" >
                                <label for="titular">Titular</label>
                            </div>
                            <div class="form-floating mb-3 w-100">
                                <input disabled type="text" class="form-control" name="nro_comprobante" v-model="factura.nro_comprobante" id="nro_comprobante" >
                                <label for="nro_comprobante">Numero de comprobante</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="w-100">
                            <div class="row">
                                <div class="col">
                                    <button type="button" class="btn w-100" data-bs-dismiss="modal" @click="hiddenCheckPago()">
                                        Cancelar
                                    </button>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-danger w-100" data-bs-dismiss="modal" @click="guadarCheckNoPago">
                                       No pagado
                                    </button>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal" @click="guadarCheckPago">
                                        Pagado
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal modal-blur fade" :class="{'show': showFactura == true}" tabindex="-1" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div v-show="loader" class="div-loader_white" style="margin: 0;"><loader></loader></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Número de factura: {{factura.nro_factura}}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenCheckPago"></button>
                        </div>
                        <div class="modal-body">
                            <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                            <div class="text-muted"><p>Monto en USD: <strong>{{factura.total_usd}}$</strong></p></div>
                            <div class="text-muted mb-3 d-flex">
                                <strong class="me-1">Nota: </strong> <p>Para el pago en bolivares, la tasa de cambio a considerar, es esta: <strong>{{tasa}} VES</strong> y el monto total en Bolivares es de: <strong>{{factura.total_ves}} VES</strong></p>
                            </div>
                            <div class="form-floating mb-3" >
                                <select class="form-select" name="tipo_pago" id="tipo_pago" v-model="pago.tipo_pago" >
                                    <option value="usd">
                                        Dolares
                                    </option>
                                    <option value="ves">
                                        Bolivares
                                    </option>
                                </select>
                                <label for="tipo_envio">Selecciona la Moneda de Pago</label>
                            </div>
                            <div class="form-floating mb-3 w-100">
                                <input type="text" class="form-control" name="titular" v-model="pago.titular" id="titular" >
                                <label for="titular">Titular</label>
                            </div>
                            <div class="form-floating mb-3 w-100">
                                <input type="text" class="form-control" name="nro_comprobante" v-model="pago.nro_comprobante" id="nro_comprobante" >
                                <label for="nro_comprobante">Numero de comprobante</label>
                            </div>
                            <div class="mb-3">
                                <div class="form-label">Subir Comprobante de Pago</div>
                                <input type="file" class="form-control" @change="changeFileImage($event)" id="fileimage">
                            </div>
                            <div class="card">
                                <div class="card-status-bottom bg-success"></div>
                                <div class="card-body">
                                    <div v-show="pago.tipo_pago == 'usd'">
                                        <h3 class="card-title">BANK OF AMERICA</h3>
                                        <p><strong>NRO DE CUENTA:</strong> 3340 6659 9986</p>
                                        <p><strong>TIPO:</strong> CTA CORRIENTE</p>
                                        <p><strong>ABA ROUTING NUMBER:</strong> 061000052</p>
                                        <p><strong>Nota:</strong> NO COLOCAR NADA EN EL ASUNTO DE LA TRANSFERENCIA</p>
                                        <br>
                                        <h3 class="card-title">ZELLE</h3>
                                        <p><strong>CORREO ELECTRÓNICO:</strong> VENEZUELACARGO@ICLOUD.COM</p>
                                        <br>
                                        <h3 class="card-title">BINANCE USDT</h3>
                                        <p><strong>CORREO ELECTRÓNICO:</strong> Importacionesreca@hotmail.com</p>
                                    </div>
                                    <div v-show="pago.tipo_pago == 'ves'">
                                        <h3 class="card-title">BANCO BANESCO</h3>
                                        <p><strong>NRO DE CUENTA:</strong> 0134 0869 6486 9302 5833</p>
                                        <p><strong>TIPO:</strong>CTA CORRIENTE</p>
                                        <p><strong>TITULAR: </strong> CARLOS EDUARDO RESTREPO RUIZ</p>
                                        <p><strong>C.I:</strong>V-17.632.959</p>
                                        <p><strong>TELÉFONO: </strong> (0412)1812469 </p>
                                        <p><strong>Nota:</strong> PAGOS POR TRANSFERENCIAS Y PAGO MÓVIL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenCheckPago">Cerrar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="savePago">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="div_action_table div_flex_w ">
                <div class="btn-action-component">
                    <div class="btn-list mt-2">
                        <router-link class="btn btn-outline-primary" :to="{ name: accion.create }" v-if="accion.create != '' && !Array.isArray(accion.create)">
                            <i class="ti ti-plus me-1"></i>
                            {{ `${ (accion.create == 'CreatePrelaerta') ? 'Crear Prealerta' : 'Agregar'}`}}
                        </router-link>
                        <div class="dropdown" v-if="Array.isArray(accion.create) && accion.create.length != 0">
                            <button class="btn dropdown-toggle btn-outline-primary align-text-top" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="ti ti-plus me-1"></i> Agregar
                            </button>
                            <div class="dropdown-menu dropdown-menu-end" style="">
                                <router-link class="dropdown-item" v-for="(link, index) in accion.create" :key="index" :to="{ name: link.name }">
                                    {{link.title}}
                                </router-link>
                            </div>
                        </div>
                        <button type="button" class="btn btn-dark" v-if="Object.keys(this.$store.getters['tableadmin/getRequest'].params).length !== 0 && this.$store.getters['tableadmin/getRequest'].params.query.hasOwnProperty('instrucciones') && this.$store.getters['tableadmin/getRequest'].params.query.instrucciones == 'si' && this.$route.name == 'IndexAlmacen'" @click="facturar">
                            <i class="ti ti-file-invoice me-1"></i>
                            Facturar
                        </button>
                        <button type="button" @click="modificar" class="btn btn-dark" v-if="accion.edit != ''">
                            <i class="ti ti-edit me-1"></i>
                            Modificar
                        </button>
                        <button type="button" class="btn btn-danger" @click="eliminar($event)" v-if="
                        accion.delete != ''
                        ">
                            <i class="ti ti-trash me-1"></i>
                            Eliminar
                        </button>
                        <div class="dropdown" v-if="Array.isArray(accion.delete) && accion.delete.length != 0">
                            <button class="btn dropdown-toggle btn-danger align-text-top" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="ti ti-trash me-1"></i> Eliminar
                            </button>
                            <div class="dropdown-menu dropdown-menu-end" style="">
                                <button type="button" class="dropdown-item" @click="eliminar($event)" v-for="(link, index) in accion.delete" :key="index" :value="link.title">
                                    {{link.title}}
                                </button>
                            </div>
                        </div>
                        <btn-volver v-if="this.$route.name != 'IndexDashboard'"></btn-volver>
                    </div>
                </div>
                <div class="ms-auto text-muted div_right-flex">
                    <div class="div_flex_w div_flex_r div_left-flex mt-3">
                        <div class="div_select_orderBy mb-2 me-3">
                            <div class="form-label">Ordenar por:</div>
                            <div>
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" @change="filterData()" name="ascending" value="1" v-model="request.params.ascending">
                                    <span class="form-check-label">ASC</span>
                                </label>
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" @change="filterData()" name="ascending" v-model="request.params.ascending" value="0">
                                    <span class="form-check-label">DESC</span>
                                </label>
                            </div>
                        </div>
                        <div class="div_select_column mb-2">
                            <select name="columns" v-model="request.params.orderBy" class="form-select" @change="filterData()" >
                                <option v-for="(column, index) in columns.columns" :key="index" :value="column.value" >
                                    {{column.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table card-table table-vcenter text-nowrap datatable">
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="(column, index) in columns.th" :key="index">{{column.name}}</th>
                    </tr>
                </thead>
                <transition name="component-fade" mode="out-in">
                    <keep-alive>
                        <component :is='tbodyComponent' v-bind:data="dataTble" v-bind:th="columns.th" @getId="getId" @sendCheckPago="sendCheckPago" @exporDonwload_pdf="exporDonwload_pdf" @send_invoice_pdf="send_invoice_pdf" @sendPagoFactura="sendPagoFactura" @destroyWH="destroyWH"></component>
                    </keep-alive>
                </transition>
            </table>
        </div>
        <transition name="component-fade" mode="out-in">
            <keep-alive>
                <component :is='paginationComponent'></component>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
import BtnVolver from '../BtnVolver.vue';
import { formatPrice } from '../../formatPrice.js';

const loaderWhite = () => import('../LoaderWhiteComponent.vue');
const skeletonTableBody  = () => import('./datatables/SkeletonDataTables.vue');
const skeletonPagination = () => import('./pagination/SkeletonPagination.vue');

const tablebody = (viewData) => { return () => import(`./datatables/${viewData}.vue`); }
const pagination = () => import('./pagination/PaginationComponent.vue');

const deleteConfirmModal = () =>import('../ConfirmDeleteModal.vue');
const alertMessage = () => import('../AlertMessageComponent.vue');

const LoaderComponent = () => import('../LoaderComponent.vue');

export default {
  components: { BtnVolver },
    name: 'TableAdminComponent',
    props: ['viewData', 'columns', 'accion'],
    data(){
        return {
            msgAlert: {
                msg: '',
                clss: '',
            },
            deleteData: {
                url: '',
                id: '',
            },
            itemDataId: '',
            idAlmacen: [],
            //request: {...this.$store.getters['tableadmin/getRequest']},
            showCheckPago: false,
            showFactura: false,
            tasa: '',
            factura: {
                nro_factura: '',
                id_factura: '',
                total_usd: '',
                nro_comprobante: '',
                titular: ''
            },
            pago: {
                tipo_pago: '',
                comprobante: '',
                nro_comprobante: '',
                titular: ''
            },
            loader: false,
            loaderCard: false,
            activeComponent: '',
            alert: {
                msg: '',
                clss: '' 
            },
        }
    },
    beforeCreate(){
        this.$nextTick(function () {
            //this.request = {...this.$store.getters['tableadmin/getRequest']};
        })
    },
    components: {
        loader: LoaderComponent,
        BtnVolver
    },
    computed: {
        request(){
            //console.log('dsdsdssfdf efvd', {...this.$store.getters['tableadmin/getRequest']})
            return {...this.$store.getters['tableadmin/getRequest']}
        },
        dataTble(){
                const { data, cardBodyComp } = this.$store.getters['tableadmin/getDataTable']
                if( data.length == 0 && cardBodyComp == 'alertMessage' ){
                    this.msgAlert = {
                        msg: 'No se encontró resultados',
                        clss: 'error'
                    }
                    
                    //this.$store.dispatch('tableadmin/alertMessage', true);
                }

            return data;
        },
        cardBodyComponent(){
            const cmpts = this.$store.getters['tableadmin/getComponents']
            return ( cmpts.cardBody == 'deleteConfirmModal' ) ? deleteConfirmModal 
                    : ( cmpts.cardBody == 'alertMessage' ) ? alertMessage : ( cmpts.cardBody == 'loaderWhite' ) ? loaderWhite : '';
        },
        tbodyComponent() {
            const cmpts = this.$store.getters['tableadmin/getComponents']
            return ( cmpts.tbody == 'tablebody') ? tablebody(this.viewData) : skeletonTableBody;
        },
        paginationComponent(){
            const cmpts = this.$store.getters['tableadmin/getComponents']
            return ( cmpts.pagination == 'pagination') ? pagination : skeletonPagination;
        }

    },
    methods: {
        sendCheckPago({id_factura, nro_factura, pago: { nro_comprobante, titular }}){
            this.factura.id_factura = id_factura;
            this.factura.nro_factura = nro_factura;
            this.factura.nro_comprobante = nro_comprobante;
            this.factura.titular = titular;
            this.showCheckPago = true;

        },
        hiddenCheckPago(){
            this.showCheckPago = false;
            this.showFactura = false;
        },
        async exporDonwload_pdf({data, value}) {
            console.log('se hizo aqui', data, value);
            this.loaderCard = true;
            const fecha = new Date();
            let time = fecha.getTime();
            const nameInvoice = `${time}-${data.nro_factura}.pdf`;

            await this.axios.get(`print-invoice/${value}`, { responseType: 'blob' })
            .then(response => {
                console.log(response.data)
                const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
                let fileLink = document.createElement('a');
                    fileLink.href = fileUrl;
                    fileLink.setAttribute('download', nameInvoice);
                    document.body.appendChild(fileLink);
                    fileLink.click();
                    setTimeout(() => {
                        this.loaderCard = false;
                    }, 1500);
            }).catch(error => {
                console.log(error.response.data)
                this.respAlert(403, 'Ha ocurrido un error en descargar el archivo pdf');
                setTimeout(() => {
                    this.loaderCard = false;
                }, 1500);
            });
          
        },
        async send_invoice_pdf(id){
            this.loaderCard = true;
            await this.axios.post(`send-factura/${id}`)
            .then(response => {
                this.msgAlert = {
                    msg: response.data.message,
                    clss: 'updated'
                }

                this.$store.dispatch('tableadmin/alertMessage', true);

                setTimeout(() => {
                    this.loaderCard = false;
                }, 1500);
            }).catch(error => {
                this.msgAlert = {
                    msg: error.response.data.message,
                    clss: 'error'
                }

                this.$store.dispatch('tableadmin/alertMessage', true);

                setTimeout(() => {
                    this.loaderCard = false;
                }, 1500);
            });
        },
        guadarCheckPago(){
            this.loader = true;
            this.axios.put(`pago-factura/${this.factura.id_factura}`).then(response => {
                console.log(response.data);
                this.msgAlert = {
                        msg: response.data.message,
                        clss: 'updated'
                    }

                this.$store.dispatch('tableadmin/alertMessage', true);
                this.loader = false;
                this.showCheckPago = false;

                setTimeout(() => {
                    this.showFactura = false;
                    this.showCheckPago = false;
                    this.factura.id_factura = '';
                    this.factura.nro_factura = '';
                    this.factura.total_usd = '';
                    this.activeComponent = '';
                    this.pago = {
                        tipo_pago: '',
                        comprobante: ''
                    };
                    this.tasa = '';
                    this.$store.dispatch('tableadmin/resetInit');
                }, 2000);
                
            }).catch(error => {
                let status = error.response.status;
                let message = error.response.data.message;

                if( status == 500 ){
                    message = 'Error inesperado. por favor intentar más tarde.';
                }

                this.msgAlert = {
                        msg: response.data.message,
                        clss: 'error'
                    }

                this.$store.dispatch('tableadmin/alertMessage', true);
                this.loader = false;
                this.showCheckPago = false;
            });
        },
        guadarCheckNoPago(){
            this.loader = true;
            this.axios.put(`no-pago-factura/${this.factura.id_factura}`).then(response => {
                console.log(response.data);
                this.resp(response.data);
                this.msgAlert = {
                        msg: response.data.message,
                        clss: 'updated'
                    }

                this.$store.dispatch('tableadmin/alertMessage', true);
                this.loader = false;
                this.showCheckPago = false;

                setTimeout(() => {
                    this.showFactura = false;
                    this.showCheckPago = false;
                    this.factura.id_factura = '';
                    this.factura.nro_factura = '';
                    this.factura.total_usd = '';
                    this.activeComponent = '';
                    this.pago = {
                        tipo_pago: '',
                        comprobante: ''
                    };
                    this.tasa = '';
                    this.$store.dispatch('tableadmin/resetInit');
                }, 2000);
                
            }).catch(error => {
                let status = error.response.status;
                let message = error.response.data.message;

                if( status == 500 ){
                    message = 'Error inesperado. por favor intentar más tarde.';
                }

                this.msgAlert = {
                        msg: response.data.message,
                        clss: 'error'
                    }

                this.$store.dispatch('tableadmin/alertMessage', true);
                this.loader = false;
                this.showCheckPago = false;

            });
        },
        resp(resp){
            setTimeout(() => {
                this.loader = false;
                this.respAlert(resp.status, resp.message);

                if( resp.status == 200 ){
                    setTimeout(() => {
                        this.showFactura = false;
                        this.showCheckPago = false;
                        this.factura.id_factura = '';
                        this.factura.nro_factura = '';
                        this.factura.total_usd = '';
                        this.activeComponent = '';
                        this.pago = {
                            tipo_pago: '',
                            comprobante: ''
                        };
                        this.tasa = '';
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

            this.$store.dispatch('tableadmin/alertMessage', true);
            return;
        },
        getMessageDelete(response){
            this.msgAlert = {
                msg: response.message,
                clss: (response.status == 200) ? 'updated' :'error'
            }
            this.$store.dispatch('tableadmin/alertMessage', true);

            if( response.status == 200 ){
                
                setTimeout(() => {
                    this.itemDataId = '';
                    this.idAlmacen = [];
                    window.sessionStorage.removeItem('idLocalStorage');
                    this.$store.dispatch('tableadmin/modalDelete', false);
                    this.$store.dispatch('tableadmin/resetInit');
                }, 2000);
              
            }
        },
        getResetId(){
            //this.itemDataId = '';
        },
        filterData(){
            this.request.params.orderBy = this.request.params.orderBy;
            this.request.params.ascending = parseInt(this.request.params.ascending);
          

            this.$store.dispatch('tableadmin/initTable', this.request);
        },
        modificar(){
            if( this.validGetId('modificar') ){
                console.log('aqui jhd', this.itemDataId);
                this.$router.push({ name: `${this.accion.edit}`, params: { id: this.itemDataId } });
            }
        },
        facturar(){
            if( this.validGetId('facturar') ){
                let getDataLocalStorage = JSON.parse(sessionStorage.getItem('idLocalStorage'));
                window.sessionStorage.removeItem('idLocalStorage');
                this.$router.push({ name: 'CreateFacturas', query: { id: this.idAlmacen, envio: getDataLocalStorage.reempaque, type: 'new' } });
            }
        },
        destroyWH(id){
            this.deleteData = {
                url: 'almacenes',
                id: id
            }
            this.$store.dispatch('tableadmin/modalDelete', true);
        },
        eliminar(e){
            let value = e.target.value;

            if( this.validGetId('eliminar') ){ 
                let url = ( !Array.isArray(this.accion.delete) ) ? this.accion.delete : '';
                let id = ( !Array.isArray(this.itemDataId) && this.itemDataId != '' ) ? this.itemDataId : (this.idAlmacen.length > 0) ? this.idAlmacen[0] : '';

                /*if( url == '' && id == '' ){
                    const arrDelete = this.accion.delete;
                    for (let i = 0; i < arrDelete.length; i++) {
                       if( arrDelete[i].title == value ){
                           
                           if ( this.itemDataId[i] != null){
                               url = arrDelete[i].value;
                               id = this.itemDataId[i];
                                break;
                           }
                          
                       }  
                    }
                }*/

                if( this.idAlmacen.length > 1 ){
                    this.msgAlert = {
                        msg: 'Solor puede eliminar un warehouse',
                        clss: 'error'
                    }
                    
                    this.$store.dispatch('tableadmin/alertMessage', true);
                    id = '';
                }

                if( url != '' && id != '' ){
                    this.deleteData = {
                        url: url,
                        id: id
                    }
                    this.$store.dispatch('tableadmin/modalDelete', true);
                }else{
                    this.msgAlert = {
                        msg: 'Error, No hay datos que eliminar para esta accion',
                        clss: 'error'
                    }
                    
                    this.$store.dispatch('tableadmin/alertMessage', true);
                }
                
            }
        },
        getId(id){
           
            if(  Array.isArray(id) ){
                this.idAlmacen = id;
                 console.log('idAlmacen', this.idAlmacen)
            }else{
                this.itemDataId = id;
            }
           
            console.log(this.itemDataId)
        },
        validGetId(accMsg){
            //this.idAlmacen.length == 0
            console.log(this.$store.getters['tableadmin/getRequest'], 'asadsds')
            if( Object.keys(this.$store.getters['tableadmin/getRequest'].params).length !== 0 && this.$store.getters['tableadmin/getRequest'].params.query.hasOwnProperty('instrucciones') && this.$store.getters['tableadmin/getRequest'].params.query.instrucciones == 'si' && this.idAlmacen.length == 0  ){
                this.msgAlert = {
                    msg: `Error debe seleccionar, almenos una casilla que desea ${accMsg}`,
                    clss: 'error'
                }
                
                this.$store.dispatch('tableadmin/alertMessage', true);
                return false;
            }

            if( Object.keys(this.$store.getters['tableadmin/getRequest'].params).length !== 0 && this.$store.getters['tableadmin/getRequest'].params.query.hasOwnProperty('instrucciones') && this.$store.getters['tableadmin/getRequest'].params.query.instrucciones == 'si' && this.idAlmacen.length != 0 ){
                return true;
            }

            if( Object.keys(this.$store.getters['tableadmin/getRequest'].params).length !== 0 && this.$store.getters['tableadmin/getRequest'].params.query.hasOwnProperty('instrucciones') && this.$store.getters['tableadmin/getRequest'].params.query.instrucciones != 'si' && this.idAlmacen.length != 0 ){
                return true;
            }

            if ( this.itemDataId == ''){
                this.msgAlert = {
                    msg: `Error debe seleccionar, una casilla que desea ${accMsg}`,
                    clss: 'error'
                }
                
                this.$store.dispatch('tableadmin/alertMessage', true);
                return false;
               /* if( (Object.keys(this.$store.getters['tableadmin/getRequest'].params).length !== 0 && this.$store.getters['tableadmin/getRequest'].params.query.hasOwnProperty('instrucciones') && this.$store.getters['tableadmin/getRequest'].params.query.instrucciones == 'si' && this.$route.name == 'IndexAlmacen' && this.idAlmacen.length == 0) && accMsg != 'eliminar' ||  Object.keys(this.$store.getters['tableadmin/getRequest'].params).length === 0 && !this.$store.getters['tableadmin/getRequest'].params.query.hasOwnProperty('instrucciones') && this.$store.getters['tableadmin/getRequest'].params.query.instrucciones != 'si' && this.$route.name != 'IndexAlmacen' && this.itemDataId == ''){
                    this.$store.dispatch('tableadmin/alertMessage', true);
                    return false;
                }*/
            }

            return true
        },
        sendPagoFactura({factura, tasa}){
            this.factura = factura;
            this.tasa = tasa;
            this.showFactura = true;
        },
        changeFileImage(e){
            let file = e.target.files[0];
            if( file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' ){
                this.pago.comprobante = file;
                
            }else{
                alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
            }
        },
        savePago() {
            if( this.pago.tipo_pago != '' && this.pago.comprobante != '' && this.pago.nro_comprobante != '' && this.pago.titular != ''){
                let total_usd = this.factura.total_usd;
                let total_ves = 0;


                total_usd = formatPrice.desctPrice(total_usd, ',');
                
                let tasa = formatPrice.desctPrice(this.tasa, '.')
                tasa = tasa.replace(',', '.');
                if( tasa % 1 == 0 ){
                    tasa = parseInt(tasa)
                }else{
                    tasa = parseFloat(tasa)
                }

                tasa = tasa.toFixed(2);

                if( total_usd  % 1 == 0 ){
                    total_usd  = parseInt(total_usd)
                }else{
                    total_usd  = parseFloat(total_usd)
                }

                total_usd = total_usd.toFixed(2);

                total_ves = total_usd * tasa;
                total_ves = total_ves.toFixed(2);
                total_ves = total_ves.replace('.', ',');
                //total_ves = formatPrice.constPrice(`${total_ves}`, '.', ',');
                //console.log(total_ves, total_usd, this.tasa)
                

                console.log(this.$store.state.auth.user.usuario_id);
                let formData = new FormData();
                formData.append('id_factura', this.factura.id_factura);
                formData.append('tipo_moneda', this.pago.tipo_pago);
                formData.append('comprobante', this.pago.comprobante);
                formData.append('nro_comprobante', this.pago.nro_comprobante);
                formData.append('titular', this.pago.titular);
                formData.append('tasa', formatPrice.desctPrice(this.tasa, '.'));
                formData.append('total_ves', formatPrice.desctPrice(this.factura.total_ves, '.'));
                formData.append('usuario_id', this.$store.state.auth.user.usuario_id);

                this.loader = true;
                this.showFactura = false;
                this.loaderCard = true;

                this.axios.post('save-pago', formData, {headers: { "content-type": "multipart/form-data" } } ).then(response => {
                    console.log(response.data);
                    this.resp(response.data);
                    this.msgAlert = {
                        msg: response.data.message,
                        clss: 'updated'
                    }

                    this.$store.dispatch('tableadmin/alertMessage', true);

                setTimeout(() => {
                    this.loaderCard = false;
                }, 1500);
                    
                }).catch(error => {
                    console.log('err', error)
                    let status = error.response.status;
                    let message = error.response.data.message;

                    if( status == 500 ){
                        message = 'Error inesperado. por favor intentar más tarde.';
                    }

                    this.msgAlert = {
                        msg: message,
                        clss: 'error'
                    }

                    this.$store.dispatch('tableadmin/alertMessage', true);

                    setTimeout(() => {
                        this.loaderCard = false;
                    }, 1500);
                });
              

            }else{
                alert('Debe completar el formulario')
            }
        },
    }
};
</script>
<style>
    .div_flex_w, .div_flex_r{
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
    }

    .div_flex_w{
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        -o-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .div_flex_r{
        -ms-align-items: center;
        align-items: center;
    }

    .div_left-flex select{
        border-radius: 0;
        border: 1px solid #b9b9b9;
        color: #b9b9b9;
    }
   
    .div_left-flex input[type="radio"]{
        border: 2px solid #b9b9b9;
    }
    .div_right-flex{
        padding-top: 3px;
    }

    .bodyt-loading{
        position: relative;
        width: 100%;
         height: 220px;
    }
    .loading-tables{
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: rgb(255 255 255);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        -moz-transition: all .4s;
        transition: all .4s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }

    .btn-list.btn-action-component button.dropdown-toggle:after{
        display: none;
    }

    @media (max-width: 580px){
        .div_left-flex,.div_right-flex{width: 100%;}
    }

    @media ( max-width: 480px ){
        .btn-list.btn-action-component{
            display: block;
        }
        .btn-list.btn-action-component .btn{
            width: 100%;
            margin-bottom: 15px !important;
        }
    }

    @media (max-width: 380px){
        .div_select_column{width: 100%;}
        .div_right-flex .btn-list{
            margin-bottom: 0 !important;
            margin-right: 0;
        }

        .div_right-flex .btn-list > .btn.btn-danger{
            margin-left: auto !important;
        }
    }
</style>