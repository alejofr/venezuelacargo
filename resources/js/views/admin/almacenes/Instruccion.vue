<template>
    <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
               <component :is='componentRender'></component>
                <form name="prealerta" @submit.prevent="saveInstruccion($event)"  enctype="multipart/form-data" class="card card-lg" v-if="componentRender == ''">
                    <div class="card-body">
                         <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <p class="h3">Solicitud Envío</p>
                                <address>
                                    <p>Empresa de Transporte: {{prealerta.nombre}}</p>
                                    <p>Estado de Solicitud: {{prealerta.estado}}</p>
                                    <p>Cantidad Trackings: {{trackings.length}}</p>
                                    <p>Fecha De Solicitud: {{prealerta.fecha_creado}}</p>
                                    <p>Fecha De Llegada: {{prealerta.fecha_llegada}}</p>
                                </address>
                            </div>
                            <div class="col-6 text-end">
                                <p class="h3">Cliente</p>
                                <address>
                                    <p>Correo Electrónico: {{user.email}}</p>
                                    <p>Nombre Completo: {{user.nombres}} {{user.apellidos}}</p>
                                    <p v-if="user.cod_usuario != 1">Código Usuario: {{user.cod_usuario}}</p>
                                    <p>Teléfono: {{user.telefono}}</p>
                                    <p>Cédula: {{user.cedula}}</p>
                                    <p>Dirección: {{user.estado}}. {{user.zona}}, {{user.codigo_postal}} </p>
                                    <p v-if="user.ref_direccion != null">Ref. Dirección: {{user.ref_direccion}}</p>
                                </address>
                            </div>
                        </div>
                        <table class="table table-transparent table-responsive mt-4 mb-5">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">nro. Tracking</th>
                                    <th style="width: 20%;">Descripción</th>
                                    <th style="width: 5%;">Piezas</th>
                                    <th style="width: 5%;">Ancho</th>
                                    <th style="width: 5%;">Largo</th>
                                    <th style="width: 5%;">Alto</th>
                                    <th style="width: 5%;">Peso</th>
                                    <th style="width: 5%;">Vol</th>
                                    <th style="width: 5%;">FT³</th>
                                    <th style="width: 8%;">Reempaque</th>
                                    <th cstyle="width: 12%;">Total Seguro</th>
                                    <th style="width: 5%;">Img</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in trackings" :key="index">
                                    <td>
                                        <span class=""> {{ item.tracking }}</span>
                                    </td>
                                    <td>
                                        <span class="">{{ item.descripcion }}</span>
                                    </td>
                                    <td>
                                        <span class="">{{ item.num_piezas }}</span>
                                    </td>
                                    <td>
                                        <span class="">{{ item.ancho }}</span>
                                    </td>
                                    <td>
                                        <span class="">{{ item.largo }}</span>
                                    </td>
                                    <td>
                                        <span class="">{{ item.alto }}</span>
                                    </td>
                                    <td>
                                        <span class="">{{ item.peso }}</span>
                                    </td>
                                    <td>
                                        <span class="">{{ item.volumen }}</span>
                                    </td>
                                    <td>
                                        <span class="">{{ item.pie_cubico }}</span>
                                    </td>
                                    <td>
                                        <span class="">
                                            <button @click="changeReempaque($event)" type="button" class="btn" :value="index" :class="{'btn-danger':item.reempaque == 'no', 'btn-success':item.reempaque == 'si'}"> {{ item.reempaque }} </button>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="">
                                            <input type="text" :id="index" v-model="item.total_seguro" class="form-control" name="total_seguro" :placeholder="item.total_seguro" pattern="[0-9,.]+" @keyup="changeTotalSeguro($event)">
                                        </span>
                                    </td>
                                    <td>
                                        <span class="avatar avatar-sm" :style="`background-image: url(${item.ruta_image})`"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex align-items-center mt-5">
                            <div class=" m-0 ms-auto" style="width: 330px;">
                                <div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" disabled name="warehouse" v-model="solicitud.warehouse" id="warehouse"  >
                                    <label for="warehouse">Warehouse</label>
                                </div>
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
                                <!--<div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" name="total_seguro" v-model="solicitud.total_seguro" id="total_seguro" @keyup="changeTotalSeguro($event)" >
                                    <label for="total_seguro">Total Seguro</label>
                                </div>-->
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-3">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                            <button type="submit" class="btn btn-info ms-auto">
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

