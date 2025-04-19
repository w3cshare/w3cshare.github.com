declare module '@umijs/types' {
  export interface IApi {
    describe: (opts: { key: string; config?: any }) => void;
    userConfig: Record<string, any>;
    registerCommand: (opts: { name: string; description: string; fn: () => Promise<any> }) => void;
    onDevCompileDone: (fn: (args: { port?: number }) => void) => void;
    onExit: (fn: () => void) => void;
    addUmiExports: (exports: Array<{ exportMembers: string[]; source: string }>) => void;
  }
}
