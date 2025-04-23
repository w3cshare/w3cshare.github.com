/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-13 01:25:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 01:25:00
 * @FilePath: /FullStack/app/google-tab-home/src/settings.ts
 * @Description: 用户设置
 */

export interface UserSettings {
  // 背景图片
  backgroundUrl?: string
  // Logo URL
  logoUrl?: string
  // 是否启用天气
  weatherEnabled?: boolean
  // 天气位置
  weatherLocation?: string
  // 快捷方式
  shortcuts?: Array<{
    name: string
    url: string
    icon: string
  }>
  // 底部引用
  quote?: string
  // 搜索引擎
  searchEngine?: {
    name: string
    searchUrl: string
  }
}

/**
 * 默认设置
 */
const DEFAULT_SETTINGS: UserSettings = {
  backgroundUrl: 'https://source.unsplash.com/random/1920x1080/?nature,dark',
  logoUrl:
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png',
  weatherEnabled: true,
  weatherLocation: '北京',
  searchEngine: {
    name: 'Google',
    searchUrl: 'https://www.google.com/search?q={query}',
  },
  shortcuts: [
    {
      name: '淘宝',
      url: 'https://www.taobao.com',
      icon: 'https://www.taobao.com/favicon.ico',
    },
    {
      name: '京东商城',
      url: 'https://www.jd.com',
      icon: 'https://www.jd.com/favicon.ico',
    },
    {
      name: '百度',
      url: 'https://www.baidu.com',
      icon: 'https://www.baidu.com/favicon.ico',
    },
    {
      name: '抖音',
      url: 'https://www.douyin.com',
      icon: 'https://www.douyin.com/favicon.ico',
    },
    {
      name: '哔哩哔哩',
      url: 'https://www.bilibili.com',
      icon: 'https://www.bilibili.com/favicon.ico',
    },
    {
      name: '爱奇艺',
      url: 'https://www.iqiyi.com',
      icon: 'https://www.iqiyi.com/favicon.ico',
    },
    {
      name: '微博',
      url: 'https://weibo.com',
      icon: 'https://weibo.com/favicon.ico',
    },
    {
      name: '知乎',
      url: 'https://www.zhihu.com',
      icon: 'https://static.zhihu.com/heifetz/favicon.ico',
    },
  ],
  quote: '记忆汇聚成一条长河，将我们紧紧联系在一起，它流长河，罗卧底，带着不断向前，不断超越。',
}

/**
 * 存储设置的本地存储键名
 */
const STORAGE_KEY = 'google_tab_home_settings'

/**
 * 加载用户设置
 */
export function loadUserSettings(): UserSettings {
  try {
    const savedSettings = localStorage.getItem(STORAGE_KEY)
    if (savedSettings) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) }
    }
  } catch (error) {
    console.error('加载设置时出错:', error)
  }

  return DEFAULT_SETTINGS
}

/**
 * 保存用户设置
 */
export function saveUserSettings(settings: Partial<UserSettings>): UserSettings {
  try {
    const currentSettings = loadUserSettings()
    const newSettings = { ...currentSettings, ...settings }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings))
    return newSettings
  } catch (error) {
    console.error('保存设置时出错:', error)
    return loadUserSettings()
  }
}
