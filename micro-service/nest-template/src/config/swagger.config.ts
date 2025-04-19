/*
 * @Author: wangwei
 * @Date: 2025-04-09
 * @LastEditors: wangwei
 * @LastEditTime: 2025-04-09
 * @Description: Swagger配置
 */

import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

// Swagger文档构建器配置
export const swaggerConfig = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('NestJS API文档')
  .setVersion('1.0')
  .addBearerAuth()
  .addTag('用户', '用户相关接口')
  .addTag('认证', '认证相关接口')
  .addTag('文章', '文章相关接口')
  .build();

// Swagger文档选项
export const swaggerOptions: SwaggerDocumentOptions = {
  operationIdFactory: (
    controllerKey: string,
    methodKey: string,
  ) => methodKey,
};
