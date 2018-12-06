<template>
  <div class="Navbar">
   <router-link v-for="(item,index) of nav" :key="index"  class="tab" :class="navIndex===index ? 'item-cn-active':''"  :to=item.to  @click.native="routerLink(index)" >
      <span class="iconfont"  :class="item.iconfont"></span>
      <p class="text">{{item.title}}</p>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: "",
    data(){
     return{
        navIndex: 0,
        nav: [
          {title: '首页',  iconfont: 'icon-home',to:'/'},
          {title: '登陆',  iconfont: 'icon-more',to:'/logo'},
          {title: '购物车', iconfont: 'icon-cart_light-copy-copy',to:'/Chea'},
          {title: '我的',  iconfont: 'icon-my_light',to:'/My'},
        ],
      }
    },
    methods:{
      routerLink(index) {
        this.navIndex = index;
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "//at.alicdn.com/t/font_882041_sxq9914r80k.css"
.Navbar
  box-sizing border-box
  position fixed
  display: flex
  justify-content space-around
  text-align center
  left:0
  bottom 0;
  width 100%
  padding-top: 2px;
  border-top: 1px solid #e7e7e7;
  z-index 100
  font-size 12px
  background-color #fcfcfc
  padding 5px 0
  .tab
    color:#0a0d20;
    .iconfont
      font-size 24px
      height: 25px;
      line-height: 25px;
      font-weight 700
    .text
      font-size 12px
      transform: scale(0.83333333);
  .item-cn-active
    color #1AA89A
</style>
