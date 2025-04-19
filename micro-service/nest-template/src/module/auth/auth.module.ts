/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 21:39:30
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 12:17:52
 * @FilePath: /FullStack/micro-service/nest-template/src/module/auth/auth.module.ts
 * @Description: 权限模块
 */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { SECRET } from './auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthService,
  ],
})
export class AuthModule {}
