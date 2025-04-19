/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 17:22:13
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 10:09:57
 * @FilePath: /FullStack/micro-service/grpc-user/src/main.ts
 * @Description: grpc user
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { loadProto } from '@smarts-isoftstone/grpc-proto-pkg';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 微服务 START
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      packageDefinition: loadProto('hero'),
    },
  });
  await app.startAllMicroservices();
  // 微服务 END

  await app.listen(3001);
}
bootstrap();
