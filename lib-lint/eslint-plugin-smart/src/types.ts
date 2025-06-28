/**
 * @file ESLint configuration type definitions
 */

export type FilePattern = (string | string[])[]

export const SUPPORTED_EXTENSIONS = {
  JEST: ['test.ts', 'spec.ts', 'e2e-spec.ts'],
  JSON: ['json', 'jsonc', 'json5'],
  MARKDOWN: ['md', 'markdown'],
  REACT: ['jsx', 'tsx', 'mtsx', 'ctsx', 'mjsx', 'cjsx'],
  SCRIPT: ['js', 'mjs', 'cjs', 'ts', 'mts', 'cts', 'jsx', 'tsx', 'vue'],
  STYLE: ['css', 'scss', 'less'],
  TYPESCRIPT: ['ts', 'mts', 'cts'],
  VUE: ['vue'],
} as const

export const createFilePattern = (extensions: readonly string[]): FilePattern => {
  // return [`**/*.{${extensions.join(',')}}`, `*.{${extensions.join(',')}}`]
  return extensions.flatMap(ext => [`*.${ext}`, `**/*.${ext}`])
}

export const FILE_PATTERNS = {
  JEST: createFilePattern(SUPPORTED_EXTENSIONS.JEST),
  JSON: createFilePattern(SUPPORTED_EXTENSIONS.JSON),
  MARKDOWN: createFilePattern(SUPPORTED_EXTENSIONS.MARKDOWN),
  REACT: createFilePattern(SUPPORTED_EXTENSIONS.REACT),
  SCRIPT: createFilePattern(SUPPORTED_EXTENSIONS.SCRIPT),
  STYLE: createFilePattern(SUPPORTED_EXTENSIONS.STYLE),
  TYPESCRIPT: createFilePattern(SUPPORTED_EXTENSIONS.TYPESCRIPT),
  VUE: createFilePattern(SUPPORTED_EXTENSIONS.VUE),
}

export const IGNORE_PATTERNS = [
  '**/node_modules/**',
  '**/dist/**',
  '**/dist-ssr/**',
  '**/lib/**',
  '**/coverage/**',
  '**/.git/**',
  '**/.vscode/**',
  '**/.idea/**',
  '**/test/**',
  '**/__tests__/**',
  '**/cache/**',
  '**/.**/**',
  '**/.eslintcache',
  '**/src.bak/**',
] as string[]
