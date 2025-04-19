# NestJS 团队项目模板

这是一个基于 NestJS 框架的团队开发模板，集成了 TypeORM、Swagger 和 GraphQL，提供了完整的项目结构和常用功能模块，帮助团队成员快速上手和理解项目架构。

## 项目结构

```
├── config/                 # 配置文件目录
│   ├── database.config.ts  # 数据库配置
│   ├── graphql.config.ts   # GraphQL配置
│   └── swagger.config.ts   # Swagger配置
├── database/               # 数据库相关目录
│   ├── migrations/         # 数据库迁移文件
│   └── seeds/              # 数据库种子文件
├── src/
│   ├── decorators/         # 自定义装饰器
│   │   └── roles.decorator.ts
│   ├── dto/                # 数据传输对象
│   ├── entities/           # TypeORM实体
│   ├── filters/            # 异常过滤器
│   │   └── http-exception.filter.ts
│   ├── graphql/            # GraphQL相关
│   │   ├── resolvers/      # 解析器
│   │   └── schemas/        # GraphQL模式定义
│   ├── guards/             # 守卫
│   │   └── auth.guard.ts
│   ├── interceptors/       # 拦截器
│   │   └── transform.interceptor.ts
│   ├── interface/          # 接口定义
│   │   └── user.interface.ts
│   ├── middleware/         # 中间件
│   ├── module/             # 业务模块
│   │   ├── admin/          # 管理后台模块
│   │   ├── api/            # API模块
│   │   ├── default/        # 默认模块
│   │   └── public/         # 公共模块
│   ├── schema/             # 数据模型
│   ├── service/            # 公共服务层（与模块解耦）
│   │   ├── third-party/    # 第三方服务
│   │   └── common/         # 通用服务
│   ├── app.module.ts       # 应用程序主模块
│   └── main.ts             # 应用程序入口点
└── test/                   # 测试目录
```

## 技术栈

- **NestJS**: 基于 Node.js 的渐进式框架
- **TypeORM**: ORM 框架，用于数据库交互
- **GraphQL**: API 查询语言和运行时
- **Swagger**: API 文档生成工具

## 核心功能

### 1. 权限控制
- 基于角色的访问控制（RBAC）
- 自定义守卫实现身份验证
- 装饰器用于角色和权限管理

### 2. 异常处理
- 全局异常过滤器
- 统一的错误响应格式
- 详细的错误日志记录

### 3. 请求处理
- 响应转换拦截器
- 统一的响应格式
- 请求日志记录

### 4. 用户管理模块
- 完整的CRUD操作
- 用户认证和授权
- 角色管理

### 5. 数据库集成
- TypeORM 实体管理
- 数据库迁移
- 种子数据

### 6. API 文档
- Swagger 自动生成
- API 版本控制
- 接口测试

### 7. GraphQL 支持
- 类型定义
- 解析器
- 订阅

## 开发规范

### 1. 目录结构
- 模块化组织代码
- 清晰的职责分离
- 遵循NestJS最佳实践

### 2. 命名规范
- 文件名使用kebab-case
- 类名使用PascalCase
- 方法和变量使用camelCase

### 3. 代码规范
- 使用TypeScript强类型
- 遵循SOLID原则
- 编写单元测试

## 使用方法

1. 安装依赖
```bash
npm install
```

2. 开发环境运行
```bash
npm run start:dev
```

3. 生产环境构建
```bash
npm run build
```

4. 生产环境运行
```bash
npm run start:prod
```

## 模块开发指南

### 1. 创建新模块
```bash
nest g module your-module
nest g controller your-module
nest g service your-module
```

### 2. 开发流程
1. 定义接口和DTO
2. 实现控制器和服务
3. 添加单元测试
4. 注册到主模块

### 3. 最佳实践
- 使用依赖注入
- 实现接口分离
- 编写文档注释
- 遵循RESTful API设计

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交变更
4. 推送到分支
5. 创建Pull Request

## 许可证

MIT
