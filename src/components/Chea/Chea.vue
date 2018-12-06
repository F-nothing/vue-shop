<template>
    <div class="box">
        <!-- <xiala></xiala> -->
        <div class="cmdtylist" v-for="item in shop" :key="item.id">
            <!-- 店铺名称 -->
            <div class="head_wrap">
                <div class="headd shopheadJs selected">
                    <i class="icon_select iconfont icon-round"></i>
                    <i class="iconfont icon-bofangqishezhi"></i>
                    <span class="title oneline" name="京东自营">{{item.Shopname}}</span>
                </div>
            </div>
            <!-- 换购 满减 提示 -->
            <a class="head">
                <span class="tag">换购</span>
                <p>购满1件，可用优惠价换购商品</p>
                <span class="a_head_right_text">去换购></span>
            </a>
            <!-- 商品主体 -->
            <div class="item" v-for="shop in item.cartlist" :key="shop.id">
                <div class="goods">
                    <!-- 勾选图标 -->              
                    <i class="icon_select iconfont icon-gouxuan" :class="{'Checklist':shop.Selection}" @click="xuanzhong(shop)"></i>
                    <!-- 商品图片 -->
                    <img class="img" :src="shop.defaultPic">
                    <!-- 商品标题 -->
                    <div class="content" >
                        <router-link tag="div" to="/commodity" class="name">
                            <span class="proNameJs">{{shop.productName}}</span>
                        </router-link>
                        <div class="sku">2kg/件，蓝盘 皮带</div>
                        <div class="gooda-line">
                            <p class="picae"><em class="int">{{shop.price | money}}</em></p>
                            <!-- 单价部分 -->
                            <div class="num_and_more">
                                <div class="mun-wap">
                                    <span  class="minus disabled iconfont icon-jiajianchengchu-1" @click="changMoney(shop,-1)"></span>
                                    <div class="input_wrap">
                                        <input class="num" type="number"  v-model="shop.count" >
                                       
                                    </div>
                                    <span class="plus minus  iconfont icon-jiajianchengchu-2" @click="changMoney(shop,1)"></span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <!-- 购物车商品结算容器 -->
        <div class="fixbare">
            <i class="icon_select iconfont icon-gouxuan" :class="{'Checklis':is}" @click="hand()">
                全选
            </i>
        <div class="total">
            <p>
                总计：
                <strong>￥{{ totalPrice }}</strong>
                <small>
                    <span id="totalBackMoney">总额¥{{ totalPrice }}立减¥0.00</span>
                </small>
            </p>
            <router-link to="/p" tag="div" class="buy buyJs">去结算
                <em>{{count}}件</em>
            </router-link>
        </div>
    </div>
    <Navbar></Navbar>
    </div> 
</template>
<script>
import Navbar from '../Navbar'
export default {
    components:{
        Navbar
    },
    data(){
        return{  
            is:false,    
            shop:[
                {
                    Shopname:"京东自营",
                    "cartlist": [
                    {
                        "id": 1,
                        "shopId": 1,
                        "shopName": "京东自营",
                        "defaultPic": "https://img30.360buyimg.com/popWareDetail/jfs/t3208/194/7616404169/244198/369625db/58b7d093N03520fb7.jpg",
                        "productId": 1,
                        "productName": "三只松鼠_零食大礼包",
                        "color": "黑色",
                        "size": "18L",
                        "price": 20,
                        "count":1,
                        //是否选中
                        "Selection":false
                    },
                    {
                        "id": 2,
                        "shopId": 1,
                        "shopName": "京东自营",
                        "defaultPic": "https://img14.360buyimg.com/n0/jfs/t2971/15/167732091/93002/204c1016/574d9d9aNe4e6fa7a.jpg",
                        "productId": 2,
                        "productName": "小米心跳手环",
                        "color": "白色",
                        "size": "20XXL",
                        "price": 148,
                        "count": 1,
                        "Selection":false
                    }
                    
                    ]

                },
                
                
            ]   
        }
    },

    methods:{
        //商品数量叠加
        changMoney:function(shop,way){
            if(way>0){
                shop.count++
            }else{
                item.count--
                if(item.count<1){
                    item.count=1
                    
                }
            }
        },
        //单个选中
        xuanzhong:function(shop){
                if(shop.Selection){
                    shop.Selection = false
                }else{
                    shop.Selection = true

                }
        }, 
        //全选函数
        hand:function(){
            if(this.is == false){
                this.is = true
                for(var i = 0 ; i< this.shop[0].cartlist.length; i++){
                    this.shop[0].cartlist[i].Selection = true
                }
            }else{
                this.is = false
                for(var i = 0 ; i< this.shop[0].cartlist.length; i++){
                    this.shop[0].cartlist[i].Selection = false
                }
            }         
        }
    },
    computed:{
        // 金额结算
        totalPrice:function(){
            var item = this.shop[0]
            var totalPrice=0;
            for(var i = 0 ; i < item.cartlist.length ; i ++ ){
                totalPrice += item.cartlist[i].price*item.cartlist[i].count
                //把没有选中的值    减掉
                if(item.cartlist[i].Selection == false ){
                    totalPrice = totalPrice - item.cartlist[i].price*item.cartlist[i].count
                }
            }
            return totalPrice;
        },

        count:function(){

        }
    }
}
</script>
<style lang='stylus' scoped>
@import './Chea.stylus';                    
</style>
