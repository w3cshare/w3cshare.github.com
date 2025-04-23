import type { Config } from 'stylelint'

const config: Config = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // 基础规则
    'max-nesting-depth': 5, // 限制嵌套深度
    'selector-max-compound-selectors': 5, // 限制复合选择器数量
    'no-empty-source': null, // 允许空文件
    // "no-descending-specificity": null, // 允许特异性降序
    'no-descending-specificity': true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
    'font-family-no-missing-generic-family-keyword': null, // 允许字体族没有通用族名称
    'selector-class-pattern': null, // 不限制类选择器命名模式
    'selector-id-pattern': null, // 不限制ID选择器命名模式
    // "custom-property-pattern": null, // 不限制自定义属性命名模式
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: '自定义类名称应为kebab-case',
      },
    ],
    'keyframes-name-pattern': null, // 不限制关键帧名称模式

    // 缩进规则
    indentation: 2, // 2空格缩进

    // 颜色相关规则
    'color-hex-case': 'lower', // 十六进制颜色小写
    'color-hex-length': 'short', // 使用短的十六进制颜色表示
    'color-function-notation': 'modern', // 使用现代颜色函数表示法
    'color-named': 'never', // 禁止使用命名颜色
    'alpha-value-notation': 'percentage', // 使用百分比表示透明度

    // 单位规则
    'length-zero-no-unit': true, // 零长度不需要单位
    'number-leading-zero': 'always', // 小数点前始终有0
    'unit-case': 'lower', // 单位小写
    'shorthand-property-no-redundant-values': true, // 禁止简写属性冗余值,简写[a { margin: 1px 1px 1px 1px; } -> a { margin: 1px; }]

    // 属性顺序规则
    'order/properties-order': [
      // 定位
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      // 布局
      'display',
      'flex',
      'flex-direction',
      'flex-wrap',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'justify-content',
      'align-items',
      'align-content',
      'align-self',
      'grid',
      'grid-template',
      'grid-template-columns',
      'grid-template-rows',
      'grid-template-areas',
      'grid-column',
      'grid-row',
      'gap',
      'column-gap',
      'row-gap',

      // 尺寸
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',

      // 外边距
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',

      // 内边距
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      // 边框
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-radius',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',

      // 背景
      'background',
      'background-color',
      'background-image',
      'background-position',
      'background-size',
      'background-repeat',

      // 字体与文本
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'color',
      'text-align',
      'text-decoration',
      'text-transform',
      'white-space',

      // 其他
      'opacity',
      'visibility',
      'overflow',
      'box-shadow',
      'transition',
      'transform',
      'animation',
    ],

    // 空行规则
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

    // 注释规则
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    // SCSS 规则
    'scss/dollar-variable-pattern': null, // 不限制变量命名模式
    // "scss/at-rule-no-unknown": true, // 检查未知at规则
    'at-rule-no-unknown': [
      true,
      {
        // ignoreAtRules: [
        //   "ant-design-vue",
        //   "tailwind",
        //   "apply",
        //   "variants",
        //   "responsive",
        //   "screen",
        // ],
      },
    ], // @import url('~xxx');
    'scss/selector-no-redundant-nesting-selector': true, // 禁止冗余的嵌套选择器

    // 后来新增的 START
    'declaration-block-no-duplicate-properties': true, // 禁止在声明块中出现重复的属性 [a { color: red; color: blue; } -> a { color: blue; }]
    // 禁止低优先级的选择器出现在高优先级的选择器之后 [#container a { top: 10px; } a { top: 0; } -> a { top: 0; } #container a { top: 10px; }]
    'selector-max-id': 1, // 限制一个选择器中 ID 选择器的数量[#a #b #c { color: red; } -> #a { color: red; }]
    // "plugin/rational-order": [
    //   true,
    //   {
    //     "border-in-box-model": false,
    //     "empty-line-between-groups": false,
    //   },
    // ],

    // 颜色值不使用斜杠，保持百分比写法
    // "color-function-notation": "legacy",

    // 字体名称使用引号，不要去掉引号
    'font-family-name-quotes': 'always-where-recommended',

    /*
     * bem-newbie START
     * https://www.npmjs.com/package/@namics/stylelint-bem
     * https://www.npmjs.com/package/stylelint-bem-newbie
     * bem-newbie/absolute-has-two-dimensions:需要位置:绝对与至少两个明确尺寸一起使用才能声明位置。
     * bem-newbie/animation-explicit-timing-function:需要动画或animation-name与'animation-timing-function'一起使用。
     * bem-newbie/class-name-equal-to-file-name:要求文件中的CSS类名等于文件名。
     * bem-newbie/display-deny-inline:拒绝'display' CSS属性的'inline-...'值。
     * bem-newbie/duplicated-property-value-in-media:要求@media部分中的属性值不能重复先前的@media部分中相同属性的值。
     * bem-newbie/duplicated-property-value-in-modifier:要求BEM修饰符中的属性值不能重复其BEM块/元素中相同属性的值。
     * bem-newbie/font-face-declaration-in-fonts-file-only:禁止在'blocks'文件夹中的CSS文件中使用@font-face语句。
     * bem-newbie/font-face-duplicate-src:要求@font-face { src }属性值在每个@font-face语句中仅指定一次。
     * bem-newbie/font-weight-file-name:要求从@font-face { src }中获取的文件名与字体加粗值同步。
     * bem-newbie/import-bem-path:要求BEM文件夹/文件与嵌套BEM结构保持一致。
     * bem-newbie/import-fonts:要求'fonts' CSS文件位于'vendor'或'fonts'或'font'文件夹中(而不是在'blocks'文件夹中)。
     * bem-newbie/import-normalize:要求'normalize' CSS文件位于'vendor'文件夹中，并在其他 @import语句之前。
     */
    'bem-newbie/absolute-has-two-dimensions': [true, { severity: 'warning' }],
    'bem-newbie/animation-explicit-timing-function': true,
    'bem-newbie/class-name-equal-to-file-name': true,
    'bem-newbie/display-deny-inline': true,
    'bem-newbie/duplicated-property-value-in-media': true,
    'bem-newbie/duplicated-property-value-in-modifier': true,
    'bem-newbie/font-face-declaration-in-fonts-file-only': true,
    'bem-newbie/font-face-duplicate-src': true,
    'bem-newbie/font-weight-file-name': true,
    'bem-newbie/import-bem-path': true,
    'bem-newbie/import-fonts': true,
    'bem-newbie/import-normalize': true,
    // 后来新增的 END
  },
  overrides: [
    // Vue 文件配置
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-standard-vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    },
    // SCSS 文件配置
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
    },
    // {
    //   files: ['**/*.{html,vue}'],
    //   customSyntax: 'postcss-html',
    // },
    // {
    //   files: ['**/*.less'],
    //   customSyntax: 'postcss-less',
    // },
  ],
}

export = config
