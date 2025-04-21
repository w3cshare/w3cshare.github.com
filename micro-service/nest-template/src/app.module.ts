/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 18:04:02
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-21 10:24:55
 * @FilePath: /FullStack/micro-service/nest-template/src/app.module.ts
 * @Description: nest模板
 */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';

import { DatabaseAccess } from '@/entity/DatabaseAccess';
import { Permission } from '@/entity/Permission';
import { Role } from '@/entity/Role';
import { RolePermission } from '@/entity/RolePermission';
import { TableAccess } from '@/entity/TableAccess';
import { User } from '@/entity/User';
import { UserRole } from '@/entity/UserRole';

export enum ConfigEnum {
  DB_TYPE = 'DB_TYPE',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_DATABASE = 'DB_DATABASE',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_SYNC = 'DB_SYNC',
  DB_CHARSET = 'DB_CHARSET',
  DB_COLLATION = 'DB_COLLATION',
  DB_TIMEZONE = 'DB_TIMEZONE',
  DB_POOL_SIZE = 'DB_POOL_SIZE',
  DB_CONNECT_TIMEOUT = 'DB_CONNECT_TIMEOUT',
  DB_MAX_QUERY_TIME = 'DB_MAX_QUERY_TIME',
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => dotenv.config({ path: '.env' })],
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      // @sort-keys: reversed
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        DB_PORT: Joi.number().default(3306),
        DB_HOST: Joi.string().ip().default('127.0.0.1'),
        DB_TYPE: Joi.string().valid('mysql', 'postgres').default('mysql'),
        DB_DATABASE: Joi.string().default('test'),
        DB_USERNAME: Joi.string().default('root'),
        DB_PASSWORD: Joi.string().default('root'),
        DB_SYNC: Joi.boolean().default(false),
        DB_CHARSET: Joi.string().default('utf8mb4'),
        DB_COLLATION: Joi.string().default('utf8mb4_general_ci'),
        DB_TIMEZONE: Joi.string().default('+08:00'),
        DB_POOL_SIZE: Joi.number().default(10),
        DB_CONNECT_TIMEOUT: Joi.number().default(20000),
        DB_MAX_QUERY_TIME: Joi.number().default(1000),
      }),
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get(ConfigEnum.DB_TYPE),
          host: configService.get(ConfigEnum.DB_HOST),
          port: configService.get(ConfigEnum.DB_PORT),
          username: configService.get(ConfigEnum.DB_USERNAME),
          password: configService.get(ConfigEnum.DB_PASSWORD),
          database: configService.get(ConfigEnum.DB_DATABASE),
          entities: [
            User,
            Permission,
            Role,
            UserRole,
            TableAccess,
            DatabaseAccess,
            RolePermission,
          ],
          synchronize: configService.get(ConfigEnum.DB_SYNC),

          // 设置字符集和排序规则
          charset: configService.get(ConfigEnum.DB_CHARSET),
          collation: configService.get(ConfigEnum.DB_COLLATION),

          // 设置时区
          timezone: configService.get(ConfigEnum.DB_TIMEZONE),

          // 日志配置优化
          logging: process.env.NODE_ENV === 'development',
          logger:
            process.env.NODE_ENV === 'development'
              ? 'advanced-console'
              : 'file',
          loggerOptions:
            process.env.NODE_ENV === 'development'
              ? undefined
              : {
                  path: 'logs/sql.log',
                  logQueries: true,
                  logQueryErrors: true,
                },
          maxQueryExecutionTime: configService.get(
            ConfigEnum.DB_MAX_QUERY_TIME,
          ), // 慢查询阈值，单位毫秒
          // 连接池配置
          poolSize: configService.get(ConfigEnum.DB_POOL_SIZE),
          connectTimeout: configService.get(ConfigEnum.DB_CONNECT_TIMEOUT),
        }) as TypeOrmModuleOptions,
    }),
    AuthModule,
    UsersModule,
    ResourceModule,
    ModuleModule,
  ],
  controllers: [AppController, ClientController, ControllerController],
  providers: [
    AppService,
    ClientService,
    GatewayGateway,
    Provider,
    ResolverResolver,
  ],
})
export class AppModule {}
