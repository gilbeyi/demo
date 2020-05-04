<template>
  <div class="layout">
    <app-header />
    <slot />
  </div>
</template>

<script>
import AppHeader from '@/components/presentational/AppHeader'
export default {
  name: 'AppLayout',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
}
</style>
