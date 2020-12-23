import request from '@/utils/request'

// 查询产品模块列表
export function listPackage(query) {
  return request({
    url: '/manage/package/list',
    method: 'get',
    params: query
  })
}

// 查询产品模块详细
export function getPackage(packageId) {
  return request({
    url: '/manage/package/' + packageId,
    method: 'get'
  })
}

// 新增产品模块
export function addPackage(data) {
  return request({
    url: '/manage/package',
    method: 'post',
    data: data
  })
}

// 修改产品模块
export function updatePackage(data) {
  return request({
    url: '/manage/package',
    method: 'put',
    data: data
  })
}

// 删除产品模块
export function delPackage(packageId) {
  return request({
    url: '/manage/package/' + packageId,
    method: 'delete'
  })
}

// 导出产品模块
export function exportPackage(query) {
  return request({
    url: '/manage/package/export',
    method: 'get',
    params: query
  })
}