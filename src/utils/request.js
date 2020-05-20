import Vue from 'vue'
import axios from 'axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000
})

const err = error => {
  const { response } = error
  if (response) {
    const { data, status } = error.response
    switch (status) {
      default:
        break
    }
  }

  return Promise.reject(error)
}

service.interceptors.request.use(
  config => {
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (token) {
      config.headers['AUTH-TOKEN'] = token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(response => {
  return response.data
}, err)

export default service
