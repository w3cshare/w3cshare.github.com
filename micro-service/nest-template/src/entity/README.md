# 实体目录 (Entities)

此目录包含 TypeORM 实体类，用于映射数据库表结构。

## 目录结构

```
entities/
├── user.entity.ts
├── role.entity.ts
├── post.entity.ts
└── README.md          # 本说明文档
```

## 实体示例

### 用户实体 (User)

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 100, unique: true })
  username: string;

  @Field()
  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Field(() => [String])
  @Column('simple-array')
  roles: string[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, post => post.user)
  posts: Post[];
}
```

### 文章实体 (Post)

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Entity('posts')
export class Post {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 100 })
  title: string;

  @Field()
  @Column('text')
  content: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => User)
  @ManyToOne(() => User, user => user.posts)
  user: User;

  @Column()
  userId: number;
}
```

## 实体开发规范

### 命名规范

1. 实体类名使用单数形式，如 `User` 而不是 `Users`
2. 数据库表名使用复数形式，如 `users` 而不是 `user`
3. 属性名使用驼峰命名法，如 `createdAt` 而不是 `created_at`

### 装饰器使用

1. 使用 `@Entity()` 装饰器定义实体类
2. 使用 `@PrimaryGeneratedColumn()` 定义自增主键
3. 使用 `@Column()` 定义列属性
4. 使用 `@CreateDateColumn()` 和 `@UpdateDateColumn()` 自动管理时间戳
5. 使用 `@OneToMany()`, `@ManyToOne()`, `@OneToOne()`, `@ManyToMany()` 定义关系

### GraphQL 集成

1. 使用 `@ObjectType()` 装饰器将实体类暴露为 GraphQL 类型
2. 使用 `@Field()` 装饰器定义 GraphQL 字段
3. 使用 `@Field(() => ID)` 定义 GraphQL ID 类型
4. 使用 `@Field(() => [Type])` 定义数组类型

### 最佳实践

1. **验证**: 使用 class-validator 装饰器添加验证规则
2. **索引**: 为经常查询的字段添加索引
3. **关系**: 明确定义关系的两端
4. **懒加载**: 对于大型关系，使用懒加载
5. **级联**: 谨慎使用级联操作
6. **软删除**: 考虑使用软删除而不是物理删除
7. **文档**: 为实体类和属性添加详细的文档注释
