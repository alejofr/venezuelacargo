const loading = {
    state () {
        return {
            run: '' //Run arranca en stop
        }
    },
    mutations: {
        estadoRun(state, val){
            state.run = ( val == true ) ? 'start' : 'stop';
        }
    },
    getters: {
        getEstadoRun(state){
            return state.run;
        }
    },
    actions: {
        switch_run({commit}, val){
            commit('estadoRun', val)
        }
    }
};

export default loading;