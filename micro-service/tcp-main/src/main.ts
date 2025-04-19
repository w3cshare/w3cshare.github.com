/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:58:35
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 19:17:46
 * @FilePath: /FullStack/micro-service/tcp-main/src/main.ts
 * @Description: --
 */
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { nestjsSwagger } from '@smarts-isoftstone/nestjs-swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  nestjsSwagger(app, {
    isFastify: true,
  });

  // 附加微服务（例如使用 TCP 传输层）
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3000,
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(`HTTP 服务运行在 3000 端口，微服务运行在 3001 端口`);
}

bootstrap().catch((err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});
