/*
 * @Author: wangwei
 * @Date: 2025-04-09
 * @LastEditors: wangwei
 * @LastEditTime: 2025-04-09
 * @Description: TypeORM数据库配置
 */

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

// 从ConfigService获取数据库配置
export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: configService.get('DB_HOST') || 'localhost',
  port: parseInt(configService.get('DB_PORT')) || 3306,
  username: configService.get('DB_USERNAME') || 'root',
  password: configService.get('DB_PASSWORD') || 'password',
  database: configService.get('DB_DATABASE') || 'nest_template',
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  // 自动同步数据库结构（生产环境建议关闭）
  synchronize: configService.get('NODE_ENV') !== 'production',
  // 是否显示SQL日志
  logging: configService.get('NODE_ENV') !== 'production',
  // 数据库迁移配置
  migrations: [join(__dirname, '../database/migrations/**/*{.ts,.js}')],
  migrationsRun: true,
});

// 兼容旧版本的导出方式
export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'nest_template',
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  migrations: [join(__dirname, '../database/migrations/**/*{.ts,.js}')],
  migrationsRun: true,
};

export default databaseConfig;
