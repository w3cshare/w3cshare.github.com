/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 10:00:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 01:11:34
 * @FilePath: /FullStack/libs/tsconfig-base/examples/example-usage.ts
 * @Description: 示例文件，展示如何使用tsconfig-base插件
 */

/*
 * 方法一：在tsconfig.json中直接继承
 * 在tsconfig.json文件中添加：
 * {
 *   "extends": "tsconfig-base-smart/tsconfig.base.json",
 *   "compilerOptions": {
 *     "outDir": "./dist"
 *   }
 * }
 */

// 方法二：使用API创建配置

import { createTsConfig, getBaseTsConfigPath } from '../src/tsconfig-base-smart'

/**
 * 示例：获取基础配置路径
 */
function exampleGetBasePath() {
  const basePath = getBaseTsConfigPath()
  console.log('基础配置路径:', basePath)
  return basePath
}

/**
 * 示例：创建自定义配置
 */
function exampleCreateConfig() {
  // 创建自定义配置
  const customConfig = createTsConfig({
    compilerOptions: {
      outDir: './dist',
      sourceMap: false,

      // 其他自定义选项
      target: 'ES2022',
    },
    include: ['src/**/*'],
  })

  console.log('生成的配置:', JSON.stringify(customConfig, null, 2))

  /*
   * 将配置写入文件（示例）
   * fs.writeFileSync('./tsconfig.generated.json', JSON.stringify(customConfig, null, 2));
   */

  return customConfig
}

// 运行示例
exampleGetBasePath()
exampleCreateConfig()
