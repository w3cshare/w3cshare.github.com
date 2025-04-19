/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 15:39:22
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 15:58:52
 * @FilePath: /FullStack/micro-service/nest-template/src/consul/client/client.controller.ts
 * @Description: consul 客户端控制器
 */
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Public } from '@/module/auth/auth.decorator';

@Controller()
export class ClientController {
  @Public()
  @HttpCode(HttpStatus.OK)
  @Get('health')
  getHealth(): { status: string } {
    return {
      status: 'ok',
    };
  }
}
