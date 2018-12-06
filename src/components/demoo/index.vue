<template>
    <div class="boxx">
      <p>{{tipText}}</p>
      <div id="box" class="box-x"></div>
    </div>
</template>
<script>
import PullToRefresh from './demo.vue'
export default {
    components: {
      PullToRefresh
    },

    props:{

    },

    data(){
      return {
        tipText:"下拉刷新",
        starX:"",
        starY:"",
        el:null,
        moveDistance:0,
   
      }
    },
    mounted(){
      this.bindTouchEvent()
    },
    methods: {
      // 绑定touch事件
      bindTouchEvent(){
        let that = this;
        // 拖动的盒子
        let box =document.queryCommandIndeterm('box');
        this.el=document.querySelector('.box')
        // 绑定触摸事件
        this.el.addEventListener('touchstart',this._touchstart);
        this.el.addEventListener('touchmove',this._touchmove);
        this.el.addEventListener('touchend',this._touchend);

      },
      /**
       * 开始下拉的监听
       * @param e 下拉事件
       * starX starY 初始X Y值
       */
      _touchstart(e){
        let touch =e.changedTouches[0];
        this.tipText='下拉刷新',
        this.starX=touch.clientX;
        this.starY=touch.clientY;
   
      },
      /**
       * 下拉过程的监听 这里记录下移动的距离
       * @param e
       */
      _touchmove(e){
        let touch =e.changedTouches[0];
        let _move = touch.clientY - 30 ;
        if(_move>0 && _move<300){
          // this.el.style.marginTop  = _move / 2 + 'px';
          console.log(this.el.style.transition)

          this.moveDistance = touch.clientY;
          if (_move > 100) {
            this.tipText = '松开即可刷新'
          }
        }   
      },
      _touchend(e){
        let touch = e.changedTouches[0];
        this.endX = touch.clientX;
        this.endY = touch.clientY;
        let that = this;    
        if(this.moveDistance > 100){
          this.tipText = '数据加载中...';
        }
        if(this.moveDistance > 0){
          let time = setInterval(function(){
              that.el.style.marginTop = --that.moveDistance/2 + 'px';
              if (Number(that.el.style.marginTop.split('px')[0]) <= 0){
                clearInterval(time)
              };         
            },1)
        }
       
      }
    }   
}
</script>

<style lang='scss'>
.boxx{
  position: absolute
  height 1000px

  p{
    text-align: center
    margin-top -20px
  }
  .box-x{
    position: absolute
    width 100%
    height 100vh
  }
}


</style>
