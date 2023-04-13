<template>
    <form @submit.prevent="submit($event)" :name="card.name" class="card" :class="card.class">
         <div v-show="loader" class="div-loader_white"><loader></loader></div>
        <div class="card-header">
            <h4 class="card-title">{{card.title}}</h4>
        </div>
        <div class="card-body">
            <div class="row">
               <div class="col-xl-12 col-md-12" v-if="activeComponent"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                <div v-for="(card, index) in card.row" :key="index" :class="card.class">
                    
                    <div class="mb-3" v-for="(form, index) in card.form" :key="index">
                        <div class="form-floating mb-3" :class="{'is-invalid': errors.first(form.name)}" v-if="form.nodo == 'select'">
                            <select class="form-select" :disabled="form.disable" :name="form.name" v-validate="form.validate" :id="form.id" v-model="nodoForms[form.name]" @change="eventSelect($event)" :data-vv-validate-on="form.event">
                                <option v-for="(data, index) in form.options" :key="index" :value="data[form.opt.id]" >
                                    {{data[form.opt.name]}}
                                </option>
                            </select>
                            <label :for="form.label.for">{{ form.label.title }}</label>
                            <div v-if="errors.has(form.name)" class="invalid-feedback">{{errors.first(form.name)}}</div>
                        </div>
                        <div class="form-floating mb-3" v-else-if="form.nodo == 'select-multi'">
                            <strong>{{form.label.title}}</strong>
                            <div class="dropdown mt-2">
                                <button type="button" class="multiselect dropdown-toggle btn btn-default" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" id="estado">
                                    <span class="multiselect-selected-text"><strong>{{nodoForms[form.name].length}}</strong> Seleccionados</span> 
                                    <b class="caret"></b>
                                </button>
                                <ul class="multiselect-container dropdown-menu" :class="{'height-220px':form.options.length > 6}">
                                    <li v-for="(data, index) in form.options" :key="index"  :class="{'active': nodoForms[form.name].includes(data[form.opt.id]) }">
                                        <a>
                                            <label class="checkbox"  :for="index">
                                                <input type="checkbox" :data-vv-validate-on="form.event" v-validate="form.validate" :name="form.name" :id="index" :value="data[form.opt.id]" v-model="nodoForms[form.name]"  @click="clickSelectMulti($event)" >  
                                                {{data[form.opt.name]}}
                                            </label>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div v-if="errors.has(form.name)" class="invalid-feedback">{{errors.first(form.name)}}</div>
                        </div>
                        <div class="form-floating mb-3" v-if="form.nodo == 'input'">
                            <input  :key="index" :type="form.type" v-validate="form.validate" :name="form.name" class="form-control" :class="{'is-invalid': errors.first(form.name)}" :id="form.id" v-model="nodoForms[form.name]" :data-vv-validate-on="form.event" @change="changeFormInput($event)" @keyup="onKeyUpIsPrice($event)">
                            <label :for="form.label.for">{{form.label.title}}</label>
                            <div v-if="errors.has(form.name)" class="invalid-feedback">{{errors.first(form.name)}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer text-end">
            <div class="d-flex">
                <btn-volver :classe="'btn-light'"></btn-volver>
                <button type="submit" class="btn btn-primary ms-auto">
                    <i class="ti ti-plus me-1"></i>
                    <span v-if="card.action == 'save'">Guardar</span>
                    <span v-else>Actualizar</span>
                </button>
            </div>
        </div>
    </form>
</template>
<script>
import {formatPrice} from '../../formatPrice';
import BtnVolver from '../BtnVolver.vue';

const LoaderComponent = (() => import('../LoaderComponent.vue') );
const AlertMessageComponent = (() => import('../AlertMessageComponent.vue') );


//const init = formatPrice.
export default {
    props: ['card'],
    name: 'CardRowFormComponent',
    data() {
          return {
            loader: false,
            activeComponent: '',
             alert: {
                msg: '',
                clss: '' 
            },
            selectMulti: []
        };
    },
    computed: {
        nodoForms(){
            const formulario = this.card.row;

            let arreglo = [];
            for (let i = 0; i< formulario.length; i++) {
                if( formulario[i].form.length != 0 ){
                    const cardForm = formulario[i].form;
                    for (let j = 0; j < cardForm.length; j++) {
                      
                        if( cardForm[j].nodo == 'select-multi' ){
                            arreglo[cardForm[j].name] = ( cardForm[j].value.length == 0 ) ? [] : cardForm[j].value;
                        }else{
                            arreglo[cardForm[j].name] = cardForm[j].value;
                        }
                    }
                }
            }

            return Object.assign({}, arreglo); 
        }
    },
    watch: {
        nodoForms() {
            console.log('cambio cambio')
        }
    },
    mounted(){
       formatPrice.init();
    },
    components: {
        loader: LoaderComponent,
        BtnVolver,
    },
    methods: {
        formModel(){
            const formulario = this.card.row;

            let arreglo = [];
            for (let i = 0; i< formulario.length; i++) {
                if( formulario[i].form.length != 0 ){
                    const cardForm = formulario[i].form;
                    for (let j = 0; j < cardForm.length; j++) {
                      
                        if( cardForm[j].nodo == 'select-multi' ){
                            arreglo[cardForm[j].name] = [];
                        }else{
                            arreglo[cardForm[j].name] = cardForm[j].value;
                        }
                    }
                }
            }
            return Object.assign({}, arreglo);
        },
        submit(e){
            
            this.$validator.validate().then(valid => {
                if( valid ){
                    this.loader = true;
                    console.log(this.nodoForms)
                    let formData = {...this.nodoForms}
                    for (const field in formData ) {
                        console.log(field)
                        if (formatPrice.checkField(field) && ( formData[field] != '' && formData[field] != null )) {
                            formData[field] = formatPrice.destructPrecio(formData[field], field);
                        }
                    }

                    const request = ( this.card.action == 'save' ) ? this.axios.post(this.getUrl(this.card.action), formData) : this.axios.put(this.getUrl(this.card.action), formData);
                    request.then(response => {
                        console.log(response.data)
                        resp(response.data)
                    }).catch(error => {
                        console.log(error.response)
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
                }
            })

        },
        getUrl(typeRequest){
            return ( typeRequest == 'save' ) ? `${this.card.url}` : `${this.card.url}/${this.card.id}`;
        },
        respAlert(status, msg = ''){
            this.alert = {
                msg: msg,
                clss: ( status == 200 ) ? 'updated' : 'error'
            }

            this.activeComponent = AlertMessageComponent;
        },
        changeFormInput(e){
            console.log(e.target.value);
            this.nodoForms[e.target.name] = e.target.value;
        },
        onKeyUpIsPrice(e){
            if( formatPrice.checkField(e.target.name) ){
                const moneda = formatPrice.moneda(e.target.name);
                if( moneda == 'ves' ){
                    e.target.value = formatPrice.constPrice(e.target.value, '.', ',');
                    this.nodoForms[e.target.name] = e.target.value;
                }else{
                    e.target.value = formatPrice.constPrice(e.target.value, ',', '.');
                    this.nodoForms[e.target.name] = e.target.value;
                }
                
            }
            //formatPrice
        },
        clickSelectMulti(e){
            const check = e.target.checked;
            const parent = e.target.parentElement.parentElement.parentElement;
            const btn = parent.parentElement.previousSibling.previousSibling;
            const name = e.target.name;
            const value = e.target.value;
            let arreglo = this.nodoForms[name];
         
            if( check ){
                parent.classList.add("active");
                e.target.setAttribute('checked', 'true');

                if( !arreglo.includes(value) ){
                    arreglo.push(value);
                }
                    
            }else{
                parent.classList.remove("active");
                e.target.removeAttribute('checked');
                if( arreglo.includes(value) ){
                    let aux = [];
                    for (let i = 0; i < arreglo.length; i++) {
                        if( value != arreglo[i] )
                            aux.push(arreglo[i]);
                    }
                    arreglo = aux;
                }
            }

            this.nodoForms[name] = arreglo;
            btn.querySelector('.multiselect-selected-text strong').innerText = arreglo.length; 
        },
        eventSelect(){
            if( this.card.evento != '' ){
                this.$emit(this.card.evento, this.nodoForms);
            }
            
        },
    },
};
</script>
<style>
    .height-220px{
        height: 220px;
    }
       .max_width480{
        max-width: 480px;
    }
    .margin_auto_all{
        margin: auto;
    }
    .div-loader_white{
        margin: 0;
    }
    .invalid-feedback{
        display: block;
    }
</style>