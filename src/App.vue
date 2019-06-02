<template>
<<<<<<< HEAD
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
=======
    <router-view ></router-view>
</template>
<script>

export default {
  name: "app",
};
</script>
<style>
    @import "../public/css/reset.css";

>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
</style>
