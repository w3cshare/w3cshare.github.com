/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-11 14:12:26
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-11 16:15:31
 * @FilePath: /FullStack/micro-frontend/micro-app-vue/vite.config.ts
 * @Description:
 */
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
