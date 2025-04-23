/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:31:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 14:06:44
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/eslint-plugin-smart.ts
 * @Description: ESLint插件公共配置，适用于React、Vue、NestJS和TypeScript项目
 */

// 导入类型和优化后的规则集
import {
  javascriptRules as javascriptRules2,
  nodejsRules as nodejsRules2,
  reactRules as reactRules2,
  typescriptRules as typescriptRules2,
  vueRules as vueRules2,
} from "./recommend";
import { type ESLintRuleSet } from "./types";
import { createFlatConfigs } from "./flat-configs";
import { createLegacyConfigs } from "./legacy-configs";
import { isESLintV9, loadPlugins } from "./utils";

/**
 * ESLint插件类型
 */
type ESLintPlugin = unknown;

/**
 * ESLint配置类型
 */
interface ESLintConfig {
  parser?: string;
  plugins?: string[];
  extends?: string[];
  rules?: ESLintRuleSet;
  settings?: Record<string, unknown>;
  [key: string]: unknown;
}

/**
 * ESLint v9 扁平配置类型
 */
interface ESLintFlatConfig {
  files: string[];
  plugins?: Record<string, ESLintPlugin>;
  languageOptions?: {
    parser?: unknown;
    parserOptions?: Record<string, unknown>;
  };
  rules?: ESLintRuleSet;
  settings?: Record<string, unknown>;
  [key: string]: unknown;
}

/**
 * 插件导出的类型接口
 */
interface ESLintPluginExport {
  rules: {
    base: ESLintRuleSet;
    typescript: ESLintRuleSet;
    react: ESLintRuleSet;
    vue: ESLintRuleSet;
    nestjs: ESLintRuleSet;
  };
  configs?: Record<string, unknown>;
  plugins?: Record<string, unknown>;
}

/**
 * 基础规则集，适用于所有项目
 *
 * 包含错误防范、代码风格和导入规则等通用规则
 */
const baseRules = {
  ...javascriptRules2,

  // 错误防范规则
  // 'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], // 允许使用console.warn/error/info，但警告使用console.log
  // 'no-debugger': 'warn', // 警告使用debugger语句
  // 'no-alert': 'warn', // 警告使用alert/confirm/prompt
  // 'no-var': 'error', // 禁止使用var声明变量
  // 'prefer-const': 'error', // 如果变量不会被重新赋值，要求使用const
  // 'no-unused-vars': 'off', // 使用@typescript-eslint/no-unused-vars代替

  // // 代码风格规则
  // 'max-len': ['warn', { code: 120, ignoreComments: true, ignoreStrings: true }], // 限制行长度为120字符
  // quotes: ['error', 'single', { avoidEscape: true }], // 要求使用单引号
  // semi: ['error', 'always'], // 要求使用分号
  // 'comma-dangle': ['error', 'always-multiline'], // 多行时要求尾随逗号
  // 'arrow-parens': ['error', 'always'], // 箭头函数参数始终使用括号
  // 'object-curly-spacing': ['error', 'always'], // 对象字面量括号内要求有空格
  // 'array-bracket-spacing': ['error', 'never'], // 数组括号内不要求有空格

  // // 导入规则
  // 'import/order': 'off', // 使用simple-import-sort代替
  // 'simple-import-sort/imports': 'error', // 要求import语句排序
  // 'simple-import-sort/exports': 'error', // 要求export语句排序
  // 'unused-imports/no-unused-imports': 'error', // 禁止未使用的导入
  // 'unused-imports/no-unused-vars': [
  //   'warn',
  //   { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }, // 允许下划线开头的未使用变量
  // ],
};

/**
 * TypeScript特定规则
 *
 * 包含TypeScript项目的类型检查和代码质量规则
 */
const typescriptRules = {
  ...typescriptRules2,

  // 类型安全规则
  // '@typescript-eslint/no-explicit-any': 'warn', // 警告使用any类型
  // '@typescript-eslint/explicit-module-boundary-types': 'off', // 不要求导出函数和类的公共类方法的显式返回和参数类型
  // '@typescript-eslint/no-non-null-assertion': 'warn', // 警告使用非空断言操作符(!)

  // // 代码质量规则
  // '@typescript-eslint/no-unused-vars': [
  //   'warn',
  //   { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }, // 允许下划线开头的未使用变量
  // ],
  // '@typescript-eslint/no-empty-function': 'warn', // 警告空函数
  // '@typescript-eslint/no-empty-interface': 'warn', // 警告空接口
  // '@typescript-eslint/ban-ts-comment': 'warn', // 警告使用@ts-注释
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
    },
  ],
};

