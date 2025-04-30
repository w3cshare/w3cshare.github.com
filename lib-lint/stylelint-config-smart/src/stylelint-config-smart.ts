import type { Config } from 'stylelint'

const config: Config = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-bem-newbie'],
  rules: {
    // ===== 基础规则 =====
    'max-nesting-depth': 5, // 限制嵌套深度，防止过深的选择器嵌套
    'selector-max-compound-selectors': 5, // 限制复合选择器数量，提高选择器性能
    'no-empty-source': null, // 允许空文件，方便创建模板文件
    'no-descending-specificity': true, // 禁止在高优先级选择器后出现被覆盖的低优先级选择器
    'font-family-no-missing-generic-family-keyword': null, // 允许字体族没有通用族名称，适用于使用自定义字体的情况
    'selector-class-pattern': null, // 不限制类选择器命名模式，适应不同项目的命名规范
    'selector-id-pattern': null, // 不限制ID选择器命名模式
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: '自定义CSS变量应使用kebab-case命名',
      },
    ],
    'keyframes-name-pattern': null, // 不限制关键帧名称模式

    // ===== 颜色相关规则 =====
    /* 已废弃: color-hex-case: 'lower', */
    'color-hex-length': 'short', // 使用短的十六进制颜色表示（#fff 而非 #ffffff），减少代码量
    'color-function-notation': 'modern', // 使用现代颜色函数表示法，如 rgb(0 0 0 / 0.5) 而非 rgba(0, 0, 0, 0.5)
    'color-named': 'never', // 禁止使用命名颜色（如red、blue），使用十六进制或RGB值以保持一致性
    'alpha-value-notation': 'percentage', // 使用百分比表示透明度，如 50% 而非 0.5，更直观
    'hue-degree-notation': 'angle', // 要求HSL色相值带有deg单位，如 180deg，符合CSS规范

    // ===== 单位和数值规则 =====
    'length-zero-no-unit': true, // 零长度不需要单位，如 0 而非 0px
    /* 已废弃: number-leading-zero: 'always', */
    /* 已废弃: unit-case: 'lower', */
    'shorthand-property-no-redundant-values': true, // 禁止简写属性冗余值，如 margin: 1px 而非 margin: 1px 1px 1px 1px
    'media-feature-range-notation': 'prefix', // 使用传统格式的媒体查询，如 (min-width: 768px) 而非 (width >= 768px)，提高兼容性

    // ===== 属性顺序规则 =====
    'order/properties-order': [
      // 定位
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      // 盒模型 - 布局
      'display',
      'flex',
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'justify-content',
      'align-items',
      'align-content',
      'align-self',
      'order',
      'grid',
      'grid-template',
      'grid-template-columns',
      'grid-template-rows',
      'grid-template-areas',
      'grid-column',
      'grid-row',
      'grid-area',
      'gap',
      'column-gap',
      'row-gap',

      // 盒模型 - 尺寸
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',

      // 盒模型 - 外边距
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',

      // 盒模型 - 内边距
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      // 盒模型 - 边框
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-radius',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',

      // 视觉效果
      'background',
      'background-color',
      'background-image',
      'background-position',
      'background-size',
      'background-repeat',
      'background-attachment',
      'background-clip',
      'background-origin',
      'box-shadow',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'opacity',
      'visibility',
      'overflow',
      'overflow-x',
      'overflow-y',

      // 文本与字体
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'font-variant',
      'font-stretch',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-transform',
      'white-space',
      'word-break',
      'word-wrap',
      'color',

      // 动画与过渡
      'transition',
      'transition-property',
      'transition-duration',
      'transition-timing-function',
      'transition-delay',
      'transform',
      'transform-origin',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'animation-play-state',

      // 其他
      'cursor',
      'pointer-events',
      'user-select',
      'content',
      'quotes',
      'resize',
      'touch-action',
    ],

    // ===== 空行规则 =====
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-declaration'],
        ignore: ['after-comment'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-blockless'],
        ignore: ['after-comment'],
      },
    ],

    // ===== 注释规则 =====
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    // ===== SCSS 规则 =====
    'scss/dollar-variable-pattern': null, // 不限制SCSS变量命名模式
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // 常用的预处理器和框架指令
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'include',
          'mixin',
          'extend',
          'if',
          'else',
          'for',
          'each',
          'use',
          'forward',
        ],
      },
    ],
    'scss/selector-no-redundant-nesting-selector': true, // 禁止冗余的嵌套选择器 (& > &)

    // ===== 高级规则 =====
    'declaration-block-no-duplicate-properties': true, // 禁止在声明块中出现重复的属性
    'selector-max-id': 1, // 限制一个选择器中ID选择器的数量为1，避免高特异性
    'font-family-name-quotes': 'always-where-recommended', // 智能使用引号包裹字体名称

    /*
     * ===== BEM规则 =====
     * BEM规则说明:
     */
    'bem-newbie/absolute-has-two-dimensions': [true, { severity: 'warning' }], // 使用position:absolute时至少设置两个方向的位置
    'bem-newbie/animation-explicit-timing-function': true, // 动画必须明确指定timing-function
    'bem-newbie/class-name-equal-to-file-name': null, // 关闭此规则，不强制要求类名等于文件名
    'bem-newbie/display-deny-inline': true, // 避免使用inline相关的display值
    'bem-newbie/duplicated-property-value-in-media': true, // 避免在媒体查询中重复已有的属性值
    'bem-newbie/duplicated-property-value-in-modifier': true, // BEM修饰符中不应重复块元素中的相同属性值
    // 限制@font-face声明只能在fonts文件夹中的文件使用，确保字体声明集中管理
    'bem-newbie/font-face-declaration-in-fonts-file-only': true,
    // 禁止在@font-face中重复定义src属性，避免资源加载冲突
    'bem-newbie/font-face-duplicate-src': true,

    // 要求字体权重文件名包含对应的权重数值（如-regular, -bold等），便于识别
    'bem-newbie/font-weight-file-name': true,
    'bem-newbie/import-bem-path': null, // 关闭此规则，不强制BEM文件结构
    'bem-newbie/import-fonts': null, // 关闭此规则，允许在任何位置导入字体
    'bem-newbie/import-normalize': null, // 关闭此规则，允许在任何位置导入normalize
  },
  overrides: [
    // ===== Vue 文件配置 =====
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-standard-vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global', 'slotted', 'v-bind'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
        'selector-class-pattern': null, // Vue组件允许任意类名模式
      },
    },

    // ===== SCSS 文件配置 =====
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
      rules: {
        'scss/at-rule-no-unknown': true, // 启用SCSS特定的at-rule检查
        'at-rule-no-unknown': null, // 禁用通用at-rule检查，避免冲突
      },
    },

    // ===== Less 文件配置 =====
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'at-rule-no-unknown': null, // 禁用未知at规则检查，Less有自己的at规则
      },
    },
  ],
}

export = config
