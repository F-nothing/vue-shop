<template>
    <div>
        <heade :titlee=title></heade>
        <div class="wrapper">
            <!--待支付-->
            <div class="order_state">
                <div class="icon state_time"></div>
                <div class="state_cont">
                    <div class="state_txt">
                        <span class="desc">待支付</span>
                        <span class="timeLeft">支付剩余23时07分</span>
                    </div>
                    <div class="status_price">应付金额：¥ 44.90</div>
                </div>
            </div>
            <!--收货地址-->
            <div class="order_wuliu order_state" style="margin-top: 15px;">
                <div class="icon state_time" style="background-position: -65px -22px;"></div>
                <div class="state_cont">
                    <div class="state_txt">
                        <span class="desc">阚 176****4090</span>
                    </div>
                    <div class="status_price">湖北孝感市安陆市东城经济开发区林语花都东区4栋1单元</div>
                </div>
            </div>
            <!--商品卡片信息-->
            <div class="shops">
                <div class="order_goods">
                    <div data-id="shop" class="order_shopBar shop_jd">
                        <span class="shop_icon"></span>
                        <div class="shop_name">京东</div>
                        <span class="shop_desc">共计 1 件商品</span>
                    </div>
                    <div class="order_good">
                        <div class="good_item">
                            <div class="good_cover">
                                <div>
                                    <img src="//img10.360buyimg.com/n2/jfs/t24715/338/1931999861/138965/287ecdfa/5bc05586Nec843118.jpg!q70.dpg">
                                </div>
                            </div>
                            <div class="good_cont">
                                <div class="good_info">
                                    <div class="good_name oneline">
                                        闪迪 （SanDisk）16GB USB3.0 U盘 CZ73酷铄 银色 读速130MB/s 金属外壳 内含安全加密软件</div>
                                    <span class="sku_coll">酷铄金属(USB3.0)，16GB</span>
                                </div>
                                <div class="info_price">
                                    <span class="price">¥<span class="price_yuan">36</span>.90</span><span class="count">x1</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--订单信息-->
            <div class="order_summary">
                <div class="inner_line"><span class="title">订单编号：</span>
                    <div class="content"><!---->86401700047<!----> <!----> <!----></div>
                </div>
                <div class="inner_line"><span class="title">下单时间：</span>
                    <div class="content"><!---->86401700047<!----> <!----> <!----></div>
                </div>
                <div class="inner_line"><span class="title">商品金额：</span>
                    <div class="content"><!---->86401700047<!----> <!----> <!----></div>
                </div>
                <div class="inner_line"><span class="title">配送方式：</span>
                    <div class="content"><!---->86401700047<!----> <!----> <!----></div>
                </div>
            </div>
            <!--支付金额-->
            <div class="order_total">
                <div>
                    <div class="total_item">商品总额
                        <span class="price">¥ 36.90</span>
                    </div>
                    <div class="total_item">运费
                        <span class="total_icon"></span>
                        <span class="price">+ ¥ 8.00</span>
                    </div>
                    <div class="total">应付金额
                        <span class="price_tip">¥ 44.90</span>
                    </div>
                </div>
            </div>
            <!--去下单-->
            <div class="order_btn fixed_btn">
                <div data-event-name="onPay" data-code="pay" class="oh_btn bg_red">去支付</div>
                <div data-event-name="onBuyAgain" data-code="reOrder" class="oh_btn bg_border_red">重新下单</div>
                <div data-event-name="onCancelOrder" data-code="cancelOrder" class="oh_btn bg_write">取消订单</div>
            </div>
        </div>
    </div>
</template>
<script>
    import heade from '../../public/header/shop-header'
    export default {
        name: "details",
        data(){
            return{
                title:'订单详情'
            }
        },
        components:{
            heade
        },
        mounted() {

        },
        methods:{
          //获取当前订单信息
        }
    }
