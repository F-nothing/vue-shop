import Vuex from 'vuex'
import Vue from 'vue'
<<<<<<< HEAD
import actions from './action'
import {setStore} from '../config/mUtils'

import {SHOWLOADING,HIDELOADING,RECORD_USERINFO,GET_USERINFO} from './mutation-types'

Vue.use(Vuex)

const state = {
    count:0,
    token:sessionStorage.getItem("login") ? 'test' : '登陆/注册',
    is:false,
    LOADING: false,
    username: '',
    login: false,//是否登录
    userInfo: null, //用户信息
}
const mutations= {
    [SHOWLOADING](state){
        state.LOADING = true
    },
    [HIDELOADING] (state) {
        state.LOADING = false
    },
    [RECORD_USERINFO] (state , info) {
        state.userInfo = info
        state.login = true;
        setStore('user_id', info);
    },
    // 获取用户信息存入vuex
    [GET_USERINFO](state , info) {
        if (state.userInfo) {
            return;
        }
        if (!info.message) {
            state.userInfo = {...info};
        } else {
            state.userInfo = null;
        }
    }
}
export default new Vuex.Store({
    actions,
    state,
    mutations
})
=======
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
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
