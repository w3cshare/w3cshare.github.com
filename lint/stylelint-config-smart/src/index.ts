import type { Config } from 'stylelint';

const config: Config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // 基础规则
    'max-nesting-depth': 5, // 限制嵌套深度
    'selector-max-compound-selectors': 5, // 限制复合选择器数量
    'no-empty-source': null, // 允许空文件
    'no-descending-specificity': null, // 允许特异性降序
    'font-family-no-missing-generic-family-keyword': null, // 允许字体族没有通用族名称
    'selector-class-pattern': null, // 不限制类选择器命名模式
    'selector-id-pattern': null, // 不限制ID选择器命名模式
    'custom-property-pattern': null, // 不限制自定义属性命名模式
    'keyframes-name-pattern': null, // 不限制关键帧名称模式

    // 缩进规则
    'indentation': 2, // 2空格缩进
    
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
      'animation'
    ],

    // 空行规则
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-declaration'],
        ignore: ['after-comment']
      }
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-blockless'],
        ignore: ['after-comment']
      }
    ],

    // 注释规则
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands']
      }
    ],
    
    // SCSS 规则
    'scss/dollar-variable-pattern': null, // 不限制变量命名模式
    'scss/at-rule-no-unknown': true, // 检查未知at规则
    'scss/selector-no-redundant-nesting-selector': true, // 禁止冗余的嵌套选择器
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
            ignorePseudoClasses: ['deep', 'global']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
          }
        ],
      }
    },
    // SCSS 文件配置
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
    }
  ]
};

export = config;
