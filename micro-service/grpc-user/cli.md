<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 17:26:58
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 10:20:11
 * @FilePath: /FullStack/micro-service/grpc-user/cli.md
 * @Description: grpc-user/cli.md
-->

# 安装依赖

```bash
pnpm add @nestjs/microservices \
  @smarts-isoftstone/grpc-proto-pkg \
  consul \
  --filter grpc-user \
  --filter grpc-gateway
```

# 初始化module

## grpc-user

```bash

nest g module module/auth
nest g controller module/auth
nest g service module/auth

# CREATE src/module/auth/auth.guard.spec.ts (160 bytes)
# CREATE src/module/auth/auth.guard.ts (299 bytes)
nest g guard module/auth

# CREATE src/module/auth/auth.decorator.ts (117 bytes)
nest g decorator module/auth

# CREATE src/consul/client/client.service.spec.ts (460 bytes)
# CREATE src/consul/client/client.service.ts (90 bytes)
# UPDATE src/app.module.ts (662 bytes)
nest g service module/consul/client
nest g controller module/consul/client


```

## grpc-gateway

```bash

```

    ┌───────────────┬─────────────┬──────────────────────────────────────────────┐
    │ name          │ alias       │ description                                  │
    │ application   │ application │ Generate a new application workspace         │
    │ class         │ cl          │ Generate a new class                         │
    │ configuration │ config      │ Generate a CLI configuration file            │
    │ controller    │ co          │ Generate a controller declaration            │
    │ decorator     │ d           │ Generate a custom decorator                  │
    │ filter        │ f           │ Generate a filter declaration                │
    │ gateway       │ ga          │ Generate a gateway declaration               │
    │ guard         │ gu          │ Generate a guard declaration                 │
    │ interceptor   │ itc         │ Generate an interceptor declaration          │
    │ interface     │ itf         │ Generate an interface                        │
    │ library       │ lib         │ Generate a new library within a monorepo     │
    │ middleware    │ mi          │ Generate a middleware declaration            │
    │ module        │ mo          │ Generate a module declaration                │
    │ pipe          │ pi          │ Generate a pipe declaration                  │
    │ provider      │ pr          │ Generate a provider declaration              │
    │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
    │ resource      │ res         │ Generate a new CRUD resource                 │
    │ service       │ s           │ Generate a service declaration               │
    │ sub-app       │ app         │ Generate a new application within a monorepo │
    └───────────────┴─────────────┴──────────────────────────────────────────────┘
