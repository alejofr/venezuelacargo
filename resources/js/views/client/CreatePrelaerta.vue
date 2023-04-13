<template>
<div class="page-body">
 <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <div class="card card-lg">
                    <div v-show="loader" class="div-loader_white"><loader></loader></div>
                    <div class="card-body">
                        <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="row mb-3">
                            <div class="col-md-4 col-lg-4 col-12 mb-3">
                                <div class="col-12 mb-3">
                                    <div class="form-floating mb-3" :class="{'is-invalid': errors.first('transporte')}">
                                        <select class="form-select" name="transporte" v-validate="'required'" id="transporte" v-model="id_empresa_transporte" :data-vv-validate-on="'change'">
                                            <option v-for="(transporte, index) in transportes" :key="index" :value="transporte.id_empresa_transporte" >
                                                {{transporte.codigo}} - {{transporte.nombre}}
                                            </option>
                                        </select>
                                        <label for="transporte">Selecciona un transporte</label>
                                        <div v-if="errors.has('transporte')" class="invalid-feedback">{{errors.first('transporte')}}</div>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="form-floating mt-2">
                                        <input type="text"   class="form-control" v-model="nro_tracking"  id="nro_tracking" name="nro_tracking" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('nro_tracking')}">
                                        <label for="nro_tracking">Número de Tracking</label>
                                        <div v-if="errors.has('nro_tracking')" class="invalid-feedback">{{errors.first('nro_tracking')}}</div>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="form-floating mt-2">
                                        <input type="text"   class="form-control" v-model="desp_tracking"  id="desp_tracking" name="desp_tracking" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('desp_tracking')}">
                                        <label for="desp_tracking">Descripción del Tracking</label>
                                        <div v-if="errors.has('desp_tracking')" class="invalid-feedback">{{errors.first('desp_tracking')}}</div>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="form-floating mt-2">
                                        <input type="date"   class="form-control" v-model="fecha_llegada"  id="fecha_llegada" name="fecha_llegada" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('fecha_llegada')}">
                                        <label for="fecha_llegada">Fecha estimada de llegada</label>
                                        <div v-if="errors.has('fecha_llegada')" class="invalid-feedback">{{errors.first('fecha_llegada')}}</div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-dark w-100" @click="addTracking">Agregar Tracking</button>
                                </div>
                            </div>
                            <div class="col-md-8 col-lg-8 col-12 mb-3 ps-4 table-responsive">
                                <table class="table table-transparent table-responsive">
                                    <thead>
                                        <tr>
                                            <th style="width: 20%;">Transporte</th>
                                            <th style="width: 20%;">Nro. Tracking</th>
                                            <th style="width: 40%;">Descripción</th>
                                            <th style="width: 15%;">F. Llegada</th>
                                            <th style="width: 5%;"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in trackings" :key="index">
                                            <td>
                                                <span>{{ item.transporte }}</span>
                                            </td>
                                            <td>
                                                <span class=""> {{ item.tracking }}</span>
                                            </td>
                                            <td>
                                                <span class=""> {{ item.descripcion }}</span>
                                            </td>
                                            <td>
                                                <span>{{item.fecha_llegada}}</span>
                                            </td>
                                            <td>
                                                <div class="btn-list flex-nowrap">
                                                    <button class="btn-acticon_spalert" type="button" :value="item.tracking" @click="deleteTracking($event)" title="Quitar" v-title>
                                                        <i class="ti ti-trash" style="font-size: 21px;"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-5">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                            <button type="submit" class="btn btn-info ms-auto" @click="sendSolicitud">
                                Enviar Solicitud
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
const LoaderComponent = (() => import('../../components/LoaderComponent.vue') );
const AlertMessageComponent = (() => import('../../components/AlertMessageComponent.vue') );
import BtnVolver from '../../components/BtnVolver.vue';
export default {
    name: 'CreatePrelaerta',
    data() {
        return {
            loader: false,
            activeComponent: '',
             alert: {
                msg: '',
                clss: '' 
            },
            transportes: [],
            trackings: [],
            id_empresa_transporte: '',
            nro_tracking: '',
            desp_tracking: '',
            fecha_llegada: ''
        };
    },
    beforeCreate(){
        this.$nextTick( async function () {
            console.log('sdsd')
            await this.axios.get('transport-companies').then((response) => {
                this.transportes = response.data.results;
            }).catch(error => {
               console.log(error);
            });
        })
    },
    components: {
        loader: LoaderComponent,
        BtnVolver
    },
    methods: {
        addTracking(){
            this.$validator.validate().then(valid => {
                if( valid ){
                 
                    if( !this.checkId_empresa(this.id_empresa_transporte) && this.trackings.length > 0){
                        this.respAlert(403, 'No puede agregar mas de una empresa de transporte')
                        return;
                    }

                    if( this.checkTracking(this.nro_tracking) && this.trackings.length > 0 ){
                        this.respAlert(403, 'El número de tracking, debe ser único.')
                        return;
                    }

                    const { nombre } = this.transportes.filter( (transporte) => transporte.id_empresa_transporte == this.id_empresa_transporte )[0];

                    this.trackings.push({
                        id_empresa_transporte: this.id_empresa_transporte,
                        transporte: nombre,
                        tracking: this.nro_tracking,
                        descripcion: this.desp_tracking,
                        fecha_llegada: this.fecha_llegada
                    })
                }
            });
        },
        deleteTracking(e){
            let newTrackings = [];
            
            for (let i = 0; i < this.trackings.length; i++) {
                if( this.trackings[i].tracking != e.target.parentElement.value) newTrackings.push(this.trackings[i]);
            }

            this.trackings = newTrackings;
        },
        respAlert(status, msg = ''){
            this.alert = {
                msg: msg,
                clss: ( status == 200 ) ? 'updated' : 'error'
            }

            this.activeComponent = AlertMessageComponent;
            return;
        },
        checkId_empresa(id){
            for (let i = 0; i < this.trackings.length; i++) {
                if( this.trackings[i].id_empresa_transporte == id ){
                    return true;
                }
            }

            return false;
        },
        checkTracking(tracking){
            for (let i = 0; i < this.trackings.length; i++) {
                if( this.trackings[i].tracking == tracking ){
                    return true;
                }
            }

            return false;
        },
        async sendSolicitud(){

            if( this.trackings.length == 0 ){
                this.respAlert(403, 'Debe agregar al menos un tracking con su descripción');
                return;
            }


            const formData = {
                trackings: this.trackings,
            }

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
            await this.axios.post('solicitudes', formData).then(response => {
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
    },
};
</script>