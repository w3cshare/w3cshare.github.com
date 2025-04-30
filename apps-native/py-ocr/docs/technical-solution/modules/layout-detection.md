# 版面区域检测模块

## 模型选择

可选用以下系列模型：

### PicoDet系列

- PicoDet_layout_1x
- PicoDet-S_layout_3cls
- PicoDet-S_layout_17cls
- PicoDet-L_layout_3cls
- PicoDet-L_layout_17cls

### RT-DETR-H系列

- RT-DETR-H_layout_3cls
- RT-DETR-H_layout_17cls

这些模型在PubLayNet数据集或自建数据集上进行训练，能够高效地定位文档中的不同区域，如文字、标题、表格、图片、印章等。

## 技术原理

### 基础架构

- 基于深度学习目标检测算法
- 通过对大量标注数据的学习，模型能够识别文档图像中的不同区域类型
- 输出区域位置信息（如边界框坐标）

### 核心组件

1. 卷积神经网络（CNN）
   - 提取图像特征
2. 区域提议网络（RPN）
   - 生成候选区域
3. 分类和回归模块
   - 对候选区域进行分类
   - 得到精确的区域定位结果

## 性能对比

### 精度对比

#### RT-DETR-H系列

- RT-DETR-H_layout_3cls
  - mAP(0.5): 95.9%
  - GPU推理耗时: 114.6ms
- RT-DETR-H_layout_17cls
  - mAP(0.5): 92.6%
  - GPU推理耗时: 115.1ms

#### PicoDet系列

- PicoDet-L_layout_3cls
  - mAP(0.5): 89.3%
  - GPU推理耗时: 15.7ms
- PicoDet_layout_1x
  - mAP(0.5): 86.8%
  - GPU推理耗时: 13.0ms

### 推理速度对比

#### CPU推理耗时

- PicoDet-S_layout_3cls: 45.8ms
- PicoDet-S_layout_17cls: 46.2ms

#### GPU推理耗时

- PicoDet_layout_1x: 13.0ms（最快）
- RT-DETR-H系列: 114.6ms以上

### 模型存储大小对比

- PicoDet-S系列: 4.8M
- PicoDet-L系列: 22.6M
- RT-DETR-H系列: 470.1M ~ 470.2M

## 适用场景

### 高精度需求场景

- 适用模型：RT-DETR-H系列
- 应用场景：金融合同审核、法律文件分析等
- 特点：精度最高，但推理速度较慢，存储占用大

### 移动端或低资源环境

- 适用模型：PicoDet-S系列
- 应用场景：手机端文档处理APP、嵌入式设备等
- 特点：模型小、速度快，精度适中

### 平衡性能场景

- 适用模型：PicoDet-L系列
- 应用场景：企业内部日常文档处理、小型办公系统等
- 特点：在精度和速度之间取得较好平衡

## 使用建议

1. 根据实际应用场景的需求选择合适的模型：

   - 对精度要求极高：选择RT-DETR-H系列
   - 资源受限环境：选择PicoDet-S系列
   - 常规应用场景：选择PicoDet-L系列

2. 在进行模型选择时，需要综合考虑以下因素：
   - 硬件资源情况
   - 精度要求
   - 响应时间要求
   - 存储空间限制
