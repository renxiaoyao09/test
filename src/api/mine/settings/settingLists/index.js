import {fetch,post,put} from '@/utils/request';

const defaults = '/class1/api';
// 登录
export function settingLists(data = {}){
  return post(defaults + '/settingLists',data)
}

