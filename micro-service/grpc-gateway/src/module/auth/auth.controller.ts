/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-18 10:03:03
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 10:13:23
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/module/auth/auth.controller.ts
 * @Description: Gateway for 注册、登录
 */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

interface LoginDto {
  username: string;
  password: string;
}

interface RegisterDto {
  username: string;
  password: string;
  email: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
