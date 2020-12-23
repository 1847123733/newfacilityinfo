import request from '@/utils/request'

// 查询设备型号关联关系列表
export function listDevicehardwarerelation(query) {
  return request({
    url: '/manage/devicehardwarerelation/list',
    method: 'get',
    params: query
  })
}

// 查询设备型号关联关系详细
export function getDevicehardwarerelation(deviceHardwareId) {
  return request({
    url: '/manage/devicehardwarerelation/' + deviceHardwareId,
    method: 'get'
  })
}

// 新增设备型号关联关系
export function addDevicehardwarerelation(data) {
  return request({
    url: '/manage/devicehardwarerelation',
    method: 'post',
    data: data
  })
}

// 修改设备型号关联关系
export function updateDevicehardwarerelation(data) {
  return request({
    url: '/manage/devicehardwarerelation',
    method: 'put',
    data: data
  })
}

// 删除设备型号关联关系
export function delDevicehardwarerelation(deviceHardwareId) {
  return request({
    url: '/manage/devicehardwarerelation/' + deviceHardwareId,
    method: 'delete'
  })
}

// 导出设备型号关联关系
export function exportDevicehardwarerelation(query) {
  return request({
    url: '/manage/devicehardwarerelation/export',
    method: 'get',
    params: query
  })
}