import Vue from 'vue'
import Router from 'vue-router'




import store from '@/components/srore/store'


const App =()=>import('@/App');

const Class =()=>import('@/components/Class/index')//商品分类


const List =()=>import('@/components/Class/list')



const Home =()=>import('@/components/Home/Home.vue'); //首页




const demo =()=>import('@/components/Chea/demo.vue')

const Demoo =()=>import('@/components/Logo')
const placeorder =()=>import('@/components/Class/shopPlaceorder')//提交订单
const  pay=()=>import('@/components/Class/pay')
const  commodity=()=>import('@/components/Class/details.vue')//商品页面

const My =()=>import('@/components/My/my')

const address =()=>import('@/components/My/address')
const Addressadd =()=>import('@/components/My/Addressadd')

const o =()=>import('@/components/My/Order/o.vue')
const oo =()=>import('@/components/My/Order/oo.vue')
const ooo =()=>import('@/components/My/Order/ooo.vue')
const oooo =()=>import('@/components/My/Order/oooo.vue')
const p =()=>import('@/components/My/Order.vue')
const name =()=>import('@/components/My/header.vue')
const Chea =()=>import('@/components/Chea/index')




const Search =()=>import('@/components/Class/Search')



// import { from } from 'array-flatten';
Vue.use(Router);
const router = new Router({

  mode: 'history',
  routes:[
      {
          path:'/',
          component:App, //顶级路由
          children:[     //二级路由
              //当路由为空时跳转首页
              {
                path:'',
                component:Home
              },
              //商品分类
              {
                path:'Class',
                component:Class

              },
              //购物车页面
              {
                path:'Chea',
                component:Chea,
                meta: {
                  requiresAuth: true,
                  title:'购物车'
                }
              },
              //个人中心
              {
                name:'My',
                path:'/My',
                component:My,
                meta: {
                  title:'我的',
                  requiresAuth: true
                },
              },
            {
              path:'/address',
              component:address,
            },
            {
              path:'/Addressadd',
              component:Addressadd,
            },





              {
                path:'My/name',
                component:name,
                meta:{
                  title:'个人中心'
                },
                children:[
                  {
                    path:'address',
                    component:o
                  },

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







          ]


      },






    {
      path:'/Search',
      component:Search
    },





    {
      path:'/demo',
      component:demo
    },





    //商品搜索页
    {
      path:'/user/:id',
      component:List
    },

      //商品页
    {
      path:"/commodity",
      component:commodity

    },
    //确认订单
    {
      path:"/placeorder",
      component:placeorder,
      meta:{
        title:'确认订单'
      }
    },

    //收银台
    {
      path:"/pay",
      component:pay,
      meta:{
        title:'收银台'
      }
    },
    {
      path:"/logo",
      component:Demoo,
      meta:{
        title:'登陆'
      }
    },



  ],
});

router.beforeEach((to,from,next)=>{
  let token = store.state.token;

  //为每个页面设置title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();


  if (to.meta.requiresAuth) {
    if (token) {
      next();
    } else {
      next({
        path: '/logo',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      });
    }
  } else {
    next(); //如果无需token,那么随它去吧
  }

  if(to.path == '/logo'){
    if (token) {
      next({
        path: '/'
      })
    }else {
      next()
    }

  }






});
export default router
