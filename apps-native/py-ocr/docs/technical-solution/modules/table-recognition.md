<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-30 15:33:48
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-30 15:33:53
 * @FilePath: /FullStack/apps/py-ocr/docs/technical-solution/modules/table-recognition.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 表格结构识别模块

## 模型选择

### SLANet系列

- SLANet

  - 采用CPU友好型轻量级骨干网络PP-LCNet
  - 高低层特征融合模块CSP-PAN
  - 结构与位置信息对齐的特征解码模块SLA Head

- SLANet_plus
  - SLANet的增强版
  - 对无线表、复杂表格的识别能力更强
  - 降低了对表格定位准确性的敏感度

## 技术原理

### 基础架构

- 利用深度学习技术对表格结构进行识别
- 提取表格图像的特征
- 通过特征解码模块分析表格结构

### 核心功能

1. 表格结构分析

   - 分析表格的行、列结构
   - 识别单元格的位置关系

2. 模型训练
   - 使用大量表格标注数据
   - 学习预测表格的结构信息
   - 包括表格的行数、列数、单元格合并情况等

## 性能指标

### 精度对比

#### SLANet_plus

- 精度: 63.69%
- CPU推理耗时: 1845.37ms
- GPU推理耗时: 522.536ms

#### SLANet

- 精度: 59.52%
- CPU推理耗时: 1845.37ms
- GPU推理耗时: 522.536ms

### 模型特点对比

#### SLANet_plus优势

- 更高的识别精度
- 更强的复杂表格处理能力
- 对表格定位要求更低

#### 共同特点

- 相同的推理耗时
- 相同的模型存储大小（6.9M）
- 轻量级设计

## 适用场景

### 高精度需求场景

- 适用模型：SLANet_plus
- 应用场景：
  - 财务报表分析
  - 数据表格提取
  - 复杂表格处理
- 特点：精度更高，适合处理复杂表格

### 一般表格处理场景

- 适用模型：SLANet
- 应用场景：
  - 简单表格识别
  - 常规文档处理
- 特点：基础功能完备，性能稳定

## 使用建议

1. 模型选择

   - 优先考虑使用SLANet_plus
   - 性能要求不高时可使用SLANet

2. 性能优化

   - 使用GPU加速推理
   - 合理规划批处理大小
   - 考虑模型量化优化

3. 实际应用建议
   - 预处理阶段注意表格区域定位准确性
   - 后处理阶段注意结构化数据的整理
   - 根据实际需求选择合适的输出格式
