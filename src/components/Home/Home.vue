<template>
    <div>
        <!-- 首页搜索  barren -->
        <Heade></Heade>
        <!-- 导航菜单 -->
        <Floor></Floor>

        <Toutiao></Toutiao>
        <!-- <F></F> -->
        <Recommend></Recommend>
        


        <foter></foter>

        <Navba></Navba>
a
        <router-link to="/">sas</router-link>

        



       
    </div>
</template>
<script>

    import Heade from './header'
    import Floor from './floor.vue'
    import F from './foott.vue'
    import Toutiao from './Toutiao.vue'
    import foter from './mCommonFooter.vue'
    import Recommend from './Recommend.vue'

    import Navba from "../Navbar.vue"
    
    export default {
        name: "Home",
        components:{
            Heade,
            Floor,
            Toutiao,
            F,
            foter,
            Recommend,
            Navba
        }

    }
</script>

<style scoped>

</style>