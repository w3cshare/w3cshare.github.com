# 开发规范

## 代码规范

### 文件夹命名规范

1. **项目根目录规范**

   - 使用小写字母和连字符

     ```
     // 好的命名
     src/
     tests/
     docs/
     node_modules/
     public/

     // 避免的命名
     Source/
     Test_Files/
     documentation/
     ```

   - 保持命名简洁且具有描述性

     ```
     // 好的命名
     config/
     scripts/
     assets/

     // 避免的命名
     configuration_files/
     shell_scripts/
     static_assets/
     ```

2. **源码目录规范**

   - 使用小写字母，采用复数形式

     ```
     // 好的命名
     src/
       components/
       hooks/
       utils/
       services/
       types/

     // 避免的命名
     src/
       component/
       hook/
       util/
       service/
       type/
     ```

   - 特定功能目录使用清晰的描述性名称

     ```
     // 好的命名
     src/
       api-services/
       form-validators/
       error-handlers/

     // 避免的命名
     src/
       apis/
       validators/
       handlers/
     ```

3. **业务模块规范**

   - 使用小写字母，采用特性优先的命名方式

     ```
     // 好的命名
     src/
       features/
         user-management/
         order-processing/
         inventory-control/

     // 避免的命名
     src/
       modules/
         users/
         orders/
         inventory/
     ```

   - 子模块命名要体现层次关系

     ```
     // 好的命名
     features/
       user-management/
         components/
         services/
         hooks/

     // 避免的命名
     features/
       user-management/
         comp/
         srv/
         custom-hooks/
     ```

4. **测试文件夹规范**

   - 测试文件夹与源文件结构保持一致

     ```
     // 好的结构
     src/
       components/
         Button/
     tests/
       components/
         Button/

     // 避免的结构
     src/
       components/
         Button/
     tests/
       button-tests/
     ```

   - 测试类型分类清晰

     ```
     // 好的命名
     tests/
       unit/
       integration/
       e2e/

     // 避免的命名
     tests/
       test1/
       test2/
       test3/
     ```

### 通用规范

1. **命名规范**

   - 使用有意义的名称

     ```typescript
     // 好的命名
     const userProfile = { ... };
     function calculateTotalPrice() { ... }

     // 避免的命名
     const data = { ... };
     function calc() { ... }
     ```

   - 避免使用缩写（除非是广泛接受的缩写）

     ```typescript
     // 好的命名
     const userAuthentication = { ... };
     const maxItemCount = 100;

     // 允许的缩写
     const userId = 1;  // id 是广泛接受的缩写
     const htmlElement = document.querySelector('div');  // html 是广泛接受的缩写

     // 避免的缩写
     const usrAuth = { ... };
     const maxItmCnt = 100;
     ```

   - 保持命名一致性

     ```typescript
     // 好的命名一致性
     const getUserProfile = () => { ... };
     const updateUserProfile = () => { ... };
     const deleteUserProfile = () => { ... };

     // 避免的命名不一致
     const getProfile = () => { ... };
     const updateUserData = () => { ... };
     const removeProfile = () => { ... };
     ```

2. **注释规范**

   - 使用 JSDoc 风格的注释

     ```typescript
     // 好的 JSDoc 注释
     /**
      * 计算两个数字的和
      * @param {number} a - 第一个数字
      * @param {number} b - 第二个数字
      * @returns {number} 两个数字的和
      */
     function add(a: number, b: number): number {
       return a + b
     }

     // 避免的注释
     // 计算和
     function add(a: number, b: number): number {
       return a + b
     }
     ```

   - 为复杂逻辑添加注释

     ```typescript
     // 好的复杂逻辑注释
     function calculateDiscount(price: number, userType: string): number {
       // VIP用户享受85折优惠
       if (userType === 'VIP') {
         return price * 0.85
       }
       // 新用户首次购买享受90折优惠
       if (userType === 'NEW') {
         return price * 0.9
       }
       return price
     }

     // 避免的注释方式
     function calculateDiscount(price: number, userType: string): number {
       if (userType === 'VIP') return price * 0.85
       if (userType === 'NEW') return price * 0.9
       return price
     }
     ```

   - 及时更新注释

     ```typescript
     // 好的注释更新
     /**
      * 用户注册函数
      * @param {Object} userData - 用户数据
      * @param {string} userData.email - 用户邮箱
      * @param {string} userData.password - 用户密码
      * @param {string} userData.phone - 用户手机号（可选）
      * @returns {Promise<User>} 创建的用户对象
      */
     async function registerUser(userData: UserData): Promise<User> { ... }

     // 过时的注释（未更新）
     /**
      * 用户注册函数
      * @param {string} email - 用户邮箱
      * @param {string} password - 用户密码
      * @returns {Promise<User>} 创建的用户对象
      */
     async function registerUser(userData: UserData): Promise<User> { ... }
     ```

