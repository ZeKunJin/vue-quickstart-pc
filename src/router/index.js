import Vue from 'vue'
import VueRouter from 'vue-router'

import {RouteView} from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    redirect: '/auth/login',
    component: RouteView,
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/auth/register')
      },
      {
        path: 'forget',
        name: 'forget',
        component: () => import('@/views/auth/forget')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
