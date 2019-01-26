<template>
    <div class="box">
        <mheade :titlee="title"></mheade>
         <!--购物车商品列表容器 #list-->
        <div class="cmdtylist" style="height: 100vh">
            <div class="section"  v-for="item in shop" :key="item.id">
                <!--<div class="head_wrap">-->
                    <!--<div class="headd shopheadJs selected">-->
                        <!--<i class="icon_select"></i>-->
                        <!--<i class="iconfont icon-bofangqishezhi"></i>-->
                        <!--<span class="title oneline" name="京东自营">{{item.Shopname}}</span>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="item">
                    <div class="goods">
                        <!--勾选-->
                        <i class="icon_select" @click="Checklist(item)"></i>
                        <img class="img" :src="item.shop_img">
                        <div class="content" >
                            <router-link tag="div" to="/commodity" class="name">
                                <span class="proNameJs">{{item.shop_name}}</span>
                            </router-link>
                                <!--<div class="sku">2kg/件，蓝盘 皮带</div>-->
                            <div class="gooda-line">
                                <p class="picae"><em class="int">{{item.checked}}</em></p>
                                    <!-- 单价部分 -->
                                <div class="num_and_more">
                                    <div class="mun-wap">
                                        <span  class="minus disabled iconfont icon-jiajianchengchu-1"></span>
                                        <div class="input_wrap">
                                            <input class="num" type="number"  v-model="item.count" >
                                        </div>
                                        <span class="plus minus  iconfont icon-jiajianchengchu-2"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 购物车商品结算容器 -->
        <div class="fixbare">
            <i class="icon_select iconfont icon-gouxuan">
                全选
            </i>
        <div class="total">
            <p>
                总计：
                <strong>￥{{  }}</strong>
                <small>
                    <span id="totalBackMoney">总额¥{{  }}立减¥0.00</span>
                </small>
            </p>
            <router-link to="/placeorder" tag="div" class="buy buyJs">去结算
                <em>{{}}件</em>
            </router-link>
        </div>
    </div>


        <Navbar></Navbar>
    </div>
