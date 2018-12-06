<template>
  <div class="my">
    <!-- 头部header -->
    <div>
      <div class="DLinearLayout">
        <div class="user_info">
          <div class="avatar_wrap">
            <img src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png">
          </div>
          <div class="personal_wrap">
            <router-link to="/My/name" tag="div">
              <div class="namediv"><span class="name">阚东</span></div>
              <span class="signature">生活要有平质感</span>
            </router-link>
            
          </div>

        </div>
      </div>
    </div>
    <div class="xlist_group my_cell">
      <div class="rel_container rel_container_has_logis">
        <div class="top_line_box">
          <div class="my_order_entrance type_unpay iconfont icon-pay">
            <div class="entrance_text">待付款</div>
          </div>
          <div class="my_order_entrance type_unpay iconfont icon-pay">
            <div class="entrance_text">待付款</div>
          </div>
          <div class="my_order_entrance type_unpay iconfont icon-pay">
            <div class="entrance_text">待付款</div>
          </div>
          <div class="my_order_entrance type_unpay iconfont icon-pay">
            <div class="entrance_text">待付款</div>
          </div>
        </div>
        <!-- 物流显示 -->
        <div class="myLogistics">

        </div>
      </div>
    </div>
    <Navba></Navba>
    <transition name="router-fad">
        <router-view ></router-view>
    </transition>
  </div>
  

  
</template>
<script>
 import myheader from './header.vue'
 import Navba from "../Navbar.vue"
 export default {
    name: "",
    components:{
      myheader,
      Navba

    }
  }
</script>

<style lang='stylus' type="text/stylus" scoped>
@import url(//at.alicdn.com/t/font_908836_nu64hp9k9ug.css);
header
.DLinearLayout
    height 100px;
    background-color: #fff;
    height: 100px;
    padding:0 20px;
    .user_info
      height: 100px;
      position: relative;
      width: 100%;
      .avatar_wrap
        position absolute
        left 10px
        top 20%
        img
          width 62px
          height 62px
      .personal_wrap
        position absolute
        left 90px
        top 20%
        height 62px
        margin-top 5px
        .namediv
          height 30px
          font-size 22px
          font-weight 700
          padding-bottom 10px
          .signature
            color #666666
.xlist_group
  background: #fff;
  width 100%
  padding 10px 0
  .rel_container
    height: 60px;
    width 100%
    .top_line_box
      display: flex;
      position: relative;
      width 100%
      .my_order_entrance
        width 100px
        height 60px
        text-align center
        line-height 30px
        font-size 30px
        .entrance_text
          color #85878F
          font-size 14px
.router-fad-enter-active, .router-fade-leave-active {
	transition: opacity 1s;
	}
.router-fad-enter, .router-fade-leave-active {
	opacity: 0;
}



        









</style>