3. **格式规范**

   - 使用 2 个空格缩进

     ```typescript
     // 好的缩进
     function example() {
       if (condition) {
         doSomething()
       }
     }

     // 避免的缩进
     function example() {
       if (condition) {
         doSomething()
       }
     }
     ```

   - 使用分号结束语句

     ```typescript
     // 好的分号使用
     const name = 'John'
     console.log(name)

     // 避免省略分号
     const name = 'John'
     console.log(name)
     ```

   - 使用单引号

     ```typescript
     // 好的引号使用
     const name = 'John'
     const template = `Hello ${name}`

     // 避免使用双引号
     const name = 'John'
     ```

   - 最大行长度为 100 字符

     ```typescript
     // 好的行长度控制
     const userList = users.filter(user => user.isActive).map(user => user.name)

     // 避免超长行
     const userList = users
       .filter(user => user.isActive)
       .map(user => user.name)
       .filter(name => name.length > 0)
       .join(', ')
     ```

### TypeScript 规范

1. **类型定义**

   - 优先使用接口而不是类型别名
   - 使用明确的类型而不是 any
   - 使用泛型增加代码复用性

2. **类型声明**

   ```typescript
   // 好的做法
   interface User {
     id: string
     name: string
     email: string
   }

   // 避免使用
   type User = any
   ```

3. **类型推断**
   - 让 TypeScript 自动推断类型
   - 只在必要时显式声明类型

### Vue3 规范

1. **项目结构**

   ```
   src/
     assets/          # 静态资源
     components/      # 共享组件
       base/         # 基础组件
       business/     # 业务组件
     composables/    # 组合式函数
     layouts/        # 布局组件
     router/         # 路由配置
     stores/         # 状态管理
     styles/         # 全局样式
     types/          # 类型定义
     utils/          # 工具函数
     views/          # 页面组件
   ```

2. **组件命名**

   - 使用 PascalCase 命名组件文件和组件名
   - 基础组件使用 Base 前缀，如 `BaseButton.vue`
   - 单例组件使用 The 前缀，如 `TheHeader.vue`
   - 紧密耦合的组件使用父组件名作为前缀

   ```
   components/
     TodoList.vue
     TodoListItem.vue
     TodoListItemButton.vue
   ```

3. **组件结构**

   ```vue
   <template>
     <div :class="$style.container">
       <slot name="header" />
       <div :class="$style.content">
         {{ computedValue }}
       </div>
       <slot />
     </div>
   </template>

   <script setup lang="ts">
   import { ref, computed } from 'vue'
   import type { PropType } from 'vue'
   import { useUserStore } from '@/stores/user'

   // 类型定义
   interface Props {
     title: string
     items?: Item[]
   }

   // Props 定义
   const props = defineProps<Props>()

   // Emits 定义
   const emit = defineEmits<{
     (e: 'update', value: string): void
     (e: 'delete'): void
   }>()

   // 响应式数据
   const count = ref(0)

   // 计算属性
   const computedValue = computed(() => `${props.title}: ${count.value}`)

   // 方法
   const increment = () => {
     count.value++
     emit('update', count.value.toString())
   }
   </script>

   <style module>
   .container {
     display: flex;
     flex-direction: column;
   }

   .content {
     padding: 1rem;
   }
   </style>
   ```

4. **组合式API最佳实践**

   - 使用 `<script setup>` 语法糖
   - 使用 TypeScript 定义 props 和 emits
   - 使用组合式函数（composables）抽取复用逻辑
   - 使用 `defineExpose` 显式暴露组件属性

   ```ts
   // useCounter.ts
   export function useCounter(initialValue = 0) {
     const count = ref(initialValue)
     const increment = () => count.value++
     const decrement = () => count.value--

     return {
       count: readonly(count),
       increment,
       decrement,
     }
   }
   ```

5. **样式规范**

   - 使用 CSS Modules 或 Scoped CSS
   - 遵循 BEM 命名规范
   - CSS属性顺序：布局 > 尺寸 > 文字 > 视觉
   - 使用 CSS 变量管理主题

   ```css
   :root {
     --primary-color: #1890ff;
     --font-size-base: 14px;
   }

   .button {
     /* 布局 */
     display: flex;
     position: relative;

     /* 尺寸 */
     width: 100px;
     height: 40px;

     /* 文字 */
     font-size: var(--font-size-base);

     /* 视觉 */
     background: var(--primary-color);
     border-radius: 4px;
   }
   ```

