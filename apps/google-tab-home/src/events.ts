/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-13 01:30:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 01:30:00
 * @FilePath: /FullStack/app/google-tab-home/src/events.ts
 * @Description: 事件处理
 */

import { saveUserSettings, loadUserSettings } from './settings';

/**
 * 设置事件监听器
 */
export function setupEventListeners() {
  // 设置背景
  setupBackground();
  
  // 搜索功能
  setupSearch();
  
  // 快捷方式点击事件
  setupShortcutsEvents();
}

/**
 * 设置背景图片
 */
function setupBackground() {
  const settings = loadUserSettings();
  if (settings.backgroundUrl) {
    const container = document.querySelector('.tab-home-container');
    if (container) {
      container.setAttribute('style', `background-image: url("${settings.backgroundUrl}")`);
    }
  }
}

/**
 * 设置搜索功能
 */
function setupSearch() {
  const searchInput = document.querySelector('.search-input') as HTMLInputElement;
  const searchIcon = document.querySelector('.search-icon');
  
  if (!searchInput || !searchIcon) return;
  
  // 点击搜索图标执行搜索
  searchIcon.addEventListener('click', () => {
    performSearch(searchInput.value);
  });
  
  // 按回车执行搜索
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      performSearch(searchInput.value);
    }
  });
}

/**
 * 执行搜索
 */
function performSearch(query: string) {
  if (!query.trim()) return;
  
  const settings = loadUserSettings();
  const searchEngine = settings.searchEngine || { 
    name: 'Google', 
    searchUrl: 'https://www.google.com/search?q={query}' 
  };
  
  const url = searchEngine.searchUrl.replace('{query}', encodeURIComponent(query));
  window.location.href = url;
}

/**
 * 设置快捷方式点击事件
 */
function setupShortcutsEvents() {
  const shortcuts = document.querySelectorAll('.shortcut-item');
  
  shortcuts.forEach(shortcut => {
    shortcut.addEventListener('click', () => {
      const url = shortcut.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
} 