<template>
    <div class="">
        <!-- Universal header component -->
        <div class="header">
            <div class="header-left">
                <span class="iconfont icon-xiala-copy"></span>
            </div>
            <div class="header-congtcoll">
                <!-- <nav class="header-detail_anchor"> -->
                    <a><span>shop</span></a>
                    <a><span>evaluat</span></a>
                    <a><span>details</span></a>
                    <a><span>More</span></a>
                    
                <!-- </nav> -->
            </div>
            <div class="header-right">
                <span class="iconfont icon-more">

                </span>
            </div>
        </div>
        <!-- Commodity rotation chart -->
        <div class="mod_slider">
            <swiper class="swiper">
                <swiper-slide >
                    <img class="img" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t27034/48/889830325/208490/a3be6016/5bbc6e01Ndf90871c.jpg!q80.dpg.webp">
                </swiper-slide>
            </swiper>
        </div>
        <!-- Spike module -->
        <div class="buy_area">
            <div class="priceWrap">
                <span class="price large_size" id="priceSale">¥<em>1499</em>.00</span>
                <a class="favourr">关注</a>
            </div>

            <div class="fn_wrap">
                <h1 class="fn fn_goods_name">
                    <div class="fn_text_wrap">
                        <i class="mod_tag mod_tag_big">
                            <img src="//img14.360buyimg.com/jdphoto/jfs/t16837/175/2336746342/1085/d4b6cf2c/5af16f73N5f0ce6d0.png">
                        </i>
                        华为 HUAWEI 畅享9 Plus 4GB+64GB 极光紫 全网通 四摄超清全面屏大电池 移动联通电信4G手机 双卡双待
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
                    <span id="skuChoose1">极光紫,标准版,4GB+64GB,1个</span>
                    
                </div>
            </div>
            <div class="detail_gap"></div>

            <!-- Commodity attribute -->
            <div class="commodity-attribute">

            </div>

            <!-- Delivery address -->

            <!-- After-sale service -->



        </div>




        <div class="de_row de_btn_bar">
            <div class="icon_btn icon_dong">
                <i class="iconfont icon-mendian"></i>
                <span>客服</span>
            </div>
            <div class="icon_btn icon_shop">
                <i class="iconfont icon-mendian"></i>
                <span>店铺</span>
            </div>
            <div class="icon_btn icon_cart">
                <i class="iconfont icon-jianxuan"></i>
                <span>购物车</span>
            </div>
            <div class="de_span btn_group">
                <div class="de_row">
                    <div class="btn btn_orange">
                        <span class="text">加入购物车</span>
                    </div>
                    <div class="btn btn_buy" id="buyBtn2" pppptag="7001.1.8">
                        <span class="txt"  @click="click">立即购买</span>
                    </div>
                </div>
            </div> 
        </div>
        <popup :isShow='isShow'  ref="main" id="popup" v-on:on-result-change="onResultChange">
        </popup>

    </div>
    
</template>
<script>
import popup from '../public/Popup/Popup'
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
export default {
    components:{
        popup,
        Vant
    },
    data(){
        return{
            isShow:false,
        }
    },
    methods:{
        click(val){
            this.isShow = true;  
                     
        },
        onResultChange(val){
            this.isShow=val;
        },
        
        
        
    },
}
</script>
<style lang='scss' scoped>
@import url(//at.alicdn.com/t/font_908836_efu9flurzmg.css);
@import './details.scss';
</style>
