# DOCX文件图片提取指南

本文档介绍如何从DOCX文件中提取图片并进行处理，这是OCR系统处理Word文档的重要前置步骤。

## 概述

DOCX文件本质上是一个ZIP格式的压缩文件，包含XML文档结构和各种媒体文件（如图片）。提取DOCX中的图片可以通过两种方式实现：
1. 使用Python库直接提取
2. 解压DOCX文件手动获取图片

## 方法一：使用Python-docx库提取

### 安装依赖

```bash
pip install python-docx Pillow
```

### 提取代码示例

```python
import os
from docx import Document
import zipfile
from PIL import Image
import io

def extract_images_from_docx(docx_path, output_dir):
    """
    从DOCX文件中提取所有图片
    
    Args:
        docx_path: DOCX文件路径
        output_dir: 图片保存目录
    
    Returns:
        提取的图片路径列表
    """
    # 创建输出目录
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # 图片路径列表
    image_paths = []
    
    # 打开DOCX文件
    doc = Document(docx_path)
    
    # DOCX文件实际上是一个ZIP文件
    docx_zip = zipfile.ZipFile(docx_path)
    
    # 图片在word/media目录下
    image_files = [f for f in docx_zip.namelist() if f.startswith('word/media/')]
    
    # 提取每个图片
    for i, image_file in enumerate(image_files):
        image_data = docx_zip.read(image_file)
        
        # 获取图片格式
        img = Image.open(io.BytesIO(image_data))
        img_format = img.format.lower()
        
        # 保存图片
        image_output_path = os.path.join(output_dir, f'image_{i+1}.{img_format}')
        with open(image_output_path, 'wb') as f:
            f.write(image_data)
        
        image_paths.append(image_output_path)
    
    return image_paths

# 使用示例
docx_file = "example.docx"
output_folder = "extracted_images"
extracted_images = extract_images_from_docx(docx_file, output_folder)
print(f"提取了 {len(extracted_images)} 张图片")
```

## 方法二：直接处理DOCX文件结构

### 解压并提取图片

```python
import os
import zipfile
import shutil

def extract_images_direct(docx_path, output_dir):
    """
    通过直接解压DOCX文件提取图片
    
    Args:
        docx_path: DOCX文件路径
        output_dir: 图片保存目录
    """
    # 创建临时目录
    temp_dir = "temp_docx_extract"
    if not os.path.exists(temp_dir):
        os.makedirs(temp_dir)
    
    # 创建输出目录
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    try:
        # 解压DOCX文件
        with zipfile.ZipFile(docx_path, 'r') as zip_ref:
            zip_ref.extractall(temp_dir)
        
        # 图片存储在word/media目录
        media_dir = os.path.join(temp_dir, "word", "media")
        
        # 检查媒体目录是否存在
        if os.path.exists(media_dir):
            # 复制所有图片到输出目录
            for i, filename in enumerate(os.listdir(media_dir)):
                file_path = os.path.join(media_dir, filename)
                if os.path.isfile(file_path):
                    # 保留原始扩展名
                    _, ext = os.path.splitext(filename)
                    output_path = os.path.join(output_dir, f"image_{i+1}{ext}")
                    shutil.copy2(file_path, output_path)
                    print(f"提取图片: {output_path}")
    finally:
        # 清理临时目录
        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir)

# 使用示例
docx_file = "sample.docx"
output_folder = "docx_images"
extract_images_direct(docx_file, output_folder)
```

## 方法三：使用docx2python库（推荐）

docx2python库提供了更简洁的API来提取DOCX文件内容。

### 安装依赖

```bash
pip install docx2python
```

### 提取代码示例

```python
import os
from docx2python import docx2python

def extract_images_with_docx2python(docx_path, output_dir):
    """
    使用docx2python提取DOCX文件中的图片
    
    Args:
        docx_path: DOCX文件路径
        output_dir: 图片保存目录
    
    Returns:
        提取的图片路径列表
    """
    # 创建输出目录
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # 提取DOCX内容
    doc = docx2python(docx_path, extract_path=output_dir)
    
    # 图片存储在media目录下
    media_dir = os.path.join(output_dir, "word", "media")
    image_paths = []
    
    if os.path.exists(media_dir):
        for filename in os.listdir(media_dir):
            file_path = os.path.join(media_dir, filename)
            if os.path.isfile(file_path):
                image_paths.append(file_path)
    
    return image_paths

# 使用示例
docx_file = "report.docx"
output_folder = "extracted_content"
images = extract_images_with_docx2python(docx_file, output_folder)
print(f"共提取了 {len(images)} 张图片")
```

## 在PaddleXOCR项目中的实现

在PaddleXOCR项目中，我们可以集成DOCX图片提取功能，将提取的图片送入OCR流水线进行处理：

