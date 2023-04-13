<template>
    <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <form name="prealerta" @submit.prevent="savePaquete($event)"  enctype="multipart/form-data" class="card card-lg" v-if="componentRender == '' && pdfSolicitud == ''">
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
                                    <p v-if="user.cod_usuario != null">Código Usuario: {{user.cod_usuario}}</p>
                                    <p>Teléfono: {{user.telefono}}</p>
                                    <p>Cédula: {{user.cedula}}</p>
                                    <p>Dirección: {{user.direccion}}. {{user.estado}} {{`${user.zona != null ? ', '+ user.zona + ', '+user.codigo_postal : ''}`}}</p>
                                    <p v-if="user.ref_direccion != null">Ref. Dirección: {{user.ref_direccion}}</p>
                                </address>
                            </div>
                        </div>
                        <table class="table table-transparent table-responsive mt-4 mb-5">
                            <thead>
                                <tr>
                                    <th class="">nro. Tracking</th>
                                    <th class="">Descripción</th>
                                    <th class="">nro. Piezas</th>
                                    <th class="">Ancho</th>
                                    <th class="">Largo</th>
                                    <th class="">Alto</th>
                                    <th class="">Peso</th>
                                    <th class="">Img</th>
                                    <th class=""></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in trackings" :key="index">
                                    <td>
                                        <span class=""> {{ item.tracking }}</span>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" v-model="item.descripcion" v-if="sendBol" />
                                        <span v-else> {{item.descripcion}} </span>
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
                                        <span class="avatar avatar-sm" :style="`background-image: url(${item.ruta_image})`"></span>
                                    </td>
                                    <td>
                                        <div class="btn-list flex-nowrap" v-if="sendBol">
                                            <button class="btn-acticon_spalert" type="button" id='paquete' :value="item.id_tracking" @click="showModal($event)" title="Tracking Recibido" v-title>
                                                <i class="ti ti-package" style="font-size: 21px;"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex align-items-center mt-5">
                            <div class=" m-0 ms-auto" style="width: 330px;">
                                <div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" name="warehouse" v-model="solicitud.warehouse" id="warehouse"  v-if="sendBol" >
                                    <input type="text" class="form-control" name="warehouse" v-model="solicitud.warehouse" id="warehouse" disabled  v-else>
                                    <label for="warehouse">Warehouse</label>
                                </div>
                                <div class="form-floating mb-3 w-100" v-if="user.cod_usuario == null">
                                    <input type="text" class="form-control" name="cod_usuario" v-model="solicitud.cod_usuario" id="cod_usuario" >
                                    <label for="cod_usuario">Código Usuario</label>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-3">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                            <button type="submit" class="btn btn-info ms-auto" v-if="sendBol">
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
                    <form class="modal modal-blur fade" :class="{'show': show == true}"  id="paquete" tabindex="-1" aria-modal="true" role="dialog" >
                        <div name="paquete"  class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Registrar tracking: {{title}}</h5>
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
                                        <input type="text" v-validate="'required|regex:^[0-9]+([.][0-9]{2})?$'" name="peso" class="form-control" :class="{'is-invalid': errors.first('peso')}" id="largo" v-model="dato.peso" 
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
                                    <div class="mb-3">
                                        <div class="form-label">Selecciona la Imagen de este Tracking</div>
                                        <input type="file" class="form-control" @change="changeFileImage($event)" id="fileimage">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal()">Cerrar</button>
                                    <button type="button" id="paquete" class="btn btn-primary" data-bs-dismiss="modal" @click="saveDataPaquete">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                <transition name="component-fade" mode="out-in" v-if="componentRender == ''">
                    <keep-alive>
                        <component :is='pdfSolicitud' v-bind:data="jsonData"></component>
                    </keep-alive>
                </transition>
            </div>
       </div>
    </div>
</template>
<script>
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../components/Error404Component.vue');
const AlertMessageComponent = () => import('../../../components/AlertMessageComponent.vue');

