/**
 * JSON语法规则
 * @description 基础JSON语法和格式规则
 */
const jsonSyntaxRules = {
  'jsonc/array-bracket-spacing': ['error', 'never'],
  'jsonc/comma-dangle': ['error', 'never'],
  'jsonc/comma-style': ['error', 'last'],
  'jsonc/indent': ['error', 2],
  'jsonc/no-comments': 'off',
  'jsonc/object-curly-spacing': ['error', 'always'],
  'jsonc/quote-props': ['error', 'always'],
  'jsonc/quotes': ['error', 'double'],
}

export type JsonSyntaxRules = typeof jsonSyntaxRules
export default jsonSyntaxRules
