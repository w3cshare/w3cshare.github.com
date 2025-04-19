# 模块目录 (Module)

此目录包含业务模块，每个模块封装了特定业务领域的功能。

## 目录结构

```
module/
├── admin/             # 管理后台模块
│   ├── access/        # 权限管理
│   ├── users/         # 用户管理
│   └── admin.module.ts
├── api/               # API模块
│   ├── focus/         # 焦点图
│   ├── nav/           # 导航
│   └── api.module.ts
├── default/           # 默认模块
│   ├── address/       # 地址管理
│   ├── wxpay/         # 微信支付
│   └── default.module.ts
├── public/            # 公共模块
│   └── public.module.ts
└── README.md          # 本说明文档
```

## 模块说明

### 管理后台模块 (Admin)

管理后台模块包含系统管理功能，如用户管理、权限管理等。

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { AccessController } from './access/access.controller';
import { User } from '../../entities/user.entity';
import { Role } from '../../entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [UsersController, AccessController],
  providers: [],
})
export class AdminModule {}
```

### API模块 (API)

 API模块包含面向客户端的API接口，如焦点图、导航等。

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FocusController } from './focus/focus.controller';
import { NavController } from './nav/nav.controller';
import { Focus } from '../../entities/focus.entity';
import { Nav } from '../../entities/nav.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Focus, Nav])],
  controllers: [FocusController, NavController],
  providers: [],
})
export class ApiModule {}
```

### 默认模块 (Default)

默认模块包含基础功能，如地址管理、支付
