/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:42:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-22 16:42:09
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/legacy-configs.ts
 * @Description: ESLint v8及以下版本的传统配置
 */

import { type ESLintRuleSet } from './types';

/**
 * 创建ESLint传统配置
 * 
 * @param rules 规则集合
 * @returns ESLint传统配置对象集合
 */
export function createLegacyConfigs(
  rules: {
    baseRules: ESLintRuleSet;
    typescriptRules: ESLintRuleSet;
    reactRules: ESLintRuleSet;
    vueRules: ESLintRuleSet;
    nestjsRules: ESLintRuleSet;
  }
): Record<string, Record<string, unknown>> {
  const {
    baseRules,
    typescriptRules,
    reactRules,
    vueRules,
    nestjsRules,
  } = rules;

  /**
   * 基础配置，适用于所有项目
   */
  const baseConfig = {
    plugins: ['import', 'simple-import-sort', 'unused-imports'],
    rules: baseRules,
  };

  /**
   * TypeScript配置
   */
  const typescriptConfig = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
      ...baseRules,
      ...typescriptRules,
    },
  };

  /**
   * React配置
   */
  const reactConfig = {
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...reactRules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };

  /**
   * Vue配置
   */
  const vueConfig = {
    extends: ['plugin:vue/vue3-recommended'],
    plugins: ['vue'],
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...vueRules,
    },
  };

  /**
   * NestJS配置
   */
  const nestjsConfig = {
    extends: ['plugin:node/recommended'],
    plugins: ['node'],
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...nestjsRules,
    },
  };

  // 返回所有配置
  return {
    base: baseConfig,
    typescript: typescriptConfig,
    react: reactConfig,
    vue: vueConfig,
    nestjs: nestjsConfig,
    
    // 推荐配置，默认使用typescript配置
    recommended: typescriptConfig,
  };
} 