/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-30 18:03:01
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 14:17:14
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/eslint-plugin-smarts.ts
 * @Description: ESLint插件主入口文件
 *
 * 这个ESLint插件提供了一套全面的代码规范配置，适用于React和Vue项目，
 * 旨在提高代码质量、可维护性和开发效率。它集成了多种常用的ESLint插件和规则，
 * 让你可以快速应用最佳实践到你的项目中。
 *
 * 主要特性：
 * - 支持Nestjs项目
 * - 支持React和Vue项目
 * - 内置TypeScript支持
 * - 自动排序imports和exports
 * - 自动移除未使用的imports和变量
 * - 集成了华为JavaScript编码规范
 * - 包含代码格式化和最佳实践规则
 */

import { ESLint } from 'eslint'
import annotation from 'eslint-plugin-annotation'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

// 导入规则配置
// import recommendedExtends from './recommended/recommended-extends';
// import recommendedGlobals from './recommended/recommended-globals';
// import recommendedParserOptions from './recommended/recommended-parserOptions';
// import recommendedPlugins from './recommended/recommended-plugins';
// import recommendedRules from './recommended/recommended-rules';
// import recommendedRulesAnt from './recommended/recommended-rules-ant';
// import recommendedRulesExpand from './recommended/recommended-rules-expand';
// import recommendedRulesGpt from './recommended/recommended-rules-gpt';
// import recommendedRulesHaWei from './recommended/recommended-rules-haWei';
// import recommendedRulesHaWei1 from './recommended/recommended-rules-haWei1';
// import recommendedRulesReact from './recommended/recommended-rules-react';
// import recommendedRulesVue from './recommended/recommended-rules-vue';

/**
 * ESLint插件定义
 * 提供了一套完整的规则配置，适用于React和Vue项目
 */
export default {
  configs: {
    /**
     * 推荐配置
     * 包含了所有基础规则、框架特定规则和代码质量规则
     */
    recommended: {
      rules: {
        // ==========================================
        // 基础规则集成 - 通用JavaScript/TypeScript规则
        // ==========================================
        // ...recommendedRules,
        // ...recommendedRulesAnt,      // Ant Design相关规则
        // ...recommendedRulesExpand,   // 扩展规则
        // ...recommendedRulesHaWei,    // 华为JavaScript编码规范 - 基础部分
        // ...recommendedRulesHaWei1,   // 华为JavaScript编码规范 - 扩展部分
        // ...recommendedRulesGpt,      // GPT优化建议规则

        // ==========================================
        // 框架特定规则 - 根据项目类型自动应用
        // ==========================================
        // ...recommendedRulesReact,    // React项目规则
        // ...recommendedRulesVue,      // Vue项目规则

        // ==========================================
        // 代码组织规则 - 提高代码可读性和可维护性
        // ==========================================

        // 数组/对象排序
        'annotation/sort': 'error',
        'annotation/sort-keys': 'error',
        'annotation/format-date': 'error',
        'annotation/unique': 'error',

        // 移除无用的代码
        '@typescript-eslint/no-unused-vars': 'off', // 关闭TS的未使用变量检查，使用unused-imports代替
        'no-unused-vars': 'off', // 关闭ESLint的未使用变量检查，使用unused-imports代替
        'unused-imports/no-unused-imports': 'error', // 自动删除未使用的导入
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all', // 检查所有变量
            varsIgnorePattern: '^_', // 忽略以_开头的变量
            args: 'after-used', // 仅检查使用后的参数
            argsIgnorePattern: '^_', // 忽略以_开头的参数
          },
        ],

        // 导入/导出排序
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // 框架库放在首行
              ['^react', '^vue', '^ant-design-vue', '^@?\\w'],

              // 内部导入
              ['^(@|components)(/.*|$)'],

              // 父级导入
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

              // 同级导入
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

              // 样式导入
              ['^.+\\.?(css)$'],

              // 带有副作用导入
              ['^\\u0000'],
            ],
          },
        ],

        // ==========================================
        // 代码质量规则 - 避免常见错误和提高代码质量
        // ==========================================
        'no-var': 'error', // 使用let/const替代var
        'no-console': 'off', // 允许使用console (开发环境)
        'no-debugger': 'error', // 禁止使用debugger
        'no-alert': 'error', // 禁止使用alert/confirm/prompt

        // 注释格式规则 (华为规范)
        'lines-around-comment': [
          'warn',
          {
            beforeBlockComment: true, // 块注释前需要空行
            afterBlockComment: false, // 块注释后不需要空行
            beforeLineComment: true, // 行注释前需要空行
            afterLineComment: false, // 行注释后不需要空行
            allowBlockStart: true, // 允许在块开始处的注释不需要前置空行
            allowBlockEnd: false, // 不允许在块结束处的注释不需要前置空行
            allowObjectStart: true, // 允许在对象开始处的注释不需要前置空行
            allowObjectEnd: false, // 不允许在对象结束处的注释不需要前置空行
            allowArrayStart: true, // 允许在数组开始处的注释不需要前置空行
            allowArrayEnd: false, // 不允许在数组结束处的注释不需要前置空行
            allowClassStart: true, // 允许在类开始处的注释不需要前置空行
            allowClassEnd: false, // 不允许在类结束处的注释不需要前置空行
            ignorePattern: '\\s*@\\w+', // 忽略带有 @xxx 注解的注释
          },
        ],

        // 注释前需要空格 (华为规范)
        'spaced-comment': ['error', 'always'],

        // 圈复杂度限制 (华为规范)
        complexity: ['warn', { max: 10 }],
      },

      // ==========================================
      // 插件配置 - 注册所需的ESLint插件
      // ==========================================
      plugins: {
        annotation: annotation, // 注解相关插件
        'unused-imports': unusedImports, // 未使用导入处理插件
        'simple-import-sort': simpleImportSort, // 导入排序插件
        // ...recommendedPlugins,               // 其他推荐插件
      },

      // ==========================================
      // 语言选项 - 配置全局变量和解析器选项
      // ==========================================
      languageOptions: {
        globals: {
          // ...recommendedGlobals,             // 全局变量定义
        },
        parserOptions: {
          // ...recommendedParserOptions,       // 解析器选项
        },
      },

      // ==========================================
      // 继承配置 - 继承其他ESLint配置
      // ==========================================
      extends: [
        // ...recommendedExtends,               // 推荐的继承配置
      ],
    },
  },
} satisfies ESLint.Plugin
