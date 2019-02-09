<template>
    <div class="js-ios8-plus" style="height: 100vh">
        <div>
            <mheade :titlee='titlee'></mheade>
        </div>


        <div class="order-bar-wrap">
            <div class="order-bar">
                <span class="JS-pay-tip pay-tip">需支付:</span>
                <span class="pay-total">
                        <strong class="JS-pay-total">¥239<em>.00</em></strong>
                    </span>
            </div>
        </div>

        <div class="JS-page-ct page-ct  position-change js-ios8-plus">
            <div class="JS-page-scorller">
                <h2 class="p-title-bar p-pay-title-bar" style="display: block;">
                    <span class="jdpay-tip"></span>
                </h2>




                <ul class="pay-list">
                    <li class="list-item">
                        <a class="pay-list-link">
                            <span class="pay-icon"></span>
                            <span class="title-main">微信支付</span>
                            <span class="title-vice">仅安装微信6.0.2 及以上版本客户端使用</span>
                        </a>
                    </li>
                </ul>

            </div>

        </div>


        <a href="javascript:void(0);" class="btn" style="display: inline;">微信支付 ¥239.00</a>
    </div>

</template>
<script>
    import mheade from '../public/header/shop-header'
    export default {
        name: "pay",
        components:{
            mheade
        },
        data(){
            return{
                titlee:'收银台'
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .order-bar-wrap
        .order-bar
            padding: 0 10px;
            height: 42px;
            background-color: #fff;
            text-align: right;
            color: #000;
            line-height: 42px;
            box-shadow: 0 0 0 0 rgba(0,0,0,.05), 0 14px 20px 0 rgba(0,0,0,.03);
    .position-change
        padding: 10px;
        .JS-page-scorller
            .p-title-bar
                background-color: #FFF;
                height: 36px;
                line-height: 33px;
                padding: 11px 0 2px;
                background-image: url(https://cdnpay.360buyimg.com/image/pay/home-icon-jdpay-e2b6eedabd0571463b47309f6df51816.png);
                background-repeat: no-repeat;
                background-size: 131px 30px;
                background-position: center left;
            .pay-list
                box-shadow: 0 2px 15px 0 rgba(0,0,0,.05), 0 14px 20px 0 rgba(0,0,0,.03);
                .list-item
                    height: 61px;
                    background-color: #fff;
                    .pay-list-link:before
                        position: absolute;
                        top: 50%;
                        margin-top: -10px;
                        content: "";

                        background-image url("../../images/logodownload.png")

                        width: 24px;
                        height: 24px;

                        background-size: 24px 24px;

                        right: 13px;




                    .pay-list-link
                        display block
                        position: relative;
                        overflow: hidden;
                        text-decoration: none;
                        height: 65px;
                        margin-left: 10px;

                        .pay-icon
                            background-position: 0 -93px;
                            background-image: url(https://cdnpay.360buyimg.com/image/pay/home-pay-icon-39d557c44d7afdb354da160af4ed0ff1.png);
                            background-repeat: no-repeat;
                            background-size: 100%;
                            float: left;
                            width: 23px;
                            height: 23px;
                            margin: 18px 18px 3px 5px;
                        .title-main
                            font-size: 14px;
                            color: #2E2D2D;
                            float: left
                            margin-top 10px
                        .title-vice
                            float: left
                            font-size: 12px;
                            width: 100%;
                            margin: -10px 0 0 45px;
                            color: #848484;



    .btn
        background: -webkit-linear-gradient(left,#F02F0F ,#F95C22);
        font-size: 15px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        height 50px
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;


</style>
