/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 14:44:33
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-28 17:23:14
 * @FilePath: /FullStack/micro-service/nestjs-logger/src/logger.module.ts
 * @Description: --
 */
import { DynamicModule, InjectionToken, Module, OptionalFactoryDependency } from '@nestjs/common'

import { LOGGER_OPTIONS } from './logger.constants'
import { LoggerOptions } from './logger.interfaces'
import { LoggerService } from './logger.service'

@Module({})
export class LoggerModule {
  static register(options: LoggerOptions): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LOGGER_OPTIONS,
          useValue: options,
        },
        LoggerService,
      ],
      exports: [LoggerService], // 导出服务供外部使用
    }
  }

  static registerAsync(options: {
    useFactory: () => Promise<LoggerOptions> | LoggerOptions
    inject?: (InjectionToken | OptionalFactoryDependency)[]
  }): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LOGGER_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        LoggerService,
      ],
      exports: [LoggerService],
    }
  }
}

export default LoggerService
