export interface FormValues {
  commandType: 'lerna-init' | 'lerna-create' | 'pnpm-add' | 'pnpm-remove' | 'pnpm-run' | 'lerna-run';
  newPackage?: string;
  packagesLib?: string;
  dependencies?: string;
  dependencyType?: 'dependencies' | 'devDependencies' | 'peerDependencies';
  targetPackages?: string[];
  scriptName?: string;
  targetDirectory?: string;
  isIndependent?: boolean;
  packagesPath?: string;
}

export interface PackageOption {
  label: string;
  value: string;
  directory?: string;
}

export interface DirectoryOption {
  label: string;
  value: string;
  children: PackageOption[];
}

export interface CommandDetails {
  type: string;
  description: string;
  command: string;
} 