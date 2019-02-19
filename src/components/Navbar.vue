<template>
  <div class="Navbar">
       <router-link
               v-for="(item,index) of nav"
               :key="index"
               class="tab"
               :class="item.class ? 'item-cn-active':''"
               :to=item.to
               @click.native="routerLink(index)" >
          <span class="iconfont"
                :class="item.iconfont">
          </span>
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
                {title: '首页',  iconfont: 'icon-home',to:'/',class:false,},
                {title: '分类',  iconfont: 'icon-more',to:'/Class',class:false},
                {title: '购物车', iconfont: 'icon-cart_light-copy-copy',to:'/Chea',class:false},
                {title: '我的',  iconfont: 'icon-my_light',to:'/My',class:false},
            ],
         }
      },
      mounted(){
          //获取当前url  给navbar设置索引
          //代码有点垃圾，多多包涵，哈哈
          //加载后，获取当前url对应nav数组里面的索引，设置为true
          var path = this.$route.path;
          switch (path) {
              case this.nav[0].to:
                  this.$store.state.Navbar = 0;
                  break;
              case this.nav[1].to:

                  this.$store.state.Navbar = 1;
                  break;
              case this.nav[2].to:
                  this.$store.state.Navbar = 2;
                  break;
              case this.nav[3].to:
                  this.$store.state.Navbar = 3;
                  break;
          }
          var isSelece = this.$store.state.Navbar;
          this.nav[isSelece].class = true
      },
      methods:{
          routerLink(index) {
              this.$store.state.Navbar = index;
          }
      }
  }
</script>
<style lang="scss" scoped>
    @import url(//at.alicdn.com/t/font_882041_sxq9914r80k.css);
    @import "../style/mimin";
    .Navbar{
        box-sizing: border-box;
        position: fixed;
        display: flex;
        text-align: center;
        left:0;
        bottom: 0;
        width: 100%;
        z-index: 100;
        font-size:vw(12);
        background-color:#fcfcfc;
        padding:vw(5) 0;
        .tab{
            color:#0a0d20;
            width: 25%;
            display: block;
            .iconfont{
                font-size:vw(24);
                height:vw(25);
                line-height:vw(25);
                font-weight:700
            }
            .text{
                font-size:vw(12);
                transform: scale(0.83333333);
            }
        }
        .item-cn-active {
            color: #1AA89A;
        }

    }
</style>
