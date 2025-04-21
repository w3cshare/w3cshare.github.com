/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 17:20:57
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 17:24:41
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/app.service.ts
 * @Description: grpc-gateway
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World grpc-gateway!';
  }
}
