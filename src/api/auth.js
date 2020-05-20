import request from '@/utils/request'

const api = {
  LOGIN: '/auth/login'
}

export const login = data => {
  return request({
    url: api.LOGIN,
    method: 'post',
    data
  })
}