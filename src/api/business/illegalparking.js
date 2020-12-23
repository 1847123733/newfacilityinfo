import request from '@/utils/request'

// 查询违停信息列表
export function listIllegalparking(query) {
  return request({
    url: '/business/illegalparking/list',
    method: 'get',
    params: query
  })
}

// 查询违停信息详细
export function getIllegalparking(parkingId) {
  return request({
    url: '/business/illegalparking/' + parkingId,
    method: 'get'
  })
}

// 新增违停信息
export function addIllegalparking(data) {
  return request({
    url: '/business/illegalparking',
    method: 'post',
    data: data
  })
}

// 修改违停信息
export function updateIllegalparking(data) {
  return request({
    url: '/business/illegalparking',
    method: 'put',
    data: data
  })
}

// 删除违停信息
export function delIllegalparking(parkingId) {
  return request({
    url: '/business/illegalparking/' + parkingId,
    method: 'delete'
  })
}

// 导出违停信息
export function exportIllegalparking(query) {
  return request({
    url: '/business/illegalparking/export',
    method: 'get',
    params: query
  })
}