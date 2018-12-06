<!--
    @CreationDate:2018/3/16
    @Author:Joker
    @Usage:下拉刷新组件
-->
<template>

  <div class="pull-to-refresh-app">
    <div class="content-box">
      <div class="refreshing-box">
        <div>{{tipText}}</div>
      </div>
      <div class="present-box">
        <slot></slot>
      </div>
    </div>
  </div>

	
	
</template>
<script>
export default {
	data(){
		return{
			startX: '',
			endX: '',
			startY: '',
			endY: '',
			moveDistance: 0,
			tipText: '下拉刷新',
			el: null

		}
	},



	}
	

</script>
<style lang='scss'>

</style>
