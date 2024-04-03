<template>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12">
                <div class="card card-edit" v-if="categoria != null">
                    <div v-show="loader" class="div-loader_white"><loader></loader></div>
                    <div class="card-header">
                        <h4 class="card-title">Crear nueva ubicación</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-12 col-md-12" v-if="activeComponent"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                            <div class="col-xl-6 col-md-6">
                                <div class="mb-3">
                                    <div class="form-floating mb-3">
                                        <input type="text" v-model="categoria.estado" name="estado" v-validate="'required'" class="form-control" :class="{'is-invalid': errors.first('estado')}" id="estado"  >
                                        <label for="estado">Còdigo Postal</label>
                                        <div v-if="errors.has('estado')" class="invalid-feedback">{{errors.first('estado')}}</div>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" v-validate="'required|max:60'" name="zona" v-model="categoria.zona" class="form-control" :class="{'is-invalid': errors.first('zona')}" id="zona" >
                                        <label for="zona">Ubicaciòn o Zona</label>
                                        <div v-if="errors.has('zona')" class="invalid-feedback">{{errors.first('zona')}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-md-6">
                                <div class="mb-3">
                                    <div class="form-floating">
                                        <input type="text" v-model="categoria.codigo_postal" name="codigo_postal" v-validate="'required|max:30|numeric'" class="form-control" :class="{'is-invalid': errors.first('codigo_postal')}" id="codigo_postal"  >
                                        <label for="codigo_postal">Còdigo Postal</label>
                                        <div v-if="errors.has('codigo_postal')" class="invalid-feedback">{{errors.first('codigo_postal')}}</div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="form-label">Visible</div>
                                    <div>
                                        <label class="form-check form-check-inline">
                                            <input class="form-check-input" name="activo" v-model="categoria.activo" type="radio" id="1" v-if="categoria.activo == 1" checked value="1">
                                            <input class="form-check-input" name="activo" v-model="categoria.activo" type="radio" id="0" v-else value="1">
                                            <span class="form-check-label" id="1">Activo</span>
                                        </label>
                                        <label class="form-check form-check-inline">
                                            <input class="form-check-input" name="activo" v-model="categoria.activo" id="0" type="radio" v-if="categoria.activo == 0" checked value="0">
                                            <input class="form-check-input" name="activo" v-model="categoria.activo" id="0" type="radio" v-else value="0">
                                            <span class="form-check-label" id="0">Inactivo</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-end">
                        <div class="d-flex">
                            <btn-volver :classe="'btn-light'"></btn-volver>
                            <button type="submit" @click="save" class="btn btn-primary ms-auto">
                                <i class="ti ti-plus me-1"></i>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
                <component v-else :is='component404'></component>
            </div>
        </div>
    </div>
</template>

<script>
import BtnVolver from '../../../../components/BtnVolver.vue';

const LoaderComponent = (() => import('../../../../components/LoaderComponent.vue') );
const AlertMessageComponent = (() => import('../../../../components/AlertMessageComponent.vue') );

export default {
    name: 'EditGeolocalizacion',
    data() {
        return {
            categoria: {
                estado: '',
                zona: '',
                codigo_postal: '',
                activo: 1
            },
            categorias: [], 
            loader: false,
            activeComponent: '',
            component404: '',
             alert: {
                msg: '',
                clss: '' 
            },
        };
    },
    beforeCreate() {
        
    },
    components: {
        loader: LoaderComponent,
        BtnVolver,
    },
    methods: {
         save(){
            this.$validator.validate().then(valid => {
                if( valid ){
                    this.loader = true;
                    this.activeComponent = AlertMessageComponent;
                    this.axios.post(`geolocalizacion-store`, this.categoria).then(response => {
                        console.log(response.data)
                        this.loader = false;
                        this.alert = {
                            msg: response.data.message,
                            clss: 'updated'
                        }
                    }).catch(error => {
                        console.log(error.response)
                        this.loader = false;
                        this.alert = {
                            msg: error.response.data.message,
                            clss: 'error'
                        }
                    });
                }
            })
        }
    }
}
</script>