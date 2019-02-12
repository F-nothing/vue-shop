<template>
    <div class="box">

        <!--头部导航-->
        <Mhader>
            <div class="header">
                <div class="header-congtcoll">
                    <a><span>商品</span></a>
                    <a><span>评价</span></a>
                    <a><span>详情</span></a>
                    <a><span>推荐</span></a>
                </div>
            </div>
        </Mhader>
        <!--商品主图-->
        <div class="mod_slider">
            <swiper class="swiper">
                <swiper-slide >
                    <img class="img"  :src="shop.shop_img">
                </swiper-slide>
            </swiper>
        </div>
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
            <!-- SKU属性弹窗折叠 -->
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
        <!--加入购物车 立即购买-->
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
        <popup
                :isShow='isShow'
                ref="main"
                id="popup"
                v-on:on-result-change="onResultChange">
        </popup>




        <!--商品详情介绍-->

        <!-- 商品介绍 -->

        <!-- 商品参数 -->
        <!--售后保障-->
        <video controls="controls" style="" preload="none" webkit-playsinline="true" playsinline="" src="https://jdvodoss.jcloudcache.com/vodtransgzp1251412368/7447398157111835018/v.f20.mp4?dockingId=2d164af0-8bf5-4784-95c9-f3d0fc91d731&amp;storageSource=3">暂时不支持播放该视频</video>

        <img src="https://img20.360buyimg.com/vc/jfs/t22723/170/2314708222/3557070/68ef7f44/5b7bc247N894c9b7b.jpg!q70.dpg">=
    </div>
</template>
<script>
import popup from '../public/Popup/Popup'
import {joinched,shoplist_id} from '../../api/apilist'
import Mhader from '@/components/public/header/shop-header'
export default {
    components:{
        popup,
        Mhader,
        data:false
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
        shoplist_id({id:id}).then((response)=>{
            this.shop = response.docs[0]
        })
    },
    methods:{
        click(){
            this.isShow = true;
        },
        onResultChange(val){
            this.isShow=val;
        },
        //加入购物车
         async Addcart(){
            this.shopfrom._id =this.shop._id;
            await joinched(this.shopfrom);
         },
        AddOrder(shop){
            this.$router.push({path: '/placeorder' ,query:{id:[shop._id]} });
        }
    },
}
</script>
<style lang='scss' scoped>
@import url(//at.alicdn.com/t/font_908836_efu9flurzmg.css);
@import "../../style/index";
@import "../../style/mimin";
.header{
    height:vw(45);
    .header-congtcoll{
        @include line(vw(44),vw(44),vw(16));
        @include text_hidden();
        color: #fcfcfc;
        margin: 0 vw(70);
        display: flex;
        a{
            color: #0a0d20;
            font-weight: 700;
            -webkit-box-flex: 1;
            font-size: vw(14);
            -webkit-flex: 1;
            flex: 1;
            text-align: center;
        }
    }
}
.buy_area{
    position: relative;
    padding: vw(15) vw(10);
    background: #fcfcfc;
    font-size: vw(12);
    .priceWrap{
        padding-left: vw(10);
        .price{
            font-size: vw(22);
            color: red;
        }
    }
    .fn_goods_name{
        margin-top: vw(10);
        font-size: vw(18);
        font-weight: 400;
        .mod_tag_big img{
            height: vw(15);
        }
    }
    .favourr{
        position: absolute;
        top: 0;
        right: 0;
        margin-top: vw(15);
        padding-top: vw(20);
        font-size: vw(10);
        height: vw(10);
        width: vw(50);
        color: #333;
        text-align: center;
    }
    .favourr::after{
        content:"";
        position: absolute;
        background-size: vw(100) vw(100);
        top: 0;
        left: vw(15);
        width: vw(22);
        height: vw(21);
        background-position: vw(-50) vw(-3);
        background-image: url(//wq.360buyimg.com/fd/h5/wxsq_dev/detail/images/cart_sprits_all_54ae802c.png)
    }
}
.de_btn_bar{
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;
    width: 100%;
    height: vw(50);
    display: flex;
    background: #FFFFFF;
    .icon_btn{
        width:14%;
        text-align: center;
        display: block;
        height: vw(50);
        position: relative;
        color: #666;
        .iconfont{
            height: vw(25);
            display: block;
            position: relative;
        }
        .iconfont::before{
            font-size: vw(35);
        }
        span{
            font-size: vw(14);
            text-align: center;
            line-height: vw(30);
        }
    }
    .de_span{
        flex: 1;
        .de_row{
            display: flex;
            text-align: center;
            .btn{
                line-height: 50px;
                font-size: 14px;
                color: #fff;
                text-align: center;
                flex: 1;
            }
            .btn_orange{
                background: #ff9600;
            }
            .btn_buy{
                background: #e4393c;

            }
        }
    }



}
.favour{
    .detail_gap{
        padding-top: 10px;
        background: #e8e8ed;
        margin: -1px 0;
    }
    .sku_window{
        padding: 14px 0 14px 10px;
        background-color: #fff;
        font-size: 14px;
        color: #999;
        .sku_choose_info{
            position: relative;
            padding: 0 20px 0 35px;
            h3{
                position: absolute;
                width: 40px;
                left: 0;
            }
            span{
                font-size: 14px;
                color: #333;
            }
        }
        .sku_choose_info:after{
            float: right;
            font-family: "iconfont" !important;
            font-size: 20px;
            line-height: 20px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            content: "\e684";
        }

    }

}
</style>
