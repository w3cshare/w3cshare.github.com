import type { Config } from 'stylelint'

import { baseRules } from './rules/base'
import { bemRules } from './rules/bem'
import { colorRules } from './rules/color'
import { emptyLineRules } from './rules/empty-line'
import { lessRules } from './rules/less'
import { propertiesOrder } from './rules/properties-order'
import { scssRules } from './rules/scss'
import { unitRules } from './rules/unit'
import { vueRules } from './rules/vue'

// 合并所有规则
const config: Config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-bem-newbie', 'stylelint-less'],
  overrides: [
    // ===== Vue 文件配置 =====
    {
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard-vue'],
      files: ['*.vue', '**/*.vue'],
      rules: {
        ...vueRules,
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global', 'slotted', 'v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    },

    // ===== SCSS 文件配置 =====
    {
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss'],
      files: ['*.scss', '**/*.scss'],
      rules: {
        ...scssRules,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
      },
    },

    // ===== Less 文件配置 =====
    {
      customSyntax: 'postcss-less',
      files: ['*.less', '**/*.less'],
      rules: {
        ...lessRules,
      },
    },
  ],
  rules: {
    // 属性顺序规则
    'order/properties-order': propertiesOrder,

    // 合并所有规则组
    ...baseRules,
    ...colorRules,
    ...unitRules,
    ...emptyLineRules,
    ...scssRules,
    ...bemRules,

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
