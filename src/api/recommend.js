import jsonp from '../config/jsonp'
import {commonParams,commonTbParams,getfindshop,opitons} from "./config";


/**
 * QQ音乐轮播图
 */
export function getRecommend() {
    const url =  'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

    const data = Object.assign({},commonParams,{platform:'h5', uin:0, needNewCode:1});

    return jsonp(url,data,opitons)
}

/**
 * JD商品关键词查询
 */
export function getSug(p) {
    const url = 'https://so.m.jd.com/ware/search._m2wq_list';

    const data =Object.assign({},getfindshop,{q:p.q});

    return jsonp(url,data)
}

// /**
//  * 淘宝商品查询
//  */
// export function getfind() {
//     const url = 'https://acs.m.taobao.com/h5/mtop.taobao.wsearch.h5search/1.0/';
//
//     const data =Object.assign({},getfindshop);
//
//     return jsonp(url,data)
//
// }
