import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)



const store = new Vuex.Store({
    state:{
        count:0,

        token:sessionStorage.getItem("login") ? 'test' : '登陆/注册',
        is:false,
        LOADING: false,


        username: '',//用户id
        login: true,//是否登录
        userInfo: null, //用户信息



    },

    mutations:{
        SHOWLoading(state){
            state.LOADING = true
        },
        HIDELoading (state) {
            state.LOADING = false
        }
    },


});



export default store
