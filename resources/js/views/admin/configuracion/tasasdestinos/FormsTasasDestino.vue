<template>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender' v-bind:card="card"></component>
            </div>
        </div>
    </div>
</template>

<script>
const CardRowFormComponent= () =>  import('../../../../components/forms/CardRowFormComponent.vue');
const LoaderComponent = () => import('../../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../../components/Error404Component.vue');
import {formatPrice} from '../../../../formatPrice.js';
export default {
    name: 'FormsTasasDestino',

    data() {
        return {
            componentRender: LoaderComponent,
            card: {
                title: 'Nueva tasa destino',
                class: 'max_width480 margin_auto_all',
                action: 'save',
                url: 'tasas-destinos',
                id: '',
                name: 'tasasDestinos',
                evento: '',
                row: [
                    {
                        class: 'col-xl-12 col-md-12',
                        form: [
                            {
                                nodo: 'select-multi',
                                type: 'select',
                                validate: 'required',
                                event: 'change',
                                name: 'estados',
                                value: '',
                                options: [],
                                id: 'estados',
                                opt:{
                                    id: 'id_estado',
                                    name: 'estado'
                                },
                                label: {
                                    title: 'Selección de estados',
                                    for: 'estados'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'required|max:25',
                                event: 'change',
                                name: 'tarifa_maritimo',
                                value: [],
                                id: 'tarifa_maritimo',
                                label: {
                                    title: 'Tarifa Maritimo',
                                    for: 'tarifa_maritimo'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'required|max:15',
                                event: 'change',
                                name: 'tarifa_aereo',
                                value: '',
                                id: 'tarifa_aereo',
                                label: {
                                    title: 'Tarifa Aéreo',
                                    for: 'tarifa_aereo'
                                }
                            },
                            {
                                nodo: 'select',
                                type: 'select',
                                validate: 'required',
                                event: 'change',
                                name: 'activo',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        name: 'Activo'
                                    },
                                    {
                                        value: '0',
                                        name: 'Inactivo'
                                    }
                                ],
                                id: 'activo',
                                opt:{
                                    id: 'value',
                                    name: 'name'
                                },
                                label: {
                                    title: 'Visible',
                                    for: 'activo'
                                }
                            },
                        ]
                    }
                ]//fin row
            }//fin card
            
        };
    },
    beforeCreate(){
        this.$nextTick(async function () {
            await this.axios.get('estados').then(response => {
                console.log(response.data);
                this.card.row[0].form[0].options = response.data.results.all;
                console.log(this.card);
            }).catch(error => {
                console.log(error.response)
            });

            if( Object.keys(this.$route.params).length != 0 )
                this.edit(this.$route.params.id)
            else
                this.componentRender = CardRowFormComponent;
        })  
    },
    components:{
        FormCardRow: CardRowFormComponent
    },
    methods: {
        async edit(id){
            await this.axios.get(`tasas-destinos/${id}/edit`).then(response => {
                console.log(response.data)
                if( response.data.results != null ){
                    const formulario = this.card.row;
                    this.card.title = 'Editar Tarifa';
                    this.card.action = 'update';
                    this.card.id = id;
                    for (const campos in response.data.results) {
                        for (let i = 0; i< formulario.length; i++) {
                            if( formulario[i].form.length != 0 ){
                                const form = formulario[i].form;
                                for (let j = 0; j < form.length; j++) {
                                    if( form[j].name == `${campos}` ){
                                        form[j].value =  ( response.data.results[campos] != 'null' ) ? response.data.results[campos] : '';
                                        //console.log('campos', campos)
                                        if( campos == 'tarifa_aereo' ){
                                            form[j].value = (form[j].value != '') ? formatPrice.constPrice(form[j].value, ',', '.') : form[j].value;
                                        }else if (campos == 'tarifa_maritimo') {
                                            form[j].value = (form[j].value != '') ? formatPrice.constPrice(form[j].value, ',', '.') : form[j].value;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.componentRender = CardRowFormComponent;
                }else{
                    this.componentRender = Error404;
                }

            }).catch(error => {
                this.componentRender = Error404;
            });
        }
    },
};
</script>