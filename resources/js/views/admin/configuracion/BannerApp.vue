<template>
<div class="container-xl">
    <div class="row row-cards">
        <div class="col-12">
            <form name="bannerapp" @submit.prevent="sendImage($event)" enctype="multipart/form-data" class="card card-lg">
                <div class="card-body">
                    <component :is='componentRenderOne'></component>
                    <div style="justify-content: center;flex-direction: column;display: flex;margin: 0 auto;max-width: 380px;" v-show="componentRenderOne === ''">
                        <div class="w-100 mb-3" v-if="activeComponent != ''"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                        <div class="mb-3">
                            <div class="form-label">Selecciona una imagen</div>
                            <input type="file" class="form-control" @change="changeFileImage($event)" id="fileimage">
                        </div>
                        <button type="submit" class="btn btn-info m-auto mt-3">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-12">
            <div class="card card-lg">
                <div class="card-body">
                    <div class="w-100 mb-3" v-if="activeComponentSecond != ''"><component :is='activeComponentSecond' v-bind:alert="alertSecound"></component></div>
                    <component :is='componentRender'></component>
                    <div class="row row-cards mb-3" v-if="componentRender === ''">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-3" v-for="( imagen, index ) in images" :key="index">
                            <div class="card card-sm">
                                <a :href="imagen.ruta_image" target="_blank" rel="noopener noreferrer" class="d-block" style="height: 220px;" title="Ver Imagen" v-title><img :src="imagen.ruta_image" style="height: 100%;width: 100%;object-fit: cover;" class="card-img-top"></a>
                                <div class="card-body" style="padding: 10px 8px;">
                                    <div class="btn-list flex-nowrap">
                                        <button
                                            :value="imagen.id_banner"
                                            type="button"
                                            class="align-text-top me-2 nav-link mb-0 btn btn-danger" 
                                            title="Eliminar Imagen" 
                                            v-title
                                            style="padding: 5px;"
                                            @click="deleteImagen($event)"
                                        >
                                            Eliminar
                                        </button>
                                        <button
                                            :value="imagen.id_banner"
                                            type="button"
                                            class="align-text-top me-2 nav-link mb-0 btn"
                                            :class="{'btn-light': imagen.estado == 'visible', 'btn-outline-warning' : imagen.estado == 'no-visible'}"
                                            :title="imagen.estado === 'no-visible' ? 'Cambiar a visible' : 'Cambiar a no visible'" 
                                            v-title
                                            style="padding: 5px;"
                                            @click="onChangeImagen($event)"
                                        >
                                            {{ `${imagen.estado === 'no-visible' ? 'No visible' : 'Visible'}`}}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition name="component-fade" mode="out-in">
            <keep-alive>
                <component :is='cardBodyComponent' v-bind:deleteData="deleteData" @getMessageDelete="getMessageDelete" @getResetId="getResetId"></component>
            </keep-alive>
        </transition>
    </div>
</div>

</template>
<script>
const LoaderComponent = () => import('../../../components/LoaderComponent.vue');
const AlertMessageComponent = () => import('../../../components/AlertMessageComponent.vue');
const deleteConfirmModal = () =>import('../../../components/ConfirmDeleteModal.vue');

