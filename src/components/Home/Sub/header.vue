<template>
    <div class="header">
        <div  @click="_route()" :class="{ active: isActive } " class="search">
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
    import {getRecommend} from "../../../api/recommend";
    import {ERR_OK} from "../../../api/config";
    export default {
        name: "Heade",
        created() {
            this._getRecommend()

        },
        data() {
            return {
                items: [],
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
                isActive:false
            }
        },

        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },



        methods: {
            _getRecommend() {
                getRecommend().then((res) => {
                    if (res.code === ERR_OK)
                        this.items = res.data.slider;
                })
            },
            _route(){
                this.$router.push({path: '/Search'});

            },

            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

                if(scrollTop>45){
                    this.isActive = true

                }else {
                    this.isActive =false
                }

            },

        },


    }
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "//at.alicdn.com/t/font_908836_ph12c3kpu6h.css"
.header
    font-size 0
    .active
        background-color #E43130
    .search
        position fixed
        z-index: 15;
        left: 0;
        top: 0;
        right: 0;
        max-width: 640px;
        margin: 0 auto;
        padding 10px 40px
        .placeholder
            display block
            text-align center
            background-color #FFFFFF
            border-radius: 10px;
            overflow: hidden;
        .text
            height 25px;
            line-height 25px
            color #232326;
            font-size: 13px;
            display: inline-block;
    .banner
        width 100%
        height 182px

        .swiper
            width 100%
            position relative
            img
                width 100%
                height 182px
</style>
