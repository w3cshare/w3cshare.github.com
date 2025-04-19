export const PREFIX = '@smarts-isoftstone/';

export const commonPackages = [
  'nestjs-config',
  'nestjs-logger',
  'nestjs-utils',
  'react-components',
  'react-hooks',
  'react-utils',
  'vue-components',
  'vue-utils',
  'shared-utils',
].map(name => ({
  label: PREFIX + name,
  value: PREFIX + name,
}));

export const packagesWithDirectories = [
  {
    label: 'micro-service',
    value: 'micro-service',
    children: [
      {
        label: '@smarts-isoftstone/nestjs-config',
        value: '@smarts-isoftstone/nestjs-config',
        directory: 'micro-service',
      },
      {
        label: '@smarts-isoftstone/nestjs-logger',
        value: '@smarts-isoftstone/nestjs-logger',
        directory: 'micro-service',
      },
      {
        label: '@smarts-isoftstone/nestjs-static',
        value: '@smarts-isoftstone/nestjs-static',
        directory: 'micro-service',
      },
      {
        label: '@smarts-isoftstone/typeorm-mysql',
        value: '@smarts-isoftstone/typeorm-mysql',
        directory: 'micro-service',
      },
    ],
  },
  {
    label: 'packages-nestjs',
    value: 'packages-nestjs',
    children: [
      {
        label: '@smarts-isoftstone/nestjs-config',
        value: '@smarts-isoftstone/nestjs-config',
        directory: 'packages-nestjs',
      },
      {
        label: '@smarts-isoftstone/nestjs-logger',
        value: '@smarts-isoftstone/nestjs-logger',
        directory: 'packages-nestjs',
      },
    ],
  },
];

export const packages = {
  directories: [
    {
      name: 'micro-frontend',
      children: [
        '@smarts-isoftstone/nestjs-config',
        '@smarts-isoftstone/nestjs-logger',
        '@smarts-isoftstone/nestjs-static',
      ],
    },
    {
      name: 'micro-service',
      children: ['@smarts-isoftstone/react-swagger'],
    },
    {
      name: 'packages',
      children: ['@smarts-isoftstone/typeorm-mysql'],
    },
    {
      name: 'packages-nestjs',
      children: [],
    },
    {
      name: 'packages-react',
      children: [],
    },
    {
      name: 'packages-vue',
      children: [],
    },
    {
      name: 'app',
      children: [],
    },
    {
      name: 'lint',
      children: [],
    },
    {
      name: 'docs',
      children: [],
    },
  ],
};

export const dependencyTypes = [
  { label: '生产依赖(--dependencies)', value: 'dependencies' },
  { label: '开发依赖(--devDependencies)', value: 'devDependencies' },
  { label: '同版本依赖(--peerDependencies)', value: 'peerDependencies' },
];

export const scriptOptions = [
  { label: '开发(dev)', value: 'dev' },
  { label: '启动(start)', value: 'start' },
  { label: '构建(build)', value: 'build' },
  { label: '代码检查(lint)', value: 'lint' },
  { label: '测试(test)', value: 'test' },
];

export const commandTypes = [
  {
    label: '初始化项目',
    value: 'lerna-init',
  },
  {
    label: 'Lerna 创建子项目',
    value: 'lerna-create',
  },
  {
    label: 'PNPM 安装依赖',
    value: 'pnpm-add',
  },
  {
    label: 'PNPM 移除依赖',
    value: 'pnpm-remove',
  },
  {
    label: 'PNPM 执行脚本',
    value: 'pnpm-run',
  },
  {
    label: 'Lerna 执行脚本',
    value: 'lerna-run',
  },
];
