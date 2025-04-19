/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 21:42:10
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 21:47:19
 * @FilePath: /FullStack/micro-service/nest-template/src/module/users/users.module.ts
 * @Description: 用户 module
 */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
