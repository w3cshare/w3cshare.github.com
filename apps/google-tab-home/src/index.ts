/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-09 17:24:02
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 01:18:00
 * @FilePath: /FullStack/app/google-tab-home/src/index.ts
 * @Description: Google标签页首页
 */

import { render } from './render';
import { setupEventListeners } from './events';
import { loadUserSettings } from './settings';

export interface TabHomeOptions {
  container: string | HTMLElement;
  config?: {
    weatherEnabled?: boolean;
    searchEnabled?: boolean;
    customBackground?: string;
  }
}

/**
 * 初始化Google标签页首页
 */
export function initTabHome(options: TabHomeOptions) {
  const settings = loadUserSettings();
  render(options.container, settings);
  setupEventListeners();
  
  return {
    updateSettings: (newSettings: any) => {
      // 更新设置并重新渲染
    }
  };
}

export default { initTabHome };
