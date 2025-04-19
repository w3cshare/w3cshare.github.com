# 服务目录 (Service)

此目录包含公共服务层，与模块解耦，主要用于处理第三方服务调用和通用功能。

## 目录结构

```
service/
├── third-party/       # 第三方服务
│   ├── sms/           # 短信服务
│   ├── oss/           # 对象存储服务
│   └── payment/       # 支付服务
├── common/            # 通用服务
│   ├── cache/         # 缓存服务
│   ├── logger/        # 日志服务
│   └── utils/         # 工具服务
└── README.md          # 本说明文档
```

## 服务说明

### 第三方服务 (Third-Party)

第三方服务封装了与外部系统的交互，如短信发送、文件存储、支付处理等。

#### 短信服务 (SMS)

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
  async sendVerificationCode(phone: string): Promise<boolean> {
    // 实现短信发送逻辑
    return true;
  }
}
```

#### 对象存储服务 (OSS)

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class OssService {
  async uploadFile(file: Buffer, filename: string): Promise<string> {
    // 实现文件上传逻辑
    return 'file_url';
  }
}
```

### 通用服务 (Common)

通用服务提供了应用程序中常用的功能，如缓存、日志记录、工具函数等。

#### 缓存服务 (Cache)

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  async get(key: string): Promise<any> {
    // 实现缓存获取逻辑
    return null;
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    // 实现缓存设置逻辑
  }
}
```

## 服务开发规范

### 服务设计原则

1. **单一职责**: 每个服务类应该只有一个职责
2. **接口分离**: 使用接口定义服务契约
3. **依赖注入**: 通过构造函数注入依赖
4. **可测试性**: 设计易于单元测试的服务

### 错误处理

1. 使用自定义异常类
2. 避免在服务中直接处理 HTTP 响应
3. 记录详细的错误日志

### 异步处理

1. 使用 async/await 处理异步操作
2. 适当使用 Promise.all 并行处理多个异步操作
3. 处理异步操作中的异常

### 文档

1. 为服务类和方法添加 JSDoc 注释
2. 说明方法的参数、返回值和可能的异常
3. 提供使用示例
