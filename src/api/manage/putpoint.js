import request from '@/utils/request'

// 查询设备投放地点列表
export function listPutpoint(query) {
  return request({
    url: '/manage/putpoint/list',
    method: 'get',
    params: query
  })
}

// 查询设备投放地点详细
export function getPutpoint(putPointId) {
  return request({
    url: '/manage/putpoint/' + putPointId,
    method: 'get'
  })
}

// 新增设备投放地点
export function addPutpoint(data) {
  return request({
    url: '/manage/putpoint',
    method: 'post',
    data: data
  })
}

// 修改设备投放地点
export function updatePutpoint(data) {
  return request({
    url: '/manage/putpoint',
    method: 'put',
    data: data
  })
}

// 删除设备投放地点
export function delPutpoint(putPointId) {
  return request({
    url: '/manage/putpoint/' + putPointId,
    method: 'delete'
  })
}

// 导出设备投放地点
export function exportPutpoint(query) {
  return request({
    url: '/manage/putpoint/export',
    method: 'get',
    params: query
  })
}