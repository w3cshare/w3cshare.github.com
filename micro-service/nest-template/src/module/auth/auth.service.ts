/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 21:40:12
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 22:25:45
 * @FilePath: /FullStack/micro-service/nest-template/src/module/auth/auth.service.ts
 * @Description: 权限service
 */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user?.password !== pass) {
      // return null;
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;

    return {
      ...result,
      access_token: await this.jwtService.signAsync({
        username: user.username,
        sub: user.userId,
      }),
    };
  }
}
