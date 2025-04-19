/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:25:53
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 00:47:18
 * @FilePath: /FullStack/micro-service/grpc-main/src/app.controller.ts
 * @Description: --
 */
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroById } from '@smarts-isoftstone/grpc-proto-pkg/lib/hero.interface';

import { AppService } from './app.service';

// import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.debug(appService);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('HeroesService', 'FindOne')
  findOne(
    data: HeroById,

    // metadata: Metadata, call: ServerUnaryCall<any, any>
  ) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
