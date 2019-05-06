import {fetch,post,put} from '@/utils/request';

const defaults = '/class1/api/mine';

// 获取详细信息
export function getMe(){
  return post(defaults + '/me')
}
