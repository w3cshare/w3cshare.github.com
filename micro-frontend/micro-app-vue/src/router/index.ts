/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-11 14:12:26
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-11 22:34:16
 * @FilePath: /micro-frontend/micro-app-vue/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 路由模式
  // history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory('/micro-app-vue'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
