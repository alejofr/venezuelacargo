<template>
    <form @submit.prevent="submit($event)" name="formCard" class="card">
        <div class="card-header">
            <h4 class="card-title">{{card.title}}</h4>
        </div>
        <div class="card-body">
            <div class="row">
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
                        <div class="form-floating mb-3" v-if="form.nodo == 'input'">
                            <input  :key="index" :type="form.type" v-validate="form.validate" :name="form.name" class="form-control" :class="{'is-invalid': errors.first(form.name)}" :id="form.id" v-model="nodoForms[form.name]" :data-vv-validate-on="form.event">
                            <label :for="form.label.for">{{form.label.title}}</label>
                            <div v-if="errors.has(form.name)" class="invalid-feedback">{{errors.first(form.name)}}</div>
                        </div>
                         <div class="form-floating mb-3" v-if="form.nodo == 'select-multi'">
                            <strong>{{form.label.title}}</strong>
                            <div class="dropdown mt-2">
                                <button type="button" class="multiselect dropdown-toggle btn btn-default" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" id="estado">
                                    <span class="multiselect-selected-text">JavaScript, SQL</span> 
                                    <b class="caret"></b>
                                </button>
                                <ul class="multiselect-container dropdown-menu">
                                    <li v-for="(data, index) in form.options" :key="index">
                                        <a>
                                            <label class="checkbox">
                                                <input type="checkbox" :name="form.name" :value="data[form.opt.id]" v-model="nodoForms[form.name]"  @click="clickSelectMulti($event)">  
                                                {{data[form.opt.name]}}
                                            </label>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer text-end">
            <div class="d-flex">
                
            </div>
        </div>
    </form>
</template>
<script>
const priceFormat = () => import("../../formatPrice.js")

import BtnVolver from '../BtnVolver.vue';

const LoaderComponent = (() => import('../LoaderComponent.vue') );
const AlertMessageComponent = (() => import('../AlertMessageComponent.vue') );

//const init = formatPrice.
export default {
    props: ['card'],
    name: 'CardRowFormComponent',
    data() {
          return {
            nodoForms: {},
            loader: false,
            activeComponent: '',
             alert: {
                msg: '',
                clss: '' 
            },
        };
    },
    beforeCreate(){
        this.$nextTick(async function () { 
            console.log(this.card);
            this.nodoForms = this.formModel();
            let prueba = this.nodoForms;
            console.log(this.nodoForms);
            console.log(`${prueba}.${this.card.row[0].form[0].name}`);
            
        })
    },
    created(){
        priceFormat()
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
                        arreglo[cardForm[j].name] = cardForm[j].value;
                    }
                }
            }

            return Object.assign({}, arreglo);
        },
        submit(e){
           console.log(e)
            console.log(this.nodoForms)

        },
        clickSelectMulti(e){
            console.log(e);
            const check = e.target.checked;
            const parent = e.target.parentElement.parentElement.parentElement;
            const btn = parent.parentElement.previousSibling.previousSibling;
            const name = e.target.name;

            if( check )
                parent.classList.add("active");
            else
                parent.classList.remove("active");
            
            //console.log(this.value)
            console.log(this.nodoForms)
        }
    },
};
</script>