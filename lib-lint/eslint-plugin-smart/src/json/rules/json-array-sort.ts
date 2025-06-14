/**
 * JSON排序规则 - 数组
 * @description 针对JSON数组的排序规则
 */
const jsonArraySortRules = {
  'jsonc/sort-array-values': [
    'error',
    {
      order: { type: 'asc' },
      pathPattern: '.*',
    },
  ],
}

export default jsonArraySortRules
export type JsonArraySortRules = typeof jsonArraySortRules
