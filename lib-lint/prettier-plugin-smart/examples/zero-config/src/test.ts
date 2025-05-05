/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 12:30:00
 * @FilePath: /prettier-plugin-smart-example/src/test.ts
 * @Description: 测试格式化效果
 */

// 使用双引号和分号
const greeting = "Hello, World!";

// 格式不统一的函数定义
function calculateSum( a:number,b:number ) {
    return a+b;
}

// 不规范的对象定义
const config = { "name": "test", "value": 123, enabled: true };

// 不规范的箭头函数
const multiply = (factor) => {
    return factor * 2;
};

// 格式混乱的数组
const items = [
  1,
  2,
    3,
      4,
  5
];

// 错误的导出格式
export { 
    greeting, 
    calculateSum, 
    config, 
    multiply, 
    items 
}; 