# 快速开始

本文档提供PaddleXOCR的快速上手指南，帮助您快速体验文档场景信息抽取功能。

## 准备工作

1. 确保您已完成[环境安装](./installation.md)
2. 准备测试用的文档图像，可以是PDF文档或扫描图片

## 安装依赖

首先确保激活了您的Python环境，然后安装必要的依赖：

```bash
# 激活环境（如果使用conda）
conda activate paddle_env

# 安装依赖
pip install paddlepaddle-gpu  # 如果是CPU环境，使用 paddlepaddle
pip install paddleocr
pip install opencv-python-headless
```

## 基本使用

### 使用命令行工具

PaddleOCR提供了方便的命令行工具，可以直接识别图片中的文字：

```bash
# 单张图片识别
paddleocr --image_dir=/path/to/your/image.jpg --use_angle_cls=true --use_gpu=false

# 多张图片批量识别
paddleocr --image_dir=/path/to/your/images/ --use_angle_cls=true --use_gpu=false
```

参数说明：
- `--image_dir`: 指定图片路径或包含图片的目录
- `--use_angle_cls`: 是否使用方向分类器检测文字方向
- `--use_gpu`: 是否使用GPU进行推理

### 使用Python代码

以下是一个简单的示例，展示如何使用PaddleOCR进行文字识别：

```python
from paddleocr import PaddleOCR

# 初始化PaddleOCR
ocr = PaddleOCR(use_angle_cls=True, lang="ch")  # 默认为中文模式

# 识别图片
img_path = './your_image.jpg'
result = ocr.ocr(img_path, cls=True)

# 输出结果
for line in result[0]:
    print(line)
```

## 印章识别示例

以下是一个专门用于印章识别的示例：

```python
from paddleocr import PaddleOCR
import cv2
import numpy as np

# 初始化印章检测模型
ocr_engine = PaddleOCR(use_angle_cls=True, lang="ch", 
                        det_model_dir="./inference/pp_ocr_det_v4_server_seal",
                        rec_model_dir="./inference/pp_ocr_rec_v4_server")

# 读取图片
image_path = "./test_image.jpg"
image = cv2.imread(image_path)

# 检测印章
result = ocr_engine.ocr(image, cls=True)

# 处理识别结果
if result[0]:
    print("检测到印章文本:")
    for line in result[0]:
        box = line[0]  # 检测框坐标
        text = line[1][0]  # 识别的文本
        confidence = line[1][1]  # 置信度
        print(f"文本: {text}, 置信度: {confidence:.4f}, 位置: {box}")
        
        # 在图像上标注检测结果
        points = np.array(box, np.int32).reshape((-1, 1, 2))
        cv2.polylines(image, [points], True, (0, 255, 0), 2)
        cv2.putText(image, text, (int(box[0][0]), int(box[0][1])-10), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 1)

    # 保存标注后的图像
    cv2.imwrite("result_image.jpg", image)
else:
    print("未检测到印章文本")
```

## 表格识别示例

以下是一个表格结构识别的示例：

```python
import paddlex
from paddlex import PaddleX

# 初始化表格识别模块
model = PaddleX(model_dir="./inference/SLANet_plus")

# 识别表格
result = model.predict("./test_table.jpg")

# 输出表格结构为HTML
html_result = result[0]['html']
print(html_result)

# 保存为Excel (需要安装pandas和openpyxl)
import pandas as pd
from pandas.io.html import read_html

# 从HTML中提取表格数据
tables = read_html(html_result)
if tables:
    df = tables[0]
    df.to_excel("output_table.xlsx", index=False)
    print("表格已保存为Excel文件")
```

## 完整文档处理流程

以下是一个结合版面分析、文字识别和表格识别的完整处理流程示例：

```python
import paddlex
import cv2
import numpy as np
from paddleocr import PaddleOCR
from paddlex import PaddleX

# 读取图像
image_path = "./test_document.jpg"
image = cv2.imread(image_path)

# 1. 版面分析 - 检测文档中的不同区域
layout_model = PaddleX(model_dir="./inference/PicoDet-L_layout_3cls")
layout_result = layout_model.predict(image)

# 遍历检测到的区域
for region in layout_result:
    bbox = region['bbox']  # [x1, y1, x2, y2]
    category = region['category']  # 区域类型
    
    # 裁剪区域图像
    x1, y1, x2, y2 = [int(v) for v in bbox]
    region_image = image[y1:y2, x1:x2]
    
    # 根据区域类型进行不同处理
    if category == "表格":
        # 表格结构识别
        table_model = PaddleX(model_dir="./inference/SLANet_plus")
        table_result = table_model.predict(region_image)
        print(f"表格区域结果: {table_result}")
        
    elif category == "印章":
        # 印章文本识别
        seal_ocr = PaddleOCR(use_angle_cls=True, lang="ch", 
                           det_model_dir="./inference/pp_ocr_det_v4_server_seal")
        seal_result = seal_ocr.ocr(region_image)
        print(f"印章区域文本: {seal_result}")
        
    else:
        # 普通文本识别
        text_ocr = PaddleOCR(use_angle_cls=True, lang="ch")
        text_result = text_ocr.ocr(region_image)
        print(f"文本区域内容: {text_result}")
```

## 常见问题

1. **识别准确率不高？**
   - 尝试使用服务器端模型提高精度 (如 `--rec_model_dir=pp_ocr_rec_v4_server`)
   - 确保图像有足够清晰度和对比度

2. **处理速度慢？**
   - 对于大批量处理，可以使用移动端模型提高速度 (如 `--rec_model_dir=pp_ocr_rec_v4_mobile`)
   - 启用GPU加速: `--use_gpu=true`

3. **印章文字识别不准确？**
   - 使用专门的印章检测模型 (`pp_ocr_det_v4_server_seal`)
   - 可能需要对图像进行预处理增强印章区域对比度

4. **内存占用过高？**
   - 设置较小的max_side_len参数 (如 `--max_side_len=960`)
   - 减少batch_size参数

## 下一步

- 查看[模型列表和对比](./models.md)了解各个模型的性能和使用场景
- 了解[架构设计](./architecture.md)以深入理解系统工作原理
- 学习如何[训练自己的模型](./training.md)以适应特定场景需求 