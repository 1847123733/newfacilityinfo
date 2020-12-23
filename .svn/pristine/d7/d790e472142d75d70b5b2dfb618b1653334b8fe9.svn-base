import request from '@/utils/request'

// 查询可疑人员信息列表
export function listDubiousinfo(query) {
  return request({
    url: '/business/dubiousinfo/list',
    method: 'get',
    params: query
  })
}

// 查询可疑人员信息详细
export function getDubiousinfo(dubiousId) {
  return request({
    url: '/business/dubiousinfo/' + dubiousId,
    method: 'get'
  })
}

// 新增可疑人员信息
export function addDubiousinfo(data) {
  return request({
    url: '/business/dubiousinfo',
    method: 'post',
    data: data
  })
}

// 修改可疑人员信息
export function updateDubiousinfo(data) {
  return request({
    url: '/business/dubiousinfo',
    method: 'put',
    data: data
  })
}

// 删除可疑人员信息
export function delDubiousinfo(dubiousId) {
  return request({
    url: '/business/dubiousinfo/' + dubiousId,
    method: 'delete'
  })
}

// 导出可疑人员信息
export function exportDubiousinfo(query) {
  return request({
    url: '/business/dubiousinfo/export',
    method: 'get',
    params: query
  })
}