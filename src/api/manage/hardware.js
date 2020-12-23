import request from '@/utils/request'

// 查询设备产品型号列表
export function listHardware(query) {
  return request({
    url: '/manage/hardware/list',
    method: 'get',
    params: query
  })
}

// 查询设备产品型号详细
export function getHardware(hardwareId) {
  return request({
    url: '/manage/hardware/' + hardwareId,
    method: 'get'
  })
}

// 新增设备产品型号
export function addHardware(data) {
  return request({
    url: '/manage/hardware',
    method: 'post',
    data: data
  })
}

// 修改设备产品型号
export function updateHardware(data) {
  return request({
    url: '/manage/hardware',
    method: 'put',
    data: data
  })
}

// 删除设备产品型号
export function delHardware(hardwareId) {
  return request({
    url: '/manage/hardware/' + hardwareId,
    method: 'delete'
  })
}

// 导出设备产品型号
export function exportHardware(query) {
  return request({
    url: '/manage/hardware/export',
    method: 'get',
    params: query
  })
}