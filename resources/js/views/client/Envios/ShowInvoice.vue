<template>
<div class="container-xl">
    <div class="row row-cards">
        <div class="col-12" style="min-height: 60vh;">
            <component :is='componentRender'></component>
            <div class="card card-lg" v-if="componentRender == ''">
                <div v-show="loaderCard" class="div-loader_white" style="margin: 0;"><loader></loader></div>
                <div class="card-body">
                    <vue-html2pdf
                        :show-layout="false"
                        :float-layout="false"
                        :enable-download="true"
                        :preview-modal="false"
                        :paginate-elements-by-height="1400"
                        filename="Factura"
                        :pdf-quality="1"
                        :manual-pagination="false"
                        pdf-format="a4"
                        pdf-orientation="landscape"
                        pdf-content-width="100%"
                        @progress="onProgress($event)"
                        @hasStartedGeneration="hasStartedGeneration()"
                        @hasGenerated="hasGenerated($event)"
                        ref="html2Pdf"
                    >
                        <section class="w-100 h-100 pdf-content" slot="pdf-content" >
                            <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                    <div class="row mb-4">
                        <div class="col-12 col-md-6">
                            <p class="h3">Detalles</p>
                            <address>
                                <p v-show="details.fecha_factura != ''">Fecha Factura: <span style="text-transform: uppercase;">{{details.fecha_factura}}</span> </p>
                                <p>Numero Factura: {{details.nro_factura}}</p>
                                <p>Numero Container: {{details.nro_container}}</p>
                                <p>Tarifa Envio: {{details.tarifa}} USD</p>
                                <p>Tipo Envio:  <span style="text-transform: uppercase;">{{details.tipo_envio}}</span></p>
                                <p>Tasa Bs: {{details.monto_tc}} VES</p>
                            </address>
                        </div>
                        <div class="col-12 col-md-6 text-end text-start-xs">
                            <p class="h3">Cliente</p>
                            <address>
                                <p>Nombre Completo: {{client.nombres}} {{client.apellidos}}</p>
                                <p v-if="client.cod_usuario != null">Código Usuario: {{client.cod_usuario}}</p>
                                <p>Teléfono: {{client.telefono}}</p>
                                <p>Cédula: {{client.cedula}}</p>
                                <p>Dirección: {{client.direccion}} {{client.estado_ve}} {{`${client.zona != null ? ', '+ client.zona + ', '+client.codigo_postal : ''}`}}</p>
                                <p v-if="client.ref_direccion != null">Ref. Dirección: {{client.ref_direccion}}</p>
                            </address>
                        </div>
                    </div>
                    <ware-houses 
                        v-bind:warehouses="warehouses"
                        :envio="envio"
                        @add_new_wh="add_new_wh"
                        v-bind:whNew="warehousesNew"
                        :type_form="type_form"
                    />
                    <div class="w-100 mb-4" >
                        <div class="row" v-if="type_form === 'new' || type_form === 'edit'">
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
                                            <input type="number" class="form-control" min="1" pattern="^[0-9]+" name="example-password-input" placeholder="Cantidad Caja" v-model="cant_caja">
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
                        </div>
                    </div>
                    <content-body 
                        v-bind:dataContent="dataContent"
                    />
                    <list-cajas 
                        v-bind:listCajas="list_cajas"
                        @removeCaja="removeCaja"
                         :type_form="type_form"
                    />
                    <div class="row mt-4">
                        <div class="col-12 col-md-6  mb-3">
                            <div class=" m-0" style="width: 330px;">
                            <div class="form-floating mb-3 w-100">
                                <div disabled class="d-flex flex-column">
                                    <span class="me-2">Nro. Factura</span>
                                    <span><strong>{{ details.nro_factura }}</strong></span>
                                </div>
                            </div>
                            <div class="form-floating mb-3 w-100">
                                <div disabled class="d-flex flex-column">
                                                    <span class="me-2">Nro. Container</span>
                                                    <span><strong>{{ details.nro_container }}</strong></span>
                                                </div>
                            </div>
                            <div class="form-floating mb-3 w-100">
                                <div disabled class="d-flex flex-column">
                                                    <span class="me-2">Tarifa de Envío ( {{details.tipo_envio}} )</span>
                                                    <span><strong>{{ details.tarifa }}</strong></span>
                                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <div class=" m-0 ms-auto">
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                <span class="me-2 text-danger">
                                    Recibes Caja/Cajas: 
                                </span>
                                <span style="max-width: 80px;">
                                    <span disabled style="padding: 0.4375rem 5px;text-align: end;"
                                    ><strong>{{ dataContent.filter(item => item.warehouse && item.warehouse !== '').length }}</strong></span> 
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                                <span class="me-2">
                                                    Costo Por WH: 
                                                </span>
                                                <span style="max-width: 80px;">
                                                    <!--<input v-if="type_form === 'new' || type_form === 'edit'" type="text" class="form-control" v-model="costo_trackings" name="costo_trackings" style="padding: 0.4375rem 5px;text-align: end;" @keyup="keyUpPrecio($event)" @change="changePrecio($event)">-->
                                                    <span style="padding: 0.4375rem 5px;text-align: end;"
                                                    ><strong>{{ costo_trackings }}</strong></span> 
                                                </span>
                                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end" v-if="envio === 'reempaque'">
                                <span class="me-2">
                                    Total WH Reemp.
                                </span>
                                <span style="max-width: 80px;">
                                    <span disabled style="padding: 0.4375rem 5px;text-align: end;"
                                    ><strong>{{ costo_reempaque }}</strong></span> 
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                <span class="me-2">
                                    Gastos Extras
                                </span>
                                <span style="max-width: 80px;">
                                    <span disabled style="padding: 0.4375rem 5px;text-align: end;"
                                                    ><strong>{{ gastos_extras }}</strong></span>
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                <span class="me-2">
                                    Total USD
                                </span>
                                <span style="width: 80px;" class="text-end">
                                    {{ total_usd }}
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3 justify-content-end">
                                <span class="me-2">
                                    Total VES
                                </span>
                                <span style="width: 80px;" class="text-end">
                                    {{ total_ves }}
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>                        
                        </section>
                    </vue-html2pdf>
                    <div class="d-flex align-items-center mt-3">
                        <btn-volver :classe="'btn-light'"></btn-volver>
                        <button 
                            @click="generateReport"
                            class="btn btn-danger ms-auto"
                        >
                            Descargar PDF
                            <i class="ti ti-file-download fs-19 ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal modal-blur fade" id="modal-success" tabindex="-1" :class="{'show': show == true}" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal()"></button>
            <div class="modal-status bg-success"></div>
            <div class="modal-body text-center py-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-green icon-lg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M9 12l2 2l4 -4"></path></svg>
                <h3>{{`${ type_form === 'new' ? '¿Estás seguro de crear la factura?' : '¿Estás seguro de actualizar la factura?'}`}}</h3>
                <div class="text-muted">
                    Para crear la factura, asegurate que los datos esten correctos...
                </div>
            </div>
            <div class="modal-footer">
                <div class="w-100">
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn w-100" data-bs-dismiss="modal" @click="hiddenModal()">
                            Cancelar
                        </button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal" @click="sendFactura">
                            {{`${ type_form === 'new' ? 'Crear Factura' : 'Actualizar'}`}}
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

