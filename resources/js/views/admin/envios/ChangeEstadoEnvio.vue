<template>
    <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <form name="actualizarEnvio" @submit.prevent="actualizarEnvio()"  enctype="multipart/form-data" class="card card-lg" v-if="componentRender == ''">
                    <div class="card-body">
                        <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="w-100 process mb-3 mt-3 row">
                             <div class="process_item col-md-3 col-12 mb-3" v-for="(item, index) in estados" :key="index">
                                <div class="process_text" :class="{'process_disabled':item.check == false, 'process_check':item.check == true}">
                                    <p class="process_text-title">{{item.title}}</p>
                                </div>
                             </div>
                        </div>
                        <div class="d-flex align-items-center mt-5">
                            <div class=" m-0 ms-auto" style="width: 330px;">
                                <div class="form-floating mb-3" v-if="estados_select.length != 0" :class="{'is-invalid': errors.first('change_estado')}">
                                    <select class="form-select" name="change_estado" v-validate="'required'" id="change_estado" v-model="change_estado" :data-vv-validate-on="'change'">
                                        <option v-for="(item, index) in estados_select" :key="index" :value="item.valor">
                                            {{item.title}}
                                        </option>
                                    </select>
                                    <label for="change_estado">Cambiar de estado</label>
                                    <div v-if="errors.has('change_estado')" class="invalid-feedback">{{errors.first('change_estado')}}</div>
                                </div>
                                <div class="form-group mb-3 " v-if="active_fecha">
                                    <label class="form-label">Fecha Estimada</label>
                                    <div>
                                        <input type="date" class="form-control" v-model="fech_estimada" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-3">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                            <button type="submit" class="btn btn-info ms-auto" v-if="estados_select.length != 0">
                                Guardar
                            </button>
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
import { shippingStates } from '../../../helpers/shippingStates.js';


let estados = shippingStates; 

export default {
    name: 'ChangeEstadoEnvio',

    data() {
        return {
            componentRender: LoaderComponent,
            activeComponent: '',
            estados: [],
            estados_select: [],
            change_estado: '',
            id: '',
            active_fecha: true,
            fech_estimada: '',
            alert: {}
        };
    },

    beforeCreate(){
        this.$nextTick(async function () {
            if( Object.keys(this.$route.query).length !== 0 && Object.keys(this.$route.params).length && this.$route.params.hasOwnProperty('id') && this.$route.query.hasOwnProperty('estado')){
                this.axios.get(`envios/${this.$route.params.id}/edit`,)
                .then( (response) => {
                    console.log(response.data);
                    const { id_envio, historial_estado, estado, fecha_estimada } = response.data.result;
                    let h_estados = [];
                    this.id = this.$route.params.id;

                    if( historial_estado != null  )
                        h_estados = [...historial_estado.historial];

                    if( fecha_estimada != null ){
                        this.fech_estimada = fecha_estimada;
                    }

                    this.change_estado = estado;


                    const estado_actual = estados.filter((item) => item.valor == estado)[0];

                    h_estados.push(estado_actual);
                    console.log(h_estados)
                
                    for (let i = 0; i < h_estados.length; i++) {
                        for (let j = 0; j < estados.length; j++) {
                            if( h_estados[i].valor == estados[j].valor ){
                                estados[j].check = true;
                                //break;
                            }
                            
                        }
                    }

                    let active = false;
                    for (let i = 0; i < estados.length; i++) {
                        const { title, valor } = estados[i];
                        this.estados_select.push({title, valor});

                        /*if( estados[i].check == false ){
                            if( active == false ){
                                const { title, valor } = estados[i];
                                if( estados[i].valor == 'ENVIO-VENEZUELA' ){
                                    this.active_fecha = true;
                                }
                                this.estados_select.push({title, valor})
                                break;
                            }
                        }*/
                        
                    }

                    this.estados = estados;
                    this.estado = estado;

              



                    this.componentRender = '';
                }).catch((error) => {
                    console.log(error.response.data);
                    this.componentRender = Error404;
                })
            }
        })
    },
    components: {
        BtnVolver,
    },
    methods: {
        actualizarEnvio(){
            
            if( this.change_estado != '' ){
                let historial = [];

                const indiceCurrent = estados.findIndex(item => item.valor == this.change_estado);

               

                for (let i = indiceCurrent; i >= 0  ; i--) {
                    const { title, valor } = estados[i];
                    historial.push({title,valor});
                }

                /*for (let i = 0; i < estados.length; i++) {
                    if( estados[i].check == true ){
                        const { title, valor } = estados[i];
                        historial.push({title,valor})
                    }
                }*/

                let estadoEnvio = {
                    estado: this.change_estado,
                    h: {historial : historial}
                }

                if( this.active_fecha && this.fech_estimada == '' ){
                    alert('Por favor agrega una fecha estimada de llegada a Venezuela')
                    return;
                }else if( this.active_fecha && this.fech_estimada != '' ){
                    estadoEnvio.fech_estimada = this.fech_estimada;
                }

                this.alert = {};
                this.activeComponent = '';
                this.componentRender = LoaderComponent;

                this.axios.put(`envios/${this.id}`, estadoEnvio)
                .then(response => {
                    console.log(response.data)
                    this.alert = {
                        msg: response.data.message,
                        clss: 'updated'
                    }

                    this.activeComponent = AlertMessageComponent;
            
                    setTimeout(() => {
                        this.$router.go(-1)
                    }, 4000)

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
                })

            }else{
                alert('Por favor agrega un estado')
            }

            
            

          
        }
    },
};
</script>
<style>
    .process{
        /*display: flex;
        align-items: center;
        justify-content: center;*/
    }
    .process_item{
        /*display: flex;
        flex-direction: row;
        align-items: center;*/
    }
    .process_icon{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .process_text{
        height: 100%;
        display: flex;
        align-items: center;
    }

    .process_text-title{
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .process_icon i{font-size: 28px;}
    .process_disabled{
        border: 3px solid rgba(98, 105, 118, 0.16);
    }
    .process_text.process_disabled, .process_text.process_check {border: none;}
    .process_icon.process_disabled i, .process_text.process_disabled .process_text-title{
        color: rgba(98, 105, 118, 0.30);
    }

    .process_check{
        border: 3px solid #0ca678;
    }
    .process_icon.process_check i, .process_text.process_check .process_text-title{
        color: #0ca678;
    }
</style>