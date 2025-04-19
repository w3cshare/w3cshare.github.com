/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 20:57:13
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 19:23:47
 * @FilePath: /FullStack/micro-service/nestjs-swagger/src/nestjs-swagger.ts
 * @Description: NestJS Swagger文档生成插件
 */
import fastifyStatic from '@fastify/static';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { knife4jSetup } from 'nestjs-knife4j2';

import { NestjsSwaggerOptions } from './swagger.interfaces';

/**
 * 配置并初始化NestJS Swagger文档
 * @param app NestJS应用实例
 * @param options Swagger配置选项
 */
export function nestjsSwagger(app: INestApplication, options: NestjsSwaggerOptions = {}) {
  // 默认配置
  const defaultOptions: NestjsSwaggerOptions = {
    isFastify: false,
    title: 'API Documentation',
    description: 'API Documentation Description',
    version: '1.0',
    tags: [],
    path: 'api-doc',
    enableKnife4j: true,
    auth: {
      enableBearer: false,
      bearerDescription: 'JWT Authorization',
      enableBasic: false,
      basicDescription: 'Basic Authorization',
      enableApiKey: false,
      apiKeyName: 'api_key',
      apiKeyIn: 'header',
      apiKeyDescription: 'API Key Authorization',
    },
  };

  // 合并配置
  const config = { ...defaultOptions, ...options };

  // 创建Swagger文档构建器
  const documentBuilder = new DocumentBuilder()
    .setTitle(config.title)
    .setDescription(config.description)
    .setVersion(config.version);

  // 添加标签
  if (config.tags && config.tags.length > 0) {
    config.tags.forEach(tag => documentBuilder.addTag(tag));
  }

  // 添加认证
  if (config.auth) {
    if (config.auth.enableBearer) {
      documentBuilder.addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: config.auth.bearerDescription,
        },
        'bearer',
      );
    }

    if (config.auth.enableBasic) {
      documentBuilder.addBasicAuth(
        {
          type: 'http',
          scheme: 'basic',
          description: config.auth.basicDescription,
        },
        'basic',
      );
    }

    if (config.auth.enableApiKey) {
      documentBuilder.addApiKey(
        {
          type: 'apiKey',
          name: config.auth.apiKeyName,
          in: config.auth.apiKeyIn,
          description: config.auth.apiKeyDescription,
        },
        'api_key',
      );
    }
  }

  // 构建Swagger配置
  const builtConfig = documentBuilder.build();

  // 创建Swagger文档
  const document = SwaggerModule.createDocument(app, builtConfig, config.documentOptions);

  // 设置Swagger UI
  SwaggerModule.setup(config.path, app, document, config.customOptions);

  // 设置Knife4j增强UI
  if (config.enableKnife4j) {
    const knife4jConfig = [
      {
        name: config.version,
        url: `/${config.path}-json`,
        swaggerVersion: '2.0',
        location: `/${config.path}-json`,
      },
    ];

    knife4jSetup(app, knife4jConfig, config.isFastify ? fastifyStatic : null).catch(err => {
      console.error('Failed to start Knife4j:', err);
    });
  }

  // 返回生成的Swagger文档
  return document;
}
