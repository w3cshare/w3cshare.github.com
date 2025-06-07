<template>
  <div>
    <h1>Hello, World!</h1>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'HelloWorld',
})

const aaa = {
  a: 1,
  b: 2,
  c: 3,
}

console.log(aaa)
</script>

<style scoped></style>
