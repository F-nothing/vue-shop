<template>
    <router-view></router-view>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "app",
        mounted(){
            //获取用户信息
            this.getUserInfo();

        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
        },



    };
</script>
<style>
    @import "../public/css/reset.css";
</style>
