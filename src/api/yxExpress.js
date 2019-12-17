import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/yxExpress',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/yxExpress/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/yxExpress',
    method: 'put',
    data
  })
}

