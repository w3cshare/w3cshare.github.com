/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 21:37:33
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 16:17:44
 * @FilePath: /FullStack/micro-service/nest-template/src/main.ts
 * @Description: nest-template启动文件
 */
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { loadProto } from '@smarts-isoftstone/grpc-proto-pkg';

import { AppModule } from './app.module';

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

  await app.listen(3000);

  console.log(`应用已启动: http://localhost:${port}`);
}
bootstrap();
