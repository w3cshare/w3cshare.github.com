# 数据库种子目录 (Seeds)

此目录包含数据库种子文件，用于填充数据库表的初始数据，如默认用户、角色等。

## 种子文件命名规范

种子文件应按照以下格式命名：

```
{entity-name}.seed.ts
```

例如：

```
user.seed.ts
role.seed.ts
```

## 种子文件示例

```typescript
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../entities/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          username: 'admin',
          email: 'admin@example.com',
          password: 'hashed_password',
          roles: ['admin'],
        },
        {
          username: 'user',
          email: 'user@example.com',
          password: 'hashed_password',
          roles: ['user'],
        },
      ])
      .execute();
  }
}
```

## 运行种子

```bash
npm run seed:run
```

## 最佳实践

1. 种子数据应该是最小可用集，只包含应用程序正常运行所需的数据。
2. 在开发环境中使用种子数据快速搭建测试环境。
3. 生产环境谨慎使用种子数据，避免覆盖已有数据。
4. 为种子文件添加注释，说明其目的和包含的数据。
5. 考虑使用工厂模式生成大量测试数据。
