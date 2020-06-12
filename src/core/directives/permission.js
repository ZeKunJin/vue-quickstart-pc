import Vue from 'vue'
import store from '@/store'

const permission = Vue.directive('permission', {
  inserted: (el, binding, vnode) => {
    const { value } = binding
    const roles = store.getters && store.getters.roles

    if (value && value instanceof Array && value.length > 0) {
      const hasPermission = roles.some(role => value.includes(role))

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      console.log('props type error')
    }
  }
})

export default permission
