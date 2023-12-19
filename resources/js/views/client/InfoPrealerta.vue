<template>
 <div class="page-body">
    <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <div class="card card-lg" v-if="componentRender == ''">
                    <div v-show="loader" class="div-loader_white"><loader></loader></div>
                    <div class="card-body">
                        <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="row mb-5">
                            <div class="col-md-7 col-lg-7 col-sm-12">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-sm-4 col-lg-12 mb-3">
                                        <p class="h3">Solicitud Envío</p>
                                        <address>
                                            <p>Empresa de Transporte: {{prealerta.nombre_transporte}}</p>
                                            <p>Cantidad Trackings: {{trackings.length}}</p>
                                            <p>Fecha De Solicitud: {{prealerta.fecha_solicitud}}</p>
                                            <p>Fecha De Llegada: {{prealerta.fecha_llegada_solicitud}}</p>
                                            <p>Número de Warehouse: {{` ${prealerta.nro_warehouse != null ? prealerta.nro_warehouse : 'N/A'} `}}</p>
                                        </address>
                                    </div>
                                    <div class="col-12 col-md-12 col-sm-8 col-lg-12">
                                        <p class="h3">Estado de Solicitud</p>
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-12 mb-3" v-for="(estado, index) in estados" :key="index">
                                                <div class="avatar text-uppercase w-100" :class="{'bg-green-lt': estado.check, 'bg-muted-lt': !estado.check}">
                                                    {{estado.title}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5 col-lg-5 col-sm-12 mb-3">
                                <p class="h3">Tracking: </p>
                                <div class="card mb-4">
                                    <div class="card-body" style="padding: 1rem 1rem !important;">
                                        <div class="divide-y">
                                            <div v-for="(item, index) in trackings" :key="index">
                                                <div class="row">
                                                    <div class="col-auto">
                                                        <a :href="item.ruta_image" target="_blank" rel="noopener noreferrer" class="avatar" :style="`background-image: url(${item.ruta_image})`" v-if="item.ruta_image != null"></a>
                                                        <span class="avatar" v-else :style="`background-image: url(${item.ruta_image})`"></span>
                                                    </div>
                                                    <div class="col">
                                                        <div class="text-truncate">
                                                            {{ item.descripcion }}
                                                        </div>
                                                        <div class="text-muted">
                                                            <span class="small text-muted me-1">Tracking:</span>
                                                            <span class="small text-mute">{{ item.tracking }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <div class="dropdown">
                                                            <button type="button" class="text-muted card-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                                                <span style="color:#24298D;">Más Inf.</span>
                                                            </button>
                                                            <div class="dropdown-menu dropdown-menu-demo dropdown-menu-end client-inf-prealerta">
                                                                <h6 class="dropdown-header">Más Información</h6>
                                                                <div class="dropdown-divider"></div>
                                                                    <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Ancho:</span>
                                                                    <div> <strong>{{ ` ${item.ancho != null ? item.ancho : 'N/A'} ` }}</strong></div>
                                                                </div>
                                                                    <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Alto:</span>
                                                                    <div> <strong>{{  ` ${item.alto != null ? item.alto : 'N/A'} `  }}</strong></div>
                                                                </div>
                                                                <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Largo:</span>
                                                                    <div> <strong>{{ ` ${item.largo != null ? item.largo : 'N/A'} ` }}</strong></div>
                                                                </div>
                                                                <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Peso:</span>
                                                                    <div> <strong>{{  ` ${ item.peso != null ? item.peso : 'N/A' }` }}</strong></div>
                                                                </div>
                                                                    <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">FT³:</span>
                                                                    <div> <strong>{{ item.pie_cubico }}</strong></div>
                                                                </div>
                                                                <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">VOL:</span>
                                                                    <div> <strong>{{ ` ${ item.volumen != null ? item.volumen : 'N/A' }`  }}</strong></div>
                                                                </div>
                                                                <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Número de Piezas:</span>
                                                                    <div> <strong>{{ ` ${ item.num_piezas != null ? item.num_piezas : 'N/A' }` }}</strong></div>
                                                                </div>
                                                                <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Total Seguro:</span>
                                                                    <div> <strong>{{ ` ${ !almacen_status ? 'N/A' : item.total_seguro }` }}</strong></div>
                                                                </div>
                                                                <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Con Reempaque:</span>
                                                                    <div> <strong>{{ ` ${ !almacen_status ? 'N/A' : item.reempaque }`  }}</strong></div>
                                                                </div>
                                                                <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Con Reempaque:</span>
                                                                    <div> <strong>{{ ` ${ !almacen_status ? 'N/A' : item.reempaque }`  }}</strong></div>
                                                                </div>
                                                                <div class="dropdown-item disabled"> 
                                                                    <span class="small text-muted me-1">Fecha instruccion:</span>
                                                                    <div> <strong>{{ ` ${ !almacen_status ? 'N/A' : item.fecha_editado }`  }}</strong></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                  <div class="m-0 w-100" v-if="estado">
                                    <div class="form-floating mb-3" :class="{'is-invalid': errors.first('tipo_envio')}">
                                        <select class="form-select" name="tipo_envio" v-validate="'required'" id="tipo_envio" v-model="solicitud.tipo_envio" :data-vv-validate-on="'change'">
                                            <option value="aereo">
                                                Aereo
                                            </option>
                                            <option value="maritimo">
                                                Maritimo
                                            </option>
                                        </select>
                                        <label for="tipo_envio">Selecciona el tipo de envio</label>
                                        <div v-if="errors.has('tipo_envio')" class="invalid-feedback">{{errors.first('tipo_envio')}}</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <select class="form-select" name="reempaque" id="reempaque" v-model="solicitud.reempaque" :data-vv-validate-on="'change'" :class="{'is-invalid': errors.first('tipo_envio')}" v-validate="'required'">
                                            <option value="si">
                                                SI
                                            </option>
                                            <option value="no">
                                                NO
                                            </option>
                                        </select>
                                        <label for="reempaque">Con Reempaque</label>
                                        <div v-if="errors.has('reempaque')" class="invalid-feedback">{{errors.first('reempaque')}}</div>
                                    </div>
                                     <div class="form-floating mb-3 w-100">
                                        <input type="text" class="form-control" name="total_seguro" v-model="solicitud.total_seguro" id="total_seguro"  pattern="[0-9,.]+" @keyup="changeTotalSeguro($event)">
                                        <label for="total_seguro">Total Seguro</label>
                                    </div>
                                    <span class="form-check-description">
                                        El seguro <strong>solo cubre HURTOS</strong>, no cubre DECOMISOS O PROCESOS ADUANALES
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-5">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                            <button type="submit" class="btn btn-info ms-auto" style="background-color: #2C2E88;" v-if="estado" @click="sendInstruccion">
                                Enviar Instrucción
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>
<script>
import BtnVolver from '../../components/BtnVolver.vue';
import {formatPrice} from '../../formatPrice.js';
const LoaderComponent = () => import('../../components/LoaderComponent.vue');
const AlertMessageComponent = () => import('../../components/AlertMessageComponent.vue');
const Error404 = () => import('../../components/Error404Component.vue');

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

const parseIntOrFloat = (valor) => valor % 1 == 0 ? parseInt(valor)  : parseFloat(valor);

const diaSemanaBol = () => {
    const DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
    DIAS_QUE_TIENE_UNA_SEMANA = 7,
    MIERCOLES = 3,
    HORAMIERCOLES = 13;
    let bol = false;
    let fecha = new Date();
    const hora = fecha.getHours();
    
    
    fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
    let diaDeLaSemana = fecha.getUTCDay();

    if( diaDeLaSemana == 6 || diaDeLaSemana == 0 || diaDeLaSemana == 1 || diaDeLaSemana == 2 ){
        bol = true;
    }

    if( MIERCOLES == diaDeLaSemana && hora <= HORAMIERCOLES  ){
        bol = true;
    }

    

    //return bol;
    return true;
}

let estados = [
    {
        title: 'Pendiente por recibir',
        valor: 'pendiente',
        check: false,
    },
    {
        title: 'Recibido en Miami',
        valor: 'recibido',
        check: false,
    },
]
export default {
    name: 'InfoPrealerta',

    data() {
        return {
            loader: false,
            componentRender: LoaderComponent,
            activeComponent: '',
             alert: {
                msg: '',
                clss: '' 
            },
            trackings: [],
            prealerta: {
                nombre_transporte: '',
                fecha_solicitud: '',
                fecha_llegada_solicitud: '',
                nro_warehouse: ''
            },
            estado: false,
            almacen_status: false,
            estados: [],
            solicitud: {
                tipo_envio: '',
                id_almacen: '',
                id_solicitud: '',
                id_tracking: '',
                reempaque: '',
                total_seguro: '0.00'
            },
            show: false,
            tracking: {}

        };
    },
    components: {
        loader: LoaderComponent,
        BtnVolver
    },
    beforeCreate(){
        this.$nextTick( async function () {
            console.log('sdsd')
            if( Object.keys(this.$route.params).length != 0 && this.$route.query.length != 0 && this.$route.query.hasOwnProperty('estado')){
                await this.axios.get(`solicitudes/${this.$route.params.id}`, {params: {estado: this.$route.query.estado}}).then((response) => {
                    //this.transportes = response.data.result;
                    if( response.data.results != null ){
                        const { transporte_nombre, solicitud_fecha_creado, solicitud_fecha_llegada, almacen_warehouse, solicitud_estado, tracking, id_solicitud } = response.data.results;
                        this.prealerta = {
                            nombre_transporte: transporte_nombre,
                            fecha_solicitud: solicitud_fecha_creado,
                            fecha_llegada_solicitud: solicitud_fecha_llegada,
                            nro_warehouse: almacen_warehouse
                        }

                        for (let i = 0; i < estados.length; i++) {
                            if( estados[i].valor == solicitud_estado ){
                                estados[i].check = true;
                            }
                        }

                        if( solicitud_estado == 'recibido' || solicitud_estado == 'enviado' ){
                            estados[0].check = true;
                        }

                        if( solicitud_estado == 'enviado' ){
                            estados[1].check = true;
                        }
                        
                        if( response.data.results.almacen_status == 0){
                            this.estado = true;
                            this.solicitud.id_almacen = response.data.results.id_almacen;
                        }

                        if( response.data.results.almacen_status == 1 ){
                            this.almacen_status = true;
                        }
                        

                        this.estados = estados;
                        this.trackings = tracking;

                        for (let i = 0; i < this.trackings.length; i++) {
                            let { total_seguro } = this.trackings[i];
                            
                            total_seguro = parseIntOrFloat(total_seguro);
                            total_seguro = total_seguro.toFixed(2);
                            total_seguro = formatPrice.constPrice(total_seguro,',','.')


                            this.trackings[i].total_seguro = total_seguro;
                            this.solicitud.id_tracking = this.trackings[i].id_tracking;
                        }
                        
                        this.solicitud.id_solicitud = id_solicitud;
                        console.log(this.trackings)
                        this.componentRender = '';
                    }else{
                        this.componentRender = Error404;
                    }
                    console.log(response.data)
                }).catch(error => {
                    console.log(error);
                });
            }else{
                this.componentRender = Error404;
            }
           /* await this.axios.get('transport-companies', {params : {}}).then((response) => {
                this.transportes = response.data.results;
            }).catch(error => {
               console.log(error);
            });*/
        })
    },
    methods: {
        changeTotalSeguro(e){
            this.solicitud.total_seguro = formatPrice.constPrice(e.target.value, ',', '.');
        },
       async sendInstruccion(){
            if( this.estado ){
                this.$validator.validate().then( async(valid) =>{
                    if( valid ){
                        if( this.solicitud.tipo_envio == '' ){
                            this.respAlert(403, 'Por Favor debe indicar un tipo de envio');
                            return;
                        }

                        if( this.solicitud.reempaque == '' ){
                            this.respAlert(403, 'Por Favor debe indicar si quiere o no con reempaque');
                            return;
                        }


                        const formData = {
                            tipo_envio: this.solicitud.tipo_envio,
                            id_almacen: this.solicitud.id_almacen,
                            id_tracking: this.solicitud.id_tracking,
                            reempaque: this.solicitud.reempaque,
                            total_seguro: formatPrice.desctPrice(`${this.solicitud.total_seguro}`, ',')
                        }

                        console.log(formData);

                        this.loader = true;

                        const resp = (resp) => {
                            setTimeout(() => {
                                this.loader = false;
                                this.respAlert(resp.status, resp.message);
                            }, 2000);

                            if( resp.status == 200 ){
                                setTimeout(() => {
                                    this.$router.go(-1)
                                }, 4000)
                            }
                        }
                        await this.axios.post(`solicitudes-instruccion/${this.solicitud.id_solicitud}`, formData).then(response => {
                            console.log(response.data)
                            resp(response.data)
                        }).catch(error => {
                            console.log(error.response.data)
                            let status = error.response.status;
                            let message = error.response.data.message;

                            if( status == 500 ){
                                message = 'Error inesperado. por favor intentar más tarde.';
                            }

                            resp({
                                status: status,
                                message: message
                            })
                        });
                    }
                
                });
               
            }
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
};
</script>
<style>
    .client-inf-prealerta .dropdown-item.disabled{padding-top: 0; padding-bottom: 0;}
    .modal.show{
        display: block;
    }
</style>