/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-01 12:47:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-01 13:45:15
 * @FilePath: /FullStack/pro/typeorm-mysql/src/entity/User.ts
 * @Description: 用户实体，包含基本用户信息和与Permission的多对多关系
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Permission } from '@/entity/Permission';

/**
 * 用户实体类
 * 存储系统用户信息，包括用户名、密码、邮箱等基本信息
 * 与权限(Permission)存在多对多关系，通过TableAccess关联表实现
 */
@Entity({
  name: 'User',
  comment: '用户实体，包含基本用户信息和与Permission的多对多关系',
})
export class User {
  /**
   * 用户ID，主键
   * 自增长的唯一标识符
   */
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: '主键' })
  id: number;

  /**
   * 用户名
   * 用户登录系统的唯一标识
   */
  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
    comment: '用户登录系统的唯一标识',
  })
  username: string;

  /**
   * 密码
   * 用户登录系统的凭证，应当加密存储
   */
  @Column({
    type: 'varchar',
    length: 32,
    nullable: true,
    comment: '用户登录系统的凭证',
  })
  password: string;

  /**
   * 电子邮箱
   * 用户的联系方式，可用于找回密码等功能
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: '用户的联系方式',
  })
  email: string;

  /**
   * 创建时间
   * 记录用户账号的创建时间
   */
  @CreateDateColumn({ comment: '记录用户账号的创建时间' })
  createdAt: Date;

  /**
   * 更新时间
   * 记录用户信息的最后更新时间
   */
  @UpdateDateColumn({ comment: '记录用户信息的最后更新时间' })
  updatedAt: Date;

  /**
   * 用户权限列表
   * 多对多关系：一个用户可以拥有多个权限，一个权限可以被多个用户拥有
   * 通过TableAccess关联表实现多对多关系
   */
  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'TableAccess',
    joinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'PermissionId',
      referencedColumnName: 'id',
    },
  })
  permissions: Permission[];
}
