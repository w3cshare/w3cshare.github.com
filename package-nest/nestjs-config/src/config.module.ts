/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-31 17:03:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-31 18:28:51
 * @Description: Config module
 */
import { Module } from '@nestjs/common';
import * as Joi from 'joi';

import { ConfigModuleOptions } from './config.interfaces';
import { ConfigService } from './config.service';
import { mergeValidationSchema } from './config.validation';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static forRoot(options?: ConfigModuleOptions) {
    const defaultOptions: ConfigModuleOptions = {
      envFilePath: options?.envFilePath || `.env.${process.env.NODE_ENV || 'development'}`,
      isGlobal: false,
      validationSchema: Joi.object({}),
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
        ...options?.validationOptions,
      },
    };

    const mergedOptions = { ...defaultOptions, ...options };
    const validationSchema = mergeValidationSchema(mergedOptions.validationSchema);

    return {
      module: ConfigModule,
      providers: [
        {
          provide: ConfigService,
          useValue: new ConfigService({
            ...options,
            validationSchema,
          }),
        },
      ],
      exports: [ConfigService],
      global: options?.isGlobal ?? false,
    };
  }
}
