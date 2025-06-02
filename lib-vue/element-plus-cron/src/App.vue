<script setup>
import cron from './components/vue3-cron-core/Index.vue'
import { ref } from 'vue'

const visible = ref(false)
const open = () => {
  visible.value = true
}
</script>

<template>
  <div>
    <div style="text-align: center; margin-top: 25px">
      <el-button type="primary" @click="open">Cron Dialog</el-button>
    </div>
    <div style="text-align: center">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <el-dialog v-model="visible" class="dialog" title="Cron 弹框" width="700">
      <cron />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="visible = false"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.dialog {
  text-align: left;
}
</style>
