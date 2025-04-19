/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-31 17:03:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-01 22:27:28
 * @Description: Config interfaces
 */
import * as Joi from 'joi';

export interface ConfigModuleOptions {
  /**
   * @ 环境变量文件路径
   */
  envFilePath?: string;

  /**
   * 是否加载全局配置
   */
  isGlobal?: boolean;

  /**
   * 配置验证schema
   */
  validationSchema?: Joi.ObjectSchema;

  /**
   * 验证选项
   */
  validationOptions?: Joi.ValidationOptions;
}
