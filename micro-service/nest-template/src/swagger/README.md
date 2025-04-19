# Swagger 目录

此目录包含 Swagger 相关文件，用于生成 API 文档。

## 目录结构

```
swagger/
├── decorators/        # 自定义 Swagger 装饰器
├── responses/         # 预定义响应模式
└── README.md          # 本说明文档
```

## Swagger 配置

Swagger 配置在 `src/config/swagger.config.ts` 文件中定义。

```typescript
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('NestJS API 文档')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
```

## 在 main.ts 中设置 Swagger

```typescript
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 设置 Swagger
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);
  
  await app.listen(3000);
}
bootstrap();
```

## 自定义装饰器示例

```typescript
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

export function ApiUserEndpoint(summary: string) {
  return applyDecorators(
    ApiTags('用户'),
    ApiOperation({ summary }),
    ApiResponse({ status: 200, description: '操作成功' }),
    ApiResponse({ status: 400, description: '请求参数错误' }),
    ApiResponse({ status: 401, description: '未授权' }),
    ApiResponse({ status: 403, description: '禁止访问' }),
    ApiResponse({ status: 500, description: '服务器错误' }),
  );
}
```

## 预定义响应示例

```typescript
import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: '请求参数错误' })
  message: string;

  @ApiProperty({ example: '2023-01-01T00:00:00Z' })
  timestamp: string;

  @ApiProperty({ example: '/api/users' })
  path: string;
}
```

## 在控制器中使用 Swagger

```typescript
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/user/create-user.dto';
import { UserResponseDto } from '../../dto/user/user-response.dto';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@ApiTags('用户')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: '创建用户' })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取用户详情' })
  @ApiParam({ name: 'id', description: '用户ID' })
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.userService.findOne(+id);
  }
}
```

## 最佳实践

1. **分组**: 使用 `@ApiTags()` 将相关的端点分组
2. **安全**: 使用 `@ApiBearerAuth()` 标记需要认证的端点
3. **描述**: 为每个端点提供清晰的摘要和描述
4. **参数**: 使用 `@ApiParam()`, `@ApiQuery()`, `@ApiBody()` 描述参数
5. **响应**: 使用 `@ApiResponse()` 描述可能的响应
6. **模型**: 使用 `@ApiProperty()` 描述DTO和响应模型的属性
7. **分页**: 为分页端点提供一致的文档
8. **版本**: 在文档中明确标注API版本
9. **示例**: 提供请求和响应的示例
10. **标签**: 使用一致的标签命名规则
