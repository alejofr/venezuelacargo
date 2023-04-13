<template>
    <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender'></component>
                <form name="prealerta" @submit.prevent="save()"  enctype="multipart/form-data" class="card card-lg" v-if="componentRender == ''">
                    <div class="card-body">
                        <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="row mb-3">
                            <div class="col-8">
                                <div class="row">
                                    <div class="col-6">
                                        <p class="h3">Cliente</p>
                                         <div class="form-floating mt-2">
                                            <input type="text"   class="form-control dropdown-toggle" data-bs-toggle="dropdown" v-model="cliente" value="" id="cliente" name="cliente" @keyup="inputSearch($event)" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('cliente')}">
                                            <label for="cliente">Buscar Cliente</label>
                                            <ul class="dropdown-menu input-result-search" id="cliente" :style="`${usuarios.length > 10 ? 'height: 220px;overflow-y: auto;' : ''}`">
                                                <li v-if="usuarios.length == 0">No se encontraron resultados</li>
                                                <li v-for="(usuario, index) in usuarios" :key="index">
                                                    <label class="form-check" :for="index">
                                                        <input type="radio"  class="form-check-input" :value="usuario.usuario_id"  :id="index" @click="clickRadioCheck($event)">
                                                        <span class="form-check-label">{{usuario.cod_usuario}} -  {{usuario.nombres}} {{usuario.apellidos}}</span>  
                                                    </label>
                                                </li>
                                            </ul>
                                            <div v-if="errors.has('cliente')" class="invalid-feedback">{{errors.first('cliente')}}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <p class="h3">Empresa de Transporte</p>
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
                                </div>
                            </div>
                            <div class="col-4">
                                <p class="h3">WareHouse</p>
                                  <div class="form-floating mt-2">
                                        <input type="text"   class="form-control" v-model="warehouse"  id="warehouse" name="warehouse" aria-expanded="false" v-validate="'required'" data-vv-validate-on="change" :class="{'is-invalid': errors.first('warehouse')}">
                                        <label for="warehouse">WareHouse</label>
                                        <div v-if="errors.has('warehouse')" class="invalid-feedback">{{errors.first('warehouse')}}</div>
                                    </div>
                            </div>
                        </div>
                        <table class="table table-transparent table-responsive mt-4 mb-3">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">Nro. Tracking</th>
                                    <th style="width: 20%;">Descripción</th>
                                    <th style="width: 10%;">nro. Piezas</th>
                                    <th style="width: 10%;">Ancho</th>
                                    <th style="width: 10%;">Largo</th>
                                    <th style="width: 10%;">Alto</th>
                                    <th style="width: 10%;">Peso</th>
                                    <th style="width: 10%;">Img</th>
                                    <th class=""></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in trackings" :key="index">
                                    <td >
                                        <span class=""><input type="text" required v-model="item.tracking" class="form-control" name="tracking" placeholder="tracking"></span>
                                    </td>
                                    <td>
                                        <span class="">
                                            <textarea class="form-control" required v-model="item.descripcion" name="example-textarea-input" rows="1" placeholder="Descripcion"></textarea>
                                        </span>
                                    </td>
                                    <td>
                                        <span class=""><input type="text" v-model="item.num_piezas" pattern="[0-9]+" required class="form-control" name="piezas" placeholder="numero de piezas"></span>
                                    </td>
                                    <td>
                                        <span class=""><input type="text"  v-model="item.ancho" pattern="[0-9,.]+" required class="form-control" name="ancho" placeholder="ancho"></span>
                                    </td>
                                    <td>
                                        <span class=""><input type="text" v-model="item.largo" pattern="[0-9,.]+" required class="form-control" name="largo" placeholder="largo"></span>
                                    </td>
                                    <td>
                                        <span class=""><input type="text" v-model="item.alto" pattern="[0-9,.]+" required class="form-control" name="alto" placeholder="alto"></span>
                                    </td>
                                    <td>
                                        <span class=""><input type="text" pattern="[0-9,.]+" required v-model="item.peso" class="form-control" name="peso" placeholder="peso"></span>
                                    </td>
                                    <td>
                                        <span class="avatar avatar-sm" :style="`background-image: url(${item.ruta_image})`">
                                            <input type="file" class="form-control input-file_s" :id="index" @change="changeFileImage($event)" />
                                        </span>
                                    </td>
                                    <td>
                                        <div class="btn-list flex-nowrap" v-if="index > 0">
                                            <button class="btn-acticon_spalert" type="button" id='paquete' :value="index" @click="deleteTracking($event)" title="Quitar" v-title>
                                                <i class="ti ti-trash" style="font-size: 21px;"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex align-items-center mt-5">
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
import BtnVolver from '../../../components/BtnVolver.vue';
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const AlertMessageComponent = () => import('../../../components/AlertMessageComponent.vue');
export default {
    name: 'CreateAlmacen',
    data() {
        return {
            componentRender: '',
            activeComponent: '',
            trackings: [
                {
                    tracking: '',
                    descripcion: '',
                    num_piezas: '',
                    ancho: '',
                    largo: '',
                    alto: '',
                    peso: '',
                    ruta_image: '',
                    image: ''
                }
            ],
            id_cliente:'',
            cliente: '',
            usuarios: [],
            transportes: [],
            id_empresa_transporte: '',
            warehouse: '',
            alert: {}
        }
    },
    components: {
        BtnVolver,
    },
    beforeCreate(){
        this.$nextTick( async function () {
            await this.axios.get('transportes/all').then(response => {
                this.transportes = response.data.results;
            }).catch(error => {
               console.log(error.response.data);
            });
        })
    },
    methods: {

        addTracking(e){
            const newTracking = {
                tracking: '',
                descripcion: '',
                num_piezas: '',
                ancho: '',
                largo: '',
                alto: '',
                peso: '',
                ruta_image: '',
                image: ''
            }

            for (let i = 0; i < this.trackings.length; i++) {
                if( !this.validarFormTracking(this.trackings[i]) ) return;
            }

            this.trackings.push(newTracking);
            


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
        deleteTracking(e){
            let newTrackings = [];
            for (let i = 0; i < this.trackings.length; i++) {
                if( i != e.target.parentElement.value) newTrackings.push(this.trackings[i]);
            }

            this.trackings = newTrackings;
        },
        changeFileImage(e){
            const index = e.target.id;
            let file = e.target.files[0];
            if( file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' ){
                this.trackings[index].image = file;
                
                let render = new FileReader();

                render.onload = (e) => {
                    this.trackings[index].ruta_image = e.target.result;
                }

                render.readAsDataURL(file);
                
            }else{
                alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
            }
        },
        async inputSearch(e){
            const parent = e.target.offsetParent;
            const query = this.cliente;
        
            await this.axios.get('usuarios', {params : { search: query }}).then(response => {
                this.usuarios = response.data.results;
                parent.querySelector('.dropdown-menu').classList.add('show-search');
            }).catch(error => {
               console.log(error.response.data);
            });
        },
        clickRadioCheck(e){
            const parent = e.target.parentNode.parentNode.parentNode;
            const value = e.target.value;
            const arreglo = this.usuarios;            

            if(  arreglo.length != 0 ){
                for (let i = 0; i < arreglo.length; i++) {
                    if( value == arreglo[i].usuario_id ){
                        this.id_cliente = arreglo[i].usuario_id;
                        this.cliente = `${arreglo[i].cod_usuario} - ${arreglo[i].nombres} ${arreglo[i].apellidos}`;
                        break;
                    }
                }
            }
           
            

            parent.classList.remove('show-search');
            this.usuarios = [];
        },
        save(){
            for (let i = 0; i < this.trackings.length; i++) {
                if( !this.validarFormTracking(this.trackings[i]) ) return;
            }
            let aux = '';

            for (let i = 0; i < this.trackings.length; i++) {
                if( aux == this.trackings[i].tracking ){
                    alert('No puede haber dos trancking con el mismo numero.');
                    return;
                }else{
                    aux = this.trackings[i].tracking;
                }
                
            }

            if( this.id_cliente == '' ){
                alert('Por favor, debe agregar un cliente');
                return;
            }

            this.$validator.validate().then(valid => {
                if( valid ){
                    console.log(this.trackings);
                    let formData = new FormData();
                    formData.append('id_cliente', this.id_cliente);
                    formData.append('id_empresa_transporte', this.id_empresa_transporte);
                    formData.append('warehouse', this.warehouse);
                    const paquetes = this.trackings;

                    for (let i = 0; i < paquetes.length; i++) {
                        let objt = {};
                        let arrKeys = [];

                        //agregamos cada tracking
                        for (const key in paquetes[i]) {
                            if( key != 'image' ){
                                formData.append(`tracking[${key}]`, paquetes[i][key])
                                arrKeys.push(key);
                            }else{
                                formData.append(`images[${paquetes[i]['tracking']}]`, paquetes[i]['image'])
                            }
                        }

                        //eliminamos el append trackick y agregamos sus valores a un objeto
                        for (let j = 0; j < arrKeys.length; j++) {
                            objt[arrKeys[j]] = formData.get(`tracking[${arrKeys[j]}]`);
                            formData.delete(`tracking[${arrKeys[j]}]`);
                        }
            
                        formData.append(`trackings[${i}]`, JSON.stringify(objt))
                    }

                    this.componentRender = LoaderComponent;
                    this.axios.post('almacenes-crear', formData, {headers: { "content-type": "multipart/form-data" } } ).then(response => {
                
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
                        console.log(error.response.data)
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
            });

            

        }
    }
}
</script>
<style>
    .input-file_s{
        position: absolute;
        z-index: 1;
        opacity: 0;
        height: 100%;
    }
       .dropdown-menu.input-result-search.show{
        display: none;
    }

    .dropdown-menu.input-result-search.show.show-search{
        inset: auto !important;
        transform: none !important;
        width:100%;
        padding: 10px 15px;
    }
    .input-result-search.show.show-search{
        display: block;
    }
    .invalid-feedback{
        display: block;
    }
     .div-loader_white{
        margin: 0;
    }
</style>