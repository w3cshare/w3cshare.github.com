/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-01 12:47:15
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-01 13:43:45
 * @FilePath: /FullStack/pro/typeorm-mysql/src/entity/Role.ts
 * @Description: 角色实体，包含与User和Permission的多对多关系
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
import { User } from '@/entity/User';

/**
 * 角色实体类
 * 存储系统中的角色信息，用于对用户进行分组和权限管理
 * 与用户(User)和权限(Permission)都存在多对多关系
 */
@Entity({
  name: 'Role',
  comment: '角色实体，包含与User和Permission的多对多关系',
})
export class Role {
  /**
   * 角色ID，主键
   * 自增长的唯一标识符
   */
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: '主键' })
  id: number;

  /**
   * 角色名称
   * 如管理员、普通用户等角色类型
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    comment: '角色名称，如管理员、普通用户等',
  })
  name: string;

  /**
   * 创建时间
   * 记录角色创建的时间
   */
  @CreateDateColumn({ comment: '记录角色创建的时间' })
  createdAt: Date;

  /**
   * 更新时间
   * 记录角色信息最后更新的时间
   */
  @UpdateDateColumn({ comment: '记录角色信息最后更新的时间' })
  updatedAt: Date;

  /**
   * 拥有该角色的用户列表
   * 多对多关系：一个角色可以被多个用户拥有，一个用户可以拥有多个角色
   * 通过UserRole关联表实现多对多关系
   */
  @ManyToMany(() => User)
  @JoinTable({
    name: 'UserRole',
    joinColumn: {
      name: 'RoleId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
  })
  users: User[];

  /**
   * 角色包含的权限列表
   * 多对多关系：一个角色可以包含多个权限，一个权限可以被多个角色包含
   * 通过RolePermission关联表实现多对多关系
   */
  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'RolePermission',
    joinColumn: {
      name: 'RoleId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'PermissionId',
      referencedColumnName: 'id',
    },
  })
  permissions: Permission[];
}
