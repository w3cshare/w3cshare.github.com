import { defineConfig } from 'tsup'

export default defineConfig({
  // 其他配置...
  target: 'es5', // 设置目标为ES5
  // 确保其他相关配置，如entryPoints（入口文件），outfile（输出文件）等也正确设置。
  entryPoints: ['src/index.ts'], // 示例入口文件
  outDir: 'dist', // 输出目录
  format: ['cjs', 'esm'], // 输出格式，可以是'cjs'（CommonJS）或'esm'（ES模块）
  // 更多配置...
})
