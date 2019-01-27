<template>
    <div>
        <div class="search_head">
            <div class="tsearchwrap">
                <van-search

                        v-model="value"
                        placeholder="请输入搜索关键词"
                        background="red"
                >

                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </div>
        </div>

        <div class="search_prolist_item">
            <!--<div class="search_prolist_item_inner J_ping" style="padding-top: 5px;position: relative;-->
    <!--padding-left: 120px;">-->
                <!--<div class="search_prolist_cover" style="position: absolute;-->
    <!--left: 0;-->
    <!--top: 0;-->
    <!--width: 120px;-->
    <!--height: 120px;-->
    <!--overflow: hidden;-->
<!--}">-->
                    <!--<img src="//img10.360buyimg.com/n2/s240x240_jfs/t1/6425/40/3887/217009/5bd716e9E4886d5d8/b3da975f4047ded3.jpg!q70.jpg">-->

                <!--</div>-->
                <!--<div class="search_prolist_info">-->


                    <!--<div class="search_prolist_title" style="    overflow: hidden;-->
    <!--text-overflow: ellipsis;-->
    <!--display: -webkit-box;-->
    <!-- -webkit-line-clamp: 2;-->
    <!-- -webkit-box-orient: vertical;-->
    <!--height: 38px;" data-line="2" rd="0-4-4" data-line-img="2">-->
                        <!--一加手机6T 8GB+128GB 墨岩黑 光感屏幕指纹 高通骁龙845 全面屏双摄游戏手机 全网通4G 双卡双待-->
                    <!--</div>-->
                    <!--<div class="search_prolist_price" style="margin-top: 9px;-->
    <!--display: inline-block;-->
    <!--height: 18px;-->
<!--color: #e93b3d;-->
    <!--min-width: 40px;" rd="0-4-4" id="price_100001172674">-->
                        <!--<strong rd="0-4-4">-->
                            <!--<em id="dp_J_100001172674" rd="0-4-4" pri="3599.00">¥ <span class="int">3599</span>.00</em>-->
                        <!--</strong>-->
                    <!--</div>-->



                    <!--<div style="-->
<!--font-size: 12px;-->
    <!--height: 20px;-->
    <!--padding: 5px 30px 2px 0;-->
    <!--box-sizing: border-box;-->
    <!--overflow: hidden;-->
    <!--line-height: 1.2;-->
<!--}" class="search_prolist_other text_small" rd="0-4-4" id="comtag_100001172674">-->
                        <!--<i style="    display: inline-block;-->
    <!--vertical-align: middle;-->
    <!--margin-top: -2px;-->
    <!--margin-right: 5px;-->
    <!--height: 14px;" class="mod_tag" rd="0-4-4"><img style="display: block;-->
    <!--height: 100%;" src="//img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png"></i>-->
                        <!--<span class="search_prolist_comment"><span id="com_100001172674">12万+</span>条评价</span>-->
                        <!--<span class="search_prolist_rate">好评率<span id="rate_100001172674">99</span>%</span>-->
                    <!--</div>-->

                    <!--<div style="box-sizing: border-box;-->
    <!--padding-top: 4px;-->
    <!--height: 19px;-->
    <!--color: #999;-->
    <!--font-size: 12px;-->
    <!--overflow: hidden;" class="search_prolist_shop with_padding" rd="0-4-41">-->
                        <!--<div id="shoptag_100001172674"></div>-->
                        <!--<div class="shop_area"><span class="shop_name">一加手机京东自营官方旗舰店</span></div>-->
                    <!--</div>-->

                <!--</div>-->
            <!--</div>-->







            <div>
                <div v-for="shoplist in shop" class="search_prolist_item" @click="shopchlick(shoplist._id)">
                    <van-card
                            tag="标签"
                            price="2.00"
                            desc="描述信息"
                            :title="shoplist.shop_name"
                            :thumb="shoplist.shop_img"
                    >
                    </van-card>
                </div>
            </div>




        </div>
    </div>
</template>
<script>
    import {shoplist} from '../../api/apilist'
    export default {
        name: "list",
        data(){
            return{
                shop:[],


                message: 'Hello'

            }
        },


        mounted(){
            this.shoplis()
        },

        methods:{
            async shoplis(){
                const id =this.$route.query.id;
                this.$axios('/goods/get_fingshop',
                    {
                        params: {id:id}
                    }
                ).then((response)=>{
                    console.log(response)
                    this.shop = response.data.mas
                }).catch((err)=>{
                })
            },

            //接受当前点击商品id
            shopchlick(shoplist){
                // console.log(shoplist)


                // this.$router.push({path: '/user/:',query:{id:opp.value} });
                this.$router.push({path: '/commodity' ,query:{id:[shoplist]} });

            }

        }
    }
</script>

<style lang="stylus" scoped>



</style>