</script>
<style lang="scss" scoped>
.wrapper{
    .order_state{
        background-color: #fff;
        padding: 12px 10px;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        .state_time{
            background-position: -44px 0;
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            background-image: url(https://wq.360buyimg.com/fd/h5/wxsq_dev/order/images/sprite_detail_xcxv2@2x_1553f337.png);
            background-size: 82.5px 79px;
            background-repeat: no-repeat;
        }
        .state_cont{
            display: block;
            -webkit-flex: 1;
            -webkit-box-flex: 1;
            flex: 1;
            .state_txt{
                line-height: 21px;
                .desc{
                    font-family: PingFangSC-Semibold;
                    font-size: 16px;
                    font-weight: 400;
                    color: #e93b3d;
                }
                .timeLeft{
                    float: right;
                    color: #333;
                }
            }
            .status_price{
                color: #333;
            }

        }
    }
    /*订单商品*/
    .shops{
        .order_goods{
            overflow: hidden;
            margin-top: 15px;
            background-color: #fff;
            .order_shopBar{
                padding: 11px 10px;
                font-size: 16px;
                line-height: 24px;
                color: #333;
                position: relative;
                .shop_icon{
                    background-position: -22px -44px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 5px;
                    margin-top: -3px;
                    background-image: url(https://wq.360buyimg.com/fd/h5/wxsq_dev/order/images/sprite_detail_xcxv2@2x_1553f337.png);
                    background-size: 82.5px 79px;
                    width: 16px;
                    height: 16px;

                }
                .shop_name{
                    display: inline-block;
                }
                .shop_desc{
                    float: right;
                    display: inline-block;
                    font-size: 12px;
                    font-weight: 400;
                    vertical-align: center;
                    color: #999;

                }
            }
            .order_good{
                position: relative;
                overflow: hidden;
                .good_item{
                    padding: 10px;
                    display: flex;
                    .good_cont{
                        padding-left: 10px;
                        overflow: hidden;
                        .good_info{
                            overflow: hidden;
                            min-height: 40px;
                            -webkit-box-orient: vertical;
                            -webkit-box-direction: normal;
                            -webkit-flex-direction: column;
                            flex-direction: column;
                            .good_name{
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 1;
                                -webkit-box-orient: vertical;
                                font-size: 14px;
                                line-height: 21px;
                                color: #333;
                                word-break: break-all;
                                margin-bottom: 10px;
                            }
                            .sku_coll{
                                font-size: 12px;
                                line-height: 18px;
                                color: #999;
                                padding-bottom: 10px;
                            }
                        }
                        .info_price{
                            margin-top: 10px;
                            .price{
                                color: #e93b3d;
                                font-size: 16px;
                            }
                            .count{
                                color: #999;
                                float: right;
                            }
                        }
                    }
                }
            }
        }

    }
    /*订单信息*/
    .order_summary{
        padding: 12px 10px;
        overflow: hidden;
        margin-top: 15px;
        background-color: #fff;
        .inner_line{
            padding-top: 3px;
            font-size: 14px;
            line-height: 21px;
            position: relative;
            display: -webkit-flex;
            display: -webkit-box;
            display: flex;
            .title{
                min-width: 70px;
                color: #999;
            }
            .content{
                width: 100%;
                color: #151515;
            }
        }

    }
    /*支付金额*/
    .order_total{
        background: #fff;
        overflow: hidden;
        position: relative;
        padding: 12px 10px;
        div > .total_item{
            line-height: 21px;
            color: #333;
            font-weight: 400;
            position: relative;
        }
        div > .price{
            float: right;
            color: #e93b3d;
        }
        .total{
            float: right;
            margin-top: 8px;
            font-size: 16px;
            line-height: 24px;
            color: #333;
            font-weight: 700;
        }

    }
    /*底部支付*/
    .order_btn{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 333;
        padding-right: 10px;
        display: flex;
        background: #fff;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
        .bg_red{
            background: #e93b3d;
            color: #fff;
            border: none;
        }
        .bg_border_red{
            color: #e93b3d;
            background: #fff;
            border: 1px solid #e93b3d;
        }
        .bg_write{
            background: #fff;
            border: 1px solid #ccc;

        }




        .oh_btn{
            text-align: center;
            width: 78px;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            margin: 10px 0 10px 10px;
            -webkit-flex-shrink: 0;
            flex-shrink: 0;
            box-sizing: border-box;
            position: relative;
        }




    }
}
</style>
