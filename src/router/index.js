import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes:[
      {
          path:'/',
          component:resolve=>require(["@/App"],resolve), //顶级路由
          children:[     //二级路由
              //当路由为空时跳转首页
              {
                path:'',
                name:'home',
                component:resolve=>require(["@/components/Home/Home.vue"],resolve),
              },
              //商品分类
              {
                path:'Class',
                component:resolve=>require(["@/components/Class/index"],resolve)

              },
              //购物车页面
              {
                path:'Chea',
                component:resolve=>require(["@/components/Chea/Chea"],resolve),
                meta: {
                  title:'购物车'
                }
              },
              //个人中心
              {
                name:'My',
                path:'/My',
                component:resolve=>require(["@/components/My/index"],resolve),
                meta: {
                  title:'我的',
                },
              },
              {
                path:'My/name',
                component:resolve=>require(["@/components/My/Order/header.vue"],resolve),
                meta:{
                  title:'个人中心'
                },
                children:[
                  {
                    path:'address',
                    component:resolve=>require(["@/components/My/Userinformation/address.vue"],resolve),
                  },

                  {
                    path:'/Addressadd',
                    component:resolve=>require(["@/components/My/Userinformation/Addressadd"],resolve),
                  },


                  {
                    path:'/My/name/Allorders',
                    component:resolve=>require(["@/components/My/Order/Allorders.vue"],resolve),
                  },

                ]
              },

            //商品搜索页
            {
              path:'/user',
              component:resolve=>require(["@/components/Class/list"],resolve),
            },

            //商品页
            {
              path:"/commodity",
              component:resolve=>require(["@/components/Class/details.vue"],resolve),

            },
          ]


      },



    {
      path:'/details',
      component:resolve=>require(["@/components/My/Order/details"],resolve),
    },


    {
      path:'/Search',
      component:resolve=>require(["@/components/Class/Search"],resolve),
    },











    //确认订单
    {
      path:"/placeorder",
      component:resolve=>require(["@/components/Class/shopPlaceorder"],resolve),
      meta:{
        title:'确认订单'
      }
    },

    //收银台
    {
      path:"/pay",
      component:resolve=>require(["@/components/Class/pay"],resolve),
      meta:{
        title:'收银台'
      }
    },


    {
      path:"/logo",
      component:resolve=>require(["@/components/Logo"],resolve),
      meta:{
        title:'登陆'
      }
    },




  ],
});

// router.beforeEach((to,from,next)=>{
//   let token = sessionStorage.getItem('login');
//
//
//
//   if (to.meta.requiresAuth) {
//     if (token) {
//       next();
//     } else {
//       next({
//         path: '/logo',
//         query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
//       });
//     }
//   } else {
//     next(); //如果无需token,那么随它去吧
//   }
//
//   if(to.path == '/logo'){
//     if (token) {
//       next({
//         path: '/'
//       })
//     }else {
//       next()
//     }
//
//   }
// });


export default router
