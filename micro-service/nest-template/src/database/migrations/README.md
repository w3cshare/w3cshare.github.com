# 数据库迁移目录 (Migrations)

此目录包含数据库迁移文件，用于管理数据库结构的变更。

## 迁移文件命名规范

迁移文件应按照以下格式命名：

```
{timestamp}-{description}.ts
```

例如：

```
1617123456789-CreateUsersTable.ts
```

## 迁移文件示例

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

## 运行迁移

```bash
npm run typeorm migration:run
```

## 回滚迁移

```bash
npm run typeorm migration:revert
```

## 最佳实践

1. 每个迁移文件应该只做一件事情，如创建一个表、添加一个字段等。
2. 确保每个迁移都可以回滚，实现 `down` 方法。
3. 在应用到生产环境前，先在开发或测试环境测试迁移。
4. 为复杂的迁移添加注释，说明其目的和影响。
