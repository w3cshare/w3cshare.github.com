/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:47:43
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-31 14:39:46
 * @FilePath: /FullStack/micro-service/tcp-client/src/app.controller.ts
 * @Description: --
 */
import { Controller, Get, Inject } from '@nestjs/common';
import {
  // @RpcException
  ClientProxy,
} from '@nestjs/microservices';
import { catchError, of, timeout } from 'rxjs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MATH_SERVICE') private client: ClientProxy,
  ) {
    console.debug(appService);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/sum')
  getSum() {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];

    return this.client.send<number>(pattern, payload).pipe(
      timeout(5000),
      catchError((error: Error) => {
        console.log(error.message);
        return of({ error: error.message });
      }),
    );
  }

  @Get('/events')
  getEventsData(): any {
    return this.client.emit<number>('user_created', {
      userId: 1,
      username: 'test',
    });
  }
}
