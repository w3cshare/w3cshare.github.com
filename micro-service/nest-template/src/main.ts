/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 21:37:33
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-21 10:10:14
 * @FilePath: /FullStack/micro-service/nest-template/src/main.ts
 * @Description: nest-template启动文件
 */
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { loadProto } from '@smarts-isoftstone/grpc-proto-pkg';

import { AppModule } from './app.module';
import { ApiSwagger } from '@/common/api-swagger';
import { ApiVersion } from '@/common/api-version';
import path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;

  // 注册微服务 START
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      packageDefinition: loadProto('hero'),
    },
  });
  await app.startAllMicroservices();
  // 注册微服务 END

  // 全局管道，用于请求验证
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 过滤掉未定义的属性
      transform: true, // 自动转换类型
      forbidNonWhitelisted: true, // 禁止未定义的属性
    }),
  );

  // 全局异常过滤器
  // 1. JWT认证失败的异常过滤器
  // app.useGlobalFilters(new JwtAuthExceptionFilter());

  // 2. 全局通用异常过滤器，捕获所有未处理的异常
  // app.useGlobalFilters(new AllExceptionsFilter(configService));

  // 允许跨域
  app.enableCors({
    origin: 'http://localhost:8080',
    credentials: true,
  });

  // 配置Api版本
  ApiVersion(app, configService);

  // 初始化swagger文档
  ApiSwagger(app, configService);

  // 配置静态资源目录
  // app.useStaticAssets(path.join(__dirname, '..', 'public'));

  // 添加关闭钩子，确保关闭数据库连接
  app.enableShutdownHooks();

  await app.listen(3000);

  console.log(`应用已启动: http://localhost:${port}`);
}
bootstrap();
