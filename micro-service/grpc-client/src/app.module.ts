/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 15:59:49
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 00:49:31
 * @FilePath: /FullStack/micro-service/grpc-client/src/app.module.ts
 * @Description: --
 */
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { loadProto } from '@smarts-isoftstone/grpc-proto-pkg';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pdf2CompressedModule } from './pdf2compressed.module';

// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// GraphQLModule.forRoot<ApolloDriverConfig>({
//   driver: ApolloDriver,
//   // playground: false,
// }),

// 检测到我实际没有发布

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          packageDefinition: loadProto('hero'),
        },
      },
    ]),
    Pdf2CompressedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
