/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-29 00:32:43
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 19:10:17
 * @FilePath: /FullStack/micro-service/tcp-client/src/main.ts
 * @Description: --
 */
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}

bootstrap().catch((err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});
