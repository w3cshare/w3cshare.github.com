# 环境变量配置说明

## 概述

本项目使用环境变量来管理敏感配置信息，如数据库连接信息、API密钥等。所有敏感配置都已迁移到根目录的`.env`文件中，以提高安全性和便于配置管理。

## 环境变量文件

项目中包含以下环境变量文件：

- `.env`：默认环境变量文件，包含通用配置
- `.env.development`：开发环境特定配置
- `.env.production`：生产环境特定配置

## 配置加载优先级

环境变量的加载优先级如下：

1. 系统环境变量
2. `.env.{NODE_ENV}`文件（如`.env.development`）
3. `.env`文件

## 可用的环境变量

### 数据库配置

```
DB_HOST=localhost        # 数据库主机地址
DB_PORT=3306             # 数据库端口
DB_USERNAME=root         # 数据库用户名
DB_PASSWORD=password     # 数据库密码
DB_DATABASE=nest_template # 数据库名称
```

### 应用配置

```
NODE_ENV=development     # 环境名称（development, production）
PORT=3000                # 应用端口
```

### JWT配置（如果使用）

```
JWT_SECRET=your_jwt_secret  # JWT密钥
JWT_EXPIRES_IN=1d           # JWT过期时间
```

## 在代码中使用环境变量

本项目使用`@nestjs/config`包来管理环境变量。在代码中可以通过以下方式获取环境变量：

```typescript
// 在构造函数中注入ConfigService
constructor(private configService: ConfigService) {}

// 获取环境变量
const dbHost = this.configService.get('DB_HOST');
const port = this.configService.get('PORT');
```

## 安全注意事项

1. **不要提交敏感信息**：`.env`文件包含敏感信息，确保将其添加到`.gitignore`文件中，避免提交到版本控制系统。
2. **使用示例文件**：提供一个`.env.example`文件，包含所有必需的环境变量，但不包含实际值。
3. **生产环境配置**：在生产环境中，考虑使用环境变量注入而不是配置文件，以提高安全性。

## 本地开发设置

1. 复制`.env.example`文件并重命名为`.env`
2. 根据本地环境修改配置值
3. 启动应用程序

```bash
npm run start:dev
```
