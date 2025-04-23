/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 14:44:42
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-28 18:00:11
 * @FilePath: /FullStack/micro-service/nestjs-logger/src/logger.service.ts
 * @Description: --
 */
import { Inject, Injectable } from '@nestjs/common'

import { LOGGER_OPTIONS } from './logger.constants'
import { LoggerOptions } from './logger.interfaces'

@Injectable()
export class LoggerService {
  constructor(@Inject(LOGGER_OPTIONS) private options: LoggerOptions) {
    console.debug(options) // 输出 optio
  }

  log(message: string) {
    if (this.options.format === 'json') {
      console.log(JSON.stringify({ message, level: this.options.level }))
    } else {
      console.log(`[${this.options.level}] ${message}`)
    }
  }
}
