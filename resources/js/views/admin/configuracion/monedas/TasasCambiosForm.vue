<template>
    <div class="row row-cards">
        <div class="col-12" style="min-height: 60vh;">
            <component :is='componentRender' v-bind:card="card"></component>
        </div>
    </div>
</template>

<script>
const CardRowFormComponent = () =>  import('../../../../components/forms/CardRowFormComponent.vue');
const LoaderComponent = () => import('../../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../../components/Error404Component.vue')
export default {
    name: 'TazasCambiosForm',
    data() {
        return {
            componentRender: LoaderComponent,
             card: {
                title: 'Nueva Tasa Cambiaria',
                class: 'max_width480 margin_auto_all',
                action: 'save',
                url: 'tasas-cambios',
                id: '',
                name: 'tasas-cambios',
                evento: '',
                row: [
                    {
                        class: 'col-xl-12 col-md-12',
                        form: [
                            {
                                nodo: 'input',
                                type: 'text',
                                validate: 'required',
                                event: 'change',
                                name: 'monto_tc',
                                value: '',
                                id: 'monto_tc',
                                label: {
                                    title: 'Monto (tasa cambiaria)',
                                    for: 'monto_tc'
                                }
                            },
                            {
                                nodo: 'input',
                                type: 'datetime-local',
                                validate: 'required',
                                event: 'change',
                                name: 'fecha_tc',
                                value: '',
                                id: 'fecha_tc',
                                label: {
                                    title: 'Fecha Tasa de Cambio',
                                    for: 'fecha_tc'
                                }
                            },
                        ]
                    }
                ]//fin row
            }//fin card
        }
    },
    beforeCreate(){
        this.$nextTick(function () {
            if( Object.keys(this.$route.params).length != 0 ){
                this.edit(this.$route.params.id);
            }else{
                this.componentRender = Error404;
            }
        })  
    },
    methods: {
        edit(id){
            this.axios.get(`monedas-cambios/${id}/edit`).then(response => {
                console.log(response.data)
                if( response.data.results != null ){
                    this.card.action = 'update';
                    this.card.id = id;
                    this.componentRender = CardRowFormComponent;
                }else{
                    this.componentRender = Error404;
                }

            }).catch(error => {
                console.log(error.response.data)
                this.componentRender = Error404;
            });
        }
    }
}
</script>