import {formatPrice} from '../../../formatPrice';
const parseIntOrFloat = (valor) => valor % 1 == 0 ? parseInt(valor)  : parseFloat(valor);
export default {
    name: 'Instruccion',
  data() {
        return {
            componentRender: LoaderComponent,
            activeComponent: '',
            user: {},
            prealerta: {},
            trackings: [],
            solicitud: {
                warehouse: '',
                id_almacen: '',
                tipo_envio: '',
                total_seguro: '0.00',
                id_solicitud: '',
                estado: '',
                cod_usuario: '',
                usuario_id: '',
                trackings: []
            },
            alert: {}
        };
    },
    components: {
        BtnVolver,
    },
    beforeCreate() {
        this.$nextTick(async function () {
            if( Object.keys(this.$route.params).length != 0 && Object.keys(this.$route.query).length != 0 && this.$route.query.hasOwnProperty("estado") ){
                await this.axios.get(`prealertas/${this.$route.params.id}`, {params: {estado: this.$route.query.estado}})
                .then(response => { 

                    this.user = {
                        usuario_id: response.data.results.usuario_id,
                        cod_usuario: response.data.results.cod_usuario,
                        email: response.data.results.email,
                        nombres: response.data.results.nombres,
                        apellidos: response.data.results.apellidos,
                        cedula: response.data.results.cedula,
                        telefono: response.data.results.telefono,
                        estado: response.data.results.estado_ve,
                        zona: response.data.results.zona,
                        ref_direccion: response.data.results.ref_direccion,
                        codigo_postal: response.data.results.codigo_postal
                    };

                    this.prealerta = {
                        id_solicitud: response.data.results.id_solicitud,
                        id_empresa_transporte: response.data.results.id_empresa_transporte,
                        nombre: response.data.results.nombre,
                        estado: response.data.results.estado,
                        fecha_creado: response.data.results.fecha_creado,
                        fecha_llegada: response.data.results.fecha_llegada
                    };

                    this.trackings = response.data.results.trackings;

                    for (let i = 0; i < this.trackings.length; i++) {
                        let { total_seguro } = this.trackings[i];
                        
                        total_seguro = parseIntOrFloat(total_seguro);
                        total_seguro = total_seguro.toFixed(2);
                        total_seguro = formatPrice.constPrice(total_seguro,',','.')


                        this.trackings[i].total_seguro = total_seguro;
                    }

                    this.solicitud.estado = this.$route.query.estado;
                    this.solicitud.id_solicitud = response.data.results.id_solicitud;
                    this.solicitud.usuario_id = this.user.usuario_id;
                    this.solicitud.cod_usuario = this.user.cod_usuario;
                    this.solicitud.tipo_envio = response.data.results.tipo_envio;
                    if( this.solicitud.cod_usuario == 1 ){
                        this.solicitud.cod_usuario = '';
                    }

                    if( response.data.results.warehouse != null ){
                        this.solicitud.warehouse = response.data.results.warehouse;
                    }
                    if( response.data.results.id_almacen != null ){
                        this.solicitud.id_almacen = response.data.results.id_almacen;
                    }

                    this.solicitud.total_seguro = response.data.results.total_seguro;
                    if (response.data.results.status == 1) {
                        this.solicitud.total_seguro = formatPrice.constPrice(this.solicitud.total_seguro,',', '.');
                    }

                    this.componentRender = '';
                }).catch(error => {
                    this.componentRender = Error404;
                    
                    for (let i = 0; i < this.trackings.length; i++) {
                        this.trackings[i].total_seguro = formatPrice.constPrice(this.trackings[i].total_seguro,',', '.');
                    }
                })                
            }else{
                this.componentRender = Error404;
                
            }
            
        })
    },
    methods: {
       changeReempaque(e){
            this.trackings[e.target.value].reempaque = ( this.trackings[e.target.value].reempaque == 'no' ) ? 'si' : 'no';
       },
       changeTotalSeguro(e){
            const re = formatPrice.constPrice(e.target.value, ',', '.');

            if( e.target.id == 'total_seguro') this.solicitud.total_seguro = re;
            else this.trackings[e.target.id].total_seguro = re;
       },
       saveInstruccion(){
            this.$validator.validate().then(valid => {
                if( valid ){
                    this.componentRender = LoaderComponent;
                    let paquetes = [...this.trackings];
                    let solicitud = {...this.solicitud};
                    solicitud.total_seguro = formatPrice.desctPrice(solicitud.total_seguro, ',');
                    let newPaquetes = [];
                    for (let i = 0; i < paquetes.length; i++) {
                        let paquete = {...paquetes[i]}
                        paquete.total_seguro = formatPrice.desctPrice(paquete.total_seguro, ',');
                        newPaquetes.push(paquete);
                    }
                    
                    solicitud.trackings = newPaquetes;

                    this.axios.post('almacen/instrucciones', {solicitud: solicitud}, {headers: { "content-type": "multipart/form-data" } } ).then(response => {
                
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
                        console.log(error.response.data);
                        this.alert = {
                            msg: error.response.data.message,
                            clss: 'error'
                        }

                        this.activeComponent = AlertMessageComponent;
                        setTimeout(() => {
                            this.componentRender = '';
                        }, 2000);
                    });
                }
            })
       }
    }
}


</script>