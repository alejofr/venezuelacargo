<template>
    <div class="card-footer d-flex align-items-center">
        <p class="m-0 text-muted">Mostrando <span>{{pagination.resultPage}}</span> de <span>{{pagination.totalResult}}</span> Entradas</p>
        <ul class="pagination m-0 ms-auto">
            <li class="page-item">
                <a v-if="this.pagination.numPage == 1" class="page-link disabled prev arrow-ti" href="javascript:void(0)" tabindex="-1" aria-disabled="true">
                    <i class="ti ti-arrow-left"></i>
                </a>
                <router-link  :to="{ path: fullPath, query: { page: prev } }" class="page-link prev arrow-ti" v-else>
                    <i class="ti ti-arrow-left"></i>
                </router-link>
            </li>
            <li class="page-item" v-for="(page, index) in pages" :key="index">
                <router-link :to="{ path: fullPath, query: { page: page } }" v-if="page != ''"  class="page-link btn-pagination" :class="{'active':page == pagination.numPage}">
                    <span>{{page}}</span>
                </router-link>
                <a href="javascript:void(0)" v-else class="page-link btn-pagination">
                    <i  class="ti ti-antenna-bars-1" style="font-size: 22px;margin-top: -12px;"></i>
                </a>
            </li>
            <li class="page-item">
                <a v-if="totalPage == this.pagination.numPage" class="page-link arrow-ti disabled next" href="javascript:void(0)">
                    <i class="ti ti-arrow-right"></i>
                </a>
                <router-link :to="{ path: fullPath, query: { page: next } }" class="page-link arrow-ti next" v-else ><i class="ti ti-arrow-right"></i></router-link>
            </li>
        </ul>
    </div>
</template>

<script>  
export default {
    name: 'PaginationComponent',
    data(){
        return {
            totalPage: 1,
            prev: 1,
            next: 1, 
            pages: [],
            query: {},
            fullPath: ''
        }
    },
    computed: {
        pagination(){
            this.paginationPage(this.$store.getters['tableadmin/getPagination'])
            return this.$store.getters['tableadmin/getPagination'];
        },
    },
    methods: {
        paginationPage(pagination){
            let arregloAux = [];
            if( pagination.resultPage > 0 ){
                this.prev = pagination.numPage - 1;
                this.next = pagination.numPage + 1;

                let totalPages = this.totalPage = Math.ceil(pagination.totalResult/pagination.resultPage);

                console.log(Math.ceil(pagination.totalResult/pagination.resultPage), 'ass qaq')

                let init = pagination.numPage;//lo inicializamos en el valor que viene en numPage
                

                let j = 1;//sirve para el control de orden
                //arreglo auxiliar para el oder de la paginacion
                for (let i = init; i <= totalPages; i++) {
                    
                    if( j > 3 )//muestra 3: num 1 el prev y  num 2 el valor de page o de la pagina actual y num 3 el depues de page 
                        break;

                    if( init > 1 && j == 1){
                        //prev antes de page
                        for (let k = init - 1; k >= 1; k--) {
                            if ( j == 2 )
                                break;

                            arregloAux.unshift(k)
                            j++;
                        }
                    }

                    //valor de page + despues de page
                    arregloAux.push(i);
                    j++;
                        
                }

                
                let start = 1;//antes de antes como decir el star o inicio de la paginacio o del num mas cercano a uno o a prev

                if( arregloAux[0] > 2) {
                    
                    if( totalPages - 1 == arregloAux[0] ){
                        arregloAux.unshift(arregloAux[0] - 1)
                    }

                    start = arregloAux[0] - 2;
                    arregloAux.unshift('')
                    arregloAux.unshift(start);
                }else if ( arregloAux[0] == 2 ){
                    arregloAux.unshift(start);
                }

                let indice = arregloAux.length - 1;
                //definicion de end, para el control del separador antes de end  o end
                if( arregloAux[indice] != totalPages && arregloAux[indice]  == totalPages - 1 ){
                    arregloAux.push(totalPages);
                }else if ( arregloAux[indice] != totalPages && arregloAux[indice]  != totalPages - 1 ){
                    arregloAux.push('');
                    arregloAux.push(totalPages);
                }
            }else{
                arregloAux.push(1)
            }

            if( Object.keys(this.$route.query) != 0 ){
                this.query = this.$route.query;
                
                if( this.query.hasOwnProperty("page") ){
                    console.log('sas');
                    delete this.query.page
                }
            }

            this.fullPath = this.$route.fullPath;
            this.pages = arregloAux;
        }
    },
    watch: {
        /*pagination(){
            this.paginationPage(this.pagination)
        }*/
    }
};
</script>
<style>
    .page-item{
        margin-left: 5px;
    }

    .page-link{
        background: #fff;
        font-size: 14px;
        height: 36px;
        width: 36px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 0;
        min-width: 0;
        border-radius: 0;
        background-color: var(--tblr-table-bg);
        border-width: 1px;
        box-shadow: inset 0 0 0 9999px var(--tblr-table-accent-bg);
    }

    .arrow-ti{
        font-size: 16px;
    }

    .page-link.active, .page-link.btn-pagination:hover{
        z-index: 3;
        background-color: #ffc107;
        color: #1f2d3d;
         border-color: #ffc107;
    }
    .page-item .arrow-ti{
        color: rgba(98, 105, 118, 1);
        background-color: #cbd5e1;
        border-color: #cbd5e1;
    }
    .page-item .arrow-ti.disabled{
        pointer-events: none;
    }
</style>