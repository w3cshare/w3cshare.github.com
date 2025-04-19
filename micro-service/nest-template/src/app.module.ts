/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 18:04:02
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 14:54:22
 * @FilePath: /FullStack/micro-service/nest-template/src/app.module.ts
 * @Description: nest模板
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { UsersModule } from './module/users/users.module';
import { ClientService } from './module/consul/client/client.service';
import { ClientController } from './module/consul/client/client.controller';
import { GatewayGateway } from './gateway/gateway.gateway';
import { Provider } from './provider/provider';
import { ResolverResolver } from './resolver/resolver.resolver';
import { ResourceModule } from './resource/resource.module';
import { ModuleModule } from './module/module.module';
import { ControllerController } from './controller/controller.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', `.env.${process.env.NODE_ENV || 'development'}`],
    }),
    AuthModule,
    UsersModule,
    ResourceModule,
    ModuleModule,
  ],
  controllers: [AppController, ClientController, ControllerController],
  providers: [AppService, ClientService, GatewayGateway, Provider, ResolverResolver],
})
export class AppModule {}
