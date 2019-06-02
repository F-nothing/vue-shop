import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD


import api from './api' // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上复制代码
=======
//axios
import axios from 'axios'
Vue.prototype.$axios = axios;
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
//Vuex
import store from './srore/store'
//样式初始化
import '../public/css/reset.css'  //样式初始化
<<<<<<< HEAD


// import '../public/Snickles-webfont.ttf'
=======
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
// 解决移动端300毫秒
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

<<<<<<< HEAD
=======
//Vant库
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
