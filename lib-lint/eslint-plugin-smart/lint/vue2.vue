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
  components: {},

  created() {
    // console.log('Created hook')
  },

  // 钩子函数将按ESLint规则排序
  data() {
    return {
      unusedVariable: 'This will trigger ESLint warning',
      usedVariable: 'Hello World',
    }
  },
  methods: {
    methodA() {
      // console.log('Method A')
    },
    methodB() {
      // console.log('Method B')
    },
  },

  mounted() {
    // console.log('Mounted hook')
  },
  name: 'ExampleComponent',

  // 属性将按ESLint规则排序
  props: {
    propA: {
      required: true,
      type: Number,
    },
    propB: {
      default: 'default value',
      type: String,
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
