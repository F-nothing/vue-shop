<template>
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
        </div>
    </div>
</template>
<script>
    import {get_fingshop} from '../../api/apilist'
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




</style>

