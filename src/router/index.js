import Vue from 'vue'
import Router from 'vue-router'
//asdddddddddddddddddddddddddddddddddddddddddddddddddd
Vue.use(Router)
const _import = require(`./_import`).default

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: _import('base/home'),
  },
  {
    path: '/login',
    name: 'login',
    component: _import('base/login')
  },
  {
    path: '/register',
    name: 'register',
    component: _import('base/register')
  },
];

const mineRoutes = [
  // {
  //   path: '/userinfo',
  //   name: 'userinfo',
  //   component: _import('mine/settings/userinfo'),
  //   meta: {
  //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
  //   },
  // },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    redirect: "/settings/myHomepage",
    children:[

    ]
  },
  {
    path: '/settings/myHomepage',
    name: 'myHomepage',
    component: _import('mine/settings/myHomepage'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: '/settings/collageArticle',
    name: 'collageArticle',
    component: _import('mine/settings/collageArticle'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: '/settings/favoriteArticles',
    name: 'favoriteArticles',
    component: _import('mine/settings/favoriteArticles'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: '/settings/boughtContent',
    name: 'boughtContent',
    component: _import('mine/settings/boughtContent'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: '/settings/myWallet',
    name: 'myWallet',
    component: _import('mine/settings/myWallet'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: '/settings/systemSettings',
    name: 'systemSettings',
    component: _import('mine/settings/systemSettings'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    redirect: '/settings/systemSettings/baseSettings',
    children:[
      {
        path: '/settings/systemSettings/baseSettings',
        name: 'baseSettings',
        component: _import('mine/settings/systemSettings/children/baseSettings'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/settings/systemSettings/userSettings',
        name: 'userSettings',
        component: _import('mine/settings/systemSettings/children/userSettings'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/settings/systemSettings/blackSettings',
        name: 'blackSettings',
        component: _import('mine/settings/systemSettings/children/blackSettings'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/settings/systemSettings/praiseSettings',
        name: 'praiseSettings',
        component: _import('mine/settings/systemSettings/children/praiseSettings'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/settings/systemSettings/accountSettings',
        name: 'accountSettings',
        component: _import('mine/settings/systemSettings/children/accountSettings'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
    ]
  },
  {
    path: '/settings/helpFeedback',
    name: 'helpFeedback',
    component: _import('mine/settings/helpFeedback'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },




  {
    path: '/attention',
    name: 'attention',
    component: _import('mine/attention'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: '/downloadApp',
    name: 'downloadApp',
    component: _import('publicArea/downloadApp'),
    meta: {
      requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },



  {
    path: '/message',
    name: 'message',
    component: _import('mine/message'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    redirect: '/message/attention',
    children:[

      {
        path: '/message/attention',
        name: 'attention',
        component: _import('mine/message/attention'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/message/comment',
        name: 'comment',
        component: _import('mine/message/comment'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/message/contributeRequest',
        name: 'contributeRequest',
        component: _import('mine/message/contributeRequest'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/message/enjoyPraise',
        name: 'enjoyPraise',
        component: _import('mine/message/enjoyPraise'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/message/janeLetter',
        name: 'janeLetter',
        component: _import('mine/message/janeLetter'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/message/otherRemind',
        name: 'otherRemind',
        component: _import('mine/message/otherRemind'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/message/praisePay',
        name: 'praisePay',
        component: _import('mine/message/praisePay'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
    ]
  },

];

const contentRoutes = [

];

const routes = baseRoutes.concat(mineRoutes,contentRoutes);

let router = new Router({
  // mode: 'history', // 后端支持可开
  // scrollBehavior: () => ({ y: 0 }),//设置滚动行为
  mode: "history",// history模式
  routes: routes
})

export default router;
