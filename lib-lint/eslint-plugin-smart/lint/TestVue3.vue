<template lang="pug">
  <div class="example">
    <!-- 未使用的变量将在ESLint中被检测 -->
    <p title="123" sub="123" attr="123123" :abc="abc" @click="methodA" @change="methodB">
      {{ usedVariable }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
  propA: number
  propB?: string
}>()

// 组合式API将按ESLint规则排序
const usedVariable = ref('Hello World')
const _unusedVariable = ref('This will trigger ESLint warning') // 符合ESLint规则的未使用变量
const abc = ref('abc')

// 生命周期钩子将按ESLint规则排序
onMounted(() => {
  // console.log('Mounted hook')
})

const methodA = () => {
  // console.log('Method A')
}

const methodB = () => {
  // console.log('Method B')
}
</script>

<style lang="less" scoped>
.example {
  color: @undefined-variable;
  .nested {
    font-size: 14px;
    color: blue;
  }

  height: 200px;
  width: 200px;
}
</style>
