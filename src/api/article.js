/**
 * article模块接口列表
 */
import base from './base'; // 导入接口域名列表
import axios from '../api/getapi'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const article = {
    // 新闻列表
    articleList () {
        return axios.get(`${base.sq}/topics`);
    },
    // 新闻详情,演示
    articleDetail (id, params) {
        return axios.get(`${base.sq}/v1/pois?city_id=1&keyword=%E8%BF%AA%E5%A3%AB%E5%B0%BC&type=search`, {params: params});
    },
    // post提交
    login (params) {
        return axios.post(`${base.sq}/users/login`, qs.stringify(params));
    },
    // post注册
    register (params) {
        return axios.post(`${base.sq}/users/register`, qs.stringify(params));
    },
    // 二手商品发布
    secondHandshop (params) {
        return axios.post(`${base.sq}/users/commodity`, qs.stringify(params));
    },
    GetsecondHandshop (params) {
        return axios.post(`${base.sq}/users/getsecondHandshop`, qs.stringify(params));
    },


}

export default article;
