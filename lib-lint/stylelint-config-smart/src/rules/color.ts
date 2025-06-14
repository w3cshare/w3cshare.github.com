// ===== 颜色相关规则 =====
export const colorRules = {
  'alpha-value-notation': 'percentage', // 使用百分比表示透明度，如 50% 而非 0.5，更直观
  'color-function-notation': 'modern', // 使用现代颜色函数表示法，如 rgb(0 0 0 / 0.5) 而非 rgba(0, 0, 0, 0.5)
  'color-hex-length': 'short', // 使用短的十六进制颜色表示（#fff 而非 #ffffff），减少代码量
  'color-named': 'never', // 禁止使用命名颜色（如red、blue），使用十六进制或RGB值以保持一致性
  'hue-degree-notation': 'angle', // 要求HSL色相值带有deg单位，如 180deg，符合CSS规范
}
