/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-26 13:12:25
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-31 13:10:39
 * @FilePath: /nest-client-project/src/interfaces/hero.interface.ts
 * @Description: --
 */
// Service: HeroesService
export type FindOne = (params: HeroById) => Promise<Hero>
export type FindMany = (upstream: HeroById) => Promise<Hero[]>

export interface HeroById {
  id?: number
}

export interface Hero {
  id?: number
  name?: string
}

export interface HeroesService {
  findOne: FindOne
  findMany: FindMany
}
