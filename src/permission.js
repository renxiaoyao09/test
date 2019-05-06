import router from '@/router';
import store from '@/store';
import { Message } from 'element-ui';
import { getToken, setToken, removeToken } from '@/utils/cookies';
import {getMe} from '@/api/mine/settings/userInfo';

router.beforeEach((to, from, next) => {
  if (store.state.app.token) {
    if (to.path == '/login' || to.path == '/register') {
      Message({
        showClose: true,
        message: '您已登录！',
        type: 'success'
      });
      next({
        path: from.path
      })
    }
  }else{
    if (to.meta.requireAuth) {
      next({
        path: '/login'
      })
    }
  }
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.app.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }else {
      next({
        path: '/login',
        query: {redirect:to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }


  if (store.state.app.token && JSON.stringify(store.state.app.me) == '{}') {
    getMe().then((response)=>{
      store.dispatch('getMe', response.data);
    }).catch((error) => {
      if(to.fullPath.split('redirect').length < 2){
        next({
          path: '/login',
          query: {redirect:to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
      }else{
        alert('获取用户信息出错！');
      }
    });
  };
});
