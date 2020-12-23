import request from '@/utils/request'

// 查询软件版本升级对应设备关系列表
export function listSoftwaredevicerelation(query) {
  return request({
    url: '/manage/softwaredevicerelation/list',
    method: 'get',
    params: query
  })
}

// 查询软件版本升级对应设备关系详细
export function getSoftwaredevicerelation(relationId) {
  return request({
    url: '/manage/softwaredevicerelation/' + relationId,
    method: 'get'
  })
}
// 根据固件id获取已添加的升级设备列表
export function getUpdateDevicesBySoftwareId(query) {
  return request({
    url: '/manage/softwaredevicerelation/getUpdateDevicesBySoftwareId',
    method: 'get',
    params: query
  })
}
// 根据固件id获取可以升级的设备列表
export function getDevicesBySoftwareId(query) {
  return request({
    url: '/manage/softwaredevicerelation/getDevicesBySoftwareId',
    method: 'get',
    params: query
  })
}
// 新增软件版本升级对应设备关系
export function softwaredevicerelation(query) {
  return request({
    url: '/manage/softwaredevicerelation/add',
    method: 'get',
    params: query
  })
}

// 新增软件版本升级对应设备关系
export function addSoftwaredevicerelation(data) {
  return request({
    url: '/manage/softwaredevicerelation',
    method: 'post',
    data: data
  })
}

// 修改软件版本升级对应设备关系
export function updateSoftwaredevicerelation(data) {
  return request({
    url: '/manage/softwaredevicerelation',
    method: 'put',
    data: data
  })
}

// 删除软件版本升级对应设备关系
export function delSoftwaredevicerelation(relationId) {
  return request({
    url: '/manage/softwaredevicerelation/' + relationId,
    method: 'delete'
  })
}

// 导出软件版本升级对应设备关系
export function exportSoftwaredevicerelation(query) {
  return request({
    url: '/manage/softwaredevicerelation/export',
    method: 'get',
    params: query
  })
}
