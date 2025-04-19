/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 15:59:46
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 21:14:20
 * @FilePath: /FullStack/micro-service/grpc-client/src/app.service.ts
 * @Description: --
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 我是GRPC客户端，请访问 /hero?id=2 查看GRPC服务端返回的数据';
  }
}
