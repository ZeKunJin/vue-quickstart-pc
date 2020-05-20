<template>
  <div class="info-page-layout">
    <div v-for="item in config" :key="item.id">
      <component :is="item.type" :config="item" />
    </div>
  </div>
</template>

<script>
import Swipe from './Swipe'
import Grid from './Grid'

export default {
  props: {
    config: {
      type: Array,
      default: () => []
    }
  },

  components: {
    Swipe,
    Grid
  }
}
</script>
