<template>
<transition name="component-fade" mode="out-in">
    <div class="modal modal-blur fade" :class="{'show':show == true}" id="modal-danger"  tabindex="-1" aria-modal="true" role="dialog" v-show="show">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div v-show="loader" class="div-loader_white"><loader></loader></div>
                <div class="modal-header">
                    <h5 class="modal-title">Calculadora de Envío</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <div class="form-floating" :class="{'is-invalid': errors.first('estado')}">
                            <select class="form-select" id="selectEstados" v-model="estado_id" name="estado" v-validate="'required'" :data-vv-validate-on="'change'">
                                <option v-for="(item, index) in estados" :key="index" :value="item.id_estado">{{item.estado}}</option>
                            </select>
                            <label for="floatingSelect">Selecciona el Destino</label>
                            <div v-if="errors.has('estado')" class="invalid-feedback">{{errors.first('estado')}}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                                <div class="form-floating" :class="{'is-invalid': errors.first('tipo_envio')}">
                                    <select class="form-select" id="selectEstados" v-model="tipo_envio"  name="tipo_envio" v-validate="'required'" :data-vv-validate-on="'change'">
                                        <option value="aereo">Aéreo</option>
                                        <option value="maritimo">Maritimo</option>
                                    </select>
                                    <label for="floatingSelect">Selección de tipo de envío</label>
                                    <div v-if="errors.has('tipo_envio')" class="invalid-feedback">{{errors.first('tipo_envio')}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                                <div class="form-floating" :class="{'is-invalid': errors.first('reempaque')}">
                                    <select class="form-select" id="reempaque" name="reempaque" v-model="reempaque" v-validate="'required'" :data-vv-validate-on="'change'">
                                        <option value="no">No</option>
                                        <option value="si">Si</option>
                                    </select>
                                    <label for="reempaque">Con Reempaque</label>
                                    <div v-if="errors.has('reempaque')" class="invalid-feedback">{{errors.first('reempaque')}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="form-floating mb-3">
                              <input type="text" id="alto" v-model="alto" v-validate="'required|numeric'" name="alto" class="form-control" :class="{'is-invalid': errors.first('alto')}" :data-vv-validate-on="'change'">
                              <label for="alto">Alto</label>
                              <div v-if="errors.has('alto')" class="invalid-feedback">{{errors.first('alto')}}</div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="form-floating mb-3">
                                <input type="text" id="largo" v-model="largo" v-validate="'required|numeric'" name="largo" class="form-control" :class="{'is-invalid': errors.first('largo')}" :data-vv-validate-on="'change'">
                                <label for="largo">Largo</label>
                                <div v-if="errors.has('largo')" class="invalid-feedback">{{errors.first('largo')}}</div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="form-floating mb-3">
                              <input type="text" id="ancho" v-model="ancho" v-validate="'required|numeric'" name="ancho" class="form-control" :class="{'is-invalid': errors.first('ancho')}" :data-vv-validate-on="'change'">
                              <label for="ancho">Ancho</label>
                              <div v-if="errors.has('ancho')" class="invalid-feedback">{{errors.first('ancho')}}</div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="form-floating mb-3">
                              <input type="text" id="peso" v-model="peso" v-validate="'required|regex:^[0-9]+([.][0-9]{2})?$'" name="peso" class="form-control" :class="{'is-invalid': errors.first('peso')}" :data-vv-validate-on="'change'">
                              <label for="peso">Peso</label>
                              <div v-if="errors.has('peso')" class="invalid-feedback">{{errors.first('peso')}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-status-bottom bg-success"></div>
                        <div class="card-body">
                            <h3 class="card-title">Resultado</h3>
                            <div v-show="result.total != ''">
                                <p>TARIFA DE ENVIÓ: {{result.tarifa}} USD</p>
                                <p>VOLUMEN: {{result.volumen}}</p>
                                <p>PIE CUBICO: {{result.pie_cubico}}</p>
                                <p>COSTO REEMPAQUE: {{result.cost_reempaque}} USD</p>
                                <p>COSTO X TRACKING: {{result.cost_tracking}} USD</p>
                                <p>TOTAL DE ENVIÓ: {{result.total}} USD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn" data-bs-dismiss="modal" @click="closeModal">
                        Cancelar
                    </button>
                    <button type="button" class="btn btn-primary ms-auto" data-bs-dismiss="modal" @click="calcular">
                        Calcular
                    </button>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import LoaderComponent from './LoaderComponent.vue';
import { formatPrice } from '../formatPrice.js';
import { parseNum } from '../helpers/calcInvoice';

export default {
    name: 'CalculadoraEnvio',
    props: ['show'],
    data() {
        return {
            loader: false,
            estados: [],
            estado_id: '',
            tipo_envio: '',
            reempaque: '',
            alto: '',
            largo: '',
            ancho: '',
            peso: '',
            result: {
                tarifa: '', 
                volumen: '', 
                pie_cubico: '', 
                total: '', 
                cost_reempaque: '', 
                cost_tracking: ''
            }
        };
    },
    components: {
        loader: LoaderComponent
    },
    beforeCreate() {
        this.$nextTick(async function () {
            await this.axios.get('estados').then(response => {
                this.estados = response.data.results.all;
                console.log(this.estados)
            }).catch(error => {
                console.log(error)
                //this.componentRender = Error500;
            });
        })
    },  
    methods: {
        closeModal(){
            this.$emit('closeModalCalcularEnvio')
        },
        calcular(){
            this.$validator.validate().then(valid => {
                if( valid ){
                    this.loader = true;
                    const params = {
                        estado_id:  this.estado_id,
                        tipo_envio: this.tipo_envio,
                        reempaque: this.reempaque,
                        alto: this.alto,
                        largo: this.largo,
                        ancho: this.ancho,
                        peso: this.peso
                    };
                    setTimeout(async () => {
                        await this.axios.get('calculadora', {params : params})
                        .then(response => {
                            this.loader = false;
                            const { tarifa, volumen, pie_cubico, total, cost_reempaque, cost_tracking } = response.data.result;
                            //this.result = response.data.message;
                            this.result ={
                                tarifa: formatPrice.constPrice(`${parseNum(tarifa).toFixed(2)}`, ',', '.'),
                                volumen: parseNum(volumen).toFixed(2),
                                pie_cubico: parseNum(pie_cubico).toFixed(2),
                                total: formatPrice.constPrice(`${parseNum(total).toFixed(2)}`, ',', '.'),
                                cost_reempaque: formatPrice.constPrice(`${parseNum(cost_reempaque).toFixed(2)}`, ',', '.'),
                                cost_tracking: formatPrice.constPrice(`${parseNum(cost_tracking).toFixed(2)}`, ',', '.'),
                            }
                            console.log('response', response.data)
                        }).catch(error => {
                            console.log(error.response.data)
                            this.loader = false;
                        });
                    }, 1000);
                }
            });
        }
    },
};
</script>

<style>
    .show{
        display: block;
        transition: opacity .3s ease;
    }

    .div-loader_white{
        margin: 0;
    }
</style>