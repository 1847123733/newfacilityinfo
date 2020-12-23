import request from '@/utils/request'

// 查询访客信息列表
export function listVisitorinfo(query) {
  return request({
    url: '/business/visitorinfo/list',
    method: 'get',
    params: query
  })
}

// 查询访客信息详细
export function getVisitorinfo(visitorId) {
  return request({
    url: '/business/visitorinfo/' + visitorId,
    method: 'get'
  })
}

// 新增访客信息
export function addVisitorinfo(data) {
  return request({
    url: '/business/visitorinfo',
    method: 'post',
    data: data
  })
}

// 修改访客信息
export function updateVisitorinfo(data) {
  return request({
    url: '/business/visitorinfo',
    method: 'put',
    data: data
  })
}

// 删除访客信息
export function delVisitorinfo(visitorId) {
  return request({
    url: '/business/visitorinfo/' + visitorId,
    method: 'delete'
  })
}

// 导出访客信息
export function exportVisitorinfo(query) {
  return request({
    url: '/business/visitorinfo/export',
    method: 'get',
    params: query
  })
}