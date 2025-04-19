# 项目架构

FullStack Monorepo 项目采用基于 Lerna + NX + PNPM Workspace 的现代化 Monorepo 架构，集成了前端和后端的多种框架和技术，以提供完整的全栈开发解决方案。

## Monorepo 架构

```mermaid
graph TD
    A[FullStack Monorepo] --> B[Lerna]
    A --> C[NX]
    A --> D[PNPM Workspace]

    B --> E[包管理]
    B --> F[版本控制]
    B --> G[发布流程]

    C --> H[增量构建]
    C --> I[任务编排]
    C --> J[依赖图]

    D --> K[工作区管理]
    D --> L[依赖管理]
    D --> M[安装优化]
```

### Lerna

Lerna 是一个优化基于 git 和 npm 管理多包仓库的工作流工具，它主要负责：

- **包管理**：管理项目中的多个包
- **版本控制**：统一管理版本
- **发布流程**：简化包发布过程

### NX

NX 是一个智能、快速和可扩展的构建系统，它主要负责：

- **增量构建**：只构建变更的部分
- **缓存**：缓存构建结果以提高速度
- **依赖图**：自动分析项目依赖关系
- **任务编排**：优化并行任务执行

### PNPM Workspace

PNPM 是一个快速、节省磁盘空间的包管理器，它主要负责：

- **工作区管理**：管理多包项目的工作区
- **依赖管理**：高效管理依赖关系
- **安装优化**：共享依赖以节省磁盘空间

## 应用架构

```mermaid
graph TD
    subgraph 前端层
        A1[Vue 应用] --> B[API 网关]
        A2[React 应用] --> B
        A3[微前端] --> B
    end

    subgraph 后端层
        B --> C1[认证服务]
        B --> C2[用户服务]
        B --> C3[内容服务]
        B --> C4[支付服务]
    end

    subgraph 数据层
        C1 --> D1[(MongoDB)]
        C2 --> D1
        C3 --> D2[(PostgreSQL)]
        C4 --> D3[(Redis)]
    end

    subgraph 消息队列
        C1 --> E[RabbitMQ]
        C2 --> E
        C3 --> E
        C4 --> E
    end
```

## 技术栈详解

### 前端技术栈

- **框架**

  - Vue 3：核心前端框架，基于组合式 API
  - React 18：核心前端框架，基于函数式组件和 Hooks
  - TypeScript：类型安全的 JavaScript 超集
  - Vite：现代化前端构建工具

- **UI 组件库**

  - Element Plus：基于 Vue 3 的组件库
  - Ant Design：基于 React 的组件库
  - Tailwind CSS：实用优先的 CSS 框架

- **状态管理**

  - Pinia：Vue 3 官方推荐的状态管理库
  - Redux Toolkit：React 状态管理工具

- **路由**
  - Vue Router：Vue 的官方路由
  - React Router：React 的路由解决方案

### 后端技术栈

- **框架**

  - NestJS：基于 TypeScript 的 Node.js 服务端框架
  - Express：轻量级 Node.js Web 应用框架
  - TypeScript：类型安全的 JavaScript 超集

- **数据库**

  - MongoDB：文档数据库
  - PostgreSQL：关系型数据库
  - Redis：内存数据结构存储

- **微服务**

  - gRPC：高性能 RPC 框架
  - TCP/UDP：基于 NestJS 的微服务传输

- **API 文档**
  - Swagger：API 文档生成工具
  - OpenAPI：API 规范

## 目录结构

FullStack Monorepo 的主要目录结构如下：

```mermaid
graph TD
    A[FullStack] --> B[app/]
    A --> C[packages/]
    A --> D[micro-frontend/]
    A --> E[micro-service/]
    A --> F[package-react/]
    A --> G[package-vue/]
    A --> H[package-nestjs/]
    A --> I[docs/]
    A --> J[docker-compose/]
    A --> K[lint/]

    B --> B1[主应用]

    C --> C1[共享包]
    C --> C2[工具库]
    C --> C3[类型定义]

    D --> D1[微前端应用]
    D --> D2[微前端配置]

    E --> E1[微服务应用]
    E --> E2[微服务配置]

    F --> F1[React 组件]
    F --> F2[React 工具]

    G --> G1[Vue 组件]
    G --> G2[Vue 工具]

    H --> H1[NestJS 模块]
    H --> H2[NestJS 工具]
```

更详细的目录结构，请参考[目录结构说明](/docs/directory-structure)。

## 数据流

在 FullStack Monorepo 项目中，数据流如下所示：

```mermaid
sequenceDiagram
    participant Client as 客户端
    participant Gateway as API 网关
    participant Service as 微服务
    participant DB as 数据库
    participant Cache as 缓存
    participant MQ as 消息队列

    Client->>Gateway: HTTP 请求
    Gateway->>Service: RPC 调用
    Service->>Cache: 查询缓存
    Cache-->>Service: 返回缓存数据

    alt 缓存未命中
        Service->>DB: 查询数据库
        DB-->>Service: 返回数据
        Service->>Cache: 更新缓存
    end

    Service->>MQ: 发送事件
    Service-->>Gateway: 返回结果
    Gateway-->>Client: HTTP 响应

    MQ->>Service: 异步处理
    Service->>DB: 更新数据
```

## 构建流程

FullStack Monorepo 项目的构建流程基于 NX，实现了增量构建和缓存：

```mermaid
graph TD
    A[git commit] --> B{NX 检测变更}
    B --> |有变更| C[确定受影响的包]
    B --> |无变更| D[使用缓存]

    C --> E[构建受影响的包]
    E --> F[运行测试]
    F --> G[更新缓存]

    D --> H[跳过构建]
    G --> I[部署]
    H --> I
```

## 部署架构

项目采用基于 Docker 和 Kubernetes 的容器化部署架构：

```mermaid
graph TD
    subgraph 生产环境
        A[负载均衡器] --> B1[前端容器 1]
        A --> B2[前端容器 2]
        B1 --> C[API 网关]
        B2 --> C
        C --> D1[微服务集群 1]
        C --> D2[微服务集群 2]
        D1 --> E1[数据库主]
        D2 --> E1
        E1 --> E2[数据库从]
    end

    subgraph 监控系统
        F[Prometheus] --> G[Grafana]
        H[ELK Stack] --> I[日志分析]
    end
```

## 安全架构

项目的安全架构如下：

```mermaid
graph TD
    A[客户端] --> B[HTTPS]
    B --> C[API 网关]
    C --> D[认证服务]
    D --> E[JWT 验证]
    E --> F[权限检查]
    F --> G[服务访问]
    G --> H[数据加密]
    H --> I[数据库]
```

## 开发流程

项目的开发流程基于 Git Flow：

```mermaid
graph LR
    A[需求分析] --> B[分支创建]
    B --> C[代码开发]
    C --> D[单元测试]
    D --> E[代码审查]
    E --> F[集成测试]
    F --> G[合并主分支]
    G --> H[发布]
```

## 参考资源

- [Lerna 官方文档](https://lerna.js.org/)
- [NX 官方文档](https://nx.dev/)
- [PNPM Workspace 官方文档](https://pnpm.io/workspaces)
- [Monorepo 最佳实践](https://monorepo.tools/)
