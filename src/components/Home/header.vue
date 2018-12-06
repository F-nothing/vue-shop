<template>
    <div class="header">
        <div class="search">
            <i class="icongfont icon-my_light"></i>
            <a class="placeholder" placeholder="搜索你想要的课程">
                <span class="text iconfont icon-search">寻找宝贝店铺</span>
            </a>
        </div>
        <div class="banner">
            <swiper class="swiper">
                <swiper-slide v-for="item in items" :key="item.img">
                    <img class="img" :src="item.picUrl">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
    import {getRecommend} from "../../api/recommend";
    import {ERR_OK} from "../../api/config";
    export default {
        name: "Heade",
        created(){
            this._getRecommend()

        },
        methods:{
            _getRecommend(){
                getRecommend().then((res)=>{
                    if(res.code ===ERR_OK)
                        this.items = res.data.slider;


                })
            }},
        data(){
            return{
                items:[],
            }
        }
    }
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "//at.alicdn.com/t/font_908836_ph12c3kpu6h.css"
.header
    position relative
    font-size 0
    background-color #222222
    .search
        position relative
        z-index 100
        padding 10px 20px
        .placeholder
            display block
            text-align center
            background-color #FFFFFF
            border-radius: 10px;
            overflow: hidden;
        .text
            height 25px;
            line-height 25px
            color #F0E0DC;
            font-size: 13px;
            display: inline-block;
    .banner
        width 100%
        
        .swiper
            width 100%
            position relative
            img
                width 100%
</style>
