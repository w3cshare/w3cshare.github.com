<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-01 13:15:33
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-01 13:15:52
 * @FilePath: /FullStack/pro/typeorm-mysql/src/entity/entify.md
 * @Description: --
-->

# Entify

## 1. 基本使用

> 将model目录下的MySQL数据库Sequelize模型文件转换成TypeORM实体文件，输出到同级entity文件夹目录下。请为所有实体类添加详细的中文注释，包括实体类整体描述、每个字段的用途和含义，以及实体间的关联关系说明。同时，为所有装饰器（@Column、@PrimaryColumn、@CreateDateColumn等）的参数对象中添加comment属性，使数据库表字段更具可读性。
