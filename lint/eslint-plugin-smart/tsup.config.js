export default {
    entry: {
      'index': 'src/index.js',
      'configs/recommended': 'src/configs/recommended.js',
      'configs/typescript': 'src/configs/typescript.js',
      'configs/react': 'src/configs/react.js',
      'configs/vue': 'src/configs/vue.js',
      'configs/nestjs': 'src/configs/nestjs.js',
    },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    outDir: 'dist',
    outExtension({ format }) {
      return {
        js: format === 'esm' ? '.js' : '.cjs',
      };
    },
  };