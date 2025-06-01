import { typeEnum } from '../common-types'

/**
 * 自定义提交类型列表
 */
export const types = [...Object.keys(typeEnum)]

/**
 * 自定义作用域列表（可根据实际项目组件/模块进行调整）
 */
export const scopes = [
  'components', // 组件
  'modules', // 模块
  'utils', // 工具
  'styles', // 样式
  'deps', // 依赖
  'config', // 配置
  'core', // 核心功能
  'ci', // 持续集成
  'scripts', // 脚本
  'docs', // 文档
  'release', // 发布
  'other', // 其他
  // '', // 允许空作用域
]

/**
 * Commitlint 配置
 */
/**
 * 自定义提交信息验证规则
 */
export const rules = {
  // body以空行开头
  'body-leading-blank': [1, 'always'],

  // footer以空行开头
  'footer-leading-blank': [1, 'always'],

  // header最大长度
  'header-max-length': [2, 'always', 100],

  // scope必须小写
  'scope-case': [2, 'always', 'lower-case'],

  // scope可以为空
  'scope-empty': [0, 'never'],

  // scope定义
  'scope-enum': [2, 'always', scopes],

  // subject必须小写开头
  'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],

  // subject不能为空
  'subject-empty': [2, 'never'],

  // subject不能以.结尾
  'subject-full-stop': [2, 'never', '.'],

  // type必须小写
  'type-case': [2, 'always', 'lower-case'],

  // type不能为空
  'type-empty': [2, 'never'],

  // type类型定义
  'type-enum': [2, 'always', types],
}

/**
 * Commitlint 配置
 */
export const configuration = {
  prompt: {
    messages: {
      emptyWarning: '不能为空',
      lowerLimitWarning: '低于限制',
      max: '最多%d个字符',
      min: '至少%d个字符',
      skip: ':跳过',
      upperLimitWarning: '超过限制',
    },
    questions: {
      body: {
        description: '提供更详细的变更描述',
      },
      breaking: {
        description: '描述破坏性变更',
      },
      breakingBody: {
        description: '破坏性变更的详细描述',
      },
      isBreaking: {
        description: '是否有破坏性变更?',
      },
      isIssueAffected: {
        description: '是否影响任何未解决的Issues?',
      },
      issues: {
        description: '添加Issue引用 (例如: "fix #123", "ref #123")',
      },
      issuesBody: {
        description: '如果Issues已关闭，描述一下',
      },
      scope: {
        description: '更改的范围 (组件或文件名)',
      },
      subject: {
        description: '写一个简短的描述',
      },
      type: {
        description: '选择您要提交的更改类型',
        enum: typeEnum,
      },
    },
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ',',
    },
  },
  rules,
}
