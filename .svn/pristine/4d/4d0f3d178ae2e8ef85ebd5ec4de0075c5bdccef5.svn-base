import request from '@/utils/request'

// 查询业主信息列表
export function listPersoninfo(query) {
  return request({
    url: '/business/personinfo/list',
    method: 'get',
    params: query
  })
}

// 查询业主信息详细
export function getPersoninfo(personId) {
  return request({
    url: '/business/personinfo/' + personId,
    method: 'get'
  })
}

// 新增业主信息
export function addPersoninfo(data) {
  return request({
    url: '/business/personinfo',
    method: 'post',
    data: data
  })
}

// 修改业主信息
export function updatePersoninfo(data) {
  return request({
    url: '/business/personinfo',
    method: 'put',
    data: data
  })
}

// 删除业主信息
export function delPersoninfo(personId) {
  return request({
    url: '/business/personinfo/' + personId,
    method: 'delete'
  })
}

// 导出业主信息
export function exportPersoninfo(query) {
  return request({
    url: '/business/personinfo/export',
    method: 'get',
    params: query
  })
}