/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:25:53
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 00:47:25
 * @FilePath: /FullStack/micro-service/grpc-main/src/main.ts
 * @Description: --
 */
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { loadProto } from '@smarts-isoftstone/grpc-proto-pkg';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        packageDefinition: loadProto('hero'),
      },
    },
  );
  await app.listen();
}
bootstrap().catch(() => {
  // console.error('Failed to start application:', err);
  process.exit(1);
});
