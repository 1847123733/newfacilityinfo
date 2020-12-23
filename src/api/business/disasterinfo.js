import request from '@/utils/request'

// 查询灾情信息列表
export function listDisasterinfo(query) {
  return request({
    url: '/business/disasterinfo/list',
    method: 'get',
    params: query
  })
}

// 查询灾情信息详细
export function getDisasterinfo(disasterId) {
  return request({
    url: '/business/disasterinfo/' + disasterId,
    method: 'get'
  })
}

// 新增灾情信息
export function addDisasterinfo(data) {
  return request({
    url: '/business/disasterinfo',
    method: 'post',
    data: data
  })
}

// 修改灾情信息
export function updateDisasterinfo(data) {
  return request({
    url: '/business/disasterinfo',
    method: 'put',
    data: data
  })
}

// 删除灾情信息
export function delDisasterinfo(disasterId) {
  return request({
    url: '/business/disasterinfo/' + disasterId,
    method: 'delete'
  })
}

// 导出灾情信息
export function exportDisasterinfo(query) {
  return request({
    url: '/business/disasterinfo/export',
    method: 'get',
    params: query
  })
}