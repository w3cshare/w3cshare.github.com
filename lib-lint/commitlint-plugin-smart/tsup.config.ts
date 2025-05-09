/**
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-08
 * @Description: tsup构建配置文件
 */
import { defineConfig } from 'tsup';

export default defineConfig({
  // 入口文件
  entry: [
    'src/**/**.ts',
  ],
  // 构建格式
  format: ['cjs', 'esm'],
  // 生成声明文件
  dts: true,
  // 清理输出目录
  clean: true,
  // 输出目录
  outDir: 'lib',
  // 保持目录结构
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js'
    };
  },
  // 源码映射
  sourcemap: false
});