<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 17:26:58
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 10:08:40
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
nest g service module/consul
nest g controller module/consul

```

## grpc-gateway

```bash

```
