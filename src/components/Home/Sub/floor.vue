<template>
    <div class="floor">
        <div class="position-r">
            <ul class="fix">
                <li v-for="itemm in item" :key="itemm.title">
                    <a>
                        <img :src="itemm.img">
                        <div class="title">{{itemm.title}}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            item:[
                    {
                        img:"http://demo5.tp-shop.cn/template/mobile/rainbow/static/images/icon_03.png",
                        title:"爆款手机1",
                    },
                    {
                        img:"http://demo5.tp-shop.cn/template/mobile/rainbow/static/images/icon_03.png",
                        title:"爆款手机2",
                    },
                    {
                        img:"http://demo5.tp-shop.cn/template/mobile/rainbow/static/images/icon_03.png",
                        title:"爆款手机3",
                    },
                    {
                        img:"http://demo5.tp-shop.cn/template/mobile/rainbow/static/images/icon_03.png",
                        title:"爆款手机4",
                    },
                    {
                        img:"http://demo5.tp-shop.cn/template/mobile/rainbow/static/images/icon_03.png",
                        title:"爆款手机5",
                    },
                    {
                        img:"http://demo5.tp-shop.cn/template/mobile/rainbow/static/images/icon_03.png",
                        title:"爆款手机6",
                    },
                    {
                        img:"http://demo5.tp-shop.cn/template/mobile/rainbow/static/images/icon_03.png",
                        title:"爆款手机7",
                    },
                    {
                        img:"http://demo5.tp-shop.cn/template/mobile/rainbow/static/images/icon_03.png",
                        title:"爆款手机8",
                    }
                ]

        }
    }

}
</script>
<style lang='stylus'>
.floor
    padding 10px 0
    .position-r
        overflow: auto;
        ul
            li
                width 25%
                float left
                a
                    img
                        width 50%
                        display block
                        margin 0 auto
                    .title
                        font-size 14px
                        text-align center
                        height 20px
                        line-height 20px
                        color: #333;
                        overflow: hidden;
</style>


