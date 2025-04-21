/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-04-21 12:30:32
 * @LastEditors: wangwei wwdqq7@qq.com
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/configs/recommended.ts
 * @Description: 推荐配置
 */

import { baseRules, typescriptRules } from '../rules';
import type { FlatConfig } from '../types';

const recommendedConfig: FlatConfig[] = [
  {
    name: 'smart:recommended',
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...baseRules,
      ...typescriptRules,
    },
  },
];

export default recommendedConfig; 