/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-01 12:47:07
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-01 13:43:01
 * @FilePath: /FullStack/pro/typeorm-mysql/src/entity/Permission.ts
 * @Description: 权限实体，定义了操作权限
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Role } from '@/entity/Role';
import { User } from '@/entity/User';

/**
 * 权限实体类
 * 存储系统中的权限信息，定义用户可以执行的操作
 * 与用户(User)和角色(Role)都存在多对多关系
 */
@Entity({ name: 'Permission', comment: '权限实体，定义了操作权限' })
export class Permission {
  /**
   * 权限ID，主键
   * 自增长的唯一标识符
   */
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: '主键' })
  id: number;

  /**
   * 权限操作类型
   * 如 SELECT, INSERT, UPDATE, DELETE 等数据库操作
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    comment: '如 SELECT, INSERT, UPDATE 等',
  })
  action: string;

  /**
   * 权限描述
   * 对该权限功能的详细说明
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '对该权限功能的详细说明',
  })
  description: string;

  /**
   * 创建时间
   * 记录权限创建的时间
   */
  @CreateDateColumn({ comment: '记录权限创建的时间' })
  createdAt: Date;

  /**
   * 更新时间
   * 记录权限信息最后更新的时间
   */
  @UpdateDateColumn({ comment: '记录权限信息最后更新的时间' })
  updatedAt: Date;

  /**
   * 拥有该权限的用户列表
   * 多对多关系：一个权限可以被多个用户拥有，一个用户可以拥有多个权限
   */
  @ManyToMany(() => User, (user) => user.permissions)
  users: User[];

  /**
   * 包含该权限的角色列表
   * 多对多关系：一个权限可以被多个角色包含，一个角色可以包含多个权限
   */
  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}
