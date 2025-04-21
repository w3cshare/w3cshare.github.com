/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 12:40:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/types.ts
 * @Description: 类型定义
 */

// 为了避免 ESLint v9 类型导入问题，我们自定义一个简化的 FlatConfig 类型
export interface FlatConfig {
  files?: string[] | string;
  ignores?: string[] | string;
  name?: string;
  plugins?: Record<string, any>;
  processor?: string;
  languageOptions?: {
    parser?: any;
    parserOptions?: any;
    globals?: Record<string, boolean | 'readable' | 'writeable'>;
    ecmaVersion?: number | 'latest';
    sourceType?: 'script' | 'module' | 'commonjs';
  };
  linterOptions?: {
    noInlineConfig?: boolean;
    reportUnusedDisableDirectives?: boolean | 'error' | 'warn';
  };
  rules?: Record<string, any>;
  settings?: Record<string, any>;
} 