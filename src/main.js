import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/reset.css'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'




Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

Vue.filter('money',function(value) {
  return "￥" + value;


})


new Vue({


  render: h => h(App),
  router





}).$mount('#app')
