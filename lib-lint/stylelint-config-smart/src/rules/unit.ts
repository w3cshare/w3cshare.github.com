// ===== 单位和数值规则 =====
export const unitRules = {
  'font-family-name-quotes': 'always-where-recommended', // 智能使用引号包裹字体名称
  'length-zero-no-unit': true, // 零长度不需要单位，如 0 而非 0px
  'media-feature-range-notation': 'prefix', // 使用传统格式的媒体查询，如 (min-width: 768px) 而非 (width >= 768px)，提高兼容性
  'shorthand-property-no-redundant-values': true, // 禁止简写属性冗余值，如 margin: 1px 而非 margin: 1px 1px 1px 1px
}
