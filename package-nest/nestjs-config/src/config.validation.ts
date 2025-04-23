/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-31 17:03:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-31 17:36:13
 * @Description: Default validation schema
 */
import * as Joi from 'joi'

/**
 * 默认的配置验证schema
 */
export const defaultValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().default(3000),
  DATABASE_USER: Joi.string().required(),
})

/**
 * 合并自定义schema和默认schema
 * @param customSchema 自定义schema
 * @returns 合并后的schema
 */
export const mergeValidationSchema = (customSchema?: Joi.ObjectSchema): Joi.ObjectSchema => {
  if (!customSchema) {
    return defaultValidationSchema
  }

  return defaultValidationSchema.concat(customSchema)
}
