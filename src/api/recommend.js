import jsonp from '../config/jsonp'
<<<<<<< HEAD
import {commonParams,opitons,getfindshop,secondkill} from "./config";
=======
import {commonParams,opitons,getfindshop,Zepto,secondkill} from "./config";


>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
    const url = 'https://wq.jd.com/bases/searchdropdown/getdropdown';

    const data =Object.assign({},getfindshop,{key:p.q});

    return jsonp(url,data)
}
<<<<<<< HEAD
=======

/**
 * JD商品推荐
 */

export function getZeptoo() {
    const url = 'https://wqcoss.jd.com/mcoss/reclike/getrecinfo';
    const data =Object.assign({},Zepto,);
    return jsonp(url,data)
}

>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
/**
 * JD秒杀商品推荐
 */
export function getsecondkill() {
    const url = 'https://wqcoss.jd.com/mcoss/secondkill/show';
    const data =Object.assign({},secondkill,);
    return jsonp(url,data)
}
