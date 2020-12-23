import request from '@/utils/request'

// 查询照片信息列表
export function listPhotoinfo(query) {
  return request({
    url: '/business/photoinfo/list',
    method: 'get',
    params: query
  })
}

// 查询照片信息详细
export function getPhotoinfo(photoId) {
  return request({
    url: '/business/photoinfo/' + photoId,
    method: 'get'
  })
}

// 新增照片信息
export function addPhotoinfo(data) {
  return request({
    url: '/business/photoinfo',
    method: 'post',
    data: data
  })
}

// 修改照片信息
export function updatePhotoinfo(data) {
  return request({
    url: '/business/photoinfo',
    method: 'put',
    data: data
  })
}

// 删除照片信息
export function delPhotoinfo(photoId) {
  return request({
    url: '/business/photoinfo/' + photoId,
    method: 'delete'
  })
}

// 导出照片信息
export function exportPhotoinfo(query) {
  return request({
    url: '/business/photoinfo/export',
    method: 'get',
    params: query
  })
}