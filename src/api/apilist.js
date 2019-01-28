import {get,post} from '../api/getapi'





/**
 *商品分类查询
 */
export const Classlist = data =>get('/goods/get_goodCategory',data);
/**
 * 商品列表
 */
export const shoplist = data =>get('/goods/get_fingshop',data);


export const get_fingshoppp = data =>get('/goods/get_fingshoppp',data);




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
export const chedfind = data =>post('/goods/chedfind',data);
/**
 * 勾选商品
 * @param data
 * @constructor
 */
export const Checklist = data =>post('/goods/Checklist',data);


export const Settlement = data =>post('/goods/Settlement',data);
/**
 * 获取商品价格
 */
export const CheckPrice = data =>post('/goods/CheckPrice',data);

// /**
//  * 获取收货地址
//  */
// export const CheckPrice = data =>post('/goods/CheckPrice',data);
// /**
//  * 编辑收货地址
//  */
// export const CheckPrice = data =>post('/goods/CheckPrice',data);


/**
 *登陆接口
 */
export const login = data =>get('/users/login',data);
/**
 *注册接口
 */
