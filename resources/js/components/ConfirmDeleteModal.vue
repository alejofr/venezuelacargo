<template>
<transition name="component-fade" mode="out-in">
    <div class="modal modal-blur fade" :class="{'show':show == true}" id="modal-danger"  tabindex="-1" aria-modal="true" role="dialog" v-show="show">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div v-show="loader" class="div-loader_white"><loader></loader></div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                <div class="modal-status bg-danger"></div>
                <div class="modal-body text-center py-4">
                    <i class="ti ti-alert-triangle mb-2 text-danger" style="font-size: 62px;"></i>
                    <h3 class="mb-2 ">¿Está seguro?</h3>
                    <div class="text-muted">Nota: Los archivos o datos, son eliminados de manera permanente dentro del sistema...</div>
                </div>
                <div class="modal-footer">
                    <div class="w-100">
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn w-100" data-bs-dismiss="modal" @click="closeModal">
                                Cancelar
                            </button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-danger w-100" data-bs-dismiss="modal" @click="eliminar">
                                Eliminar 
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import LoaderComponent from './LoaderComponent.vue';
export default {
    name: 'ConfirmDeleteModal',
    props: ['deleteData'],
    data() {
        return {
            show: true,
            loader: false,
        };
    },
    watch: {
        deleteData(){
            this.show = true;
        }
    },
    components: {
        loader: LoaderComponent
    },
    methods: {
        closeModal(){
            this.show = false;
            this.$emit('getResetId')
        },
        request(){
            return this.deleteData.url+'/'+this.deleteData.id;
        },
        eliminar(){
            this.loader = true;
            setTimeout(async () => {
                await this.axios.delete(this.request())
                .then(response => {
                    this.$emit('getMessageDelete', response.data)
                    this.loader = false;
                }).catch(error => {
                    console.log(error.response.data)
                    this.$emit('getMessageDelete', error.response.data)
                    this.loader = false;
                });
            }, 1000);
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