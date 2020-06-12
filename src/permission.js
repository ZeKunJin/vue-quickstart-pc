import Vue from 'vue'
import router from './router'

import NProgress from 'nprogress'
import { ACCESS_TOKEN } from '@/store/mutation-types'

import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['login', 'forget', 'register']
const defaultRoutePath = '/dashboard'

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (Vue.ls.get(ACCESS_TOKEN)) {
    // has token
    if (to.path === '/user/login') {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ path: '/auth/login', query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
