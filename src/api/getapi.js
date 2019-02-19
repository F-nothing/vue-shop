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
        let token = sessionStorage.getItem("login");
        if(token){
            token && (config.headers.Authorization = token);
        }
        return config;
    },
    error => Promise.error(error)
);




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

