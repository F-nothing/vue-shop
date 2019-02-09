import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)



const store = new Vuex.Store({
    state:{
        count:0,
        username: '',
        token : sessionStorage.getItem("login"),
        is:false,
        LOADING: true
    },

    mutations:{
        showLoading(state){
            state.LOADING = true
        },
        hideLoading (state) {
            state.LOADING = false
        }
    }





});



export default store
