<template>
  <div class="grid-layout">
    <van-grid :border="config.border" :clickable="config.clickable" :column-num="config.columnNum">
      <van-grid-item
        v-for="item of config.options"
        :key="item.id"
        :icon="!item.icon && 'photo-o'"
        :text="item.text"
      >
        <img v-if="item.icon" slot="icon" :src="item.icon" alt />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem } from 'vant'
Vue.use(Grid).use(GridItem)

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
.grid-layout {
  img {
    width: 28px;
    height: 28px;
  }
}
</style>