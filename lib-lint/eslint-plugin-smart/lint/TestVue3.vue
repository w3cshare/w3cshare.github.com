<template>
  <div class="example">
    <!-- 未使用的变量将在ESLint中被检测 -->
    <p title="123" @click="methodA" sub="123" attr="123123" :abc="abc" @change="methodB">
      {{ usedVariable }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

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

// 属性将按ESLint规则排序
defineProps({
  propA: {
    required: true,
    type: Number,
  },
  propB: {
    default: 'default value',
    type: String,
  },
})

const methodB = () => {
  // console.log('Method B')
}
</script>

<style lang="less">
// LESS语法错误将被检测
.example {
  color: @undefined-variable; // 这将触发LESS语法警告
  .nested {
    font-size: 14px;
    color: blue;
  }

  height: 200px;
  width: 200px;
}
</style>
