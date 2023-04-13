<template>
    <div class="mb-3">
        <div class="inner-form" v-if="Object.keys(filters).length != 0">
            <transition name="component-fade" mode="out-in">
                <keep-alive>
                    <component :is='cardBodyComponent'></component>
                </keep-alive>
            </transition>
            <div class="input-field first-wrap" v-if="filters.first.placeholder != false">
                <div class="icon-wrap"><span class="ti ti-search"></span></div>
                <input type="text" @change="changeFilter($event)" name="search" id="search" v-model="query.search" :placeholder="filters.first.placeholder" :title="filters.first.placeholder" v-title>
                <router-link @click.native="resetSearch()" :to="{ name:filters.name, query: noSearch }" class="btn-close-search" v-if="query.search != ''">
                    <i class="icon-clear ti ti-x"></i>
                </router-link>
            </div>
            <div class="input-field second-wrap" v-for="(field, index) in filters.second" :key="index"  :title="field.title" v-title>
                <div class="icon-wrap"><span :class="{'ti ti-selector':field.type == 'select', 'ti ti-calendar-event':field.type == 'date'}"></span></div>
                <select :name="field.name" @change="changeFilter($event)" v-if="field.type == 'select'" v-model="query[field.name]" :id="field.name">
                    <option v-for="(data, key) in field.data" :key="key" :value="data[field.option.value]">{{data[field.option.name]}}</option>
                </select>
                <input type="date" @change="changeFilter($event)" v-if="field.type == 'date'" :name="field.name" v-model="query[field.name]" :id="field.name">
            </div>
            <div class="input-field submit-wrap">
                <router-link :to="{ name:filters.name, query: params }"><i class="ti ti-search"></i></router-link>
            </div>
            <div class="input-field reset-wrap" v-if="Object.keys(this.$route.query).length != 0">
                <router-link :to="{ name:filters.name }"><span class="ti ti-trash"></span></router-link>
            </div>
        </div>
    </div>
</template>

<script>

const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1='';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}

const loaderWhite = () => import('./LoaderWhiteComponent.vue')

export default {
    name: 'FilterComponent',
    props: ['filters', 'request'],
    data(){
        return {
            params: {},
            query: {},
        }
    },
    created(){
        let newRequest = {...this.request};
            newRequest = {...newRequest}
        let { params:{ query } } = newRequest;
        //let request = Object.assign({}, this.initRequest);

        if( Object.keys(this.$route.query).length != 0 ) {
            query = {...this.$route.query};
            let aux = {};
            for (const key in  query) {
                if( key != 'token' ) aux[key] = query[key];
            }
            query = aux;
            newRequest.params.query = query;

            newRequest.params.page = ( this.$route.query.hasOwnProperty("page") &&  this.$route.query.page.match(/^[0-9]+$/)) ? parseInt(this.$route.query.page) : newRequest.params.page;
        }


        this.$store.dispatch('tableadmin/initTable', newRequest);
        //this.$store.dispatch('tableadmin/initRequesTable', request);
        //addInitRe(Object.assign({}, request));

        this.query = query;
        //console.log('solo una vez');
    },
    computed: {
        stateStoreTable(){
            return {...this.$route};
        },
        stateStoreTableInit(){
            return {...this.$store.getters['tableadmin/getInitRequest']};
        },
        noSearch() {
            let query = {...this.query}
                query.search = ''
            return query
        },
        cardBodyComponent(){
            const cmpts = this.$store.getters['tableadmin/getComponents']
            return ( cmpts.cardBody == 'loaderWhite' ) ? loaderWhite : '';
        },
    },
    methods: {
       changeFilter(e){
        this.query[e.target.name] = e.target.value;
        this.params = {...this.query};
        this.params.token = generateRandomString(46);
       },
       resetSearch(){
            this.params.search = this.query.search = ''
       },
       changeQueryPadre(newQury){
            this.query = {...newQury}
       },
       changeRequestPadre(newRe){
            this.$store.dispatch('tableadmin/initTable', {...newRe});
       }
    },
    watch: {
        stateStoreTable: function (){
            if( this.$store.getters['tableadmin/getRequest'].url == '' && this.filters.name == this.$route.name ){
                this.$emit('consulReq');
                this.$emit('consulReqQury');
            }
        },
    }
};
</script>