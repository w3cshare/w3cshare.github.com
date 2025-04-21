/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-09 11:07:43
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-09 11:17:11
 * @FilePath: /FullStack/pro/typeorm-mysql/src/common/api-version.ts
 * @Description: Api版本控制 for @nestjs/common
 */
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';

export function ApiVersion(app, configService) {
  // 全局前缀
  const defaultApiVersion = configService.get('API_VERSION');
  console.log('defaultApiVersion', defaultApiVersion.split(','));
  app.setGlobalPrefix(configService.get('API_PREFIX') || 'api');
  app.enableVersioning({
    type: VersioningType.URI, // 版本号在URI中
    defaultVersion:
      (defaultApiVersion?.trim() && defaultApiVersion?.split(',')) ||
      VERSION_NEUTRAL, // 默认版本
    prefix: configService.get('API_VERSION_PREFIX') || 'v', // 版本号前缀
    // 版本号的格式，这里使用了SemVer格式
    // 格式为：主版本号.次版本号.修订号，例如：1.0.0
    // 主版本号：当你做了不兼容的API修改，
    // 次版本号：当你做了向下兼容的功能性新增，
    // 修订号：当你做了向下兼容的问题修正。
    // 例如：1.0.0 -> 1.1.0 -> 1.1.1
  });
}
