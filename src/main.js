import Vue from 'vue'
import App from './App.vue'
import router from './router'


import api from './api' // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上复制代码
//Vuex
import store from './srore/store'
//样式初始化
import '../public/css/reset.css'  //样式初始化


// import '../public/Snickles-webfont.ttf'
// 解决移动端300毫秒
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
