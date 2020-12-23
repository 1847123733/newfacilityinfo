import request from '@/utils/request'

// 查询设备升级日志列表
export function listUpdatelog(query) {
  return request({
    url: '/manage/updatelog/list',
    method: 'get',
    params: query
  })
}

// 查询设备升级日志详细
export function getUpdatelog(updateLogId) {
  return request({
    url: '/manage/updatelog/' + updateLogId,
    method: 'get'
  })
}

// 新增设备升级日志
export function addUpdatelog(data) {
  return request({
    url: '/manage/updatelog',
    method: 'post',
    data: data
  })
}

// 修改设备升级日志
export function updateUpdatelog(data) {
  return request({
    url: '/manage/updatelog',
    method: 'put',
    data: data
  })
}

// 删除设备升级日志
export function delUpdatelog(updateLogId) {
  return request({
    url: '/manage/updatelog/' + updateLogId,
    method: 'delete'
  })
}

// 导出设备升级日志
export function exportUpdatelog(query) {
  return request({
    url: '/manage/updatelog/export',
    method: 'get',
    params: query
  })
}