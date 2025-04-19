/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-13 03:00:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 03:15:00
 * @FilePath: /FullStack/app/google-tab-home/src/extension/createDefaultIcons.js
 * @Description: 创建默认图标
 */

const fs = require('fs');
const path = require('path');

// 确保目标目录存在
const iconsDir = path.resolve(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 创建简单的SVG图标
const createSvgIcon = (size) => {
  // 圆形背景，内嵌字母G
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#4285f4"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size/3}" fill="white"/>
  <text x="${size/2}" y="${size/2 + size/8}" font-family="Arial" font-size="${size/2}" font-weight="bold" 
        text-anchor="middle" fill="#4285f4">G</text>
</svg>`;
};

// 创建PNG数据URI (纯蓝色方块)
const createDataURIIcon = (size) => {
  // 对于小尺寸的图标，创建基本的1x1像素数据
  // 这里使用Google蓝色 #4285f4 (RGBA: 66, 133, 244, 255)
  const r = 66, g = 133, b = 244, a = 255;
  
  // 创建1x1像素的PNG数据
  const header = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG签名
    0x00, 0x00, 0x00, 0x0D, // IHDR块长度
    0x49, 0x48, 0x44, 0x52, // "IHDR"
    0x00, 0x00, 0x00, 0x01, // 宽度1像素
    0x00, 0x00, 0x00, 0x01, // 高度1像素
    0x08, // 位深度
    0x06, // 颜色类型 (RGBA)
    0x00, // 压缩方法
    0x00, // 过滤方法
    0x00, // 隔行扫描方法
    0x1F, 0x15, 0xC4, 0x89, // IHDR CRC
    0x00, 0x00, 0x00, 0x04, // IDAT块长度
    0x49, 0x44, 0x41, 0x54, // "IDAT"
    0x08, 0xD7, 0x63, 0xF8, 0xFF, 0xFF, 0x3F, 0x00, 0x05, 0x01, 0x01, 0x00, // 压缩的像素数据
    0x1F, 0xB7, 0x62, 0x95, // IDAT CRC
    0x00, 0x00, 0x00, 0x00, // IEND块长度
    0x49, 0x45, 0x4E, 0x44, // "IEND"
    0xAE, 0x42, 0x60, 0x82  // IEND CRC
  ]);
  
  return header;
};

// 创建图标尺寸列表
const sizes = [16, 48, 128];

// 为每个尺寸创建图标
console.log('Creating default icons...');
sizes.forEach(size => {
  try {
    // 创建SVG图标文件
    const svgPath = path.join(iconsDir, `icon${size}.svg`);
    fs.writeFileSync(svgPath, createSvgIcon(size));
    console.log(`Created ${svgPath}`);
    
    // 创建简单的PNG图标文件
    const pngPath = path.join(iconsDir, `icon${size}.png`);
    fs.writeFileSync(pngPath, createDataURIIcon(size));
    console.log(`Created ${pngPath}`);
  } catch (error) {
    console.error(`Error creating icon of size ${size}:`, error);
  }
});

console.log('Default icons created successfully in', iconsDir); 