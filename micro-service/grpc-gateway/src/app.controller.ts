/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 13:54:27
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 13:57:11
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/app.controller.ts
 * @Description: --
 */
import { Controller, Post } from '@nestjs/common'

import { AppService } from './app.service'

/**
 * 应用控制器
 * @export
 * @class AppController
 * @implements {AppController}
 */
@Controller()
export class AppController {
  /**
   * 构造函数
   * @param {AppService} appService
   *
   */
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): string {
    return this.appService.getHello()
  }
}
