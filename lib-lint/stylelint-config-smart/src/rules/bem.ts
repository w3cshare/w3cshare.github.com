// ===== BEM规则 =====
export const bemRules = {
  'bem-newbie/absolute-has-two-dimensions': [true, { severity: 'warning' }], // 使用position:absolute时至少设置两个方向的位置
  'bem-newbie/animation-explicit-timing-function': true, // 动画必须明确指定timing-function
  'bem-newbie/class-name-equal-to-file-name': null, // 关闭此规则，不强制要求类名等于文件名
  'bem-newbie/display-deny-inline': true, // 避免使用inline相关的display值
  'bem-newbie/duplicated-property-value-in-media': true, // 避免在媒体查询中重复已有的属性值
  'bem-newbie/duplicated-property-value-in-modifier': true, // BEM修饰符中不应重复块元素中的相同属性值
  'bem-newbie/font-face-declaration-in-fonts-file-only': true, // 限制@font-face声明只能在fonts文件夹中的文件使用，确保字体声明集中管理
  'bem-newbie/font-face-duplicate-src': true, // 禁止在@font-face中重复定义src属性，避免资源加载冲突
  'bem-newbie/font-weight-file-name': true, // 要求字体权重文件名包含对应的权重数值（如-regular, -bold等），便于识别
  'bem-newbie/import-bem-path': null, // 关闭此规则，不强制BEM文件结构
  'bem-newbie/import-fonts': null, // 关闭此规则，允许在任何位置导入字体
  'bem-newbie/import-normalize': null,
}
