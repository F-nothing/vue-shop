import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/Home/Home.vue'
import Demoo from '../components/demoo/index'
import commodity from '../components/commodity/details.vue'




import My from '../components/My/my'
import o from '../components/My/Order/o.vue'
import oo from '../components/My/Order/oo.vue'
import ooo from '../components/My/Order/ooo.vue'
import oooo from '../components/My/Order/oooo.vue'
import p from '../components/My/Order.vue'



import name from '../components/My/header.vue'
import Chea from '../components/Chea/index'
Vue.use(Router);




export default new Router({
  mode: 'history',
  routes:[
   


    /**
     * 个人中心
     */
    {
      path:'/p',
      component:p
    },
    {
      name:'My',
      path:'/My', 
      component:My,
    },
    {
      path:'/My/name',
      component:name,
      children:[
        {
          path:'',
          component:o,
        },
        {
          path:'/My/name/oo',
          component:oo,
        },
        {
          path:'/My/name/ooo',
          component:ooo,
        },
        {
          path:'/My/name/oooo',
          component:oooo,
        }
      ] 
    },




    



    {
      path:'/',
      component:Home


    },
    {
      path:"/logo",
      component:Demoo
    },
    {
      path:"/commodity",
      component:commodity
      
    },
    
    {
      path:'/Chea',
      component:Chea
    }





  ],




})
