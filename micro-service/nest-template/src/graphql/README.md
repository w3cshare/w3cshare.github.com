# GraphQL 目录

此目录包含 GraphQL 相关文件，如解析器、模式定义等，用于实现 GraphQL API。

## 目录结构

```
graphql/
├── resolvers/          # 解析器
│   ├── user.resolver.ts
│   └── post.resolver.ts
├── schemas/           # GraphQL 模式定义
│   ├── user.schema.ts
│   └── post.schema.ts
├── schema.gql         # 自动生成的 GraphQL 模式文件
└── README.md          # 本说明文档
```

## 解析器 (Resolvers)

解析器负责处理 GraphQL 查询、变更和订阅，将它们映射到数据源。

### 解析器示例

```typescript
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../../entities/user.entity';
import { Post } from '../../entities/post.entity';
import { UserService } from '../../service/common/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    return this.userService.create(input);
  }

  @ResolveField(() => [Post])
  async posts(@Parent() user: User): Promise<Post[]> {
    return this.userService.findUserPosts(user.id);
  }
}
```

## 模式定义 (Schemas)

模式定义描述了 GraphQL API 的类型系统，包括查询、变更和订阅。

### 模式定义示例

```typescript
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
```

## GraphQL 配置

GraphQL 配置在 `src/config/graphql.config.ts` 文件中定义。

## 最佳实践

1. **代码优先**: 使用 TypeScript 类和装饰器定义 GraphQL 模式，而不是 SDL 文件。
2. **模块化**: 按功能领域组织解析器和模式定义。
3. **数据加载**: 使用 DataLoader 优化嵌套查询的性能。
4. **权限控制**: 使用守卫和指令实现细粒度的权限控制。
5. **错误处理**: 使用拦截器统一处理 GraphQL 错误。
6. **文档**: 使用 GraphQL 注释为 API 添加文档。

## 查询示例

```graphql
# 查询用户列表
query {
  users {
    id
    username
    email
    posts {
      id
      title
    }
  }
}

# 创建用户
mutation {
  createUser(input: {
    username: "john",
    email: "john@example.com",
    password: "password123"
  }) {
    id
    username
    email
  }
}
```
