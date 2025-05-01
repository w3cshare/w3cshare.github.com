# 数据标注工具使用指南

本文档介绍如何使用PPOCRLabel等工具为PaddleXOCR项目准备训练数据。

## PPOCRLabel工具简介

PPOCRLabel是PaddleOCR团队开发的一款开源文字标注工具，支持多种标注模式：

- 矩形框标注：用于检测任务
- 多边形标注：用于弯曲文本检测
- 关键点标注：用于印章等场景
- 表格标注：用于表格结构标注
- 划线标注：用于语义分割

## 安装与启动

### 环境要求

- Python 3.6+
- PyQt5
- opencv-python
- shapely

### 安装步骤

```bash
# 安装PPOCRLabel
pip install PPOCRLabel

# 启动工具
PPOCRLabel --lang ch  # 中文界面
PPOCRLabel --lang en  # 英文界面
```

## 标注流程

### 1. 文本检测标注

1. 打开PPOCRLabel工具，点击【打开目录】加载图像
2. 选择【矩形标注】或【多边形标注】模式
3. 在图像上拖拽绘制标注框，双击闭合曲线（多边形模式下）
4. 添加文本内容
5. 点击【下一张】继续标注
6. 标注完成后，点击【保存】生成标注文件

<!-- ![文本检测标注演示](../images/det_labeling.png) -->

_注：图片无法显示时，可访问PaddleOCR官方文档查看相关截图_

标注快捷键：

- 鼠标左键：绘制标注框
- 鼠标右键：清除上一个点
- A/D：上一张/下一张图像
- Ctrl+E：编辑当前框文本
- Ctrl+R：删除当前框
- Shift+R：删除所有框

### 2. 印章文本标注

印章文本标注使用多边形或关键点模式：

1. 选择【关键点标注】模式
2. 在印章文本边缘点击，添加关键点
3. 双击完成一个印章文本区域标注
4. 填写印章文本内容
5. 继续标注下一个区域

<!-- ![印章标注演示](../images/seal_labeling.png) -->

_注：图片无法显示时，可参考PaddleOCR GitHub仓库中的印章标注示例_

### 3. 表格结构标注

表格结构标注步骤：

1. 选择【表格标注】模式
2. 先标注表格外框
3. 点击【添加行】和【添加列】绘制表格线
4. 调整单元格位置
5. 点击【导出HTML】生成表格结构文件

<!-- ![表格标注演示](../images/table_labeling.png) -->

_注：图片无法显示时，可查看PaddleOCR官方文档中的表格标注指南_

表格标注快捷键：

- Ctrl+L：添加行
- Ctrl+H：添加列
- Ctrl+M：合并单元格
- Ctrl+B：拆分单元格

## 标注文件格式

### 检测任务标注格式

PPOCRLabel生成的检测标注文件为txt格式，内容如下：

```
image_1.jpg\t[{"transcription": "文本内容", "points": [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]}]
image_2.jpg\t[{"transcription": "文本内容", "points": [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]}, {"transcription": "文本内容2", "points": [...]}]
```

其中：

- `image_name.jpg`：图像文件名
- `transcription`：文本内容
- `points`：文本区域的顶点坐标

### 表格标注格式

表格标注导出为HTML格式，示例：

```html
<html>
  <body>
    <table>
      <tr>
        <td>表头1</td>
        <td>表头2</td>
      </tr>
      <tr>
        <td>内容1</td>
        <td>内容2</td>
      </tr>
    </table>
  </body>
</html>
```

## 标注数据管理

### 拆分训练集和验证集

标注完成后，需要将数据集拆分为训练集和验证集：

```bash
# 示例脚本
python tools/split_dataset.py \
    --input_dir=/path/to/your/labeled_data \
    --output_train_dir=/path/to/train \
    --output_val_dir=/path/to/val \
    --val_ratio=0.2
```

### 数据增强

为提高训练效果，可使用PaddleOCR提供的数据增强工具：

```bash
# 数据增强示例
python tools/data_augmentation.py \
    --input_dir=/path/to/train \
    --output_dir=/path/to/train_augmented \
    --augment_type=perspective,blur,noise,rotate
```

支持的数据增强类型：

- `perspective`：透视变换
- `blur`：模糊
- `noise`：添加噪点
- `rotate`：旋转
- `flip`：翻转
- `distort`：扭曲

## 数据质量控制

为确保标注质量，请遵循以下建议：

1. **完整性检查**：确保所有目标文本都已标注
2. **一致性检查**：确保相同类型的文本采用相同的标注方式
3. **边界精确性**：文本框应紧贴文本区域
4. **文本内容准确性**：确保标注文本与图像中实际内容一致
5. **特殊情况处理**：对于模糊、残缺的文本，可添加特殊标记

## 半自动标注

PPOCRLabel支持半自动标注功能，可预先使用模型识别，再人工校正：

1. 在工具设置中配置模型路径：

   ```
   检测模型：./inference/ch_PP-OCRv3_det_infer
   识别模型：./inference/ch_PP-OCRv3_rec_infer
   ```

2. 点击【自动标注】，系统会自动检测并识别文本
3. 人工校正错误的标注结果
4. 继续下一张图片标注

<!-- ![半自动标注演示](../images/auto_labeling.png) -->

_注：如需了解半自动标注的详细操作，请参考PaddleOCR官方文档_

## 数据版本管理

推荐使用Git等工具管理标注数据版本：

```bash
# 初始化Git仓库
cd /path/to/labeled_data
git init

# 提交标注数据
git add .
git commit -m "Add initial labeled data"

# 创建版本标签
git tag -a v1.0 -m "Version 1.0 of labeled data"
```

## 标注质量评估

可使用以下指标评估标注质量：

1. **标注一致性**：不同标注人员对同一数据的标注结果一致性
2. **覆盖率**：标注是否覆盖所有目标文本
3. **精确性**：框选是否精确贴合文本区域

## 常见问题

1. **标注工具崩溃问题**

   - 检查图像格式是否支持
   - 减少批量加载图像数量
   - 更新至最新版本的PPOCRLabel

2. **如何修改已标注的框**

   - 选中已标注的框，按下Ctrl+E进行编辑
   - 拖动框的顶点可调整形状和大小

3. **如何处理重叠文本**

   - 优先标注清晰可辨的文本
   - 对于重叠严重的文本，可在标注内容中添加特殊标记

4. **大量图像标注效率低**
   - 使用半自动标注功能
   - 多人协作分工标注
   - 使用脚本批量预处理图像

## 其他标注工具

除PPOCRLabel外，还可使用其他开源工具：

1. **LabelImg**：适用于矩形框标注

   ```bash
   pip install labelImg
   labelImg
   ```

2. **LabelMe**：支持多边形标注

   ```bash
   pip install labelme
   labelme
   ```

3. **CVAT**：基于Web的协作标注平台
   ```bash
   # 使用Docker部署
   docker-compose up -d
   ```

## 自定义标注格式转换

如果使用其他标注工具，可使用转换脚本将标注格式转为PaddleOCR支持的格式：

```bash
# 示例：将VOC格式转为PaddleOCR格式
python tools/convert_voc2paddleocr.py \
    --input_dir=/path/to/voc_annotations \
    --output_dir=/path/to/paddleocr_annotations
```

## 更多资源

- [PPOCRLabel GitHub仓库](https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/PPOCRLabel)
- [PaddleOCR标注指南](https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/data_annotation.md)
- [数据增强文档](https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/data_augmentation.md)
