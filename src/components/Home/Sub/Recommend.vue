<template>
    <!-- 猜你喜欢 -->
    <div class="love-foor">
        <div class="gray-text">
           <div class="opa1">为你推荐</div>
        </div>
        <!--猜你喜欢商品推荐-->
<<<<<<< HEAD
        <section class="search_prolist_item">
            <li class="search_prolist_item_inner" :class="{ active: (!index%2 ==0)  }" v-for="(item,index) in items">
                <p></p>
                <div class="search_prolist_cover" style=" overflow-x: scroll;
;width: 100%">
                    <img v-for="item in 14" src="//img.alicdn.com/imgextra/i4/122114519/O1CN01xMhwlq1jFkL18THXS_!!0-saturn_solar.jpg_220x220.jpg_.webp">
                </div>
                <div class="search_prolist_info">
                    <p class="search_prolist_title">
                        【送货上楼】中雀全自动超薄静音麻将机四口机家用棋牌室usb餐桌两用静音麻机麻 蓝色 【全国通用】44-136/144
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












    </div>

</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return{
                get_fingshoppp:[],
                items: [
                    { message: 'Foo' },
                    { message: 'Foo' },
                    { message: 'Foo' },
                    { message: 'Foo' },

                    { message: 'Bar' }
                ]
            }
        },
        // //自动获取推荐数据
        // created(){
        //     this.SHOWLoading()
        //     getZeptoo().then((res)=>{
        //         this.HIDELoading()
        //
        //
        //     })
        // },
=======
        <ul class="gray-ul">
            <li v-for="data in get_fingshoppp" :key="data.id" class="mhome">
                <a>
                    <div class="similar-product">
                        <div class="similar-posre">
                            <img :src="'//img14.360buyimg.com/mobilecms/s372x372_'+ data.img + '!q70.dpg'">
                        </div>
                        <span>{{data.t}}</span>
                        <div class="similar-product-info">
                            <span class="similar-product-price">
                                <span class="big-price">￥{{data.jp/100}}</span>
                            </span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState, mapMutations} from 'vuex'
    import {getZeptoo} from '../../../api/recommend'
    export default {
        data(){
            return{
                get_fingshoppp:[]
            }
        },
        //自动获取推荐数据
        created(){
            this.SHOWLoading()
            getZeptoo().then((res)=>{
                this.get_fingshoppp = res.data;
                this.HIDELoading()
            })
        },
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        methods:{
            ...mapMutations([
                'SHOWLoading',
                'HIDELoading'
            ])
        }
    }
</script>
<style lang='scss'>
    @import "../../../style/mimin";
    .love-foor{
        width:100%;
        .gray-text {
            font-size: vw(16);
            text-align: center;
            background: url("//img13.360buyimg.com/jdphoto/jfs/t1/614/9/6156/4845/5ba0a8c3E6bce832e/b990bc007cdb54b1.png!q70.webp") 0 0 / 100% 100% no-repeat !important;
            .opa1 {
                margin: 0 auto;
                margin-top: vw(10);
                margin-left: vw(-10);
            }
        }
<<<<<<< HEAD
        .search_prolist_item{
            overflow: hidden;
            background-color: #f8f8f8;
            padding-bottom: vw(10);

            /*.active{*/
            /*    float: right;*/
            /*}*/

            .search_prolist_item_inner{
                position: relative;
                float: left;
                box-sizing: border-box;
                padding: vw(10);
                background-color: #FFFFFF;
                margin-bottom: vw(15);

                .search_prolist_cover{
                    width: 100%;
                    height: vw(120);
                    margin-bottom: vw(5);
                    float: left;
                    overflow: hidden;
                    display: flex;
                    img{
                        margin:0 vw(5);
                        width: 35%;
                        height: 100%;
                        border-radius: vw(5)
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
                        font-size: vw(14);
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        height: vw(37);
                    }
                    .search_prolist_price{
                        margin-top: vw(5);
                        color: #e93b3d;
                        span{
                            color: red;
                            font-size:vw(18);
                        }
                        .min{
                            margin-left: 15px;
                            font-family: PF;
                            font-size: 12px;
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
=======
        .gray-ul{
            overflow: hidden;
            .mhome{
                float: left;
                border-radius: 5px;
                overflow: hidden;
                padding: 10px 0;
                width: 50%;
                box-sizing: border-box;
                a{
                    span{
                        font-size: 13px;
                        color: #232326;
                        line-height: 16px;
                        box-sizing: border-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-break: break-word;
                        margin-top: 5px;
                        margin-bottom: 3px;
                    }
                    .similar-product-info{
                        height: 30px;
                        color: #f23030;
                        display: inline-block;
                        position: relative;
                    }
                    .similar-product-price{
                        .big-price{
                            padding: 0 5px 0 4px;
                            color: #f23030;
                            font-size: 14px;
                            font-style: normal;
                        }
                    }
                    .similar-posre img{
                        width: 95%;
                        margin: 0 auto;

>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                    }
                }
            }
        }
    }

</style>

