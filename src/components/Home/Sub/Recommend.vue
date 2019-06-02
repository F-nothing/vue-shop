<template>
    <!-- 猜你喜欢 -->
    <div class="love-foor">
        <div class="gray-text">
           <div class="opa1">为你推荐</div>
        </div>
        <!--猜你喜欢商品推荐-->
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
                    }
                }
            }
        }
    }

</style>

