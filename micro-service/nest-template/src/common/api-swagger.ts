/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-09 11:08:20
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-09 11:16:47
 * @FilePath: /FullStack/pro/typeorm-mysql/src/common/api-swagger.ts
 * @Description: swagger文档 for @nestjs/swagger配置
 */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const ApiSwagger = (app, configService) => {
  // Swagger配置
  const config = new DocumentBuilder()
    .setTitle('用户权限管理系统API')
    .setDescription('提供用户管理、角色管理、权限管理等相关接口')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: '输入JWT token',
        in: 'header',
      },
      'jwt', // 这个名称用于在控制器中引用
    )
    .addTag('用户管理', '用户的增删改查操作')
    .addTag('角色管理', '角色的增删改查操作')
    .addTag('权限管理', '权限的增删改查操作')
    .addTag('菜单管理', '菜单的增删改查操作')
    .addTag('认证管理', '用户的登录认证')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // 保持授权状态
      docExpansion: 'none', // 默认折叠所有接口
      filter: true, // 启用过滤
      showExtensions: true, // 显示扩展信息
    },
  });
};
