# 开发规范

## 代码规范

### 通用规范

1. **命名规范**
   - 使用有意义的名称
   - 避免使用缩写（除非是广泛接受的缩写）
   - 保持命名一致性

2. **注释规范**
   - 使用 JSDoc 风格的注释
   - 为复杂逻辑添加注释
   - 及时更新注释

3. **格式规范**
   - 使用 2 个空格缩进
   - 使用分号结束语句
   - 使用单引号
   - 最大行长度为 100 字符

### TypeScript 规范

1. **类型定义**
   - 优先使用接口而不是类型别名
   - 使用明确的类型而不是 any
   - 使用泛型增加代码复用性

2. **类型声明**
   ```typescript
   // 好的做法
   interface User {
     id: string;
     name: string;
     email: string;
   }

   // 避免使用
   type User = any;
   ```

3. **类型推断**
   - 让 TypeScript 自动推断类型
   - 只在必要时显式声明类型

### Vue 规范

1. **组件命名**
   - 使用 PascalCase
   - 使用有意义的前缀
   - 例如：`UserProfile.vue`, `BaseButton.vue`

2. **组件结构**
   ```vue
   <template>
     <div class="component-name">
       <!-- 模板内容 -->
     </div>
   </template>

   <script lang="ts">
   import { defineComponent } from 'vue'

   export default defineComponent({
     name: 'ComponentName',
     props: {
       // 属性定义
     },
     setup() {
       // 组件逻辑
     }
   })
   </script>

   <style scoped>
   /* 样式定义 */
   </style>
   ```

3. **Props 定义**
   - 始终定义 props 类型
   - 使用 camelCase 命名
   - 提供默认值

### React 规范

1. **组件命名**
   - 使用 PascalCase
   - 使用有意义的前缀
   - 例如：`UserProfile.tsx`, `BaseButton.tsx`

2. **组件结构**
   ```tsx
   import React from 'react'

   interface Props {
     // 属性定义
   }

   export const ComponentName: React.FC<Props> = (props) => {
     // 组件逻辑
     return (
       <div className="component-name">
         {/* 组件内容 */}
       </div>
     )
   }
   ```

3. **Hooks 使用**
   - 使用自定义 hooks 封装逻辑
   - 遵循 hooks 规则
   - 避免在循环中使用 hooks

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