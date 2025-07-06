import type { Config } from 'stylelint'

import { baseRules } from './rules/base'
import { colorRules } from './rules/color'
import { emptyLineRules } from './rules/empty-line'
import orderRules from './rules/stylelint-order'
import { unitRules } from './rules/unit'

// 合并所有规则
export const config: Config = {
  extends: [
    'stylelint-config-html/vue',

    // If you are using Vue.
    'stylelint-config-recommended-vue', // 校验.vue 文件中样式的规则
  ],
  plugins: ['stylelint-order'],
  rules: {
    ...orderRules,

    // 合并所有规则组
    ...baseRules,
    ...colorRules,
    ...unitRules,
    ...emptyLineRules,

    // ...bemRules,

    // 通用规则
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'function-url-quotes': 'always',
    'shorthand-property-no-redundant-values': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
  },
}

export default (_: {
  bem?: boolean
  less?: boolean
  order?: boolean
  scss?: boolean
  vue?: boolean
}) => {
  return config
}