</template>
<script>
import mheade from '../public/header/shop-header'
import Navbar from '../Navbar'
import {chedfind,shoplist_id,Checklist} from '../../api/apilist'
export default {
    components:{
        mheade,
        Navbar

    },
    data(){
        return{
            is:false,
            title:'购物车',
            shopdata:[],//购物车原始数据
            shop:[]  //购物车数据
        }
    },

    created:function () {
        this.chedfind()
    },


    methods:{
        //获取购物车数据
        chedfind(){
            chedfind().then((resolve)=>{
                var datalist = resolve.docs;
                //获取每条数据对应的商品id

                this.shopdata = datalist;


                for (var i= 0 ; i<datalist.length;i++){
                    //把每条商品id 添加上shop数组
                    // this.shop.push(datalist[i].goods_id);
                    //根据商品id获取对应商品
                    shoplist_id({id:datalist[i].goods_id}).then((resolve)=>{
                        //获取到商品数据添加到购物车数据
                        this.shop.push(resolve.docs[0])


                    })

                }

            });
        },




        //确定勾选
        Checklist(item){

            // 遍历当前商品是那个购物车的

            console.log(item)

            //向服务器发送勾选商品



            // Checklist().then((resolve=>{
            //
            //
            // }))

        }





    }








}
</script>
<style lang='stylus' scoped>
    @import url(//at.alicdn.com/t/font_908836_u1pqixh7ok.css);
    .head_wrap
        border-top  1px solid #e5e5e5;
        border-bottom  1px solid #e5e5e5;
        background-color #fff
        position: relative;
        .headd
            box-sizing: border-box;
            display: flex;
            position: relative;
            padding 0px 10px 0px 40px
            .icon_select
                position: absolute;
                top: 0;
                left: 0;
                width: 42px;
                height: 100%;


            .icon_select:after
                position: absolute;
                top 50%
                background-size: 20px;
                margin-left: -10px;

                content: "";
                display: block;
                width: 20px;
                height: 20px;
                background-image url("Selection.png")
            .oneline
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 16px;
                font-weight: 700;
                line-height 40px
                width: 100%;
    .head
        font-size 12px
        display flex
        padding 10px 10px 10px 30px
        .tag
            background: #e4393c;
            color: #fff;
            padding: 0 5px;
            height: 15px;
            line-height: 15px;
            background-color: red;
            text-align: center;
            border-radius: 10px;
        p
            flex: 1;
            width 100%
            box-sizing: border-box;
            display: inline-block;
            height: 15px;
            line-height: 15px;
            padding-right: 20px;
            padding-left 5px
            overflow hidden
            text-overflow:ellipsis;
            white-space: nowrap;
        .a_head_right_text
            float right
            color red
    .section
        padding 5px
        .item
            position relative
            background: #fff
            width: 100%;
            .goods
                padding: 5px 10px 50px 128px;
                .icon_select:after
                    position: absolute;
                    top: 35px;
                    left: 21px;
                    content: "";
                    margin-left: -10px;
                    display: block;
                    width: 20px;
                    height: 20px;
                    background-image url("download.png")
                    background-size: 20px;
                .icon_select
                    display block
                    position: absolute;
                    left: 0;
                    width: 42px;
                    height: 100px;
                .img
                    position absolute
                    left: 43px;
                    top: 5px;
                    display: block;
                    width: 75px;
                    height: 75px;
                .content
                    font-size: 14px;
                    margin-bottom: 5px;

                    .name
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    .gooda-line
                        position: relative;
                        line-height 30px
                        font-style: normal
                        .picae
                            font-size: 16px;
                            line-height: 30px;
                            padding 15px 0
                            color: #e93b3d;
                            float left
                            font-style: normal
                            .int
                                font-style: normal
                        .num_and_more
                            background-color #FFFFFF
                            float: right
                            padding 13px 0
                            .mun-wap
                                position: relative;
                                display: block;
                                width: 113px;
                                border-radius: 4px;
                                overflow: hidden;
                                background-color: #f7f7f7;
                                .minus
                                    position: relative;
                                    float: left;
                                    width: 30px;
                                    height: 30px;
                                    line-height: 30px;
                                    text-align: center;
                                span
                                    float: left;
                                    position: relative;
                                    border-left: 1px solid #fff;
                                    border-right: 1px solid #fff;
                                .input_wrap
                                    float: left
                                    input
                                        width: 45px;
                                        border: none;
                                        background-color #F7F7F7
                                .plus
                                    float: right;
            .remove
                position: absolute;
                width 100px;
                width:200px;
                height:200px;
                background:red;
                right: 0;
                top: 0;
                color:#fff;
                text-align: center;
                font-size: 40px;
                line-height: 200px;
    .fixbare
        position: fixed;
        left 0
        right 0
        margin 0 auto
        bottom: 51px;
        height: 50px;
        background: hsla(0,0%,100%,.95);
        color: #333;
        font-size: 14px;
        z-index: 999;
        .icon_select
            width: 100px;
            display block
            text-align center
            height 50px
            line-height 50px
            color: #999;
        .icon_select::before
            position relative
            top 2px
            font-size 20px
        .Checklis
            color red
        .total
            position: absolute;
            top: 0;
            right: 0;
            p
                padding-top: 10px;
                float: left;
                font-weight: 700;
                line-height: 1em;
                height: 50px;
                text-align: right;
                font-size 16px
                strong
                    color: #e4393c;
                small
                    padding-top: 2px;
                    display: block;
                    font-size: 10px;
                    color: #999;
                    font-weight: 400;
            .buyJs
                float: right;
                display: block;
                width 110px
                height 50px
                line-height: 50px;
                font-size: 16px;
                text-align: center;
                font-weight: 700;
                background: #e4393c;
                color: #fff;
                margin-left 10px
                em
                    font-weight: 400;
                    font-size: 12px;
                    font-family: none;

</style>
