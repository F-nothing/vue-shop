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
         },
        AddOrder(shop){
            this.$router.push({path: '/placeorder' ,query:{id:[shop._id]} });
        }
    },
}
</script>
<style lang='scss' scoped>
@import url(//at.alicdn.com/t/font_908836_efu9flurzmg.css);
.header{
    position:fixed;
    height:45px;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #0a0d20;
    color: #fcfcfc;
    z-index: 101;

    .header-left{
        width: 40px;
        height: 44px;
        position: absolute;
        span{
            margin: 12px 0 0 10px;
            line-height: 44px;
        }
        span::before{
            font-size:22px;
        }
    }
    .header-congtcoll{
        height: 44px;
        font-size: 16px;
        line-height: 44px;
        color: #fcfcfc;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 70px;
        display: flex;
        a{
            -webkit-box-flex: 1;
            font-size: 14px;
            -webkit-flex: 1;
            flex: 1;
            text-align: center;
        }

    }
    .header-right{
        width: 40px;
        height: 44px;
        position: absolute;
        top: 0;
        right: 0;
        span{
            margin: 12px 0 0 10px;
            line-height: 44px;
        }
        span::before{
            font-size:22px;
        }
    }
}
.mod_slider{
    margin-top: 45px;
    .swiper{
        img{
            width: 100%;
            height: 380px;

        }
    }
}
.buy_area{
    padding-top: 12px;
    padding-bottom: 10px;
    position: relative;
    padding: 15px 10px;
    background: #fcfcfc;
    font-size: 12px;
    .priceWrap{
        padding-left: 10px;
        .price{
            font-size: 22px;
            color: red;
            font-weight: 700;
            font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
        }
    }
    .fn_goods_name{
        margin-top: 10px;
        font-size: 18px;
        font-weight: 400;
        .mod_tag_big img{
            height: 15px;
        }
    }
    .favourr{
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 5px;
        padding-top: 20px;
        font-size: 10px;
        height: 10px;
        width: 50px;
        color: #333;
        text-align: center;
    }
    .favourr::after{
        content:"";
        position: absolute;
        background-size: 100px 100px;
        top: 0;
        left: 15px;
        width: 22px;
        height: 21px;
        background-size: 100px 100px;
        background-position: -50px -3px;
        background-image: url(//wq.360buyimg.com/fd/h5/wxsq_dev/detail/images/cart_sprits_all_54ae802c.png)
    }
}
.de_btn_bar{
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    background: #FFFFFF;
    .icon_btn{
        width:14%;
        text-align: center;
        display: block;
        height: 50px;
        position: relative;
        color: #666;
        .iconfont{
            height: 25px;
            display: block;
            position: relative;
        }
        .iconfont::before{
            font-size: 35px;
        }
        span{
            font-size: 14px;
            text-align: center;
            line-height: 30px;
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