/**
 * React特定规则
 *
 * 包含React项目的JSX语法、Hooks使用和可访问性规则
 */
const reactRules = {
  ...reactRules2,

  // React基础规则
  // 'react/prop-types': 'off', // 使用TypeScript类型检查代替，不需要prop-types
  // 'react/react-in-jsx-scope': 'off', // React 17+不再需要导入React
  // 'react/display-name': 'off', // 不要求组件定义displayName

  // // JSX语法规则
  // 'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // 禁止在不必要的情况下使用花括号
  // 'react/jsx-boolean-value': ['error', 'never'], // JSX中布尔属性不需要显式值
  // 'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // JSX标签的闭合括号位置
  // 'react/jsx-no-useless-fragment': 'error', // 禁止不必要的Fragment
  // 'react/self-closing-comp': 'error', // 没有子元素的组件使用自闭合标签

  // // Hooks规则
  // 'react-hooks/rules-of-hooks': 'error', // 强制执行Hooks的规则
  // 'react-hooks/exhaustive-deps': 'warn', // 检查effect的依赖项

  // // 可访问性规则
  // 'jsx-a11y/alt-text': 'warn', // 要求img标签有alt属性
  // 'jsx-a11y/anchor-is-valid': 'warn', // 要求a标签有有效的href
};

/**
 * Vue特定规则
 *
 * 包含Vue项目的组件定义、模板语法和代码风格规则
 */
const vueRules = {
  ...vueRules2,

  // 组件定义规则
  // 'vue/multi-word-component-names': 'warn', // 组件名应该是多个单词
  // 'vue/no-unused-components': 'warn', // 禁止注册但未使用的组件
  // 'vue/require-default-prop': 'warn', // 要求props有默认值

  // // 模板语法规则
  // 'vue/no-unused-vars': 'warn', // 禁止模板中未使用的变量
  // 'vue/no-v-html': 'warn', // 警告使用v-html（可能导致XSS攻击）
  // 'vue/this-in-template': ['error', 'never'], // 禁止在模板中使用this

  // // 代码风格规则
  // 'vue/component-name-in-template-casing': ['error', 'PascalCase'], // 模板中组件名使用PascalCase
  // 'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }], // 多行元素的闭合括号需要换行
  // 'vue/html-indent': ['error', 2], // HTML缩进使用2个空格
  // 'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }], // 单行最多3个属性，多行每行1个
};

/**
 * NestJS特定规则
 *
 * 包含NestJS后端项目的Node.js相关规则，主要是放宽一些限制
 */
const nestjsRules = {
  ...nodejsRules2,

  // Node.js规则调整
  // 'node/no-unsupported-features/es-syntax': 'off', // 允许使用现代ES语法（NestJS使用TypeScript编译）
  // 'node/no-missing-import': 'off', // TypeScript会处理导入，不需要Node.js的导入检查
  // 'node/no-unpublished-import': 'off', // 允许导入devDependencies中的包（用于测试等）

  "@typescript-eslint/no-empty-function": "off",
  // nest官网推荐
  "@typescript-eslint/interface-name-prefix": "off",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-explicit-any": "off",
  // 可以根据项目需要添加更多NestJS特定规则
};

/**
 * 创建ESLint配置导出对象
 *
 * @returns ESLint插件导出对象
 */
const createExportObject = (): ESLintPluginExport => {
  // 加载插件
  const plugins = loadPlugins();

  // 规则集合
  const rules = {
    baseRules,
    typescriptRules,
    reactRules,
    vueRules,
    nestjsRules,
  };

  // 创建基本导出对象
  const exportObj: ESLintPluginExport = {
    // 规则集
    rules: {
      base: baseRules,
      typescript: typescriptRules,
      react: reactRules,
      vue: vueRules,
      nestjs: nestjsRules,
    },

    // 内置插件导出
    plugins: {
      import: plugins.import,
      "simple-import-sort": plugins.simpleImportSort,
      "unused-imports": plugins.unusedImports,
    },
  };

  // 根据ESLint版本导出不同格式的配置
  if (isESLintV9()) {
    // ESLint v9+ 使用扁平配置
    exportObj.configs = createFlatConfigs(plugins, rules);
  } else {
    // ESLint v8 及以下使用传统配置
    exportObj.configs = createLegacyConfigs(rules);
  }

  return exportObj;
};

// 创建导出对象
const exportObj = createExportObject();

// 根据环境选择合适的导出方式
if (typeof module !== "undefined" && module.exports) {
  // CommonJS环境
  module.exports = exportObj;
} else {
  // ESM环境
  // export default已经在文件末尾
}

// ESM导出
export default exportObj;