export default {
    name: 'BannerApp',

    data() {
        return {
            fileImage: '',
            componentRender: LoaderComponent,
            componentRenderOne: '',
            activeComponent: '',
            activeComponentSecond: '',
            cardBodyComponent: '',
            deleteData: {
                url: '',
                id: '',
            },
            alert: {},
            alertSecound: {},
            images: [],
            id_imagen: '',
        };
    },
    beforeCreate() {
        this.$nextTick(async function () {
            await this.getImagenes(); 
        })
    },
    methods: {
        changeFileImage(e){
            let file = e.target.files[0];
            this.fileImage = '';
            if( file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' ){
                this.fileImage = file;
                
            }else{
                e.target.value = '';
                alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
            }
        },
        async sendImage() {
            this.alert = {};
            this.alertSecound = '';
            this.activeComponentSecond = '';
            this.activeComponent = '';
            if( this.fileImage === '' ){
                this.alert.msg = 'Error,debe agregar una imagen.';
                this.alert.clss = 'error';
                this.activeComponent = AlertMessageComponent;
                return;
            }

            let formData = new FormData();
            formData.append('image', this.fileImage);
            this.componentRenderOne = LoaderComponent;
              this.componentRender = LoaderComponent;

            await this.axios.post('banner-app', formData, {headers: { "content-type": "multipart/form-data" } } )
            .then( async (response) => {
                this.alert = {
                    msg: response.data.message,
                    clss: 'updated'
                }

                setTimeout(() => {
                    this.activeComponent = AlertMessageComponent;
                    this.componentRenderOne = '';
                }, 1500);
                
                await this.getImagenes();
                
            }).catch(error => {
                this.alert = {
                    msg: error.response.status !== 500 ? error.response.data.message : 'Ha ocurrido un error con el servidor por favor intentar mas tarde',
                    clss: 'error'
                }

                 setTimeout(() => {
                    this.activeComponent = AlertMessageComponent;
                    this.componentRenderOne = '';
                }, 1500);
            });
        },
        async getImagenes(bol = false){            
            await this.axios.get('banner-app')
            .then(response => { 
                console.log(response.data, 'response.data');
                if( response.data.results != null && response.data.results.length != 0 ){
                    this.images = response.data.results;
                    for (let i = 0; i < this.images.length; i++) {
                        if( this.images[i].estado === 'visible'){
                            this.id_imagen = this.images[i].id_banner;
                            break;
                        }
                        
                    }
                }else{
                    this.images = [];
                    this.alertSecound = {
                        msg: 'No hay imagenes',
                        clss: 'error'
                    }
                     setTimeout(() => {
                        this.activeComponentSecond = AlertMessageComponent;
                     }, 2500)
                    
                }

                setTimeout(() => {
                    this.componentRender = '';
                    if( bol ) this.activeComponentSecond = AlertMessageComponent;
                }, 2000);
            }).catch(error => {
                this.alertSecound = {
                    msg: error.response.status !== 500 ? error.response.data.message : 'Ha ocurrido un error con el servidor por favor intentar mas tarde',
                    clss: 'error'
                }

                console.log(error.response.data)

                this.activeComponentSecond = AlertMessageComponent;
                setTimeout(() => {
                    this.componentRender = '';
                }, 2000);
            })  
        },
        async onChangeImagen(e) {
            this.alert = {};
            this.alertSecound = '';
            this.activeComponentSecond = '';
            const { value } = e.target;
            this.id_imagen = value;

            this.activeComponent = '';
            if( this.id_imagen === '' ){
                this.alertSecound.msg = 'Error, debe seleccionar una image.';
                this.alertSecound.clss = 'error';
                this.activeComponentSecond = AlertMessageComponent;
                return;
            }

            this.componentRender = LoaderComponent;
            await this.axios.put(`banner-app/${this.id_imagen}`)
            .then( (response) => {
                this.alertSecound = {
                        msg: response.data.message,
                        clss: 'updated'
                    }

                
                 setTimeout( async () => {
                    await this.getImagenes(true);
                }, 1500);
                
                
            }).catch(error => {
                this.alertSecound = {
                    msg: error.response.status !== 500 ? error.response.data.message : 'Ha ocurrido un error con el servidor por favor intentar mas tarde',
                    clss: 'error'
                }

                this.activeComponentSecond = AlertMessageComponent;
                this.componentRender = '';
            });
        },
        deleteImagen(e) {
            this.alert = {};
            this.alertSecound = '';
            this.activeComponentSecond = '';
            this.activeComponent = '';
            const { value } = e.target;
            console.log('vau id', value)
            this.deleteData = {
                url: 'banner-app',
                id: value
            }
            this.cardBodyComponent = deleteConfirmModal;
        },
        getMessageDelete(response){
            this.alertSecound = {
                msg: response.message,
                clss: (response.status == 200) ? 'updated' :'error'
            }
            
            this.cardBodyComponent = '';

            if( response.status == 200 ){
                this.componentRender = LoaderComponent;
                setTimeout(async () => {
                    await this.getImagenes(true);
                }, 1000);
              
            }else{
                this.activeComponentSecond = AlertMessageComponent;
            }

            this.deleteData = {
                url: '',
                id: ''
            }
        },
        getResetId() {

        }
    },
};
</script>