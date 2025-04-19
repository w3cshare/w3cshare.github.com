/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 14:44:53
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-28 16:28:06
 * @FilePath: /FullStack/micro-service/nestjs-logger/src/logger.interfaces.ts
 * @Description: --
 */
// logger.interfaces.ts
export interface LoggerOptions {
  level: 'debug' | 'info' | 'warn' | 'error';
  format?: 'json' | 'text';
}
