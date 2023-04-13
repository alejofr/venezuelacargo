<template>
    <div class="row row-cards">
        <div class="col-12" style="min-height: 60vh;">
            <component :is='componentRender' v-bind:card="card"></component>
        </div>
    </div>
</template>

<script>
const CardRowFormComponent= () =>  import('../../../../components/forms/CardRowFormComponent.vue');
const LoaderComponent = () => import('../../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../../components/Error404Component.vue')
export default {
    name: 'EmpresasTransportesForm',
    
    data() {
        return {
            componentRender: LoaderComponent,
            card: {
                title: 'Nueva Empresa de Transportes',
                class: 'max_width480 margin_auto_all',
                action: 'save',
                url: 'empresas-transportes',
                id: '',
                name: 'EmpresasTransportes',
                evento: '',
                row: [
                    {
                        class: 'col-xl-12 col-md-12',
                        form: [
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'required|max:120',
                                event: 'change',
                                name: 'nombre',
                                value: '',
                                id: 'nombre',
                                label: {
                                    title: 'Nombre de empresa',
                                    for: 'nombre'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'required|max:25',
                                event: 'change',
                                name: 'codigo',
                                value: '',
                                id: 'codigo',
                                label: {
                                    title: 'Codigo',
                                    for: 'codigo'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'required|max:180',
                                event: 'change',
                                name: 'descripcion',
                                value: '',
                                id: 'descripcion',
                                label: {
                                    title: 'Descripcion',
                                    for: 'descripcion'
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
            await this.axios.get(`empresas-transportes/${id}/edit`).then(response => {
                console.log(response.data)
                if( response.data.results != null ){
                    const formulario = this.card.row;
                    this.card.title = 'Editar '+response.data.results.nombre;
                    this.card.action = 'update';
                    this.card.id = id;
                    for (const campos in response.data.results) {
                        for (let i = 0; i< formulario.length; i++) {
                            if( formulario[i].form.length != 0 ){
                                const form = formulario[i].form;
                                for (let j = 0; j < form.length; j++) {
                                    if( form[j].name == `${campos}` ){
                                        form[j].value =  ( response.data.results[campos] != 'null' ) ? response.data.results[campos] : '';
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