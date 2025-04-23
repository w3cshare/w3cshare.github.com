<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 13:54:27
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 12:27:28
 * @FilePath: /FullStack/micro-service/grpc-gateway/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## ESLint配置

本项目使用了基于Lerna + Nx + pnpm + Workspace的单体（mono）项目架构中的`eslint-plugin-smart`插件进行代码规范检查。

### ESLint配置文件

项目使用ESLint v9的扁平配置格式(`eslint.config.mjs`)：

```javascript
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPlugin from 'eslint-plugin-smart'

// 获取typescript-eslint推荐配置
const typescriptConfigs = tseslint.configs.recommended

// 创建基础配置
const baseConfig = {
  files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
  plugins: {
    smart: eslintPlugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
    },
  },
  rules: {
    // 自定义规则配置
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
}

// 导出配置
export default [js.configs.recommended, ...typescriptConfigs, baseConfig]
```

### 运行Lint检查

```bash
# 运行ESLint检查
$ pnpm run lint

# 自动修复ESLint问题
$ pnpm run lint:fix
```

### 编码规范

- 所有未使用的变量应以下划线(`_`)开头，以表示有意不使用
- 避免使用`console.log`，特别是在生产环境代码中
- 使用TypeScript的类型系统确保类型安全
- 遵循NestJS最佳实践和设计模式
