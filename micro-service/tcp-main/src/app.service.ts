/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:53:13
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-28 13:27:02
 * @FilePath: /FullStack/micro-service/tcp-main/src/app.service.ts
 * @Description: --
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! main';
  }
}
