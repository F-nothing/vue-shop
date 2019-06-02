/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import { Toast } from 'vant';
import Vue from 'vue'
Vue.use(Toast);
//Vant库
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);
// 创建axios实例
var instance = axios.create({    timeout: 1000 * 12});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
    config=>{
        let token = sessionStorage.getItem("login");
        if(token){
            token && (config.headers.Authorization = token);
        }
        return config;
    },
    error => Promise.error(error)
);
/**
 *响应拦截器
*/
instance.interceptors.response.use(
    response => {
        switch (response.data.result) {
            case "token效验错误":
                sessionStorage.clear();
                alert('token效验错误')
        }
        return response;
    },
    // 请求失败
    error =>{
        Toast('服务器出现错误');
    }
);
export default instance;
