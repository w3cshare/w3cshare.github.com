/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 15:39:22
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 17:48:37
 * @FilePath: /FullStack/micro-service/grpc-user/src/module/consul/client/client.controller.ts
 * @Description: grpc user controller
 */
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
// import { Public } from '@/module/auth/auth.decorator';

@Controller()
export class ClientController {
  // @Public()
  @HttpCode(HttpStatus.OK)
  @Get('health')
  getHealth(): { status: string } {
    return {
      status: 'ok',
    };
  }
}
