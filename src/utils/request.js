import axios from 'axios';//引入axios依赖
import { Message } from 'element-ui';
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router from '@/router/index'//引入路由对象
import {refresh} from '@/api/base/login';
import store from '@/store';

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';

//http request 封装请求头拦截器
axios.interceptors.request.use(
  config => {
    var token = ''
    if(getToken('access_token')){
      token = getToken('access_token')
    }//注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers["Content-Type"] = 'application/json;charset=utf-8';
    if(token != ''){
      config.headers.Authorization  = 'Bearer '+token;
      config.headers.Accept  = 'application/json';
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 封装后台返回拦截器

axios.interceptors.response.use(
  response => {
    console.log(router);
    if (response.config.url.indexOf('logout') > 0 && response.data.status == 200) {
      if(router.app._route.meta.requireAuth){
        router.push({
          path: '/login',
          query: {redirect:router.history.current.fullPath}
        })
      }
    }
    return response;
  },
  error => {
    Message.error(error.message);
    if (error.name == 'Error' && error.message.indexOf(401) > 0 && getToken('access_token')) {
      store.dispatch('Logout');
      refresh().then((response)=>{
        if (response.status == 200) {
          store.dispatch('Login', response.data);
        }else{
          router.push({
            path:"/login",
            querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
          })
          return
        }
      }).catch((err)=>{
        router.push({
          path:"/login",
          querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
        })
        return
      })
    }
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装导出Excal文件请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function exportExcel(url,data = {}){
  return new Promise((resolve,reject) => {
    axios({
      method: 'post',
      url: url, // 请求地址
      data: data, // 参数
      responseType: 'blob' // 表明返回服务器返回的数据类型
    })
    .then(response => {
      resolve(response.data);
      let blob = new Blob([response.data], {type: "application/vnd.ms-excel"});
      let fileName = "订单列表_"+Date.parse(new Date())+".xls" ;
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName);
      } else {
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
      }
    },err => {
      reject(err)
    })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}
