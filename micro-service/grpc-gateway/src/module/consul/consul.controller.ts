/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-18 10:02:27
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 10:07:11
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/module/consul/consul.controller.ts
 * @Description: grpc consul controller
 */
import { Controller, Get } from '@nestjs/common';
import { ConsulService } from './consul.service';

@Controller('consul')
export class ConsulController {
  constructor(private readonly consulService: ConsulService) {}
  @Get('services')
  async getServices() {
    return this.consulService.getServices();
  }

  @Get('service')
  async getService() {
    return this.consulService.getService();
  }
}
