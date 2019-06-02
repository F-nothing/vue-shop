<template>
    <div class="box">
<<<<<<< HEAD
        <Heade></Heade>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
<!--            <Floor></Floor>-->
<!--            <Spike></Spike>-->
            <Recommend></Recommend>
<!--            <Loading v-if="LOADING"></Loading>-->
            <div class="itme"></div>
        </van-pull-refresh>
=======
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
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
            // Loading,
=======
            Loading,
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
            Heade,
            Floor,
            foter,
            Recommend,
            Spike,
            Navbar
        },
<<<<<<< HEAD
        data() {
            return {
                count: 0,
                isLoading: false
            }
        },
        computed:{
            ...mapState([
                'userInfo'
            ]),
        },

        mounted(){
            this.initData()
        },

        methods: {
            onRefresh() {
                setTimeout(() => {
=======
        computed:{
            ...mapState([
                'LOADING'
            ])
        },
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.isRouterAlive = false
                    this.$nextTick(function () {
                        this.isRouterAlive = true
                    });
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
<<<<<<< HEAD
            },
            initData(){
                if (this.userInfo) {


                }
            }

        },


        watch: {
            userInfo: function (value){
                alert(1)
                this.initData()
=======
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
            }
        }
    }
</script>
<<<<<<< HEAD
<style lang="scss">
    @import "../../style/mimin";
    .itme{
        width: 0;
        height: vw(50);
    }
</style>
=======
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
