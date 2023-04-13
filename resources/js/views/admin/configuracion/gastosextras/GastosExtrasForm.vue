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
const Error404 = () => import('../../../../components/Error404Component.vue')
import {formatPrice} from '../../../../formatPrice.js';
export default {
    name: 'GastosExtrasForm',

    data() {
        return {
            componentRender: LoaderComponent,
            card: {
                title: 'Nuevo Gasto Extra',
                class: '',
                action: 'save',
                url: 'gastos-extras',
                id: '',
                name: 'gastosExtras',
                evento: '',
                row: [
                    {
                        class: 'col-xl-6 col-md-6',
                        form: [
                            {
                                nodo: 'select',
                                type: 'select',
                                validate: 'required',
                                event: 'change',
                                name: 'tipo',
                                value: '',
                                options: [
                                    {
                                        value: 'TRACKING',
                                        name: 'TRACKING'
                                    },
                                    {
                                        value: 'CAJA',
                                        name: 'CAJA'
                                    },
                                    {
                                        value: 'REEMPAQUE',
                                        name: 'REEMPAQUE'
                                    }
                                ],
                                id: 'tipo',
                                opt:{
                                    id: 'value',
                                    name: 'name'
                                },
                                label: {
                                    title: 'Selección Tipo de Gasto Extra',
                                    for: 'tipo'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'required|max:60',
                                event: 'change',
                                name: 'nombre',
                                value: '',
                                id: 'nombre',
                                label: {
                                    title: 'Nombre',
                                    for: 'nombre'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'required|max:15',
                                event: 'change',
                                name: 'monto_gasto_extra',
                                value: '',
                                id: 'monto_gasto_extra',
                                label: {
                                    title: 'Monto Gasto Extra',
                                    for: 'monto_gasto_extra'
                                }
                            },
                              {
                                nodo: 'select',
                                type: 'select',
                                validate: 'required',
                                event: 'change',
                                name: 'accion',
                                value: 'POR-DEFECTO',
                                options: [
                                    {
                                        value: 'POR-DEFECTO',
                                        name: 'POR DEFECTO'
                                    },
                                    {
                                        value: 'MANUAL',
                                        name: 'MANUAL'
                                    }
                                ],
                                id: 'accion',
                                opt:{
                                    id: 'value',
                                    name: 'name'
                                },
                                label: {
                                    title: 'Selecciona el tipo de Accion',
                                    for: 'accion'
                                }
                            },
                            {
                                nodo: 'select',
                                type: 'select',
                                validate: 'required',
                                event: 'change',
                                name: 'condicion',
                                value: '0',
                                options: [
                                    {
                                        value: '1',
                                        name: 'SI'
                                    },
                                    {
                                        value: '0',
                                        name: 'NO'
                                    }
                                ],
                                id: 'condicion',
                                opt:{
                                    id: 'value',
                                    name: 'name'
                                },
                                label: {
                                    title: 'Condicion',
                                    for: 'condicion'
                                }
                            },
                        ]
                    },
                    {
                        class: 'col-xl-6 col-md-6',
                        form: [ //
                             {
                                nodo: 'select',
                                type: 'select',
                                validate: '',
                                event: '',
                                name: 'variable_cond',
                                value: '',
                                options: [
                                    {
                                        value: 'TRACKING',
                                        name: 'TRACKING'
                                    }
                                ],
                                id: 'variable_cond',
                                opt:{
                                    id: 'value',
                                    name: 'name'
                                },
                                label: {
                                    title: 'Variable de Condicion',
                                    for: 'variable_cond'
                                }
                             },
                             {
                                nodo: 'select',
                                type: 'select',
                                validate: '',
                                event: '',
                                name: 'tipo_cond',
                                value: '',
                                options: [
                                    {
                                        value: 'MENOR',
                                        name: 'Menor a'
                                    },
                                    {
                                        value: 'MAYOR',
                                        name: 'Mayor a'
                                    }
                                ],
                                id: 'tipo_cond',
                                opt:{
                                    id: 'value',
                                    name: 'name'
                                },
                                label: {
                                    title: 'Tipo de Condicion',
                                    for: 'tipo_cond'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'numeric|max:15',
                                event: 'change',
                                name: 'cant_cond',
                                value: '',
                                id: 'cant_cond',
                                label: {
                                    title: 'Cantidad Condicion',
                                    for: 'cant_cond'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: '',
                                event: '',
                                name: 'monto_cond',
                                value: '',
                                id: 'monto_cond',
                                label: {
                                    title: 'Monto Condicion',
                                    for: 'monto_cond'
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

            if( Object.keys(this.$route.params).length != 0 )
                await this.edit(this.$route.params.id)
            else
                this.componentRender = CardRowFormComponent;
        })  
    },
    components:{
        FormCardRow: CardRowFormComponent
    },
    methods: {
        async edit(id){
            await this.axios.get(`gastos-extras/${id}/edit`).then(response => {
                console.log(response.data)
                if( response.data.results != null ){
                    const formulario = this.card.row;
                    this.card.title = 'Editar Gasto Extra '+response.data.results.nombre;
                    this.card.action = 'update';
                    this.card.id = id;
                    for (const campos in response.data.results) {
                        for (let i = 0; i< formulario.length; i++) {
                            if( formulario[i].form.length != 0 ){
                                const form = formulario[i].form;
                                for (let j = 0; j < form.length; j++) {
                                    if( form[j].name == `${campos}` ){
                                        form[j].value =  ( response.data.results[campos] != 'null' ) ? response.data.results[campos] : '';
                                        if( campos == 'monto_gasto_extra'){
                                            form[j].value = (form[j].value != '' && form[j].value != null) ? formatPrice.constPrice(form[j].value, ',', '.') : form[j].value;
                                        }else if (campos == 'monto_cond') {
                                           // console.log(form[j].value)
                                            form[j].value = (form[j].value != '' && form[j].value != null) ? formatPrice.constPrice(form[j].value, ',', '.') : form[j].value;
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
                console.log(error)
                this.componentRender = Error404;
            });
        }
    },
};
</script>