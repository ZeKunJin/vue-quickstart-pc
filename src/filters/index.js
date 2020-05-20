import Vue from 'vue'
import * as common from './common'

const filters = {
  ...common
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})