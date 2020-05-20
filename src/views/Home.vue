<template>
  <div class="home">
    desktop: {{ isDesktop() }}<br />
    tablet: {{ isTablet() }}<br />
    mobile: {{ isMobile() }}<br />
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
import { AppDeviceEnquire, mixinDevice } from '@/utils/mixin'
Vue.use(Button)

export default {
  mixins: [AppDeviceEnquire, mixinDevice]
}
</script>
