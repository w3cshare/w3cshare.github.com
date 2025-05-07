/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 00:53:38
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 02:57:21
 * @FilePath: /FullStack/libs/tsconfig-base/src/tsconfig-base.ts
 * @Description: TypeScript配置基础插件，提供统一的TS配置供子项目继承
 */
import * as fs from 'fs'
import * as path from 'path'

/**
 * 获取基础TypeScript配置路径
 * @returns 返回tsconfig.base.json的绝对路径
 */
export function getBaseTsConfigPath(): string {
  return path.resolve(__dirname, '../tsconfig.base.json')
}

/**
 * 创建继承基础配置的TypeScript配置
 * @param customOptions 自定义配置选项
 * @returns 合并后的TypeScript配置对象
 * @throws 如果没有设置outDir，将抛出错误
 */
export function createTsConfig(customOptions: Record<string, any> = {}): Record<string, any> {
  const baseTsConfigPath = getBaseTsConfigPath()
  const baseTsConfig = JSON.parse(fs.readFileSync(baseTsConfigPath, 'utf8'))

  // 确保设置了outDir
  if (!customOptions.compilerOptions?.outDir) {
    console.warn('警告: 未设置 compilerOptions.outDir，这可能导致编译输出到错误位置。请确保设置outDir！');

    // 为防止问题，如果未设置则添加默认值
    if (!customOptions.compilerOptions) {
      customOptions.compilerOptions = {};
    }
    customOptions.compilerOptions.outDir = 'lib';
    console.warn('已自动设置 outDir 为 "lib"，建议手动指定输出目录');
  }

  return {
    extends: "tsconfig-base-smart",
    ...customOptions,
  }
}

/**
 * 导出默认配置对象
 */
export default {
  createTsConfig,
  getBaseTsConfigPath,
}
