<template>
  <div class="myheader">
      <mheade :titlee='title'></mheade>
      <div class="page-wrap">
        <div class="fixed-top-wrap">
          <div class="fixed-top">
            <ul>
              <router-link to="/My/name/"  tag="div" class="" exact>全部</router-link>
              <router-link to="/My/name/oo" tag="div" class="">待付款</router-link>
              <router-link to="/My/name/ooo" tag="div" class="">待发货</router-link>
              <router-link to="/My/name/oooo" tag="div" class="">待收货</router-link>
              <router-link to="/My/name/ooooo" tag="div" class="">待评价</router-link>
            </ul>
          </div>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
  import mheade from '../../public/header/shop-header.vue'
  import one from './o.vue'
  export default {
    name: "",
    components:{
      mheade
    },
    data(){
      return{
        title:'我的订单'
      }
    }
  }
</script>

<style lang='stylus' type="text/stylus" scoped>
.myheader
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  .page-wrap
    .fixed-top-wrap
      display flex
      top 0
      left 0
      width 100%
      .fixed-top
        width 100%
        ul
          display flex
          background: #fcfcfc;
          font-size: 14px;
          .acitve-tab
            border-bottom: 2px solid #ff5000;
            color: #ff5000;
          div
            flex: 1;
            text-align center
            height:40px;
            line-height: 40px;
          .router-link-active
            color red
            border-bottom 2px solid red
</style>
