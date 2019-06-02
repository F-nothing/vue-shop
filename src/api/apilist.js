import {get,post} from '../api/getapi'
/**
 *商品分类查询
 */
export const Classlist = data =>get('/goods/get_goodCategory',data);
/**
 * 商品列表
 */


/**
 * 根据商品id查询商品
 */
export const shoplist_id = data =>get('/goods/findshop',data);

/**
 * 加入购物车
 */
export const joinched = data =>post('/goods/joinched',data);
/**
 * 获取购物车
 */

export const chedfind = data =>get('/v1/pois?city_id=1&keyword=%E8%BF%AA%E5%A3%AB%E5%B0%BC&type=search',data);


/**
 * 勾选商品
 * @param data
 * @constructor
 */
export const Checklist = data =>post('/goods/Checklist',data);

export const getAllched = data =>post('/goods/Allched',data);



/**
 * 获取商品价格
 */
export const CheckPrice = data =>post('/users/Settlement',data);



export const get_fingshop = data =>get('/goods/get_fingshop',data);


export const login = data =>post('/users/login',data);








