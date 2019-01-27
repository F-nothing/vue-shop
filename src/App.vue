<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>
<script>

export default {
  name: "app",
  //页面加载完成后，删除动画
  created() {
    document.body.removeChild(document.getElementById('spinner'))
  }
};
</script>
<style>
</style>
