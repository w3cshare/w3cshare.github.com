# 数据库目录 (Database)

此目录包含数据库相关文件，如迁移文件和种子数据文件，用于管理数据库结构和初始数据。

## 目录结构

```
database/
├── migrations/         # 数据库迁移文件
├── seeds/              # 数据库种子文件
└── README.md           # 本说明文档
```

## 数据库迁移 (Migrations)

数据库迁移用于管理数据库结构的变更，确保数据库结构与应用程序代码同步。

### 创建迁移

```bash
npm run typeorm migration:create -- -n CreateUsersTable
```

### 迁移文件示例

```typescript
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1617123456789 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'username',
            type: 'varchar',
            length: '100',
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
```

### 运行迁移

```bash
npm run typeorm migration:run
```

### 回滚迁移

```bash
npm run typeorm migration:revert
```

## 数据库种子 (Seeds)

数据库种子用于填充数据库表的初始数据，如默认用户、角色等。

### 种子文件示例

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

### 运行种子

```bash
npm run seed:run
```

## 最佳实践

1. **版本控制**: 将迁移文件纳入版本控制，确保团队成员可以同步数据库结构。
2. **原子性**: 每个迁移应该是原子的，只做一件事情。
3. **可回滚**: 确保每个迁移都可以回滚，实现 `down` 方法。
4. **测试**: 在应用到生产环境前，先在开发或测试环境测试迁移。
5. **文档**: 为复杂的迁移添加注释，说明其目的和影响。
