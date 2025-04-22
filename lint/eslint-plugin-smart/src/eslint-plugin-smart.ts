/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:31:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-22 00:34:55
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/index.ts
 * @Description: ESLint插件公共配置，适用于React、Vue、NestJS和TypeScript项目
 */

// 定义插件导出的类型接口
interface ESLintPluginExport {
  rules: {
    base: Record<string, any>;
    typescript: Record<string, any>;
    react: Record<string, any>;
    vue: Record<string, any>;
    nestjs: Record<string, any>;
  };
  configs?: {
    base: any;
    typescript: any;
    react: any;
    vue: any;
    nestjs: any;
    recommended: any;
  };
  plugins?: {
    import: any;
    'simple-import-sort': any;
    'unused-imports': any;
  };
}

/**
 * 基础规则集，适用于所有项目
 */
const baseRules = {
  // 错误防范规则
  'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  'no-debugger': 'warn',
  'no-alert': 'warn',
  'no-var': 'error',
  'prefer-const': 'error',
  'no-unused-vars': 'off', // 使用@typescript-eslint/no-unused-vars代替

  // 代码风格规则
  'max-len': ['warn', { code: 120, ignoreComments: true, ignoreStrings: true }],
  quotes: ['error', 'single', { avoidEscape: true }],
  semi: ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
  'arrow-parens': ['error', 'always'],
  'object-curly-spacing': ['error', 'always'],
  'array-bracket-spacing': ['error', 'never'],

  // 导入规则
  'import/order': 'off', // 使用simple-import-sort代替
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
};

/**
 * TypeScript特定规则
 */
const typescriptRules = {
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/no-empty-interface': 'warn',
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'warn',
};

/**
 * React特定规则
 */
const reactRules = {
  'react/prop-types': 'off', // 使用TypeScript类型检查代替
  'react/react-in-jsx-scope': 'off', // React 17+不再需要导入React
  'react/display-name': 'off',
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  'react/jsx-no-useless-fragment': 'error',
  'react/self-closing-comp': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'jsx-a11y/alt-text': 'warn',
  'jsx-a11y/anchor-is-valid': 'warn',
};

/**
 * Vue特定规则
 */
const vueRules = {
  'vue/multi-word-component-names': 'warn',
  'vue/no-unused-components': 'warn',
  'vue/no-unused-vars': 'warn',
  'vue/require-default-prop': 'warn',
  'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }],
  'vue/html-indent': ['error', 2],
  'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }],
  'vue/no-v-html': 'warn',
  'vue/this-in-template': ['error', 'never'],
};

/**
 * NestJS特定规则
 */
const nestjsRules = {
  // NestJS项目通常遵循TypeScript规则，这里添加一些特定于后端的规则
  'node/no-unsupported-features/es-syntax': 'off', // 允许使用现代ES语法
  'node/no-missing-import': 'off', // TypeScript会处理导入
  'node/no-unpublished-import': 'off',
};

/**
 * 检测ESLint版本，判断使用哪种配置风格
 */
const isESLintV9 = () => {
  try {
    const eslintVersion = require('eslint/package.json').version;
    return parseInt(eslintVersion.split('.')[0], 10) >= 9;
  } catch (error) {
    return false;
  }
};

/**
 * 基础配置，适用于所有项目 (ESLint v8 格式)
 */
const baseConfig = {
  plugins: ['import', 'simple-import-sort', 'unused-imports'],
  rules: baseRules,
};

/**
 * TypeScript配置 (ESLint v8 格式)
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
 * React配置 (ESLint v8 格式)
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
 * Vue配置 (ESLint v8 格式)
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
 * NestJS配置 (ESLint v8 格式)
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

/**
 * 安全地导入插件，如果出错则返回null
 */
const safeRequire = (packageName: string) => {
  try {
    return require(packageName);
  } catch (error) {
    console.warn(`Warning: ${packageName} is not installed. Some rules may not work correctly.`);
    return null;
  }
};

// 预加载常用插件
const importPlugin = safeRequire('eslint-plugin-import');
const simpleImportSortPlugin = safeRequire('eslint-plugin-simple-import-sort');
const unusedImportsPlugin = safeRequire('eslint-plugin-unused-imports');
const typescriptEslintPlugin = safeRequire('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = safeRequire('@typescript-eslint/parser');
const reactPlugin = safeRequire('eslint-plugin-react');
const reactHooksPlugin = safeRequire('eslint-plugin-react-hooks');
const jsxA11yPlugin = safeRequire('eslint-plugin-jsx-a11y');
const vuePlugin = safeRequire('eslint-plugin-vue');
const vueEslintParser = safeRequire('vue-eslint-parser');
const nodePlugin = safeRequire('eslint-plugin-node');

/**
 * ESLint v9 扁平配置 - 基础配置
 */
const baseFlatConfig = {
  files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
  plugins: {
    import: importPlugin,
    'simple-import-sort': simpleImportSortPlugin,
    'unused-imports': unusedImportsPlugin,
  },
  rules: baseRules,
};

/**
 * ESLint v9 扁平配置 - TypeScript配置
 */
const typescriptFlatConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
  },
  rules: {
    ...baseRules,
    ...typescriptRules,
  },
};

/**
 * ESLint v9 扁平配置 - React配置
 */
const reactFlatConfig = {
  files: ['**/*.jsx', '**/*.tsx'],
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11yPlugin,
  },
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...baseRules,
    ...typescriptRules,
    ...reactRules,
  },
};

/**
 * ESLint v9 扁平配置 - Vue配置
 */
const vueFlatConfig = {
  files: ['**/*.vue'],
  plugins: {
    vue: vuePlugin,
    import: importPlugin,
    'simple-import-sort': simpleImportSortPlugin,
    'unused-imports': unusedImportsPlugin,
  },
  languageOptions: {
    parser: vueEslintParser,
    parserOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  rules: {
    ...baseRules,
    ...typescriptRules,
    ...vueRules,
  },
};

/**
 * ESLint v9 扁平配置 - NestJS配置
 */
const nestjsFlatConfig = {
  files: ['**/*.ts'],
  plugins: {
    node: nodePlugin,
    import: importPlugin,
    'simple-import-sort': simpleImportSortPlugin,
    'unused-imports': unusedImportsPlugin,
  },
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  rules: {
    ...baseRules,
    ...typescriptRules,
    ...nestjsRules,
  },
};

/**
 * 导出所有配置
 */
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
    import: importPlugin,
    'simple-import-sort': simpleImportSortPlugin,
    'unused-imports': unusedImportsPlugin,
  },
};

// 根据ESLint版本导出不同格式的配置
if (isESLintV9()) {
  // ESLint v9+ 使用扁平配置
  exportObj.configs = {
    base: [baseFlatConfig],
    typescript: [baseFlatConfig, typescriptFlatConfig],
    react: [baseFlatConfig, typescriptFlatConfig, reactFlatConfig],
    vue: [baseFlatConfig, typescriptFlatConfig, vueFlatConfig],
    nestjs: [baseFlatConfig, typescriptFlatConfig, nestjsFlatConfig],

    // 推荐配置，默认使用typescript配置
    recommended: [baseFlatConfig, typescriptFlatConfig],
  };
} else {
  // ESLint v8 及以下使用传统配置
  exportObj.configs = {
    base: baseConfig,
    typescript: typescriptConfig,
    react: reactConfig,
    vue: vueConfig,
    nestjs: nestjsConfig,

    // 推荐配置，默认使用typescript配置
    recommended: typescriptConfig,
  };
}

// 支持CommonJS导出
module.exports = exportObj;

// 同时支持ESM导出
export default exportObj;
