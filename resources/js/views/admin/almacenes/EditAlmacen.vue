<template>
    <div class="container-xl">
       <div class="row row-cards">
            <div class="col-12" style="min-height: 60vh;">
                <component :is='componentRender' v-bind:column="column" v-bind:dataTble="data" :tbody="'InfoPreAlertas'" :h1="'Trackings'"></component>
            </div>
        </div>
    </div>
</template>
<script>
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const Error404 = () => import('../../../components/Error404Component.vue')
const InfoComponent = () => import('../../../components/InfoPrealertasComponent.vue')

export default {
    name: 'EditAlmacen',
     data() {
        return {
            componentRender: LoaderComponent,
            column: {
                one: {
                    name: 'Solicitud de Envio',
                    data: []
                },
                two: {
                    name: 'Usuario',
                    data: []
                },
                th: [
                    {name: ''},
                    {name: 'Transporte'},
                    {name: 'Tracking'},
                    {name: 'Descripcion'},
                    {name: ''},
                    {name: ''}
                ],
            },
            data: []
        };
    },
    beforeCreate() {
        this.$nextTick(async function () {
            if( Object.keys(this.$route.params).length != 0 ){
                const id = this.$route.params.id;
                console.log(id);
            }else{
                this.componentRender = Error404;
            }
            
        })
    },
    methods: {
       
    }
}


</script>