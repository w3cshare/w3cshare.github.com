/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:53:13
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 11:36:51
 * @FilePath: /FullStack/micro-service/tcp-main/src/app.module.ts
 * @Description: --
 */
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
