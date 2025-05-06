/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 16:08:29
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 10:22:44
 * @FilePath: /FullStack/micro-service/grpc-gateway/eslint.config.mjs
 * @Description: eslint配置
 */

import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.nestjs, ...eslintPlugin.configs.json]
