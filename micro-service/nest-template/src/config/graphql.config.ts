/*
 * @Author: wangwei
 * @Date: 2025-04-09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-09 15:08:35
 * @Description: GraphQL配置
 */

import { GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';

// GraphQL配置选项
export const graphqlConfig: GqlModuleOptions = {
  // 自动生成schema文件的路径
  autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
  // 是否对生成的schema进行排序
  sortSchema: true,
  // 是否启用playground（生产环境建议关闭）
  // playground: process.env.NODE_ENV !== 'production',
  // 是否启用debug模式（生产环境建议关闭）
  debug: process.env.NODE_ENV !== 'production',
  // 上下文函数，用于传递请求信息
  context: ({ req }) => ({ req }),
  // 是否包含错误详情（生产环境建议关闭）
  // includeStacktraceInErrorResponses: process.env.NODE_ENV !== 'production',
};

export default graphqlConfig;
