# 配置目录 (Config)

此目录包含项目的各种配置文件，用于集中管理应用程序的配置信息。

## 目录结构

```
config/
├── database.config.ts  # 数据库配置
├── graphql.config.ts   # GraphQL配置
├── swagger.config.ts   # Swagger配置
└── README.md           # 本说明文档
```

## 配置文件说明

### database.config.ts

包含 TypeORM 的配置信息，如数据库连接信息、实体映射、迁移设置等。

```typescript
// 示例配置
export default {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'nest_template',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  migrationsRun: true,
};
```

### graphql.config.ts

包含 GraphQL 的配置信息，如模式生成、解析器映射、订阅设置等。

```typescript
// 示例配置
import { join } from 'path';

export default {
  autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
  sortSchema: true,
  playground: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  context: ({ req }) => ({ req }),
};
```

### swagger.config.ts

包含 Swagger 的配置信息，用于生成 API 文档。

```typescript
// 示例配置
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('NestJS API 文档')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
```

## 最佳实践

1. **环境变量**：使用环境变量来区分不同环境的配置，避免硬编码敏感信息。
2. **配置分离**：将不同功能的配置分离到不同的文件中，便于维护。
3. **类型安全**：使用 TypeScript 接口或类型来确保配置的类型安全。
4. **默认值**：为配置项提供合理的默认值，减少配置错误。
5. **文档注释**：为配置项添加详细的文档注释，说明其用途和可选值。
