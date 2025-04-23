/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 16:52:30
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 16:13:19
 * @FilePath: --
 */
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
