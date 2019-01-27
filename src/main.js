import Vue from 'vue'
import App from './App.vue'
import router from './router'

import FastClick from 'fastclick'
import '../public/css/reset.css'  //样式初始化
import '../public/css/personality.css'  //个性样式



import store from './components/srore/store'


// import Vuex from 'Vuex'
// Vue.use(Vuex);



// 解决移动端300毫秒
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}



//ElementUI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);





// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);


import axios from 'axios'

Vue.prototype.$axios = axios;




import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false



new Vue(
    {
  render: h => h(App),
  router,
  store
}).$mount('#app');
