<template>
    <div class="card">
        <div class="card-body border-bottom py-3 " style="border-radius: 3px 3px 0 0;position:relative;">
            <transition name="component-fade" mode="out-in">
                <keep-alive>
                    <component :is='component' v-bind:alert="alert" v-bind:deleteData="deleteData" @getMessageDelete="getMessageDelete"></component>
                </keep-alive>
            </transition>
            <transition name="component-fade" mode="out-in">
                 <div v-show="loaderWhite == 'div-loader_white'" class="div-loader_white"></div>
            </transition>
            <div class="div_action_table div_flex_w ">
                <div class="div_flex_w div_flex_r div_left-flex ">
                    <div class="div_select_orderBy mb-2 me-3">
                        <div class="form-label">Ordenar por:</div>
                        <div>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" @change="select_orderBy_columns()" name="ascending" value="1" v-model="ascending">
                                <span class="form-check-label">ASC</span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" @change="select_orderBy_columns()" name="ascending" v-model="ascending" value="0">
                                <span class="form-check-label">DESC</span>
                            </label>
                        </div>
                    </div>
                    <div class="div_select_column mb-2">
                        <select name="columns" v-model="orderBy" class="form-select" @change="select_orderBy_columns()" >
                            <option v-for="(column, index) in columns" :key="index" :value="column.value" >
                                {{column.name}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="ms-auto text-muted div_right-flex">
                    <div class="btn-list mt-2">
                        <button type="button" @click="modificar" class="btn btn-dark">
                            <i class="ti ti-edit me-1"></i>
                            Modificar
                        </button>
                        <button type="button" class="btn btn-danger" @click="eliminar">
                            <i class="ti ti-trash me-1"></i>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table card-table table-vcenter text-nowrap datatable">
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="(column, index) in columns" :key="index">{{column.name}}</th>
                    </tr>
                </thead>
                <transition name="component-fade" mode="out-in">
                    <keep-alive>
                        <component :is='componentData'  v-bind:data="dataTble" v-bind:th="columns" @getId="getId"></component>
                    </keep-alive>
                </transition>
            </table>
        </div>
        <transition name="component-fade" mode="out-in">
            <keep-alive>
                <component :is='componentFooter' v-bind:pagination="pagination"></component>
            </keep-alive>
        </transition>
    </div>
</template>

<script>


const tablebody = (viewData) => {
    return () => import(`./datatables/${viewData}.vue`);
}

const skeletonTableBody  = () => import('./datatables/SkeletonDataTables.vue');

const pagination = () => import('./pagination/PaginationComponent.vue');

const skeletonPagination = () => import('./pagination/SkeletonPagination.vue')

const deleteConfirmModal = () =>import('../ConfirmDeleteModal.vue');

const alertMessage = () => import('../AlertMessageComponent.vue');

export default {
    name: 'Tables',
    props: [
        'columns',
        'get',
        'params',
        'viewData'
    ],
    data() {
        return {
            ascending : 1,
            orderBy: this.columns[0].value,
            dataTble:[],
            pagination:{},
            componentData: skeletonTableBody,
            componentFooter: skeletonPagination,
            loaderWhite: '',
            idDta: '',
            component: '',
            alert: {
                msg: '',
                clss: '' 
            },
            deleteData: {
                url: '',
                paramts: '',
            }
        };
    },
    async created() {
        await this.getData(this.get.url, this.params)
    },
    methods: {
        modificar(){
            if( this.idDta != '' ){
                const id = this.idDta;
                this.$router.push({ name: `${this.get.edit}`, params: { id } });
            }else{
                this.alert = {
                    msg: 'debe seleccionar una casilla que desea modificar',
                    clss: 'error'
                }
                this.component = alertMessage;
            }
        },
        eliminar(){
            if (this.idDta != '') {
                this.deleteData = {
                    url: this.get.url,
                    paramts: this.idDta
                }
                this.component = deleteConfirmModal;
            }else{
                this.alert = {
                    msg: 'debe seleccionar una casilla que desea eliminar',
                    clss: 'error'
                }
                this.component = alertMessage;
            }
            
        },
        async dataUpdated(params, columns) {
            this.columns = columns;
            this.params = params;
            this.orderBy = this.columns[0].value
            this.ascending = 1;

            this.loaderWhite = 'div-loader_white';
            this.idDta = '';
            this.componentData = skeletonTableBody;
            this.componentFooter = skeletonPagination;
            await this.getData(this.get.url, this.params);
            
        },
        navegationPage(page){
            this.params.page = page;
            this.dataUpdated(this.params, this.columns);
        },
        getId(id){
            this.idDta = id;
        },
        async getMessageDelete(response){
            this.alert = {
                msg: response.message,
                clss: (response.status == 200) ? 'updated' :'error'
            }
            this.component = alertMessage;

            if( response.status == 200 ){
                this.loaderWhite = 'div-loader_white';
                this.idDta = '';
                this.componentData = skeletonTableBody;
                this.componentFooter = skeletonPagination;
                await this.getData(this.get.url, this.params);
            }
        },
        async select_orderBy_columns(){
            if( this.dataTble.length != 0 ){
                this.loaderWhite = 'div-loader_white';
                this.params.orderBy = this.orderBy;
                this.params.ascending = this.ascending;
                this.componentData = skeletonTableBody;
                this.componentFooter = skeletonPagination;

                await this.getData(this.get.url, this.params);
            }
        },
        async getData(get, request) {
            console.log(this.params)
            await this.axios.get(get, {params : request}).then(response => {
                console.log(response.data)
                this.dataTble = response.data.results;
                this.pagination = response.data.pagination;
                let component = ( response.data.results.length != 0 ) ? tablebody(this.viewData) : '';

                setTimeout(() => {
                    this.componentData = component;
                    this.componentFooter = pagination;
                    this.loaderWhite = '';

                    if( this.dataTble.length == 0 ){
                        this.alert.msg = '¡No se encontró níngun resultado!.';
                        this.alert.clss = 'error';

                        this.component = alertMessage;

                    }
                }, 2000);
            }).catch(error => {
                console.log(error.response)
            });
        },
    },
    watch: {
       params(){
           console.log("click paginacion")
       }
    }
};
</script>
<style scoped>
    .div_flex_w, .div_flex_r{
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
    }

    .div_flex_w{
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        -o-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .div_flex_r{
        -ms-align-items: center;
        align-items: center;
    }

    .div_left-flex select{
        border-radius: 0;
        border: 1px solid #b9b9b9;
        color: #b9b9b9;
    }
   
    .div_left-flex input[type="radio"]{
        border: 2px solid #b9b9b9;
    }
    .div_right-flex{
        padding-top: 3px;
    }

    .bodyt-loading{
        position: relative;
        width: 100%;
         height: 220px;
    }
    .loading-tables{
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: rgb(255 255 255);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        -moz-transition: all .4s;
        transition: all .4s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }

    @media (max-width: 580px){
        .div_left-flex,.div_right-flex{width: 100%;}
    }

    @media (max-width: 380px){
        .div_select_column{width: 100%;}
        .div_right-flex .btn-list{
            margin-bottom: 0 !important;
            margin-right: 0;
        }

        .div_right-flex .btn-list > *{
            margin: 0 !important;
            width: calc(50% - 5px);
        }

        .div_right-flex .btn-list > .btn.btn-danger{
            margin-left: auto !important;
        }
    }
</style>