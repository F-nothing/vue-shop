import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)



const store = new Vuex.Store({
    state:{
        count:0,
        username: '',
        token : localStorage.getItem("login"),
        Navbar:'0', //当前导航位置
    },

    mutations:{
        updateCount(state,num){
            state.count = num
        }
    },
});



export default store
