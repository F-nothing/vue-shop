<template>
<<<<<<< HEAD
    <div class="box">
        <!--头部导航-->
        <Mhader style="width: 100%"  :class="{ active: isActive } ">
            <div class="header" :class="{ headeractive: isActive } ">
                <div class="header-congtcoll">
                    <li><span>商品</span></li>
                    <li><span>评价</span></li>
                    <li><span>详情</span></li>
                    <li><span>推荐</span></li>
=======
    <div class="b   ox">
        <!--头部导航-->
        <Mhader style="opacity: 0.8;position: absolute;width: 100%">
            <div class="header">
                <div class="header-congtcoll">
                    <a><span>商品</span></a>
                    <a><span>评价</span></a>
                    <a><span>详情</span></a>
                    <a><span>推荐</span></a>
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                </div>
            </div>
        </Mhader>
        <!--商品主图-->
        <div class="mod_slider">
            <swiper class="swiper">
                <swiper-slide >
<<<<<<< HEAD
                    <img class="img"  src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/16130/39/12690/305219/5caac12aEbb843fa5/ce6c1dee969fb626.jpg!q80.dpg.webp">
=======
                    <img class="img"  :src="shop.shop_img">
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                </swiper-slide>
            </swiper>
        </div>
        <div class="buy_area">
            <div class="priceWrap">
<<<<<<< HEAD
                <span class="price large_size" id="priceSale">¥ 3299.00</span>
                <a class="favourr"></a>
=======
                <span class="price large_size" id="priceSale">¥{{shop.checked}}</span>
                <a class="favourr">关注</a>
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
            </div>

            <div class="fn_wrap">
                <h1 class="fn fn_goods_name">
                    <div class="fn_text_wrap">
                        <i class="mod_tag mod_tag_big"></i>
<<<<<<< HEAD
                        小米9 4800万超广角三摄 8GB+128GB全息幻彩蓝 骁龙855 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机
=======
                        {{shop.shop_name}}
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
                    <span id="skuChoose1">（6G+128G）星云渐变,1个</span>
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
<<<<<<< HEAD
=======
        <div class="">
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
=======
        </div>
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        <popup
                :isShow='isShow'
                ref="main"
                id="popup"
                v-on:on-result-change="onResultChange">
        </popup>
<<<<<<< HEAD
        <!--详情-->
        <div style="width: 100%">
            <!-- 视频播放器 -->
            <img style="width:100%;max-width: 640px;margin: 0 auto"
                 src="https://img20.360buyimg.com/vc/jfs/t22723/170/2314708222/3557070/68ef7f44/5b7bc247N894c9b7b.jpg!q70.dpg">
        </div>
=======




        <!--商品详情介绍-->

        <!-- 商品介绍 -->

        <!-- 商品参数 -->
        <!--售后保障-->


        <!-- 视频播放器 -->
        <video controls="controls" style="width: 100%;height: 100%;background: #000;" preload="none" webkit-playsinline="true" playsinline="" src="https://jdvodoss.jcloudcache.com/vodtransgzp1251412368/5285890781127343430/v.f20.mp4?dockingId=5b2c355b-61c3-4fc5-8ffb-7b6e9fc97937&storageSource=3">暂时不支持播放该视频</video>



        <img src="https://img20.360buyimg.com/vc/jfs/t22723/170/2314708222/3557070/68ef7f44/5b7bc247N894c9b7b.jpg!q70.dpg">=
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
        data:false,
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
=======
        data:false
    },




>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
    data(){
        return{
            isShow:false,
            shop:[],
<<<<<<< HEAD
            shopfrom:[],
            isActive:false,
            Player: null

=======
            shopfrom:[]
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        }
    },
    created(){
        //获取商品id
        var id = this.$route.query.id;
        shoplist_id({id:id}).then((response)=>{
            this.shop = response.data[0]
        })
    },
    methods:{
<<<<<<< HEAD
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>45){
                this.isActive = true
            }else {
                this.isActive =false
            }
        },
=======
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
@import "../../../public/INDEX.css";
.active{
    display: block;
    top: 0;
    background-color: #ffffff;
    z-index: 9999;
}
.cname{
    position:fixed;
    .header{
        height:45px;
        margin-bottom:45px;
        opacity: 0;
        .header-congtcoll{
            @include line(44px,44px,44px);
            @include text_hidden();
            color: #fcfcfc;
            margin: 0 40px;
            display: flex;
            li{
                color: #0a0d20;
                font-weight: 700;
                -webkit-box-flex: 1;
                font-size: 14px;
                -webkit-flex: 1;
                flex: 1;
            }
        }
    }
    .headeractive{
        opacity: 1;
    }
}
.mod_slider{
    width: 375px;
    height: 375px;
    margin: 0 auto;
}
.buy_area{
    position: relative;
    padding: 10px 10px;
    background: #fcfcfc;
    font-family: PF;
    font-size: 12px;
    font-weight: bold;
    .priceWrap{
        .price{
            font-size: 22px;
=======
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
    padding: vw(10) vw(10);
    background: #fcfcfc;
    font-size: vw(12);
    .priceWrap{
        .price{
            font-size: vw(22);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
            color: red;
        }
    }
    .fn_goods_name{
<<<<<<< HEAD
        margin-top: 10px;
        font-size: 18px;
        font-weight: 400;
        .fn_text_wrap{
            font-family: PF;
            font-size:16px;
=======
        margin-top: vw(10);
        font-size: vw(18);
        font-weight: 400;
        .fn_text_wrap{
            font-size:16px;
            font-weight: bold;
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        }

    }
    .favourr{
        position: absolute;
        top: 0;
        right: 0;
<<<<<<< HEAD
        margin-top: 15px;
        padding-top: 20px;
        font-size: 10px;
        height: 10px;
        width: 50px;
=======
        margin-top: vw(15);
        padding-top: vw(20);
        font-size: vw(10);
        height: vw(10);
        width: vw(50);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        color: #333;
        text-align: center;
    }
    .favourr::after{
        content:"";
        position: absolute;
<<<<<<< HEAD
        background-size:100px 100px;
        top: 0;
        left: 15px;
        width: 22px;
        height: 21px;
=======
        background-size: vw(100) vw(100);
        top: 0;
        left: vw(15);
        width: vw(22);
        height: vw(21);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
    height: 50px;
=======
    height: vw(50);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
    display: flex;
    background: #FFFFFF;
    .icon_btn{
        width:14%;
        text-align: center;
        display: block;
<<<<<<< HEAD
        height: 50px;
        position: relative;
        color: #666;
        .iconfont{
            height: 25px;
=======
        height: vw(50);
        position: relative;
        color: #666;
        .iconfont{
            height: vw(25);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
            display: block;
            position: relative;
        }
        .iconfont::before{
<<<<<<< HEAD
            font-size: 35px;
        }
        span{
            font-size: 14px;
            text-align: center;
            line-height: 30px;
=======
            font-size: vw(35);
        }
        span{
            font-size: vw(14);
            text-align: center;
            line-height: vw(30);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
                font-size: 12px;
<<<<<<< HEAD
                top: 2px;
=======
                top: vw(2);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                width: 40px;
                left: 0;
            }
            span{
<<<<<<< HEAD
                font-size: 14px;
=======
                font-size: vw(14);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                color: #333;
                font-weight: 700;
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
