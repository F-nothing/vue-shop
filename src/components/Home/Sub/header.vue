<template>
    <div class="header">
        <header style="width: 100%;">
            <div  @click="_route()" :class="{ active: isActive } " class="search">
                <i class="icongfont icon-my_light"></i>
                <a class="placeholder" placeholder="搜索你想要的课程">
                    <span class="text iconfont icon-search">寻找宝贝店铺</span>

                </a>
            </div>
        </header>
        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
                <van-swipe-item v-for="item in items" :key="item.img">
                    <img class="img" :src="item.picUrl">
                </van-swipe-item>
            </van-swipe>
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
<style lang="scss" scoped>
    /*@import "//at.alicdn.com/t/font_908836_ph12c3kpu6h.css";*/
    @import "../../../style/mimin";
    @import "../../../style/index";
    .header{
        font-size: 0;
        .active {
            background-color: red;
        }
        .search{
            position: fixed;
            z-index: 15;
            left: 0;
            top: 0;
            right: 0;
            margin: 0 auto;
            padding: vw(10) vw(40);
            .placeholder{
                display: block;
                text-align: center;
                background-color: #EEEEEE;
                opacity: 0.8;
                border-radius: vw(10);
                overflow: hidden;
                .text{
                    @include line(vw(25),vw(25),vw(12));
                }
            }
        }
        .banner{
                width: 100%;
                .swiper {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: vw(182)
                    }
                }
            }

    }
</style>
