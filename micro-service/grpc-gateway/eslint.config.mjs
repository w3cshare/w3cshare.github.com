/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 16:08:29
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 12:55:30
 * @FilePath: /FullStack/micro-service/grpc-gateway/eslint.config.mjs
 * @Description: eslint配置
 */

// eslint.config.mjs
import eslintPlugin from 'eslint-plugin-smart'

// 导出配置，使用eslint-plugin-smart的nestjs配置
export default [...eslintPlugin.configs.nestjs]
