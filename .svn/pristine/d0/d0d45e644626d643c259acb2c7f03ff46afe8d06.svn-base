import request from '@/utils/request'

// 查询软件升级版本信息列表
export function listVersion(query) {
  return request({
    url: '/manage/version/list',
    method: 'get',
    params: query
  })
}

// 查询软件升级版本信息详细
export function getVersion(versionId) {
  return request({
    url: '/manage/version/' + versionId,
    method: 'get'
  })
}

// 新增软件升级版本信息
export function addVersion(data) {
  return request({
    url: '/manage/version',
    method: 'post',
    data: data
  })
}

// 修改软件升级版本信息
export function updateVersion(data) {
  return request({
    url: '/manage/version',
    method: 'put',
    data: data
  })
}

// 删除软件升级版本信息
export function delVersion(versionId) {
  return request({
    url: '/manage/version/' + versionId,
    method: 'delete'
  })
}

// 导出软件升级版本信息
export function exportVersion(query) {
  return request({
    url: '/manage/version/export',
    method: 'get',
    params: query
  })
}