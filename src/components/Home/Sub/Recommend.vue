<template>
    <!-- 猜你喜欢 -->
    <div class="love-foor">


        <div class="gray-text">
            <span class="gray-layout">
                猜你喜欢
            </span>
        </div>

        <!--猜你喜欢商品推荐-->
        <ul class="gray-ul">
            <li v-for="data in get_fingshoppp" class="mhome">
                <a>
                    <div class="similar-product">
                        <div class="similar-posre">


                            <!--<img :src=data.shop_img>-->
                            <!--<img v-lazy="data.shop_img">-->
                            <img v-lazy="data.shop_img" @error="imgError(data)">



                        </div>
                        <span>
                            <!-- <img class="shopimg" src="//img11.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png"> -->
                            {{data.shop_name}}
                        </span>
                        <div class="similar-product-info">
                            <span class="similar-product-price">
                                <span class="big-price">￥{{data.checked}}</span>
                            </span>
                        </div>
                    </div>
                </a>
            </li>
            <!-- <div style="display: block;min-height: 1px;" class="j_rec_load_wrapper swipe-up love-loading">
                <div class="swipe-up-wrapper">
                    <div style="" class="loading-con j_scroll_load_rec">
                        <span class="pagenum"></span>
                        <span class="loading"><i class="love-loading-icon">加载中...</i></span>
                        <div class="clear"></div>
                    </div>
                    <div style="display: none;" class="click-loading j_click_load_rec">
                        <a href="javascript:void(0);">点击继续加载</a>
                    </div>
                </div>
            </div> -->

        </ul>
    </div>
</template>
<script>
    import {get_fingshoppp,Classlist} from '../../../api/apilist'
    export default {
        data(){
            return{
                get_fingshoppp:[]
            }
        },
        //自动获取推荐数据
        created(){
            const data = get_fingshoppp().then((res)=>{
                this.get_fingshoppp = res.docs
            });

        },

        methods:{
            //当图片加载失败，显示默认
            imgError(data){
                this.data.shop_img = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2310514390,3580363630&fm=27&gp=0.jpg'

            }
        }
    }
</script>
<style lang='stylus'>
.love-foor
    width:100%
    .gray-text
        text-align center
        color #6666
        font-size 16px
        margin: 14px 5px;
    .gray-ul
        overflow hidden
        .mhome
            float left
            width 50%
            box-sizing: border-box
            padding 2px
            background-color #FFFFFF
            a
                span
                    font-size 13px
                    color: #232326;
                    line-height: 16px;
                    height 32px
                    box-sizing: border-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-break: break-word;

                    margin-top: 5px;
                    margin-bottom: 3px;
                .similar-product-info
                    height 30px
                    color: #f23030;
                    display: inline-block;
                    position: relative;
                    top: 1px;
                    height: 25px;
                    .similar-product-price
                        .big-price
                            padding: 0 5px 0 4px;
                            color: #f23030;
                            font-size 14px
</style>

