/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:47:43
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 18:19:02
 * @FilePath: /FullStack/micro-service/tcp-client/src/app.service.ts
 * @Description: --
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! client';
  }
}
