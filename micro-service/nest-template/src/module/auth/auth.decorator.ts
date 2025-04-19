/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 11:57:31
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 12:19:34
 * @FilePath: /FullStack/micro-service/nest-template/src/module/auth/auth.decorator.ts
 * @Description: auth decorator
 */
import { SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from './auth.guard';

export const Auth = (...args: string[]) => SetMetadata('auth', args);
export const Public = (...args: string[]) => SetMetadata(IS_PUBLIC_KEY, true);
