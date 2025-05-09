/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-09 17:51:18
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-10 00:08:44
 * @FilePath: /FullStack/lib-lint/commitlint-plugin-smart/tsup.config.ts
 * @Description: tsup构建配置文件
 */
import { defineConfig } from 'tsup'

export default defineConfig({
  // 清理输出目录
  clean: true,

  // 生成声明文件
  dts: true,

  // 入口文件
  entry: ['src/**/**.ts'],

  // 构建格式
  format: ['cjs', 'esm'],

  // 输出目录
  outDir: 'lib',

  // 保持目录结构
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
    }
  },

  // 源码映射
  sourcemap: false,
})
