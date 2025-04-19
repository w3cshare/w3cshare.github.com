/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:53:13
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 18:23:38
 * @FilePath: /FullStack/micro-service/tcp-main/src/app.controller.ts
 * @Description: --
 */
import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 微服务 START
  @MessagePattern({ cmd: 'sum' })
  accumulate(@Payload() data: number[], @Ctx() context: NatsContext): string {
    console.log(context);

    return '您好，计算得出：' + (data || []).reduce((a, b) => a + b);
  }

  @EventPattern('user_created')
  async handleUserCreated(@Payload() data: any, @Ctx() context: NatsContext) {
    console.log(context);
    console.log(data);

    return new Promise((resolve) => {
      resolve('User Created: ' + data);
    });
  }

  // 微服务 END
}
