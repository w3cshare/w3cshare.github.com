# 数据传输对象目录 (DTO)

此目录包含数据传输对象（Data Transfer Objects），用于定义API接口的请求和响应数据结构。

## 目录结构

```
dto/
├── user/
│   ├── create-user.dto.ts
│   ├── update-user.dto.ts
│   └── user-response.dto.ts
├── post/
│   ├── create-post.dto.ts
│   ├── update-post.dto.ts
│   └── post-response.dto.ts
└── README.md          # 本说明文档
```

## DTO示例

### 创建用户DTO

```typescript
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'john_doe' })
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @ApiProperty({ description: '电子邮箱', example: 'john@example.com' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  @IsNotEmpty({ message: '邮箱不能为空' })
  email: string;

  @ApiProperty({ description: '密码', example: 'password123' })
  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: '密码长度不能少于6个字符' })
  password: string;

  @ApiProperty({ description: '角色列表', example: ['user'], required: false })
  @IsOptional()
  @IsArray({ message: '角色必须是数组' })
  roles?: string[];
}
```

### 更新用户DTO

```typescript
import { IsEmail, IsOptional, MinLength, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ description: '用户名', example: 'john_doe', required: false })
  @IsOptional()
  username?: string;

  @ApiProperty({
    description: '电子邮箱',
    example: 'john@example.com',
    required: false,
  })
  @IsOptional()
  @IsEmail({}, { message: '邮箱格式不正确' })
  email?: string;

  @ApiProperty({ description: '密码', example: 'password123', required: false })
  @IsOptional()
  @MinLength(6, { message: '密码长度不能少于6个字符' })
  password?: string;

  @ApiProperty({ description: '角色列表', example: ['user'], required: false })
  @IsOptional()
  @IsArray({ message: '角色必须是数组' })
  roles?: string[];
}
```

### 用户响应DTO

```typescript
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ description: '用户ID', example: 1 })
  id: number;

  @ApiProperty({ description: '用户名', example: 'john_doe' })
  username: string;

  @ApiProperty({ description: '电子邮箱', example: 'john@example.com' })
  email: string;

  @ApiProperty({ description: '角色列表', example: ['user'] })
  roles: string[];

  @ApiProperty({ description: '创建时间', example: '2023-01-01T00:00:00Z' })
  createdAt: Date;

  @ApiProperty({ description: '更新时间', example: '2023-01-01T00:00:00Z' })
  updatedAt: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
```

## DTO开发规范

### 命名规范

1. 创建操作的DTO命名为 `Create{Entity}Dto`
2. 更新操作的DTO命名为 `Update{Entity}Dto`
3. 响应DTO命名为 `{Entity}ResponseDto`

### 验证规则

1. 使用 class-validator 装饰器添加验证规则
2. 为每个验证规则添加明确的错误消息
3. 使用 @IsOptional() 标记可选字段

### Swagger文档

1. 使用 @ApiProperty() 装饰器为字段添加Swagger文档
2. 提供字段描述、示例值和是否必填
3. 使用 @ApiTags() 为控制器添加标签

### 数据转换

1. 使用 class-transformer 进行数据转换
2. 使用 @Exclude() 排除敏感字段
3. 使用 @Expose() 显式包含字段

### 最佳实践

1. **分离关注点**: 请求DTO和响应DTO分开定义
2. **继承**: 利用继承减少重复代码
3. **部分更新**: 更新DTO中的所有字段都应该是可选的
4. **文档**: 为DTO类和字段添加详细的文档注释
5. **类型安全**: 充分利用TypeScript的类型系统
