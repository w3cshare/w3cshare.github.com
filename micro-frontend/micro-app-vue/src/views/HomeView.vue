<script setup lang="ts">
import { useRoute } from 'vue-router'

import TheWelcome from './components/TheWelcome.vue'
const route = useRoute()
console.log(route)
console.log(route.query)
console.log(route.params)
console.log(route.fullPath)
console.log(route.meta)
console.log(TheWelcome)
</script>

<template lang="pug">
<main>
    <TheWelcome />
  </main>
</template>

<style scoped lang="less">
@ver: #cf0;

main {
  height: 100%;
  background-color: @ver;
  width: 100%;
}
</style>
