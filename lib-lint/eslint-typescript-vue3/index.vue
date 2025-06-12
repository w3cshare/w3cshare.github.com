<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {}
  },

  mounted() {
    console.log(this.$route)
  },
  methods: {},
}
</script>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project, check out the
      <a rel="noopener" alt="Vue.js" title="Vue.js" target="_blank" href="">documentation</a>.
    </p>
  </div>
</template>
<style scoped>
.hello {
  color: #42b983;
}
</style>