import BtnVolver from '../../../components/BtnVolver.vue';

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
    name: 'PreAlerta',

    data() {
        return {
            componentRender: LoaderComponent,
            activeComponent: '',
            pdfSolicitud: '',
            user: {},
            prealerta: {},
            trackings: [],
            solicitud: {
                id_solicitud: '',
                estado: '',
                warehouse: '',
                id_almacen: '',
                cod_usuario: '',
                usuario_id: '',
                trackings: []
            },
            show: false,
            dato: {},
            title: '',
            imagenMiniatura: '',
            jsonData: {
                recibo: '',
                fecha_recibo: '',
                ruta_pdf: '',
                total_piezas: 0,
                total_peso: 0,
                total_volumen: 0,
                total_piecub: 0,
                cliente: {},
                trackings: []
            },
            alert: {},
            sendBol: false
        };
    },
    components: {
        BtnVolver,
    },
    beforeCreate(){
        this.$nextTick(async function () {
            if( Object.keys(this.$route.params).length != 0 && Object.keys(this.$route.query).length != 0 && this.$route.query.hasOwnProperty("estado") ){
                this.sendBol = ( this.$route.query.estado == 'pendiente' ) ? true : false;
                await this.axios.get(`prealertas/${this.$route.params.id}`, {params: {estado: this.$route.query.estado}})
                .then(response => { 
                    console.log(response);
                    setTimeout(() => {
                        this.componentRender = '';
                    }, 2000);

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
                        direccion: response.data.results.direccion,
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
                    this.solicitud.estado = this.$route.query.estado;
                    this.solicitud.id_solicitud = response.data.results.id_solicitud;
                    this.solicitud.usuario_id = this.user.usuario_id;
                    this.solicitud.cod_usuario = this.user.cod_usuario;
                    if( this.solicitud.cod_usuario === null ){
                        this.solicitud.cod_usuario = '';
                    }

                    if( response.data.results.warehouse != null ){
                        this.solicitud.warehouse = response.data.results.warehouse;
                    }
                    if( response.data.results.id_almacen != null ){
                        this.solicitud.id_almacen = response.data.results.id_almacen;
                    }
                }).catch(error => {
                    this.componentRender = Error404;
                })                
            }else{
                this.componentRender = Error404;
            }
        })
    },
    methods: {
        showModal(e){
            const { value } = e.target.parentNode;
            let { tracking, id_tracking, alto, ancho, largo, peso, num_piezas} = check(this.trackings, value, 'id_tracking');
            
            this.title = tracking;
            this.dato = {
                id_tracking: id_tracking,
                alto: alto,
                ancho: ancho,
                largo: largo,
                peso: peso,
                num_piezas: num_piezas,
                image: ''
            };

            if( check( this.solicitud.trackings, value, 'id_tracking' )  != null ){
                this.dato.alto = check( this.solicitud.trackings, value, 'id_tracking' ).alto;
                this.dato.ancho = check( this.solicitud.trackings, value, 'id_tracking' ).ancho;
                this.dato.largo = check( this.solicitud.trackings, value, 'id_tracking' ).largo;
                this.dato.peso = check( this.solicitud.trackings, value, 'id_tracking' ).peso;
                this.dato.num_piezas = check( this.solicitud.trackings, value, 'id_tracking' ).num_piezas;
                this.dato.image = check( this.solicitud.trackings, value, 'id_tracking' ).image;
            }
            

            this.show = true;
        },
        hiddenModal(){
            this.show = false;
        },
        changeFileImage(e){
            let file = e.target.files[0];
            if( file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' ){
                this.dato.image = file;
                
                this.imgMini(file);
                
            }else{
                alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
            }
        },
        imgMini(file){
            let render = new FileReader();

            render.onload = (e) => {
                this.imagenMiniatura = e.target.result;
            }

            render.readAsDataURL(file);
        },
        saveDataPaquete(){
            this.$validator.validate().then(valid => {
                if( valid ){
                    if( this.dato.image != '' ){
                        const trackings = this.solicitud.trackings;
                        if( trackings.length != 0 ){
                            for (let i = 0; i < trackings.length; i++) {
                                if( trackings[i].id_tracking == this.dato.id_tracking ){
                                    this.solicitud.trackings[i] = this.dato;
                                    break;
                                }
                            }
                        }else{
                            this.solicitud.trackings.push(this.dato)
                        }
                        
                        
                        this.imgMini(this.dato.image);

                        for (let i = 0; i < this.trackings.length; i++) {
                            if( this.trackings[i].id_tracking == this.dato.id_tracking ){
                                this.trackings[i].alto = this.dato.alto;
                                this.trackings[i].ancho = this.dato.ancho;
                                this.trackings[i].largo = this.dato.largo;
                                this.trackings[i].peso = this.dato.peso;
                                this.trackings[i].num_piezas = this.dato.num_piezas;
                                this.trackings[i].ruta_image =  this.imagenMiniatura;
                                this.trackings[i].image = this.dato.image;
                            }
                        }

                        this.show = false;
                        this.dato = {}
                        this.imagenMiniatura= '';
                        document.getElementById('fileimage').value = '';
                    }else{
                        alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
                    }
                }
            });
        },
        validarFormTracking({ tracking, descripcion, num_piezas, ancho, largo, alto, peso, image}){
            switch (true) {
                case tracking == '' && tracking != null || descripcion == '' && descripcion != null || num_piezas == '' && num_piezas != null || ancho == '' && ancho != null || largo == '' && largo != null || alto == '' && alto != null || peso == '' && peso != null || image == '' && image != null :
                    alert('Por favor, debe agregar datos en todos los campos.')
                    return false;
                case isNaN(num_piezas) || isNaN(ancho) || isNaN(largo) || isNaN(alto) || isNaN(peso):
                    alert('Por favor, los datos deben ser numeros, en los campos numero piezas, ancho, largo, alto y peso.')
                    return false;
                case num_piezas % 1 != 0:
                    alert('Por favor, los datos deben ser numeros enteros, en el campo numero piezas.')
                    return false;
                default:
                    return true;
            }
        },
        savePaquete(){
            let paquetes = this.trackings;
            console.log(paquetes)
            this.alert = {}

            for (let i = 0; i < this.trackings.length; i++) {
                if( !this.validarFormTracking(this.trackings[i]) ) return;
            }

            if( this.sendBol ){
                  if( paquetes.length == 0 && this.solicitud.estado == 'pendiente'){
                this.alert.msg = 'Error, Debe Registrar Los Paquetes Recibidos. Para Ser Guardado En El Almacen.';
                this.alert.clss = 'error';
                this.activeComponent = AlertMessageComponent;
            }/*else if( paquetes.length == 0 && this.solicitud.estado == 'Almacen-Miami' ){
                paquetes = this.trackings;
            }*/
         
            if( this.solicitud.cod_usuario == '' ){
                this.alert.msg = 'Error, Debe Registrar El Código Del Usuario.';
                this.alert.clss = 'error';
                this.activeComponent = AlertMessageComponent;
                return;
            }

            if( this.solicitud.warehouse == '' ){
                this.alert.msg = 'Error, Debe Registrar Un WareHouse.';
                this.alert.clss = 'error';
                this.activeComponent = AlertMessageComponent;
                return;
            }
            
            let formData = new FormData();
            formData.append('id_solicitud', this.solicitud.id_solicitud);
            formData.append('estado_solicitud', this.solicitud.estado);
            formData.append('id_solicitud', this.solicitud.id_solicitud);
            formData.append('cod_usuario', this.solicitud.cod_usuario);
            formData.append('warehouse', this.solicitud.warehouse);
            formData.append('usuario_id', this.solicitud.usuario_id);
            formData.append('id_almacen', this.solicitud.id_almacen);
            for (let i = 0; i < paquetes.length; i++) {
                let objt = {};
                let arrKeys = [];

                //agregamos cada tracking
                for (const key in paquetes[i]) {
                    if( key != 'image' ){
                        formData.append(`tracking[${key}]`, paquetes[i][key])
                        arrKeys.push(key);
                    }else{
                        formData.append(`images[${paquetes[i]['id_tracking']}]`, paquetes[i]['image'])
                    }
                }

                //eliminamos el append trackick y agregamos sus valores a un objeto
                for (let j = 0; j < arrKeys.length; j++) {
                    objt[arrKeys[j]] = formData.get(`tracking[${arrKeys[j]}]`);
                    formData.delete(`tracking[${arrKeys[j]}]`);
                }
    
                formData.append(`trackings[${i}]`, JSON.stringify(objt))
                }

                console.log(formData.getAll('trackings'))

                this.componentRender = LoaderComponent;
                const apiUrl = ( this.solicitud.estado == 'recibido' ) ? 'almacenes-actualizar' : 'almacenes';
                this.axios.post(apiUrl, formData, {headers: { "content-type": "multipart/form-data" } } ).then(response => {
            
                    this.loader = false;
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
                        msg: error.response.status !== 500 ? error.response.data.message : 'Ha ocurrido un error con el servidor por favor intentar mas tarde',
                        clss: 'error'
                    }

                    console.log(error.response.data)

                    this.activeComponent = AlertMessageComponent;
                    setTimeout(() => {
                        this.componentRender = '';
                    }, 2000);
                });
            }else{
                this.alert.msg = 'Error, Ya esta solicitud no se puede actualizar.';
                this.alert.clss = 'error';
                this.activeComponent = AlertMessageComponent;
            }


          
        }
    },
};
</script>

<style>
    .modal.show{
        display: block;
    }
</style>