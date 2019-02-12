<template>
    <div class="box">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <!--顶部搜索栏-->
            <Heade></Heade>
            <!--菜单-->
            <Floor></Floor>
            <!--秒杀-->
            <Spike></Spike>
            <!--我的足迹-->
            <!--为你推荐-->
            <Recommend></Recommend>
            <!--底部版权-->
            <foter></foter>
            <!--底部导航-start-->
        </van-pull-refresh>
        <Loading v-if="LOADING"></Loading>
        <Navbar></Navbar>
    </div>
</template>
<script>
    import Loading from '../loading'
    import Heade from './Sub/header'
    import Floor from './Sub/floor.vue'
    import Recommend from './Sub/Recommend.vue'
    import Spike from './Sub/Spike.vue'
    import foter from './Sub/mCommonFooter.vue'
    import Navbar from "../Navbar.vue"
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        components:{
            Loading,
            Heade,
            Floor,
            foter,
            Recommend,
            Spike,
            Navbar
        },
        computed:{
            ...mapState([
                'LOADING'
            ])
        },
        data() {
            return {
                count: 0,
                isLoading: false
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.isRouterAlive = false
                    this.$nextTick(function () {
                        this.isRouterAlive = true
                    })
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            }
        }
    }






</script>
