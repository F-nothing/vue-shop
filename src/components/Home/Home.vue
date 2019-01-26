<template>
    <div>
        <!--顶部搜索栏-->
        <Heade></Heade>
        <!--菜单-->
        <Floor></Floor>
        <!--头条通知-->
        <Toutiao></Toutiao>
        <!--秒杀-->
        <!--我的足迹-->
        <!--为你推荐-->
        <Recommend></Recommend>
        <!--底部版权-->
        <foter></foter>
        <!--底部导航-start-->
        <Navbar></Navbar>
    </div>
</template>
<script>
    import Heade from './Sub/header'
    import Floor from './Sub/floor.vue'
    import Toutiao from './Sub/Toutiao.vue'
    import Recommend from './Sub/Recommend.vue'
    import foter from './Sub/mCommonFooter.vue'
    import Navbar from "../Navbar.vue"
    export default {
        name: "Home",
        components:{
            Heade,
            Floor,
            Toutiao,
            foter,
            Recommend,
            Navbar
        }
    }
</script>
