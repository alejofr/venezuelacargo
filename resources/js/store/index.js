import Vue from 'vue'
import Vuex from 'vuex'


import auth from './auth'
import loading from './loading'
import tableadmin from './tableadmin'
import online from './online'


Vue.use(Vuex)
//const debug = process.env.NODE_ENV !== 'production'


const store = new Vuex.Store({
    modules: {
     auth,
     loading,
     tableadmin,
     online
    },
    //strict: debug
})

  export default store