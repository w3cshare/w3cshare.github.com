# 文本识别模块

## 模型选择

### PP-OCRv4系列

- PP-OCRv4_mobile_rec

  - 适用于移动端部署
  - 平衡精度和效率

- PP-OCRv4_server_rec
  - 适用于服务器端部署
  - 更高的识别精度

### 其他可选模型

- ch_SVTRv2_rec

  - 在特定比赛中表现出色
  - 具有较高的识别准确率

- ch_RepSVTR_rec
  - 轻量级模型
  - 适用于移动端场景

## 技术原理

### 基础架构

- 基于深度学习的序列识别模型
- 文本图像转换为序列特征
- 使用循环神经网络（RNN）或Transformer进行序列建模

### PP-OCRv4模型特点

- 采用卷积神经网络提取图像特征
- 结合注意力机制和RNN进行序列建模
- 使用CTC损失函数或注意力损失函数进行训练
- 引入数据增强方案
- 使用GTC-NRTR指导分支提升文本识别精度

## 性能指标

### 识别准确率

#### PP-OCRv4系列

- PP-OCRv4_server_rec

  - Avg Accuracy: 79.20%
  - CPU推理耗时: 140.179ms

- PP-OCRv4_mobile_rec
  - Avg Accuracy: 78.20%
  - CPU推理耗时: 46.7868ms

#### 其他模型

- ch_SVTRv2_rec

  - Avg Accuracy: 68.81%
  - GPU推理耗时: 8.36801ms

- ch_RepSVTR_rec
  - Avg Accuracy: 65.07%
  - GPU推理耗时: 10.5047ms

### 推理速度

#### CPU推理耗时

- PP-OCRv4_mobile_rec: 46.7868ms（移动端最优）
- PP-OCRv4_server_rec: 140.179ms

#### GPU推理耗时

- PP-OCRv4_server_rec: 7.19439ms（服务器端最优）
- ch_SVTRv2_rec: 8.36801ms
- ch_RepSVTR_rec: 10.5047ms

### 模型存储大小

- PP-OCRv4_mobile_rec: 10.6M
- PP-OCRv4_server_rec: 71.2M
- ch_SVTRv2_rec: 73.9M
- ch_RepSVTR_rec: 22.1M

## 适用场景

### 高精度需求场景

- 适用模型：PP-OCRv4_server_rec
- 应用场景：金融合同审核、法律文件分析等
- 特点：识别准确率最高，适合服务器端部署

### 移动端场景

- 适用模型：PP-OCRv4_mobile_rec或ch_RepSVTR_rec
- 应用场景：移动端OCR应用、实时文本识别等
- 特点：推理速度快，模型体积小

### 特定场景优化

- 适用模型：ch_SVTRv2_rec
- 应用场景：特定领域的文本识别任务
- 特点：在特定数据集上表现优异

## 使用建议

1. 模型选择考虑因素

   - 部署环境（服务器/移动端）
   - 精度要求
   - 响应时间要求
   - 存储空间限制

2. 优化建议

   - 服务器端部署优先考虑PP-OCRv4_server_rec
   - 移动端部署可选择PP-OCRv4_mobile_rec
   - 特定场景可考虑ch_SVTRv2_rec或ch_RepSVTR_rec

3. 部署优化
   - 合理利用GPU资源提升推理速度
   - 考虑模型量化减小存储占用
   - 根据实际需求平衡精度和速度
