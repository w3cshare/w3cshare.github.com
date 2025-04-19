/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:47:43
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 18:11:55
 * @FilePath: /FullStack/micro-service/tcp-client/src/app.module.ts
 * @Description: --
 */
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3000,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
