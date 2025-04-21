/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-01 12:48:27
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-01 13:44:19
 * @FilePath: /FullStack/pro/typeorm-mysql/src/entity/RolePermission.ts
 * @Description: 角色与权限的关联实体
 */
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Permission } from '@/entity/Permission';
import { Role } from '@/entity/Role';

/**
 * 角色权限关联实体类
 * 作为Role和Permission的多对多关系的关联表
 * 存储角色与权限的对应关系
 */
@Entity({ name: 'RolePermission', comment: '角色与权限的关联实体' })
export class RolePermission {
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
   * 创建时间
   * 记录角色权限关联的创建时间
   */
  @CreateDateColumn({ comment: '记录角色权限关联的创建时间' })
  createdAt: Date;

  /**
   * 更新时间
   * 记录角色权限关联最后更新的时间
   */
  @UpdateDateColumn({ comment: '记录角色权限关联最后更新的时间' })
  updatedAt: Date;

  /**
   * 关联的角色实体
   * 多对一关系：多个角色权限关联可以属于同一个角色
   * 级联删除和更新：当角色被删除时，相关的角色权限关联也会被删除
   */
  @ManyToOne(() => Role, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'RoleId' })
  role: Role;

  /**
   * 关联的权限实体
   * 多对一关系：多个角色权限关联可以使用同一种权限类型
   * 级联删除和更新：当权限被删除时，相关的角色权限关联也会被删除
   */
  @ManyToOne(() => Permission, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'PermissionId' })
  permission: Permission;
}
