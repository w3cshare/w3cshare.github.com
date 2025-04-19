/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-31 17:03:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-04 19:13:12
 * @Description: Config service
 */

//
import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

import { ConfigModuleOptions } from './config.interfaces';

@Injectable()
export class ConfigService {
  constructor(options?: ConfigModuleOptions) {
    this.configService = new NestConfigService({
      envFilePath: options?.envFilePath,
      validationSchema: options?.validationSchema,
      validationOptions: options?.validationOptions,
    });
  }

  private configService: NestConfigService;

  /**
   * 获取配置值
   * @param key 配置键
   * @param defaultValue 默认值
   */
  get<T = any>(key: string, defaultValue?: T): T {
    return this.configService.get<T>(key, defaultValue);
  }

  /**
   * 获取必需的配置值，如果不存在则抛出错误
   * @param key 配置键
   */
  getOrThrow<T = any>(key: string): T {
    return this.configService.getOrThrow<T>(key);
  }

  /**
   * 获取所有配置
   */
  getAll(): Record<string, any> {
    return this.configService.get('');
  }
}