6. **状态管理**

   - 小型应用使用 `provide/inject`
   - 中大型应用使用 Pinia
   - 按业务模块组织 Store
   - 使用组合式API风格定义 Store

   ```ts
   // stores/user.ts
   export const useUserStore = defineStore('user', () => {
     const user = ref<User | null>(null)
     const isLoggedIn = computed(() => !!user.value)

     async function login(credentials: Credentials) {
       user.value = await api.login(credentials)
     }

     return {
       user,
       isLoggedIn,
       login,
     }
   })
   ```

7. **性能优化**

   - 合理使用 `v-show` 和 `v-if`
   - 使用 `v-once` 渲染静态内容
   - 使用 `v-memo` 缓存模板
   - 异步组件和路由懒加载
   - 虚拟列表优化长列表

   ```vue
   <script setup>
   import { defineAsyncComponent } from 'vue'

   const AsyncComp = defineAsyncComponent(() => import('./components/HeavyComponent.vue'))
   </script>
   ```

### React16+ 规范

1. **项目结构**

   ```
   src/
     assets/          # 静态资源
     components/      # 共享组件
       base/         # 基础组件
       business/     # 业务组件
     hooks/          # 自定义Hooks
     layouts/        # 布局组件
     pages/          # 页面组件
     services/       # API服务
     stores/         # 状态管理
     styles/         # 全局样式
     types/          # 类型定义
     utils/          # 工具函数
   ```

2. **组件命名与文件组织**

   - 组件文件使用 PascalCase
   - 基础组件使用 Base 前缀
   - 每个组件一个目录，包含组件、样式、测试等

   ```
   Button/
     index.tsx        # 组件入口
     styles.module.css # 组件样式
     types.ts         # 类型定义
     hooks.ts         # 相关hooks
     utils.ts         # 工具函数
     __tests__/       # 测试文件
   ```

3. **函数组件最佳实践**

   ```tsx
   import { FC, memo, useState, useCallback } from 'react'
   import type { MouseEvent } from 'react'
   import styles from './styles.module.css'

   interface Props {
     title: string
     onAction?: (value: string) => void
   }

   export const Button: FC<Props> = memo(({ title, onAction }) => {
     const [count, setCount] = useState(0)

     const handleClick = useCallback(
       (e: MouseEvent) => {
         setCount(prev => prev + 1)
         onAction?.(count.toString())
       },
       [count, onAction],
     )

     return (
       <button className={styles.button} onClick={handleClick} type="button">
         {title} ({count})
       </button>
     )
   })

   Button.displayName = 'Button'
   ```

4. **Hooks 规范**

   - 自定义Hook使用use前缀
   - 遵循Hooks的调用规则
   - 使用依赖数组优化性能
   - 使用TypeScript定义类型

   ```tsx
   import { useState, useEffect, useCallback } from 'react'

   interface UseCounterOptions {
     initialValue?: number
     min?: number
     max?: number
   }

   export function useCounter({ initialValue = 0, min = 0, max = 100 }: UseCounterOptions = {}) {
     const [count, setCount] = useState(initialValue)

     const increment = useCallback(() => {
       setCount(prev => Math.min(max, prev + 1))
     }, [max])

     const decrement = useCallback(() => {
       setCount(prev => Math.max(min, prev - 1))
     }, [min])

     return { count, increment, decrement }
   }
   ```

5. **样式规范**

   - 使用 CSS Modules 或 styled-components
   - 组件样式文件使用 module.css 后缀
   - 遵循 BEM 命名规范
   - CSS属性顺序：布局 > 尺寸 > 文字 > 视觉

   ```css
   /* styles.module.css */
   .container {
     /* 布局 */
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     gap: 1rem;

     /* 尺寸 */
     width: 100%;
     max-width: 1200px;

     /* 文字 */
     font-family: var(--font-family);

     /* 视觉 */
     background: var(--bg-color);
     border-radius: var(--border-radius);
   }
   ```

6. **状态管理**

   - 小型应用使用 Context + useReducer
   - 中大型应用使用 Redux Toolkit
   - 按业务模块组织 Slice
   - 使用 RTK Query 处理API请求

   ```tsx
   // store/features/userSlice.ts
   import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

   export const loginUser = createAsyncThunk('user/login', async (credentials: Credentials) => {
     const response = await api.login(credentials)
     return response.data
   })

   const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers: {
       logout: state => {
         state.user = null
         state.token = null
       },
     },
     extraReducers: builder => {
       builder.addCase(loginUser.fulfilled, (state, action) => {
         state.user = action.payload
       })
     },
   })
   ```

