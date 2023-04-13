import axios from 'axios';

const tableadmin = {
    namespaced: true,
    state () {
        return { 
            request: {  
                url: '',
                params:  {}
            },
            initRequest: {},
            tbodyComponent: '', //inicio component skeletonTableBody
            paginationComponent: '', //inicio component skeletonPagination
            cardBodyComponent: '', // inicio de component loaderWhite
            dataTble: [],
            pagination: {}
        }
    },
    mutations: {
        mutRequest(state, request){
            state.request = request;
        },
        mutInitRequest(state, request){
            state.initRequest = request;
        },
        mutResetRequestParams(state){
            state.request.params = state.paramsInit;
        },
        mutResetRequest(state){
            state.request = {name: '',url: '', params: {}};
        },
        mutDataTblePagination(state, response){
            state.dataTble = response.results;
            state.pagination = response.pagination;
        },
        mutAlertMsg(state, boleano){
            state.cardBodyComponent = ( boleano ) ? 'alertMessage' : ''
        },
        mutDelete(state, boleano){
            state.cardBodyComponent = ( boleano ) ? 'deleteConfirmModal' : ''
        },
        componentRender(state, objeto){
            if ( objeto != null ){
                state.tbodyComponent = objeto.tbody
                state.paginationComponent = objeto.pagination
                state.cardBodyComponent = objeto.cardBody
            }else{
                state.tbodyComponent = 'skeletonTableBody'
                state.paginationComponent = 'skeletonPagination'
                state.cardBodyComponent ='loaderWhite'
            }
        }
    },
    getters: {
        getRequest(state){
            return state.request
        },
        getInitRequest(state){
            return state.initRequest
        },
        getComponents(state){
            return { tbody: state.tbodyComponent, pagination: state.paginationComponent, cardBody: state.cardBodyComponent }
        },
        getDataTable(state){
            return { data: state.dataTble, cardBodyComp: state.cardBodyComponent }
        },
        getPagination(state){
            return state.pagination
        } 
    },
    actions: {
        initTable({commit, dispatch},objeto = {}){

            commit('mutRequest', objeto)
            commit('componentRender', null)
            dispatch('getData',{root:true}) 
        },
        alertMessage({commit}, boleano = true){
            commit('mutAlertMsg', boleano)
        },
        modalDelete({commit}, boleano = true){
            commit('mutDelete', boleano)
        },
        resetTable({commit}){
            commit('mutResetRequest')
            commit('componentRender', null)
        },
        initRequesTable({commit}, request){
            commit('mutInitRequest', request)
        },
        updateParamsTable({commit, dispatch}){
            commit('mutResetRequestParams')
            commit('componentRender', null)
            dispatch('getData',{root:true}) 
        },
        resetInit({commit,  dispatch}){
            commit('componentRender', null)
            dispatch('getData',{root:true}) 
        },
        getData({commit, getters }){
            const { url, params } = getters.getRequest;
            console.log('hola aqui')
                console.log(params)
                console.log(url)

            axios.get(url, {params : params}).then(response => {
                console.log(response.data)
            
                setTimeout(() => {
                    commit('mutDataTblePagination', response.data)
                    commit('componentRender', {
                        tbody: 'tablebody',
                        pagination: 'pagination',
                        cardBody: ( response.data.results.length == 0 ) ? 'alertMessage' : ''
                    });
                }, 2000);
            }).catch(error => {
                console.log(error.response.data)
            });
        }
    }
}


export default tableadmin