```python
import os
from docx import Document
import zipfile
from PIL import Image
import io
import paddle
import cv2
import numpy as np

class DocxProcessor:
    def __init__(self, det_model_dir, rec_model_dir):
        """
        初始化文档处理器
        
        Args:
            det_model_dir: 检测模型路径
            rec_model_dir: 识别模型路径
        """
        # 初始化OCR模型（具体实现参考PaddleOCR部署）
        self.text_detector = self.init_detector(det_model_dir)
        self.text_recognizer = self.init_recognizer(rec_model_dir)
    
    def init_detector(self, model_dir):
        # 初始化检测模型
        # 具体实现可参考deployment.md中的代码
        pass
    
    def init_recognizer(self, model_dir):
        # 初始化识别模型
        # 具体实现可参考deployment.md中的代码
        pass
    
    def extract_docx_images(self, docx_path, output_dir):
        """提取DOCX中的图片"""
        # 使用上面的方法一实现
        # ...
        return extracted_images
    
    def process_docx(self, docx_path, output_dir):
        """
        处理DOCX文件，提取图片并识别文本
        
        Args:
            docx_path: DOCX文件路径
            output_dir: 输出目录
            
        Returns:
            识别结果字典，键为图片路径，值为识别文本
        """
        # 提取图片
        image_paths = self.extract_docx_images(docx_path, output_dir)
        
        # 对每张图片进行OCR识别
        results = {}
        for image_path in image_paths:
            # 读取图片
            img = cv2.imread(image_path)
            
            # 文本检测
            det_results = self.text_detector.predict(img)
            
            # 文本识别
            ocr_results = []
            for box in det_results:
                roi = self.get_roi_image(img, box)
                text = self.text_recognizer.predict(roi)
                ocr_results.append({
                    "text": text,
                    "box": box.tolist()
                })
            
            results[image_path] = ocr_results
        
        return results
    
    def get_roi_image(self, image, box):
        """根据检测框裁剪文本区域"""
        # 具体实现...
        pass

# 使用示例
docx_file = "contract.docx"
output_folder = "contract_analysis"
processor = DocxProcessor(
    det_model_dir="./inference/det_model", 
    rec_model_dir="./inference/rec_model"
)
results = processor.process_docx(docx_file, output_folder)
```

## 表格图片OCR处理

对于DOCX中的表格图片，我们可以集成表格识别模型进行处理：

```python
def process_table_image(self, image_path):
    """
    处理可能包含表格的图片
    
    Args:
        image_path: 图片路径
        
    Returns:
        表格识别结果（HTML格式）
    """
    # 读取图片
    img = cv2.imread(image_path)
    
    # 表格检测与识别
    # 具体实现参考PaddleOCR表格识别模块...
    
    return table_html
```

## 批量处理DOCX文件

```python
def batch_process_docx(docx_dir, output_base_dir):
    """
    批量处理目录下的所有DOCX文件
    
    Args:
        docx_dir: DOCX文件目录
        output_base_dir: 输出根目录
    """
    processor = DocxProcessor(
        det_model_dir="./inference/det_model", 
        rec_model_dir="./inference/rec_model"
    )
    
    for filename in os.listdir(docx_dir):
        if filename.endswith('.docx'):
            docx_path = os.path.join(docx_dir, filename)
            # 为每个文件创建单独的输出目录
            file_output_dir = os.path.join(
                output_base_dir, 
                os.path.splitext(filename)[0]
            )
            
            print(f"处理文件: {filename}")
            results = processor.process_docx(docx_path, file_output_dir)
            
            # 保存结果
            result_file = os.path.join(file_output_dir, "ocr_results.json")
            with open(result_file, "w", encoding="utf-8") as f:
                json.dump(results, f, ensure_ascii=False, indent=2)

# 使用示例
batch_process_docx("documents", "processed_documents")
```

## 常见问题及解决方案

### 1. 无法提取图片

可能原因：
- DOCX文件损坏
- DOCX文件中没有图片
- 图片以其他形式（如OLE对象）嵌入

解决方法：
- 检查DOCX文件完整性
- 尝试其他库如`docx2python`或`python-pptx`
- 对于复杂文档，可使用Office API进行操作

### 2. 图片格式不兼容

可能原因：
- DOCX中使用了非标准图片格式
- 图片嵌入方式特殊

解决方法：
- 使用PIL库尝试转换图片格式
- 提取后进行格式检查和转换

### 3. 内存占用过高

可能原因：
- 处理大型DOCX文件
- 同时加载过多图片

解决方法：
- 使用流式处理
- 分批次处理图片
- 处理完立即释放内存

## 更多资源

- [python-docx官方文档](https://python-docx.readthedocs.io/)
- [docx2python GitHub](https://github.com/ShayHill/docx2python)
- [PaddleOCR表格识别文档](https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/table_recognition.md) 