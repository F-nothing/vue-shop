<<<<<<< HEAD
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
=======
import axios from 'axios';
import QS from 'qs';
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = '/api';
}


axios.interceptors.request.use(config=>{
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        let token = sessionStorage.getItem("login");
        if(token){
            token && (config.headers.Authorization = token);
        }
        return config;
    },
    error => Promise.error(error)
);
<<<<<<< HEAD
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
=======




//
// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         switch (response.data.result) {
//             case "token效验错误":
//                 sessionStorage.clear();
//         }
//         return response;
//     }
// );
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function post(url,params) {
    return new Promise((resolve,reject) =>{
        axios.post(url,QS.stringify(params)).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err)
        })
    });
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err)
        })
    });
}

>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
