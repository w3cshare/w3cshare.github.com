<template lang="pug">
  <div class="example">
    <!-- 未使用的变量将在ESLint中被检测 -->
    <p @click="methodA" title="123" sub-title="123" attr="123123" @change="methodB">
      {{ usedVariable }}
    </p>
    <lint-cp />
  </div>
</template>

<script lang="ts" setup>
import LintCp from './lintCp.vue'
defineOptions({
  name: 'ExampleComponent',
  components: { LintCp },

  // 钩子函数将按ESLint规则排序
  data() {
    return {
      unusedVariable: 'This will trigger ESLint warning',
      usedVariable: 'Hello World',
    }
  },

  created() {
    // console.log('Created hook')
  },

  mounted() {
    // console.log('Mounted hook')
  },
  methods: {
    methodA() {
      // console.log('Method A')
    },
    methodB() {
      // console.log('Method B')
    },
  },
})
</script>

<style lang="less" scoped>
@undefined-variable: #cf0;
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
