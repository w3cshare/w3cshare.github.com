import { SwaggerCustomOptions, SwaggerDocumentOptions } from '@nestjs/swagger'

/**
 * Swagger文档配置选项
 */
export interface NestjsSwaggerOptions {
  /**
   * 是否使用Fastify框架
   * @default false
   */
  isFastify?: boolean

  /**
   * API文档标题
   * @default 'API Documentation'
   */
  title?: string

  /**
   * API文档描述
   * @default 'API Documentation Description'
   */
  description?: string

  /**
   * API版本
   * @default '1.0'
   */
  version?: string

  /**
   * API标签
   * @default []
   */
  tags?: string[]

  /**
   * Swagger路径前缀
   * @default 'api-doc'
   */
  path?: string

  /**
   * 是否启用Knife4j增强UI
   * @default true
   */
  enableKnife4j?: boolean

  /**
   * Knife4j配置选项
   */
  // knife4jOptions?: Partial<Knife4jOptions>;

  /**
   * Swagger文档选项
   */
  documentOptions?: SwaggerDocumentOptions

  /**
   * Swagger自定义选项
   */
  customOptions?: SwaggerCustomOptions

  /**
   * 认证配置
   */
  auth?: {
    /**
     * 是否启用Bearer认证
     * @default false
     */
    enableBearer?: boolean

    /**
     * Bearer认证描述
     * @default 'JWT Authorization'
     */
    bearerDescription?: string

    /**
     * 是否启用Basic认证
     * @default false
     */
    enableBasic?: boolean

    /**
     * Basic认证描述
     * @default 'Basic Authorization'
     */
    basicDescription?: string

    /**
     * 是否启用API Key认证
     * @default false
     */
    enableApiKey?: boolean

    /**
     * API Key名称
     * @default 'api_key'
     */
    apiKeyName?: string

    /**
     * API Key位置 (header, query, cookie)
     * @default 'header'
     */
    apiKeyIn?: 'header' | 'query' | 'cookie'

    /**
     * API Key描述
     * @default 'API Key Authorization'
     */
    apiKeyDescription?: string
  }
}
