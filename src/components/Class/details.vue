<template>
    <div class="">
        <!-- Universal header component -->
        <div class="header">
            <div class="header-left">
                <span class="iconfont icon-xiala-copy"></span>
            </div>
            <div class="header-congtcoll">
                    <a><span>商品</span></a>
                    <a><span>评价</span></a>
                    <a><span>详情</span></a>
                    <a><span>推荐</span></a>
            </div>
            <div class="header-right">
                <span class="iconfont icon-more"></span>
            </div>
        </div>
        <div class="mod_slider">
            <swiper class="swiper">
                <swiper-slide >
                    <img class="img" :src="shop.shop_img">
                </swiper-slide>
            </swiper>
        </div>
        <!-- Spike module -->
        <div class="buy_area">
            <div class="priceWrap">
                <span class="price large_size" id="priceSale">¥{{shop.checked}}</span>
                <a class="favourr">关注</a>
            </div>

            <div class="fn_wrap">
                <h1 class="fn fn_goods_name">
                    <div class="fn_text_wrap">
                        <i class="mod_tag mod_tag_big"></i>
                        {{shop.shop_name}}
                    </div>

                </h1>
                <div class="favour"></div>
            </div>
        </div>
        <!-- E 服饰商品颜色属性快捷切换区 -->
        <div class="favour">
            <!-- shop title -->
            <div class="detail_gap"></div>
            <!-- S SKU属性弹窗折叠方案 -->
            <div class="sku_window" @click="click">
                <div class="sku_choose_info">
                    <h3>已选</h3>
                    <span id="skuChoose1">无</span>

                </div>
            </div>
            <div class="detail_gap"></div>

            <!-- Commodity attribute -->
            <div class="commodity-attribute">

            </div>

            <!-- Delivery address -->

            <!-- After-sale service -->



        </div>
        <div class="">
            <van-goods-action>
                <van-goods-action-mini-btn
                        icon="chat-o"
                        text="客服"
                />
                <van-goods-action-mini-btn
                        info="5"
                        icon="cart-o"
                        text="购物车"
                />
                <van-goods-action-mini-btn
                        icon="shop-o"
                        text="店铺"
                />

                <van-goods-action-big-btn @click="Addcart()" text="加入购物车" />
                <van-goods-action-big-btn @click="AddOrder(shop)" primary  text="立即购买"/>



            </van-goods-action>
        </div>
        <popup :isShow='isShow'  ref="main" id="popup" v-on:on-result-change="onResultChange">
        </popup>
    </div>
</template>
<script>
import popup from '../public/Popup/Popup'
import {joinched,shoplist_id,login} from '../../api/apilist'

export default {
    components:{
        popup,
    },
    data(){
        return{
            isShow:false,
            shop:[],
            shopfrom:[]

        }
    },
    created(){
        //获取商品id
        var id = this.$route.query.id;
        const res = shoplist_id({id:id}).then((response)=>{
            this.shop = response.docs[0]
        })
    },
    methods:{
        click(val){
            this.isShow = true;
        },
        onResultChange(val){
            this.isShow=val;
        },
        //加入购物车
         async Addcart(){
            this.shopfrom._id =this.shop._id;
            const data = await joinched(this.shopfrom);

            alert(data.message)





        },
        AddOrder(shop){
            this.$router.push({path: '/placeorder' ,query:{id:[shop._id]} });
        }
    },
}
</script>
<style lang='scss' scoped>
@import url(//at.alicdn.com/t/font_908836_efu9flurzmg.css);
@import 'details';
</style>
