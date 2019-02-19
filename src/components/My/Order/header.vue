<template>
    <div class="myheader">
        <mheade :titlee='title'></mheade>
        <div class="page-wrap">
            <div class="fixed-top-wrap">
                <div class="fixed-top">
                    <ul>
                        <li>全部</li>
                        <li>待付款</li>
                        <li>待发货</li>
                        <li>待收货</li>
                        <li>待评价</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="body">
            <li class="item-card" v-for="item in order" :key="item.index">
                <div class="tpl-wrapper-header">
                    <div class="box">
                        <div class="box-left">
                            <img src="http://gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_200x200q85s150.jpg_.webp">
                            <span>多情爵士旗舰店</span>
                        </div>
                        <div class="box-right">
                            <span>等待买家付款</span>
                        </div>
                    </div>
                </div>
                <div class="tpl-wrapperr">
                    <div class="order-item">
                        <div class="order-itemInfo mui-flex" v-for="itemfor in item.goot_list" :key="itemfor.index">
                            <div class="cell fixed item-pic">
                                <div class="img-cell">
                                    <img src="//gw.alicdn.com/imgextra/i1/2219657390/O1CN0124SfOLhpUDDTHDF_!!2219657390.jpg_270x270q90.jpg">
                                </div>
                            </div>
                            <div class="content cell">
                                <div class="title">
                                    围巾女秋冬季韩版百搭学生软妹加厚毛线针织ins情侣款保暖围脖男
                                </div>
                                <div class="sku-info">
                                    颜色分类: 条纹 灰白
                                </div>

                                <div class="icon-main mui-flex align-center">
                                    <div class="item-icon-tip">七天退换</div>
                                </div>
                            </div>
                            <div class="ext cell fixed item-pay">
                                <div class="price">
                                    <span class="dollar">￥19.80</span>
                                </div>
                                <div class="quantity">
                                    x 1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tpl-wrapper">
                    <div class="tpl-wrapper-c">
                        <div class="border"></div>
                        <div class="flex">
                            <div class="box">
                                <span>更多</span>
                            </div>
                            <div class="box">
                                <span>查看物流</span>
                            </div>
                            <div class="box">
                                <span>确认收货</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

        </div>
    </div>
</template>
<script>
    import mheade from '../../public/header/shop-header.vue'
    import {getPaymey} from '@/api/apilist'
    export default {
        name: "",
        components: {
            mheade
        },
        data() {
            return {
                title: '我的订单',
                order:[]
            }
        },
        mounted() {
            this.getPaymey()

        },

        methods: {
            async getPaymey() {
                const order = await getPaymey();
                this.order = order.docs

            }
        }
    }
</script>
<style lang='scss' scoped>
    @import "../../../style/index";
    .myheader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .page-wrap {
            .fixed-top-wrap {
                display: flex;
                top: 0;
                left: 0;
                width: 100%;
                ul {
                    display: flex;
                    background: #fcfcfc;
                    font-size: vw(14);
                    li{
                        border-bottom: 2px solid #ff5000;
                        flex: 1;
                        text-align: center;
                        @include line(vw(40), vw(40));
                    }

                }
                div {
                    flex: 1;
                    text-align: center;
                    @include line(vw(40), vw(40));
                }
                .router-link-active{
                    color: red;
                    border-bottom: 2px solid red;
                }
            }
        }
        .item-card {
            margin: vw(10);
            padding: vw(10);
            background: #fff;
            border-radius:vw(8);
            .tpl-wrapper-header {
                .box {
                    display: flex;
                    width: 100%;
                    .box-left {
                        margin-top: vw(10);
                        margin-bottom: vw(10);
                        img {
                            width: vw(15);
                            height: vw(15);
                            margin-left: vw(12);
                            float: left;
                            margin-top: vw(2);
                        }
                        span {
                            font-size: vw(12);
                            margin-left: vw(5);
                            max-width:vw(155);
                        }
                    }
                    .box-right {
                        -webkit-box-flex: 1;
                        flex: 1 1 0;
                        margin: vw(5) 0;
                        justify-content: flex-end;
                        -webkit-box-align: center;
                        align-items: center;
                        span {
                            font-size: vw(12);
                            float: right;
                            color: rgb(255, 80, 0);
                        }
                    }
                }
            }
            .tpl-wrapperr {
                padding: 0 vw(10);
                .order-item {
                    .order-itemInfo {
                        padding: 1px 2px;
                        display: flex;
                        .item-pic {
                            .img-cell {
                                width: vw(92) !important;
                                height: vw(92);
                                flex: 1;
                                margin-right: 9px;
                                img {
                                    width: vw(92);
                                    height: vw(92);
                                    border-radius: vw(10)
                                }
                            }
                        }
                        .content {
                            .title {
                                color: #666;
                                font-size: vw(12);
                            }
                            .sku-info {
                                font-size: vw(12);
                                margin-top: vw(5);
                            }
                            .icon-main {
                                font-size: vw(12);
                                color: #f50;
                                margin-top: vw(5);
                            }
                            .item-pay {
                                margin-left: vw(10);
                                .price {
                                    color: #f50;
                                    font-size: 16px;
                                    font-weight: bolder;
                                }
                            }
                        }
                    }

                }



            }
            .tpl-wrapper {
                .tpl-wrapper-c {
                    display: flex;
                    width: 100%;
                    border-top: vw(1) solid red;
                    margin-top: 10px;
                    .flex {
                        display: flex;
                        margin: 9px 0;
                        padding: 1px 0;
                        div {
                            border-radius: 15px;
                            text-align: center;
                            @include line(vw(23), vw(23));
                            width: vw(81);
                            color: rgb(102, 102, 102);
                            border: vw(1) solid rgb(102, 102, 102);
                        }
                    }
                }
            }

        }
    }
</style>
