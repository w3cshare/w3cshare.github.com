/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 12:40:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/types.ts
 * @Description: 类型定义
 */

/**
 * ESLint规则类型
 * 支持字符串形式、数组形式以及嵌套数组形式的规则配置
 */
export type ESLintRule =
  | string
  | [string, Record<string, unknown>]
  | (string | Record<string, unknown> | number)[];

/**
 * ESLint规则集类型
 */
export type ESLintRuleSet = Record<string, ESLintRule>;

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
    globals?: Record<string, boolean | "readable" | "writeable">;
    ecmaVersion?: number | "latest";
    sourceType?: "script" | "module" | "commonjs";
  };
  linterOptions?: {
    noInlineConfig?: boolean;
    reportUnusedDisableDirectives?: boolean | "error" | "warn";
  };
  ignorePatterns: string[];
  env?: Record<string, boolean>;
  rules?: Record<string, any>;
  settings?: Record<string, any>;
}
