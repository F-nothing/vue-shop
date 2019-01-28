<template>
    <!--提交订单-->
    <div class="wx_wrap">
        <!--头部导航-->
        <div>
            <mheade :titlee='title'></mheade>
        </div>
        <!--收获地区-->
        <div class="address_defalut_wrap">
            <div class="address_defalut_border">
                <ul>
                    <li>
                        <strong>阚 176****4090</strong>
                    </li>
                    <li>  湖北孝感市安陆市东城经济开发区林语花都东区4栋1单元 </li>
                </ul>

            </div>
        </div>

        <!--商品信息-->
        <div class="venderOrderList">
            <!--报单-->
            <div class="order_info">
                <!--店铺名称-->
                <div class="order_shopBar">
                    <i class="order_shopBar_shop"></i>
                    <span class="pop_vname">哇吲箱包官方旗舰店</span>
                </div>
                <!-- 商品卡片列表 -->
                <div class="venderList" >
                    <ul>
                        <li class="hproduct noclick" v-for="item in data">
                            <img class="photo" src="//img10.360buyimg.com/mobilecms/s117x117_jfs/t1/3769/36/7566/156186/5ba61252E13c87407/4e6d08cfa3665c23.jpg!q70.dpg.webp" >
                            <div class="fn">                                                                                                                        <strong>{{item.goods_id.shop_name}}</strong>
                            </div>
                            <p class="sku_coll">灰色海绵肩带</p>
                            <p class="sku_price">¥<span>{{item.goods_id.checked}}</span></p>


                            <div style="float: right;" class="sku" >
                                <div class="sku_num" style="line-height: 30px;
    color: #999;
    font-size: 12px;">×{{item.goods_num}}</div>
                            </div>


                            <ul class="order_info_tips">
                                <li>
                                    <img class="icon_optional" src="//img11.360buyimg.com/jdphoto/s30x30_jfs/t26866/245/112279834/912/e70ec77a/5b863013Ne69c7156.png">支持7天无理由退货</li>
                                <li>
                                    <img class="icon_optional pricetip" src="//img11.360buyimg.com/jdphoto/s30x30_jfs/t26866/245/112279834/912/e70ec77a/5b863013Ne69c7156.png">价格说明
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!--店铺备注-->
                <div class="buy_msg_v2">

                </div>
            </div>

        </div>



        <!--支付信息-->
        <div class="buy_section">
            <ul class="buy_chart">
                <li>
                    <p class="buy_chart_item_text">商品金额</p>
                    <p class="buy_chart_item_price">¥&nbsp;{{sum}}.00</p>
                </li>
                <li class="buy_chart_item">
                    <p class="buy_chart_item_text">运费<small class="buy_chart_item_tip"> </small></p>
                    <p class="buy_chart_item_price">+&nbsp;¥0.00</p> </li>
            </ul>
            <div class="payArea">
                <p class="price">总价：<strong id="pageTotalPrice" >¥{{sum}}.00</strong>  </p>

                <div class="payBtnList">
                    <a href="javascript:void(0);" @click="ConfirmOrder()" class="mod_btn bg_2">在线支付</a>
                </div>
            </div>
        </div>


        <!--底部-->
        <div class="qq_footer" style="">
            <div class="jd_logo" id="jdBtmLogo"></div>
            <!--<div class="qq_info">正品保障，极速发货。</div>-->
        </div>
    </div>
</template>
<script>
    import mheade from '../public/header/shop-header'
    import {Settlement} from '@/api/apilist'
    export default {
        name: "shopPlaceorder",
        components:{
            mheade

        },
        data(){
            return{
                title:'填写订单',
                chosenAddressId: '1',
                chosenContactId: null,
                editingContact: {},
                showList: false,
                showEdit: false,
                isEdit: false,
                list: [{
                    name: '张三',
                    tel: '13000000000',
                    id: 0
                }],
                imageURL:'//img10.360buyimg.com/mobilecms/s117x117_jfs/t1/3769/36/7566/156186/5ba61252E13c87407/4e6d08cfa3665c23.jpg!q70.dpg.webp',
                data:[],
                sum:''
            }
        },

        mounted(){
            this.OrderGoods();
        },

        methods:{
            //获取待提交商品数据
            async OrderGoods(){
                const Settl = await Settlement();

                this.data = Settl.docs;

                this.sum = Settl.sum


            }

        }


    }
</script>
<style lang="stylus" scoped>
    .wx_wrap
        .address_defalut_wrap
            position relative
            .address_defalut_border
                padding: 12px 10px;
        .venderOrderList
            .order_info
                margin-top: 15px;
                margin-bottom: 15px;
                padding: 0 10px;
                background: #fff;
                position: relative;
                .order_shopBar
                    display: block;
                    position: relative;
                    height: 40px;
                    line-height: 40px;
                    font-size: 16px;
                    font-weight: 700;
                .venderList
                    padding-bottom 5px
                    .hproduct
                        position: relative;
                        min-height: 75px;
                        padding: 0;
                        font-size: 12px;
                        padding-top: 15px;
                        .photo
                            width: 75px;
                            height: 75px;
                            position: absolute;
                            top: 15px;
                            left: 0;
                        .fn
                            padding-left: 85px;
                            line-height: 20px;
                            margin-bottom: 5px;
                            font-size: 14px;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        .sku_coll
                            padding-left: 85px;
                            margin-bottom: 6px;
                            font-size: 12px;
                            color: #999;
                            line-height: 1;
                        .sku_price
                            padding-left: 85px;
                            height: 30px;
                            line-height: 30px;
                            color: #e93b3d;
                            font-size: 16px;
                        .sku
                            margin-top -35px
                        .order_info_tips
                            margin: 6px 0;
                            padding-left: 85px;
                            overflow: hidden;
                            li
                                float: left;

                                font-size: 12px;
                                color: #999;
                                margin-right: 5px;
                                img
                                    display: inline-block;
                                    vertical-align: middle;
                                    width: 15px;
                                    height: 15px;
                                    margin: -2px 2px 0 0
        .buy_section
            background-color: #fff;
            padding 10px 0
            .buy_chart
                position: relative;
                padding: 10px;
                font-size: 14px;
                li
                    display flex
                    padding: 5px 0;
                    .buy_chart_item_text
                        -webkit-box-flex: 1;
                        -webkit-flex: 1;
                        flex: 1;
                        color: #333;
                    .buy_chart_item_price
                        color: #e93b3d;
        .payArea
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 20px;
            text-align right
            padding: 0 10px;
            strong
                color: #e93b3d;
                font-weight: 400;
        .payBtnList
            margin: 10px 0;
            padding 5px 0
            background: #fff;
            .mod_btn
                display: block;
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                flex: 1;
                min-width: 0;
                height: 46px;
                line-height: 46px;
                text-align: center;
                font-size: 16px;
                border-radius: 4px;
                position: relative;
            .bg_2
                background: #3884ff;
                color: #fff;

        .qq_footer
            margin: 25px 0 75px;
            .jd_logo
                display: block;
                width: 100px;
                height: 20px;
                margin: 0 auto;
                background url('download.png') no-repeat
                background-size: 100%;
</style>
