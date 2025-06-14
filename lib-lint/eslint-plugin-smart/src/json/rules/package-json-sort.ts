/**
 * JSON排序规则 - package.json
 * @description 针对package.json文件的排序规则
 */
const packageJsonSortRules = {
  'jsonc/sort-keys': [
    'error',
    {
      order: [
        'name',
        'version',
        'private',
        'packageManager',
        'displayName',
        'description',
        'type',
        'keywords',
        'homepage',
        'bugs',
        'license',
        'author',
        'contributors',
        'funding',
        'files',
        'main',
        'module',
        'types',
        'exports',
        'imports',
        'scripts',
        'peerDependencies',
        'peerDependenciesMeta',
        'dependencies',
        'optionalDependencies',
        'devDependencies',
        'engines',
        'config',
        'overrides',
        'pnpm',
        'husky',
        'lint-staged',
        'eslintConfig',
      ],
      pathPattern: '^$',
    },
    {
      order: { type: 'asc' },
      pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
    },
    {
      order: [
        'start',
        'dev',
        'build',
        'serve',
        'test',
        'lint',
        'format',
        'prepare',
      ],
      pathPattern: '^scripts$',
    },
    {
      order: ['types', 'import', 'require'],
      pathPattern: '^.*$',
    },
    {
      order: { type: 'asc' },
      pathPattern: '.*',
    },
  ],
}

export default packageJsonSortRules
export type PackageJsonSortRules = typeof packageJsonSortRules