//componentes de primer plano, para factura
import VueHtml2pdf from 'vue-html2pdf'
import WareHouses from '../../../components/facturas/WareHouses.vue';
import ContentBody from '../../../components/facturas/ContentBody.vue';
import ListCajas from '../../../components/facturas/ListCajas.vue';
import BtnVolver from '../../../components/BtnVolver.vue';

//componentes de segundo plano
const AlertMessageComponent = () => import('../../../components/AlertMessageComponent.vue');
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../components/Error404Component.vue');

//helpers
import { create_factura, data_contents, add_box, calc_total_usd_data, suma_total_usd_var, calc_total_ves, warehouses_data, cajas } from '../../../helpers/calcInvoice';
import { formatPrice } from '../../../formatPrice';

const save_reempaque = 'save-invoice-reempaque';
const save_directo = 'save-invoice-directo';

export default {
    name: 'LayoutFormFacturar',
    data(){
        return{
            envio: '', // factura con envios sin reempaques ( directos ) || o con envios con reempaque ( reempaque )
            type_form: 'new', //tipo de form, new es crear factura, edit es editar factura y  show es ver factura,
            componentRender: LoaderComponent,
            //detalles para la factura
            details: {
                id_factura: '',
                tarifa: '0.00',
                fecha_factura: '',
                nro_factura: '',
                tipo_envio: '',
                monto_tc: '0,00',
                nro_container: '',
                fecha_tc: ''
            },
            //informacion del cliente
            client: {},
            //Datos de WareHouse
            warehouses: [],
            //data contents, de la factura
            dataContent: [],
            //cajas
            cajas: [],
            //propiedades para la seccion de imagenes
            caja: '',
            cant_caja: 1,
            //cajas utilizadas en la factura
            list_cajas: [],
            //footer content, total usd, total ves, total reempaque, total costo por tracking
            total_usd: '0.00',
            total_ves: '0,00',
            costo_trackings: '0.00',
            costo_reempaque: '0.00',
            gastos_extras: '0.00',
            //new wh para reempaque
            warehousesNew: [],
            //mostrar confirmar factura
            show: false,
            loaderCard: false,
            activeComponent: '',
            alert: {
                msg: '',
                clss: '' 
            },
        }
    },
    components: {
        WareHouses,
        ContentBody,
        ListCajas,
        BtnVolver,
        loader: LoaderComponent,
        VueHtml2pdf
    },
    beforeCreate(){
        this.$nextTick(async function () {
            const query = this.$route.query;
            const params = this.$route.params;
            if( 
                Object.keys(query).length === 0 ||
                Object.keys(params).length === 0
            ){
                this.componentRender = Error404;
                return;
            }

            this.envio = query.envio == 'no' ? 'directo' : 'reempaque';
            this.type_form = 'show';

            const url = `shipments/${params.id}`;

            

            this.get_axios(query, url);
        });
    },
    methods: {
            // Method to trigger PDF generation using the component ref
	  generateReport() {
		this.$refs.html2Pdf.generatePdf();
	  },
  
	  // Event handler for PDF generation progress
	  onProgress(event) {
		console.log("Progress:", event);
	  },
  
	  // Event handler when pagination starts
	  startPaginationHandler() {
		console.log("Pagination started");
	  },
  
	  // Event handler after pagination is complete
	  hasPaginatedHandler() {
		console.log("Pagination completed");
	  },
  
	  // Event handler before downloading the PDF
	  beforeDownloadHandler(event) {
		console.log("Before Download:", event);
	  },
  
	  // Event handler after the PDF has been downloaded
	  hasDownloadedHandler(event) {
		console.log("PDF Downloaded:", event);
	  },
        //obtener data de wh a facturar o datos de la factura
        get_axios(dataReq, url){
            this.axios.get(url, {params : dataReq}).then(response => {
                console.log('response.data.result', response.data);
                if(response.data.result == null){
                    this.componentRender = Error404;
                    return;
                }

                if( this.type_form == 'new' ){
                    let tarifa_aereo = '0.00';
                    let tarifa_maritimo = '0.00';

                    const { almacen, cliente, extras, tasaDolar } = response.data.result;
                    const { wh, details, costo_trackings, costo_reempaque } = create_factura(almacen, extras, tasaDolar);

                    //tarifas de envios
                    tarifa_aereo = formatPrice.constPrice(cliente.tarifa_aereo, ',', '.');
                    tarifa_maritimo = formatPrice.constPrice(cliente.tarifa_maritimo, ',', '.');

                    //agregamos esta informacion en la cabecera.
                    this.details = details;
                    this.details.tarifa = details.tipo_envio == 'aereo' ? tarifa_aereo : tarifa_maritimo;
                    this.details.monto_tc = formatPrice.constPrice(tasaDolar.monto_tc, '.', ',');
                    this.details.fecha_tc = tasaDolar.fecha_tc;

                    this.client = cliente;
                    
                    //agregar warehouses
                    this.warehouses = wh;

                    //agregamos las cajas
                    this.cajas = cajas(extras);
                    
                    //agregar data content de la factura
                    if( this.envio === 'directo' )
                    this.dataContent = data_contents(wh, details.tipo_envio, this.details.tarifa, this.envio);

                    //agregando costo por trackings
                    this.costo_trackings = costo_trackings;


                    //agregar total en USD
                    this.total_usd = calc_total_usd_data(this.dataContent, 'sub_total');
                    this.total_usd = suma_total_usd_var(this.total_usd, this.costo_trackings); //sumar costo trackings + total_usd;

                    if( this.envio === 'reempaque' ){
                        this.costo_reempaque = costo_reempaque;
                        //sumando costo reempaque + total_usd;
                        this.total_usd = suma_total_usd_var(this.total_usd, this.costo_reempaque);
                    }

                    //agregar total VES
                    this.total_ves = calc_total_ves(this.total_usd, this.details.monto_tc);

                }else if(  this.type_form == 'edit' || this.type_form == 'show' ){
                    const { id_factura, cliente, tarifa_envio, total_usd, tipo_envio, nro_factura, nro_container, warehouses, pago, extras, cost_x_tracking, cost_reempaque, gastos_extras } = response.data.result;
                    const { monto_tc, fecha_tc } = response.data.tasa;

                    //agregamos esta informacion en la cabecera.
                    this.details.tipo_envio = tipo_envio;
                    this.details.tarifa = formatPrice.constPrice(tarifa_envio, ',', '.');
                    this.details.nro_factura = nro_factura;
                    this.details.nro_container = nro_container;
                    this.details.monto_tc = pago.length > 0 ? response.data.result.monto_tc : monto_tc;
                    this.details.fecha_tc = pago.length > 0 ? response.data.result.fecha_tc : fecha_tc;
                    this.details.id_factura = id_factura;
                    this.client = cliente;

                    const { wh_old, wh_new } = warehouses_data(warehouses,this.envio);

                    console.log(wh_old, wh_new);

                    //agregar warehouses
                    this.warehouses = wh_old;

                    //agregar data content de la factura
                    if( this.envio === 'directo' ){
                        this.dataContent = data_contents(wh_old, this.details.tipo_envio, this.details.tarifa, this.envio);
                    }else{
                        this.dataContent = data_contents(wh_new, this.details.tipo_envio, this.details.tarifa, this.envio);
                        this.warehousesNew = wh_new;
                    }
                        
                        

                    //agregamos las cajas
                    this.cajas = cajas(response.data.extras);

                    //agregar cajas extras
                    extras.forEach(element => {
                        const { cant, id_gasto_extra, monto_gasto_extra, nombre } = element.detalles;
                        
                        this.list_cajas = add_box(this.list_cajas, id_gasto_extra, nombre, monto_gasto_extra, cant);
                    });

                    //agregando costo por trackings
                    this.costo_trackings = formatPrice.constPrice(cost_x_tracking, ',', '.');

                    if( this.envio === 'reempaque' ){
                        this.costo_reempaque = cost_reempaque;
                    }

                    //agregar gastos extras
                    this.gastos_extras = formatPrice.constPrice(gastos_extras, ',', '.');
                    
                    //agregar total en USD
                    this.total_usd = formatPrice.constPrice(total_usd, ',', '.');

                    //agregar total VES
                    this.total_ves = calc_total_ves(this.total_usd, this.details.monto_tc);
                }

                setTimeout(() => {
                    this.componentRender = '';
                }, 1000);
            }).catch(error => {
                console.log(error.response.data)
                this.componentRender = Error404;
            });
        },
        //agregar caja
        addCaja(){
            if( !isNaN(this.cant_caja) && this.cant_caja % 1 == 0 && this.cant_caja > 0){
                if( this.caja != '' ){
                    const { id_gasto_extra, nombre, monto_gasto_extra } = this.cajas.filter( caja => caja.id_gasto_extra  == this.caja)[0];
                    this.list_cajas = add_box(this.list_cajas, id_gasto_extra, nombre, monto_gasto_extra, this.cant_caja);
                    this.calculo_totales();
                }else{
                    alert('Debe Seleccionar un tipo de caja');
                }
            }else{
                alert('Por favor debe agregar una cantidad, solo numeros enteros y mayor a cero');
            }
        },
        //eliminar caja, de la lista cajas
        removeCaja(cajasNew = []){ this.list_cajas = cajasNew; this.calculo_totales(); },
        //funcion para construccion de precion USD
        keyUpPrecio(e){
            if( e.target.name !== 'tarifa'){
                this[e.target.name] = formatPrice.constPrice(e.target.value, ',', '.');
            }else{
                this.details[e.target.name] = formatPrice.constPrice(e.target.value, ',', '.');
            }
           
        },
        //ejecutar funcion de calcular todo
        changePrecio(e){ this.calculo_totales(); },
        //ejecutar cambio de tarifa en el dataContent
        changePrecioTarifa(){
            const wh = this.envio == 'directo' ? this.warehouses : this.warehousesNew;
            this.dataContent = data_contents(wh, this.details.tipo_envio, this.details.tarifa, this.envio);
            this.calculo_totales();
        },
        //calculo totales se refiere a la suma de todo los subtotal, costo tracking, reempaque y gastos extras.
        calculo_totales(){
            this.total_usd = calc_total_usd_data(this.dataContent, 'sub_total');
            this.total_usd = suma_total_usd_var(this.total_usd, this.costo_trackings); //sumar costo trackings + total_usd;

            if( this.envio === 'reempaque' ){
                this.total_usd = suma_total_usd_var(this.total_usd, this.costo_reempaque);
            }

            if( this.list_cajas.length > 0 ){
                let total = calc_total_usd_data(this.list_cajas, 'sub_total');
                this.total_usd = suma_total_usd_var(this.total_usd, total);
            }

            if( this.gastos_extras !== '0.00' ){
                this.total_usd = suma_total_usd_var(this.total_usd, this.gastos_extras);
            }

            this.total_ves = calc_total_ves(this.total_usd, this.details.monto_tc);
        },
        //agregar nuevos wh, esta funcion funciona para facturas con reempaque
        add_new_wh(dataNew = []){
            this.warehousesNew = dataNew;
            this.dataContent = data_contents(this.warehousesNew, this.details.tipo_envio, this.details.tarifa, this.envio);
            this.calculo_totales();
        },
        //abrir modal confirmar contraseña, y tambien valida antes de abrirlo
        confirmInvoice(){
            if( this.dataContent.length === 0 ){
                alert('Error, se debe facturar, y no se puede enviar vacio');
                return;
            }

            if( this.details.tarifa === '0.00' || this.details.tarifa === '' ){
                alert('Error, tarifa,  no debe ir en cero o vacio');
                return;
            }

            if( this.details.tarifa === '0.00' || this.details.tarifa === '' || this.details.tarifa == '0' ){
                alert('Error, tarifa,  no debe ir en cero o vacio');
                return;
            }

            if( this.details.nro_factura === '0.00' || this.details.nro_container === '' ){
                alert('Error, tarifa,  el numero de factura y numero de container es requerido');
                return;
            }

            this.show = true;
        },
        hiddenModal() { this.show = false },
        //switch para post o put
        sendFactura(){
            this.show = false;
            this.loaderCard = true;
            let url = this.envio === 'reempaque' ? save_reempaque : save_directo;
            this.post_axios(url);
        },
        post_axios(url){
            let warehouses = [];
            let warehouses_new = [];
            let extras_cajas = [];
            let data_content = [];
            let total_usd = formatPrice.desctPrice(this.total_usd, ',');
            let total_ves = formatPrice.desctPrice(this.total_ves, '.');
            let total_gastos_extras = formatPrice.desctPrice(this.gastos_extras, ',');
            let cost_reempaque = formatPrice.desctPrice(this.costo_reempaque, ',');
            let cost_x_tracking = formatPrice.desctPrice(this.costo_trackings, ',');

            for (let i = 0; i < this.warehouses.length; i++) {
                let wh = {...this.warehouses[i]}
        
                wh.total_seguro = formatPrice.desctPrice(wh.total_seguro,',');
                wh.seguro = formatPrice.desctPrice(wh.seguro,',');

                warehouses.push(wh);
            }

            for (let i = 0; i < this.warehousesNew.length; i++) {
                let wh = {...this.warehousesNew[i]}
        
                wh.total_seguro = formatPrice.desctPrice(wh.total_seguro,',');
                wh.seguro = formatPrice.desctPrice(wh.seguro,',');

                warehouses_new.push(wh);
            }

            for (let i = 0; i < this.dataContent.length; i++) {
                let data = {...this.dataContent[i]}
        
                data.sub_total = data.sub_total != '' ? formatPrice.desctPrice(data.sub_total,',') : '';
                data.seguro = data.seguro != '' ? formatPrice.desctPrice(data.seguro,',') : '';
                data.cost_env = data.cost_env != '' ? formatPrice.desctPrice(data.cost_env,',') : ''

                data_content.push(data);
            }

            for (let i = 0; i < this.list_cajas.length; i++) {
                let caja = {...this.list_cajas[i]}
              
                caja.sub_total = formatPrice.desctPrice(caja.sub_total,',');
                caja.monto_gasto_extra = formatPrice.desctPrice(caja.monto_gasto_extra,',');

                extras_cajas.push(caja);
            }

  
            const formData = {
                id_factura: this.details.id_factura,
                nro_factura: this.details.nro_factura,
                nro_container: this.details.nro_container,
                tipo_envio: this.details.tipo_envio,
                tarifa_envio:  formatPrice.desctPrice(this.details.tarifa,','),
                usuario_id: this.client.usuario_id,
                cliente: this.client,
                warehouses,
                warehouses_new,
                data_content,
                extras_cajas,
                total_usd,
                total_ves,
                monto_tc: formatPrice.desctPrice(this.details.monto_tc,'.'),
                fecha_tc: this.details.fecha_tc,
                total_gastos_extras,
                cost_reempaque,
                cost_x_tracking,
                metodo: this.type_form == 'new' ? 'store' : 'updated'
            }
            console.log(formData)
            this.alert = {};
            this.activeComponent = '';
            this.axios.post(url, formData)
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
                    this.loaderCard = false;
                }, 2000);
                
            }).catch(error => {
                this.alert = {
                    msg: error.response.data.message,
                    clss: 'error'
                }

                console.log(error.response.data)

                this.activeComponent = AlertMessageComponent;
                setTimeout(() => {
                    this.loaderCard = false;
                }, 2000);
            });
        }
    }
}
</script>
<style>
    .modal.show{
        display: block;
    }

    @media (max-width: 768px){
        .text-start-xs{
            text-align: left !important;
        }
    }
</style>