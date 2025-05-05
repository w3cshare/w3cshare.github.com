"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsconfig_base_smart_1 = require("../src/tsconfig-base-smart");
function exampleGetBasePath() {
    const basePath = (0, tsconfig_base_smart_1.getBaseTsConfigPath)();
    console.log('基础配置路径:', basePath);
    return basePath;
}
function exampleCreateConfig() {
    const customConfig = (0, tsconfig_base_smart_1.createTsConfig)({
        compilerOptions: {
            outDir: './dist',
            sourceMap: false,
            target: 'ES2022',
        },
        include: ['src/**/*'],
    });
    console.log('生成的配置:', JSON.stringify(customConfig, null, 2));
    return customConfig;
}
exampleGetBasePath();
exampleCreateConfig();
//# sourceMappingURL=example-usage.js.map