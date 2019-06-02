<template>
<<<<<<< HEAD
    <div class="content">
        <div class="search_head">
            <headerr>
                <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    label="商品"
                    shape="round"
                    @search="onSearch"
                >
                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </headerr>
        </div>
        <section class="search_prolist_item" >
            <li class="search_prolist_item_inner" @click="shopchlick" :class="{ active: (!index%2 ==0)  }" v-for="(item,index) in shopData" >
                <div class="search_prolist_cover">
                    <img :src="item.img">
                </div>
                <div class="search_prolist_info">
                    <p class="search_prolist_title">
                        {{item.cat_name}}
                    </p>
                    <div class="search_prolist_price">
                        <strong>
                            <span class="int">￥3599</span>
                            <span class="min">月销999+</span>
                        </strong>
                    </div>
                </div>
            </li>

        </section>

        <div class="spinner"></div>

        <div class="qq_footer">
            <div class="jd_logo" id="jdBtmLogo"></div>
=======
    <div>
        <div class="search_head">
            <div class="tsearchwrap">
                <van-search

                        v-mol="value"
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
                <div v-for="shoplist in shop" :key="shoplist.index" class="search_prolist_item" @click="shopchlick(shoplist._id)">
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
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        </div>
    </div>
</template>
<script>
    import {get_fingshop} from '../../api/apilist'
<<<<<<< HEAD
    import Heade from "../Home/Sub/header";
    import headerr from "../public/header/shop-header";

    export default {
        name: "list",
        components: {Heade,headerr},
        data(){
            return{
                shop:[],
                shopData:[
                    {"cat_name":"Apple iPhone XR", "img":"//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"},
                    {"cat_name":"小米（MI） 小米8SE","img":"//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png"},
                    {"cat_name":"荣耀8X 千元屏霸 91%屏占比 2000万AI双摄 4GB+64GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待","img":"//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png"},
                    {"cat_name":"小米（MI） 红米Note7","img":"//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png"},
                    {"cat_name":"小米 红米Redmi Note7Pro AI双摄 6GB+128GB 梦幻蓝 全网通4G 双卡双待 水滴屏拍照游戏手机","img":"//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/22746/35/11162/104085/5c8b6a19Eb8e8f34e/9cd57e3a481c7160.jpg!q70.dpg.webp"},
                    {"cat_name":"华为（HUAWEI） P30","img":"//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/28692/26/12501/332089/5c98cc90E6c89e802/9c3ceb43a54dcb93.jpg!q70.dpg.webp"},

                ],//分类数据
=======
    export default {
        name: "list",
        data(){
            return{
                shop:[],
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
            }
        },
        mounted(){
            this.shoplis()
        },

        methods:{
            async shoplis(){
                const id =this.$route.query.id;
                await get_fingshop({id:id}).then((response)=>{this.shop = response.data})
            },
<<<<<<< HEAD
            //接受当前点击商品id
            shopchlick(){
                this.$router.push({path: '/commodity'});
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../style/mimin";
    .search_head{
        height: vw(54);
    }
    .search_prolist_item{
        overflow: hidden;
        background-color: #f8f8f8;
        padding-bottom: vw(10);
        .active{
            float: right;
        }
        .search_prolist_item_inner{
            position: relative;
            float: left;
            width: 50%;
            box-sizing: border-box;
            padding: vw(10);
            background-color: #FFFFFF;
            border-radius: vw(10);
            .search_prolist_cover{
                width: 100%;
                height: vw(100);
                margin-bottom: vw(5);
                float: left;
                overflow: hidden;
                img{
                    width:70%;
                    height: 100%;
                    margin: 0 auto;

                }
            }
            .search_prolist_info{
                float: left;
                width: 100%;
                margin: 0 auto;
                .search_prolist_title{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    text-align: center;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    height: vw(18);
                    font-size: vw(14);
                }
                .search_prolist_price{
                    margin-top: vw(5);

                    color: #e93b3d;
                    span{
                        font-weight: 700;
                        color: red;
                        font-size:vw(18);
                    }
                    .min{
                        margin-left: 15px;
                        font-family: PF;
                        font-size: vw(12);
                        color: #666666;
                    }
                }
                .search_prolist_other{
                    font-size: vw(12);
                    height: 20px;
                    padding: 5px 30px 2px 0;
                    box-sizing: border-box;
                    overflow: hidden;
                    line-height: 1.2;
                    i{
                        display: inline-block;
                        vertical-align: middle;
                        margin-top: -2px;
                        margin-right: 5px;
                        height: 14px;
                    }

                }
                .search_prolist_shop{
                    box-sizing: border-box;
                    padding-top: 4px;
                    height: 19px;
                    color: #999;
                    font-size: 12px;
                    overflow: hidden;
                }
            }
        }
    }


    .spinner {
        width: 40px;
        height: 40px;
        background-color: #67CF22;

        margin: 20px auto;
        -webkit-animation: rotateplane 1.2s infinite ease-in-out;
        animation: rotateplane 1.2s infinite ease-in-out;
    }

    @-webkit-keyframes rotateplane {
        0% { -webkit-transform: perspective(120px) }
        50% { -webkit-transform: perspective(120px) rotateY(180deg) }
        100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
    }

    @keyframes rotateplane {
        0% {
            transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
        } 50% {
              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
          } 100% {
                transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            }
    }




    .qq_footer {
        margin: 25px 0 75px;
        .jd_logo {
            display: block;
            width: 100px;
            height: 20px;
            margin: 0 auto;
            background-image:url('../../../public/img/download.png');
            background-size: 100%;
        }
    }

=======

            //接受当前点击商品id
            shopchlick(shoplist){
                // console.log(shoplist)
                this.$router.push({path: '/commodity' ,query:{id:[shoplist]} });

            }

        }
    }
</script>

<style lang="stylus" scoped>
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6



</style>

