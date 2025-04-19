/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 21:39:56
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 16:45:16
 * @FilePath: /FullStack/micro-service/nest-template/src/module/auth/auth.controller.ts
 * @Description: auth controller
 */
import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './auth.decorator';
import Consul from 'consul';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Get()
  getHello(): string {
    return 'Hello auth!';
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() loginDto: any) {
    return this.authService.signIn(loginDto.username, loginDto.password);
  }

  // @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }

  @Get('logout')
  async logout() {
    return 'logout';
  }

  @Public()
  @Get('consuls')
  async getConsuls() {
    const consul = new Consul();
    // const services = await consul.agent.service.list();
    return consul.catalog.service.nodes({
      service: 'nest-template',
    });
  }

  @Public()
  @Get('consul')
  async getConsul() {
    const services = (await this.getConsuls()) as any;
    const service = services[Math.floor(Math.random() * services.length)];

    return {
      url: `http://${service.ServiceAddress}:${service.ServicePort}`,
      token: process.env.CONSUL_TOKEN,
      serviceAddress: service.ServiceAddress,
      servicePort: service.ServicePort,
    };
  }
}