7. **性能优化**

   - 使用 memo 优化组件重渲染
   - 使用 useMemo 和 useCallback 缓存值和函数
   - 使用 React.lazy 和 Suspense 实现代码分割
   - 虚拟列表优化长列表渲染

   ```tsx
   const LazyComponent = React.lazy(() => import('./components/HeavyComponent'))

   function App() {
     return (
       <Suspense fallback={<Loading />}>
         <LazyComponent />
       </Suspense>
     )
   }
   ```

8. **导入顺序规范**

   ```tsx
   // 1. React 相关
   import React, { useState, useEffect } from 'react'
   import type { FC, MouseEvent } from 'react'

   // 2. 第三方库
   import { useDispatch } from 'react-redux'
   import classnames from 'classnames'

   // 3. 组件
   import { Button } from '@/components'

   // 4. Hooks、工具函数
   import { useUser } from '@/hooks'
   import { formatDate } from '@/utils'

   // 5. 类型、常量、样式
   import type { User } from '@/types'
   import { ROUTES } from '@/constants'
   import styles from './styles.module.css'
   ```

### NestJS 规范

1. **模块组织**

   - 按功能模块划分
   - 使用依赖注入
   - 遵循单一职责原则

2. **控制器规范**

   ```typescript
   @Controller('users')
   export class UsersController {
     constructor(private readonly usersService: UsersService) {}

     @Get()
     async findAll(): Promise<User[]> {
       return this.usersService.findAll()
     }
   }
   ```

3. **服务规范**
   - 使用服务类封装业务逻辑
   - 使用 DTO 进行数据验证
   - 使用异常过滤器处理错误

## Git 规范

### 分支管理

1. **分支命名**

   - 主分支：`main`, `master`
   - 开发分支：`develop`
   - 功能分支：`feature/feature-name`
   - 修复分支：`fix/bug-name`
   - 发布分支：`release/version`

2. **提交规范**

   ```
   <type>(<scope>): <subject>

   <body>

   <footer>
   ```

   - type: feat, fix, docs, style, refactor, test, chore
   - scope: 影响范围
   - subject: 简短描述
   - body: 详细描述
   - footer: 关闭 issue

3. **工作流程**
   - 从 develop 分支创建功能分支
   - 开发完成后合并回 develop
   - 定期从 develop 创建发布分支
   - 发布分支合并到 main 和 develop

### 代码审查

1. **审查清单**

   - 代码是否符合规范
   - 是否有潜在 bug
   - 是否有性能问题
   - 是否有安全隐患
   - 是否有测试覆盖

2. **审查流程**
   - 创建 Pull Request
   - 指定审查者
   - 等待审查意见
   - 根据意见修改
   - 合并代码

## 测试规范

### 单元测试

1. **测试文件命名**

   - 与被测试文件同名
   - 添加 `.spec` 或 `.test` 后缀
   - 例如：`component.spec.ts`

2. **测试结构**

   ```typescript
   describe('ComponentName', () => {
     it('should do something', () => {
       // 测试代码
     })
   })
   ```

3. **测试覆盖**
   - 核心功能 100% 覆盖
   - 边界条件测试
   - 错误处理测试

### 集成测试

1. **测试范围**

   - API 接口测试
   - 数据库操作测试
   - 服务间通信测试

2. **测试环境**
   - 使用测试数据库
   - 模拟外部服务
   - 清理测试数据

## 文档规范

### 代码文档

1. **注释格式**

   ```typescript
   /**
    * 函数描述
    * @param {string} param1 - 参数1描述
    * @param {number} param2 - 参数2描述
    * @returns {boolean} 返回值描述
    */
   ```

2. **README 文件**
   - 项目概述
   - 安装说明
   - 使用示例
   - 贡献指南

### API 文档

1. **接口文档**

   - 接口描述
   - 请求参数
   - 响应格式
   - 错误码

2. **示例代码**
   - 请求示例
   - 响应示例
   - 错误处理

## 性能优化

### 前端优化

1. **加载优化**

   - 路由懒加载
   - 组件按需加载
   - 资源预加载
   - 图片懒加载

2. **渲染优化**
   - 虚拟列表
   - 防抖节流
   - 计算属性缓存
   - 避免不必要的渲染

### 后端优化

1. **数据库优化**

   - 索引优化
   - 查询优化
   - 连接池
   - 缓存策略

2. **服务优化**
   - 负载均衡
   - 服务降级
   - 限流熔断
   - 异步处理

## 安全规范

### 前端安全

1. **数据安全**

   - 敏感数据加密
   - XSS 防护
   - CSRF 防护
   - 输入验证

2. **认证授权**
   - JWT 认证
   - 权限控制
   - 会话管理
   - 安全存储

### 后端安全

1. **API 安全**

   - 参数验证
   - SQL 注入防护
   - 请求限流
   - 日志记录

2. **数据安全**
   - 数据加密
   - 访问控制
   - 备份恢复
   - 审计日志
