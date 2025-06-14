// ===== 空行规则 =====
export const emptyLineRules = {
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['first-nested', 'blockless-after-blockless'],
      ignore: ['after-comment'],
    },
  ],
  'comment-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    },
  ],
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
}
