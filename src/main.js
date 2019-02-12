import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/reset.css'  //样式初始化
import store from './srore/store'

//axios
import axios from 'axios'
Vue.prototype.$axios = axios;
// 解决移动端300毫秒
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
//Vant库
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);
// // 图片懒加载
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
