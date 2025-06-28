import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/index.js',
      format: 'esm',
      exports: 'auto',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'stylelintConfigSmart',
      exports: 'auto',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        isolatedModules: false,
      },
    }),
  ],
  external: ['stylelint'],
})
