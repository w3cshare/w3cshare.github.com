// ===== SCSS 规则 =====
export const scssRules = {
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: [
        // 常用的预处理器和框架指令 (按字母顺序排列)
        'apply',
        'each',
        'else',
        'extend',
        'for',
        'forward',
        'if',
        'include',
        'mixin',
        'responsive',
        'screen',
        'tailwind',
        'use',
        'variants',
      ],
    },
  ],
  'scss/dollar-variable-pattern': null, // 不限制SCSS变量命名模式
  'scss/selector-no-redundant-nesting-selector': true, // 禁止冗余的嵌套选择器 (& > &)
}
