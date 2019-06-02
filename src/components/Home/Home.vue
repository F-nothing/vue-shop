<template>
    <div class="box">
        <Heade></Heade>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
<!--            <Floor></Floor>-->
<!--            <Spike></Spike>-->
            <Recommend></Recommend>
<!--            <Loading v-if="LOADING"></Loading>-->
            <div class="itme"></div>
        </van-pull-refresh>
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
            // Loading,
            Heade,
            Floor,
            foter,
            Recommend,
            Spike,
            Navbar
        },
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
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
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
            }
        }
    }
</script>
<style lang="scss">
    @import "../../style/mimin";
    .itme{
        width: 0;
        height: vw(50);
    }
</style>
