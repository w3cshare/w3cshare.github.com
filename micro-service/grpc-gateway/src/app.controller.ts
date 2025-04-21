/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 17:20:57
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-21 12:27:28
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/app.controller.ts
 * @Description: grpc gateway controller
 */
import { Controller, Delete, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Consul from 'consul';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Delete()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getHello2(): string {
    return this.appService.getHello();
  }
}
