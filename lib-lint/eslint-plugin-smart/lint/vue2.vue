<template>
  <div class="example">
    <!-- 未使用的变量将在ESLint中被检测 -->
    <p title="123" @click="methodA" sub="123" attr="123123" @change="methodB">
      {{ usedVariable }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    // console.log('Mounted hook')
  },

  // 钩子函数将按ESLint规则排序
  data() {
    return {
      usedVariable: 'Hello World',
      unusedVariable: 'This will trigger ESLint warning',
    }
  },
  created() {
    // console.log('Created hook')
  },
  name: 'ExampleComponent',

  // 属性将按ESLint规则排序
  props: {
    propB: {
      type: String,
      default: 'default value',
    },
    propA: {
      type: Number,
      required: true,
    },
  },
  components: {},
  methods: {
    methodB() {
      // console.log('Method B')
    },
    methodA() {
      // console.log('Method A')
    },
  },
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
