import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'Vuex'
import '../public/css/reset.css'

import store from './components/srore/store'

Vue.use(Vuex);



//ElementUI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)


import axios from 'axios'

Vue.prototype.$axios = axios




import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

Vue.filter('money',function(value) {
  return "￥" + value;


})


new Vue({


  render: h => h(App),
  router,
  store





}).$mount('#app')
