import {fetch,post,put} from '@/utils/request';

const defaults = '/class1/api';
// 登录
export function loginIn(data = {}){
  return post(defaults + '/login',data)
}
// 注册
export function register(data = {}){
  return post(defaults + '/register',data)
}
// 登出
export function logout(){
  return post(defaults + '/logout')
}
// 刷新token
export function refresh(){
  return post(defaults + '/refresh')
}
