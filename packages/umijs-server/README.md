# UmiJS Server

UmiJS 服务端插件，用于提供 UmiJS 项目的服务端功能支持。

## 功能特性

- 服务端渲染（SSR）支持
- API 路由管理
- 中间件系统
- 静态资源服务
- 开发环境热重载
- 生产环境性能优化

## 安装

```bash
pnpm add @fullstack/umijs-server
```

## 使用方法

1. 配置插件

```ts
// .umirc.ts 或 config/config.ts
export default {
  plugins: ['@fullstack/umijs-server'],
  server: {
    // 插件配置
    port: 3000,
    middleware: ['logger', 'cors'],
    // 更多配置...
  }
};
```

2. 创建 API 路由

```ts
// src/api/users.ts
export default {
  'GET /api/users': async (req, res) => {
    const users = await db.users.findMany();
    res.json(users);
  },
  'POST /api/users': async (req, res) => {
    const user = await db.users.create({
      data: req.body
    });
    res.json(user);
  }
};
```

3. 使用中间件

```ts
// src/middleware/logger.ts
export default async (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  await next();
};
```

## API 参考

### 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| port | number | 3000 | 服务器端口 |
| host | string | '0.0.0.0' | 服务器主机 |
| https | boolean | false | 是否启用 HTTPS |
| middleware | string[] | [] | 中间件列表 |

### 路由定义

```ts
export interface RouteDefinition {
  'GET /path': (req, res) => void | Promise<void>;
  'POST /path': (req, res) => void | Promise<void>;
  'PUT /path': (req, res) => void | Promise<void>;
  'DELETE /path': (req, res) => void | Promise<void>;
}
```

### 中间件定义

```ts
export interface Middleware {
  (req: Request, res: Response, next: () => Promise<void>): void | Promise<void>;
}
```

## 示例

### 基本用法

```ts
// config/config.ts
export default {
  plugins: ['@fullstack/umijs-server'],
  server: {
    port: 3000,
    middleware: ['logger', 'cors']
  }
};

// src/api/hello.ts
export default {
  'GET /api/hello': (req, res) => {
    res.json({ message: 'Hello World!' });
  }
};
```

### 使用中间件

```ts
// src/middleware/auth.ts
export default async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  await next();
};

// config/config.ts
export default {
  plugins: ['@fullstack/umijs-server'],
  server: {
    middleware: ['auth']
  }
};
```

## 开发

1. 安装依赖
```bash
pnpm install
```

2. 启动开发服务器
```bash
pnpm dev
```

3. 构建
```bash
pnpm build
```

## 测试

```bash
# 运行单元测试
pnpm test

# 运行 E2E 测试
pnpm test:e2e

# 检查测试覆盖率
pnpm test:coverage
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 许可证

本项目基于 MIT 许可证发布 - 查看 [LICENSE](LICENSE) 文件了解更多细节。
