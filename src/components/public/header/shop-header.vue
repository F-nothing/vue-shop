/**header组件*/
<template>
    <section class="cname">
        <div class="m_header_bar">
            <div @click="$router.history.go(-1)" class="m_header_bar iconfont icon-xiala-copy" >
            </div>
            <div class="m_header_bar_title">{{titlee}}</div>
            <div class="m_header_bar iconfont icon-more">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        titlee:{
            type:String,
            default:"",
        },
        //接受路由地址
    }
}
</script>
<style lang='stylus'>
@import url(//at.alicdn.com/t/font_908836_nu64hp9k9ug.css);
    .m_header_bar
        display: flex;
        height 44px
        background-color #fff
        position relative
        .m_header_bar
            display block
            width 44px
            height 44px
            line-height 44px
            text-align: center;
            font-size 18px
        .m_header_bar_title
            height: 44px;
            line-height: 44px; 
            font-size: 18px;
            color: #333;

            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            flex: 1;    
</style>


