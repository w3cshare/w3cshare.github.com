/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-01 12:47:32
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-01 13:44:45
 * @FilePath: /FullStack/pro/typeorm-mysql/src/entity/TableAccess.ts
 * @Description: 用户对表的访问权限关联实体
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Permission } from '@/entity/Permission';
import { User } from '@/entity/User';

/**
 * 表级访问权限关联实体类
 * 作为User和Permission的多对多关系的关联表
 * 存储用户对特定数据库表的访问权限信息
 */
@Entity({ name: 'TableAccess', comment: '用户对表的访问权限关联实体' })
export class TableAccess {
  /**
   * 用户ID，联合主键之一
   * 关联到User表的id字段
   */
  @PrimaryColumn({
    type: 'bigint',
    unsigned: true,
    comment: '用户ID，关联到User表的id字段',
  })
  UserId: number;

  /**
   * 权限ID，联合主键之一
   * 关联到Permission表的id字段
   */
  @PrimaryColumn({
    type: 'bigint',
    unsigned: true,
    comment: '权限ID，关联到Permission表的id字段',
  })
  PermissionId: number;

  /**
   * 数据库名称
   * 指定权限适用的数据库
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: '指定权限适用的数据库',
  })
  databaseName: string;

  /**
   * 表名称
   * 指定权限适用的数据库表
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: '指定权限适用的数据库表',
  })
  tableName: string;

  /**
   * 创建时间
   * 记录权限分配的时间
   */
  @CreateDateColumn({ comment: '记录权限分配的时间' })
  createdAt: Date;

  /**
   * 更新时间
   * 记录权限分配最后更新的时间
   */
  @UpdateDateColumn({ comment: '记录权限分配最后更新的时间' })
  updatedAt: Date;

  /**
   * 关联的用户实体
   * 多对一关系：多个表级权限可以属于同一个用户
   * 级联删除和更新：当用户被删除时，相关的表级权限也会被删除
   */
  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'UserId' })
  user: User;

  /**
   * 关联的权限实体
   * 多对一关系：多个表级权限可以使用同一种权限类型
   * 级联删除和更新：当权限被删除时，相关的表级权限也会被删除
   */
  @ManyToOne(() => Permission, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'PermissionId' })
  permission: Permission;
}
