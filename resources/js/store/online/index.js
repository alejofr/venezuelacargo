const online = {
    namespaced: true,
    state: () => ({
        status: null, 
    }),
    mutations: {
        statusOnline(state, boleano){
            state.status = boleano;
        }
    },
    actions: {
        checkOnline({commit}){
            commit('statusOnline', window.navigator.onLine)
        },
    },
};

export default online;