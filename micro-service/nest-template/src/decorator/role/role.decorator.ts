/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 11:22:38
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 11:23:25
 * @FilePath: /FullStack/micro-service/nest-template/src/decorator/role/role.decorator.ts
 * @Description: role decorator
 */
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'role';
export const Role = (...role: string[]) => SetMetadata(ROLES_KEY, role);

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const IS_ADMIN_KEY = 'isAdmin';
export const Admin = () => SetMetadata(IS_ADMIN_KEY, true);
