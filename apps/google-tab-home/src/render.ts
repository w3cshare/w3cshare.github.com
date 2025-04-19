/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-13 01:20:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 01:20:00
 * @FilePath: /FullStack/app/google-tab-home/src/render.ts
 * @Description: 渲染标签页首页
 */

import { UserSettings } from './settings';

/**
 * 渲染标签页首页
 */
export function render(container: string | HTMLElement, settings: UserSettings) {
  const rootElement = typeof container === 'string' 
    ? document.querySelector(container) 
    : container;
    
  if (!rootElement) {
    console.error('找不到目标容器元素');
    return;
  }
  
  rootElement.innerHTML = `
    <div class="tab-home-container">
      <!-- 顶部搜索栏 -->
      <div class="search-container">
        <div class="search-logo">
          <img src="${settings.logoUrl || '/assets/logo.png'}" alt="Logo">
        </div>
        <div class="search-input-wrapper">
          <input type="text" placeholder="输入搜索内容" class="search-input">
          <div class="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- 时间和日期 -->
      <div class="datetime-container">
        <div class="time" id="current-time">00:00</div>
        <div class="date" id="current-date">1月1日 星期一</div>
      </div>
      
      <!-- 天气信息 -->
      <div class="weather-container">
        <div class="weather-location" id="weather-location">加载中...</div>
        <div class="weather-temp" id="weather-temp">--°</div>
        <div class="weather-info">
          <span class="min-max">最低 --° 最高 --°</span>
        </div>
      </div>
      
      <!-- 网站导航 -->
      <div class="shortcuts-container">
        <div class="shortcuts-grid" id="shortcuts-grid">
          ${renderShortcuts(settings.shortcuts || [])}
        </div>
      </div>
      
      <!-- 底部信息 -->
      <div class="footer">
        <div class="quote">${settings.quote || '"记忆汇聚成一条长河，将我们紧紧联系在一起，它流长河，罗卧底，带着不断向前，不断超越。"'}</div>
      </div>
    </div>
  `;
  
  // 注入样式
  injectStyles();
  
  // 更新时间
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  // 如果启用了天气功能，获取天气数据
  if (settings.weatherEnabled) {
    fetchWeatherData(settings.weatherLocation);
  }
}

/**
 * 渲染快捷方式图标
 */
function renderShortcuts(shortcuts: Array<{name: string, url: string, icon: string}>) {
  return shortcuts.map(shortcut => `
    <div class="shortcut-item" data-url="${shortcut.url}">
      <div class="shortcut-icon">
        <img src="${shortcut.icon}" alt="${shortcut.name}">
      </div>
      <div class="shortcut-name">${shortcut.name}</div>
    </div>
  `).join('');
}

/**
 * 注入CSS样式
 */
function injectStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .tab-home-container {
      font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
      height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #000;
      background-size: cover;
      background-position: center;
      color: white;
      padding: 20px;
      overflow: hidden;
      position: relative;
    }
    
    /* 半透明遮罩 */
    .tab-home-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
    
    /* 所有内容在遮罩上层 */
    .tab-home-container > * {
      position: relative;
      z-index: 2;
    }
    
    /* 搜索栏样式 */
    .search-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
    }
    
    .search-logo {
      margin-bottom: 20px;
    }
    
    .search-logo img {
      height: 40px;
    }
    
    .search-input-wrapper {
      position: relative;
      width: 60%;
      max-width: 600px;
    }
    
    .search-input {
      width: 100%;
      padding: 12px 50px 12px 20px;
      border-radius: 24px;
      border: none;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      color: white;
      font-size: 16px;
    }
    
    .search-input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
    
    .search-icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    
    .search-icon svg {
      width: 24px;
      height: 24px;
      fill: white;
    }
    
    /* 日期时间样式 */
    .datetime-container {
      text-align: center;
      margin: 40px 0;
    }
    
    .time {
      font-size: 80px;
      font-weight: 300;
      margin-bottom: 10px;
    }
    
    .date {
      font-size: 18px;
      opacity: 0.8;
    }
    
    /* 天气样式 */
    .weather-container {
      text-align: center;
      margin-bottom: 40px;
    }
    
    .weather-location {
      font-size: 16px;
      margin-bottom: 5px;
    }
    
    .weather-temp {
      font-size: 36px;
      font-weight: 300;
    }
    
    .min-max {
      font-size: 14px;
      opacity: 0.8;
    }
    
    /* 网站导航样式 */
    .shortcuts-container {
      margin: auto 0;
    }
    
    .shortcuts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .shortcut-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .shortcut-item:hover {
      transform: scale(1.05);
    }
    
    .shortcut-icon {
      width: 54px;
      height: 54px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
      overflow: hidden;
    }
    
    .shortcut-icon img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
    
    .shortcut-name {
      font-size: 14px;
      max-width: 90px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    /* 底部引用 */
    .footer {
      margin-top: auto;
      text-align: center;
      padding: 20px 0;
    }
    
    .quote {
      font-size: 14px;
      opacity: 0.7;
      max-width: 700px;
      margin: 0 auto;
      font-style: italic;
    }
  `;
  document.head.appendChild(styleElement);
}

/**
 * 更新日期时间
 */
function updateDateTime() {
  const now = new Date();
  
  // 更新时间 - 24小时制
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeStr = `${hours}:${minutes}`;
  
  // 更新日期
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = '日一二三四五六'.charAt(now.getDay());
  const dateStr = `${month}月${date}日 星期${day}`;
  
  // 更新DOM
  const timeElement = document.getElementById('current-time');
  const dateElement = document.getElementById('current-date');
  
  if (timeElement) timeElement.textContent = timeStr;
  if (dateElement) dateElement.textContent = dateStr;
}

/**
 * 获取天气数据
 */
function fetchWeatherData(location: string = '北京') {
  // 实际项目中，这里应该调用天气API
  // 这里只是模拟数据
  setTimeout(() => {
    const locationElement = document.getElementById('weather-location');
    const tempElement = document.getElementById('weather-temp');
    
    if (locationElement) locationElement.textContent = location;
    if (tempElement) tempElement.textContent = '7°';
    
    // 更新最高最低温度
    const weatherInfoElement = document.querySelector('.min-max');
    if (weatherInfoElement) {
      weatherInfoElement.textContent = '最低 4° 最高 10°';
    }
  }, 1000);
} 