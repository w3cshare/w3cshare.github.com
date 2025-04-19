/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:25:40
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-28 17:10:50
 * @FilePath: /FullStack/micro-service/grpc-client/src/main.ts
 * @Description: --
 */
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch(() => {
  // console.error('Failed to start application:', err);
  process.exit(1);
});
