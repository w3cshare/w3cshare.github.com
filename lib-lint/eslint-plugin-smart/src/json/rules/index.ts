import jsonArraySortRules from './json-array-sort'
import jsonSyntaxRules from './json-syntax'
import packageJsonSortRules from './package-json-sort'

export default {
  ...jsonSyntaxRules,
  ...jsonArraySortRules,
  ...packageJsonSortRules,
}
