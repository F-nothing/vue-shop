import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)



const store = new Vuex.Store({
    state:{
        count:0,

        // token: '',

        username: '',

        token : localStorage.getItem("login")


        // token: window.localStorage.getItem("key")


    },




    mutations:{
        updateCount(state,num){
            state.count = num
        }
    },
})



export default store
