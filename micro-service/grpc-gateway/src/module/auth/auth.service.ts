/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-18 10:02:58
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 10:12:49
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/module/auth/auth.service.ts
 * @Description: gateway for 注册、登录 service
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(params: any) {
    return '登录成功'; // TODO
  }

  register(params: any) {
    return '注册成功'; // TODO
  }
}
