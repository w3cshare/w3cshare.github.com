/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 12:25:40
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 00:46:48
 * @FilePath: /FullStack/micro-service/grpc-client/src/app.controller.ts
 * @Description: --
 */
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  Hero,
  HeroById,
  HeroesService,
} from '@smarts-isoftstone/grpc-proto-pkg/lib/hero.interface';

import { AppService } from './app.service';

@Controller()
export class AppController {
  private heroesService: HeroesService;
  constructor(
    private readonly appService: AppService,
    @Inject('HERO_PACKAGE') private client: ClientGrpc,
  ) {
    console.debug(appService);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }

  @Get('/hero')
  getHero(@Query() data: HeroById): Promise<Hero> {
    const { id = 1 } = data || {};
    return this.heroesService.findOne({ id: Number(id) });
  }
}
