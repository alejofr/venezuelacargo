<template>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td>
                    <span class=""> {{ item.nombre }}</span>
                </td>
                <td>
                    <span class=""> {{ item.tracking }}</span>
                </td>
                <td>
                    <span class="" > {{ item.descripcion }}</span>
                </td>
                <td>
                    <span class=""> {{ item.largo }}</span>
                </td>
                <td>
                    <span class=""> {{ item.alto }}</span>
                </td>
                <td>
                    <span class="" > {{ item.ancho }}</span>
                </td>
                <td>
                    <span class=""> {{ item.peso }}</span>
                </td>
                <td>
                    <span class="" > {{ item.num_piezas }}</span>
                </td>
                 <td>
                    <span class=""> {{ item.pie_cubico }}</span>
                </td>
                <td>
                    <span class="" > {{ item.volumen }}</span>
                </td>
                <td>
                    <div class="btn-list flex-nowrap">
                        <button class="btn-acticon_spalert" type="button" id='paquete' :value="item.id_tracking" @click="showModal($event)" title="Asignar Intruccion" v-title>
                                <i class="ti ti-package" style="font-size: 21px;"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
        <!--<div class="modal modal-blur fade" :class="{'show': show == true}"  id="paquete" tabindex="-1" aria-modal="true" role="dialog" >
            <form name="paquete" class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content" style="padding:0;background-color: #f8fafc;">
                    <div class="modal-header">
                        <h5 class="modal-title">Asignar Instruccion de Envio: {{title}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hiddenModal()"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-3">
                            <input type="text" @change="changeFormInput($event)" name="seguro" class="form-control"  id="seguro" v-model="dato.seguro">
                            <label for="seguro">Seguro</label>
                            <div class="mt-2 mb-2"><small>Debe indicar el monto por el cuál asegura su paquete, para el caso contrario haga caso omiso a la instrucción</small></div>
                            <div v-if="errors.has('seguro')" class="invalid-feedback">{{errors.first('seguro')}}</div>
                        </div>
                          <div class="form-floating mb-3" :class="{'is-invalid': errors.first('reempaque')}" >
                            <select class="form-select"  name="reempaque" v-validate="'required'" id="reempaque" v-model="dato.reempaque" :data-vv-validate-on="'change'">
                                <option value="no">
                                    No
                                </option>
                                <option value="si">
                                    Si
                                </option>
                            </select>
                            <label for="reempaque">Reempaque</label>
                            <div class="mt-2 mb-2"><small>Indiqué si desea que su paquete sea reempacado</small></div>
                            <div v-if="errors.has('reempaque')" class="invalid-feedback">{{errors.first('reempaque')}}</div>
                        </div>
                        <div class="form-floating mb-3" :class="{'is-invalid': errors.first('tipo_envio')}" >
                            <select class="form-select"  name="tipo_envio" v-validate="'required'" id="tipo_envio" v-model="dato.tipo_envio" :data-vv-validate-on="'change'">
                                <option value="aereo">
                                    Aereo
                                </option>
                                <option value="maritimo">
                                    Maritimo
                                </option>
                            </select>
                            <label for="tipo_envio">Tipo de envio</label>
                            <div class="mt-2 mb-2"><small>Indiqué el tipo de envío que desea para su paquete</small></div>
                            <div v-if="errors.has('tipo_envio')" class="invalid-feedback">{{errors.first('tipo_envio')}}</div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="hiddenModal()">Cerrar</button>
                        <button type="button" id="paquete" class="btn btn-primary" data-bs-dismiss="modal" @click="save($event)">Guardar</button>
                    </div>
                </div>
            </form>
        </div>-->
</template>

<script>

import {formatPrice} from '../../../formatPrice.js';

export default {
    name: 'InfoPreAlertas',
    props: ['data'],
    data(){
        return {
            datos: [],
            show: false,
            title: '',
            dato: {},
        }
    },
    mounted(){
       formatPrice.init();
    },
    methods: {
        changeFormInput(e){
            this.dato.seguro = e.target.value;
        },
        showModal(e){
            const btn = e.target.parentNode;
            this.show = true


            const  dta = ( val ) => this.data.filter( (item) => item.id_tracking === val );
            const  check = ( val ) => this.datos.filter( (item) => item.id_tracking === val );
            
           if( dta(btn.value)[0].tipo_envio != null){
                const { id_tracking, seguro, reempaque, tipo_envio } = dta(btn.value)[0]
                 this.dato = {  id_tracking: id_tracking, seguro: seguro, reempaque: reempaque, tipo_envio: tipo_envio }
            }else if( check(btn.value).length != 0 ){
                 const { id_tracking, seguro, reempaque, tipo_envio } = check(btn.value)[0]
                 this.dato = {  id_tracking: id_tracking, seguro: seguro, reempaque: reempaque, tipo_envio: tipo_envio }
            }else{
                this.dato = this.propDato(btn.value)
            }



            this.title = dta(btn.value)[0].tracking;

        },
    
        hiddenModal(){
            this.show = false;
        },
        propDato(id){
            return {
                id_tracking: id,
                seguro: '',
                reempaque: 'no',
                tipo_envio: ''
            }
        },
        save(e){
            this.dato.seguro = formatPrice.destructPrecio(this.dato.seguro, 'seguro')

            let bol = true;
            for (let i = 0; i < this.datos.length; i++) {
                if( this.datos[i].id_tracking == this.dato.id_tracking ){
                    this.datos[i] = this.dato;
                    bol = false;
                    break;
                }
            }

            if( bol ){
                this.datos.push(this.dato)
            }

            this.hiddenModal();
            this.dato = {};
            this.$emit('getTrackings', ( this.datos.length != 0) ? this.datos : [] )
        },
    }
}
</script>

<style>
    .modal.show{
        display: block;
    }
</style>