import request from '@/utils/request'

// 查询设备信息列表
export function listDevice(query) {
  return request({
    url: '/manage/device/list',
    method: 'get',
    params: query
  })
}

// 查询设备信息详细
export function getDevice(deviceId) {
  return request({
    url: '/manage/device/' + deviceId,
    method: 'get'
  })
}

// 新增设备信息
export function addDevice(data) {
  return request({
    url: '/manage/device',
    method: 'post',
    data: data
  })
}

// 修改设备信息
export function updateDevice(data) {
  return request({
    url: '/manage/device',
    method: 'put',
    data: data
  })
}

// 删除设备信息
export function delDevice(deviceId) {
  return request({
    url: '/manage/device/' + deviceId,
    method: 'delete'
  })
}

// 导出设备信息
export function exportDevice(query) {
  return request({
    url: '/manage/device/export',
    method: 'get',
    params: query
  })
}