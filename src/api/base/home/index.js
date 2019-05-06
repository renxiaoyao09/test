import {fetch,post,put} from '@/utils/request';

const defaults = '/class1/api';

export function getUser(data = {}){
  return post(defaults + '/me',data)
}

