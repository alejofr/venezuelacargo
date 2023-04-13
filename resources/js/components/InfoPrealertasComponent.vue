<template>
        <div class="card card-lg">
            
            <div v-show="loader" class="div-loader_white"><loader></loader></div>
            <div class="card-body">
                  <div class="w-100 mb-3" v-if="activeComponent"><component :is='activeComponent' v-bind:alert="alert"></component></div>
                <div class="row">
                    <div class="col-6">
                        <p class="h3">{{column.one.name}}</p>
                        <address>
                            <p v-for="(item, index) in column.one.data" :key="index">{{item.name}}</p>
                        </address>
                    </div>
                    <div class="col-6 text-end">
                        <p class="h3">{{column.two.name}}</p>
                        <address>
                            <p v-for="(item, index) in column.two.data" :key="index">{{item.name}}</p>
                        </address>
                    </div>
                    <div class="col-12 my-5">
                        <h1>{{h1}}</h1>
                    </div>
                </div>
                <table class="table table-transparent table-responsive mb-5">
                    <thead>
                        <tr>
                            <th class="" v-for="(item, index) in column.th" :key="index">{{item.name}}</th>
                        </tr>
                    </thead>
                    <component :is='tbodyComponent' v-bind:data="dataTble" @getTrackings="getTrackings"></component>
                </table>
                <div class="d-flex align-items-center mt-5">
                    <div class="pagination m-0 ms-auto" style="width: 330px;">
                        <form enctype="multipart/form-data" class="form-floating mb-3 w-100">
                            <input type="text" class="form-control" v-validate="'numeric'" name="warehouse" :class="{'is-invalid': errors.first('warehouse')}" v-model="json.warehouse" id="warehouse" autocomplete="off" :data-vv-validate-on="'change'">
                            <label for="warehouse">Warehouse</label>
                            <div v-if="errors.has('warehouse')" class="invalid-feedback">{{errors.first('warehouse')}}</div>
                        </form>
                    </div>
                </div>
                <div class="d-flex align-items-center mt-3">
                    <btn-volver :classe="'btn-light'"></btn-volver>
                    <button type="button" @click="save" class="btn btn-info ms-auto">
                        Guardar
                    </button>
                </div>
            </div>
        
        </div>
</template>
<script>

const tablebody = (viewData) => { return () => import(`./tables/datatables/${viewData}.vue`); }
const LoaderComponent = (() => import('./LoaderComponent.vue') );

const AlertMessageComponent = (() => import('./AlertMessageComponent.vue') );

import BtnVolver from './BtnVolver.vue';

export default {
    props: ['column', 'dataTble', 'tbody', 'h1', 'action'],
    name: 'InfoComponent',

    data() {
        return {
            loader: false,
            activeComponent: '',
            alert: {
                msg: '',
                clss: '' 
            },
        };
    },
    components: {
        BtnVolver,
        loader: LoaderComponent
    },
   computed: {
        tbodyComponent() {
            return tablebody(this.tbody);
        },
        json(){
            return {
                warehouse: ( this.action.value != '' ) ? this.action.value : '',
                trackings: []
            }
        },
   },

    methods: {
        getTrackings(valores){
            console.log(valores)
            this.json.trackings = valores;
                
        },
        save(){
            this.loader = true;
            this.$validator.validate().then(valid => {
                if( valid ){
                   
                    if( this.json.trackings.length != 0 ){
                        console.log(this.json)
                        //let formData = this.json;

                   
                            let formData = new FormData();
                            let trackings = this.json.trackings;
                           // config = {headers: { "content-type": "multipart/form-data" } }
                            formData.append('warehouse', this.json.warehouse);

                            for (let i = 0; i < trackings.length; i++) {
                                let objt = {};
                                let arrKeys = [];

                                //agregamos cada tracking
                                for (const key in trackings[i]) {
                                    if( key != 'image' ){
                                        formData.append(`tracking[${key}]`, trackings[i][key])
                                        arrKeys.push(key);
                                    }else{
                                        formData.append(`images[${trackings[i]['id_tracking']}]`, trackings[i]['image'])
                                    }
                                }

                                //eliminamos el append trackick y agregamos sus valos a un objeto
                                for (let j = 0; j < arrKeys.length; j++) {
                                    objt[arrKeys[j]] = formData.get(`tracking[${arrKeys[j]}]`);
                                    formData.delete(`tracking[${arrKeys[j]}]`);
                                }
                    
                                formData.append(`trackings[${i}]`, JSON.stringify(objt))
                            }
                        

                    

                        this.axios.post(`${this.action.url}/${this.$route.params.id}`, formData, {headers: { "content-type": "multipart/form-data" } } ).then(response => {
                            console.log(response.data)

                            this.loader = false;
                            this.alert = {
                                msg: response.data.message,
                                clss: 'updated'
                            }

                            this.activeComponent = AlertMessageComponent;
                    
                            setTimeout(() => {
                                this.$router.go(-1)
                            }, 4000)
                            
                        }).catch(error => {
                            console.log(error.response.data)
                            this.loader = false;
                            this.alert = {
                                msg: error.response.data.message,
                                clss: 'error'
                            }

                            this.activeComponent = AlertMessageComponent;
                        });
                    }else{
                        alert(( this.action.name == 'prealertas' ) ? 'debe modificar y seleccionar al menos un tracking' : 'Debe Asignar Instruccion a cada unos de los paquetes registrados')
                        this.loader = false;
                    }
                  
                }else{
                    this.loader = false;
                }
            });
        }
    },
};
</script>
<style>
    .div-loader_white{
        margin: 0;
    }
</style>