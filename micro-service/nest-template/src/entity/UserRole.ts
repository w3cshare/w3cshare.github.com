/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-01 12:48:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-01 13:45:42
 * @FilePath: /FullStack/pro/typeorm-mysql/src/entity/UserRole.ts
 * @Description: 用户与角色的关联实体
 */
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Role } from '@/entity/Role';
import { User } from '@/entity/User';

/**
 * 用户角色关联实体类
 * 作为User和Role的多对多关系的关联表
 * 存储用户与角色的对应关系
 */
@Entity({ name: 'UserRole', comment: '用户与角色的关联实体' })
export class UserRole {
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
   * 角色ID，联合主键之一
   * 关联到Role表的id字段
   */
  @PrimaryColumn({
    type: 'bigint',
    unsigned: true,
    comment: '角色ID，关联到Role表的id字段',
  })
  RoleId: number;

  /**
   * 创建时间
   * 记录用户角色关联的创建时间
   */
  @CreateDateColumn({ comment: '记录用户角色关联的创建时间' })
  createdAt: Date;

  /**
   * 更新时间
   * 记录用户角色关联最后更新的时间
   */
  @UpdateDateColumn({ comment: '记录用户角色关联最后更新的时间' })
  updatedAt: Date;

  /**
   * 关联的用户实体
   * 多对一关系：多个用户角色关联可以属于同一个用户
   * 级联删除和更新：当用户被删除时，相关的用户角色关联也会被删除
   */
  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'UserId' })
  user: User;

  /**
   * 关联的角色实体
   * 多对一关系：多个用户角色关联可以使用同一个角色
   * 级联删除和更新：当角色被删除时，相关的用户角色关联也会被删除
   */
  @ManyToOne(() => Role, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'RoleId' })
  role: Role;
}
