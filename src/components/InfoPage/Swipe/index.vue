<template>
  <van-swipe>
    <van-swipe-item
      v-for="option in config.options"
      :key="option.id"
      :style="`height: ${config.height}`"
    >
      <img :src="option.img" class="banner" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)

export default {
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
