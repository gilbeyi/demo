<template>
  <div id="app">
    <app-layout>
      <router-view/>
    </app-layout>
  </div>
</template>

<script>
import AppLayout from '@/layout/index'
export default {
  components: {
    AppLayout
  }
}
</script>
