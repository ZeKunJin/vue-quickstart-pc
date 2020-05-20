<template>
  <div class="home">
    <info-page :config="config" />
  </div>
</template>

<script>
import InfoPage from '@/components/InfoPage'
import config from './page'

export default {
  components: {
    InfoPage
  },

  data() {
    return {
      config
    }
  }
}
</script>
