/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 21:42:29
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 21:45:11
 * @FilePath: /FullStack/micro-service/nest-template/src/module/users/users.service.ts
 * @Description: 用户 service
 */
import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
