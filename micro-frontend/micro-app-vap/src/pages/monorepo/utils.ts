import { FormValues } from './types';

export const getCommandDescription = (values: FormValues): string => {
  const {
    commandType,
    newPackage,
    packagesLib,
    dependencies,
    targetPackages,
    scriptName,
    dependencyType,
    isIndependent,
    packagesPath,
  } = values;

  switch (commandType) {
    case 'lerna-init':
      return `初始化 Lerna 项目${isIndependent ? '（独立模式）' : ''}${packagesPath ? `，子包目录为 ${packagesPath}` : ''}`;
    case 'lerna-create':
      return `在 ${packagesLib} 目录下创建新包 ${newPackage}`;
    case 'pnpm-add':
      return `为目标包 ${targetPackages?.join(', ')} 安装${dependencyType === 'devDependencies' ? '开发' : dependencyType === 'peerDependencies' ? '同版本' : '生产'}依赖: ${dependencies}`;
    case 'pnpm-remove':
      return `从目标包 ${targetPackages?.join(', ')} 移除依赖: ${dependencies}`;
    case 'pnpm-run':
    case 'lerna-run':
      return `在目标包 ${targetPackages?.join(', ')} 中执行 ${scriptName} 脚本`;
    default:
      return '';
  }
};

export const getCommandType = (commandType: string): string => {
  const cmdMap: Record<string, string> = {
    'lerna-init': '初始化项目',
    'lerna-create': 'Lerna 创建包',
    'pnpm-add': 'PNPM 安装依赖',
    'pnpm-remove': 'PNPM 移除依赖',
    'pnpm-run': 'PNPM 执行脚本',
    'lerna-run': 'Lerna 执行脚本',
  };
  return cmdMap[commandType] || commandType;
};

export const buildCommand = (values: FormValues): string => {
  const {
    commandType,
    newPackage,
    packagesLib,
    dependencies,
    targetPackages,
    scriptName,
    dependencyType,
    isIndependent,
    packagesPath,
  } = values;

  switch (commandType) {
    case 'lerna-init': {
      let command = 'lerna init';
      if (isIndependent) {
        command += ' --independent';
      }
      if (packagesPath) {
        command += ` --packages="${packagesPath}${packagesPath.lastIndexOf('/*') > 0 ? '' : '/*'}"`;
      }
      return command;
    }
    case 'lerna-create':
      if (!newPackage || !packagesLib) return '';
      return `lerna create ${newPackage} ${packagesLib} -y`;
    case 'pnpm-add':
    case 'pnpm-remove': {
      if (!dependencies || !targetPackages?.length) return '';
      const deps = dependencies.trim().split(' ').filter(Boolean);
      const filterStr = targetPackages.map((t: string) => `--filter ${t}`).join(' ');
      const cmd = commandType === 'pnpm-add' ? 'add' : 'remove';
      const saveFlag =
        commandType === 'pnpm-add' && dependencyType
          ? dependencyType === 'devDependencies'
            ? '-D'
            : dependencyType === 'peerDependencies'
              ? '-P'
              : ''
          : '';
      return `pnpm ${cmd} ${deps.join(' ')} ${saveFlag} ${filterStr}`;
    }
    case 'pnpm-run':
    case 'lerna-run':
      if (!scriptName || !targetPackages?.length) return '';
      const cmd = commandType === 'pnpm-run' ? 'pnpm run' : 'lerna run';
      const filterStr =
        commandType === 'pnpm-run'
          ? targetPackages.map(t => `--filter ${t}`).join(' ')
          : targetPackages.map(t => `--scope=${t}`).join(' ');
      return `${cmd} ${scriptName} ${filterStr} --concurrency=8`;
    default:
      return '';
  }
};
