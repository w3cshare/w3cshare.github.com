# API接口文档

本文档介绍PaddleXOCR提供的API接口，包括RESTful API和Python SDK接口，方便开发者进行系统集成。

## RESTful API

PaddleXOCR提供了RESTful风格的HTTP接口，支持通过HTTP请求调用OCR服务，适合需要集成OCR功能的Web应用或移动应用。

### 部署服务

使用uwsgi部署OCR服务：

```bash
# 安装uwsgi
pip install uwsgi

# 启动服务
uwsgi --ini uwsgi.ini
```

uwsgi配置文件示例(uwsgi.ini)：

```ini
[uwsgi]
http = 0.0.0.0:5000
chdir = /path/to/your/ocr-api
wsgi-file = ocr-api.py
processes = 4
threads = 2
```

### 文档上传接口

**请求**:

```bash
curl -X POST http://localhost:5000/api/ocr/upload \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -F "file=@/path/to/your/document.pdf" \
  -F "question=印章信息"
```

参数说明：
- `file`: 要上传的文档文件(支持PDF、JPG、PNG等格式)
- `question`: 可选，指定需要从文档中提取的信息类型

**响应**:

```json
{
  "status": "success",
  "message": "文档上传成功",
  "document_id": "doc_123456",
  "extraction_results": {
    "印章文本": ["XXX公司", "合同专用章"],
    "表格数据": [
      {"表格1": "HTML格式的表格内容..."}
    ],
    "文本内容": "提取的文本内容..."
  }
}
```

### 文档问答接口

**请求**:

```bash
curl -X POST http://localhost:5000/api/ocr/chat \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -F "question=以yaml格式输出表格内容"
```

参数说明：
- `question`: 对文档内容的提问或指令
- `document_id`: 可选，如果不提供则使用最近上传的文档

**响应**:

```json
{
  "status": "success",
  "answer": "表格内容YAML格式如下:\n\n表格1:\n  - 姓名: 张三\n    年龄: 30\n    职位: 经理\n  - 姓名: 李四\n    年龄: 25\n    职位: 工程师",
  "related_content": ["表格位于第2页", "包含3列数据"]
}
```

## Python SDK

PaddleXOCR提供了Python SDK，方便开发者在Python应用中集成OCR功能。

### 安装

```bash
pip install paddleocr
```

### 基础OCR功能

```python
from paddleocr import PaddleOCR

# 初始化OCR引擎
ocr = PaddleOCR(use_angle_cls=True, lang="ch")  # 中文模式

# 识别图片
result = ocr.ocr("sample.jpg", cls=True)

# 解析结果
for idx in range(len(result)):
    res = result[idx]
    for line in res:
        print(line)
```

### 印章识别

```python
from paddleocr import PaddleOCR

# 初始化印章OCR引擎
ocr_seal = PaddleOCR(use_angle_cls=True, lang="ch", 
                     det_model_dir="pp_ocr_det_v4_server_seal")

# 识别印章
result = ocr_seal.ocr("seal_document.jpg")

# 解析结果
for idx in range(len(result)):
    res = result[idx]
    for line in res:
        print(f"文本: {line[1][0]}, 置信度: {line[1][1]}")
```

### 表格识别

```python
import paddlex
from paddlex import PaddleX

# 加载表格识别模型
table_model = PaddleX(model_dir='./inference/SLANet_plus')

# 识别表格
result = table_model.predict('table_image.jpg')

# 获取HTML格式的表格
html_result = result[0]['html']
print(html_result)
```

### 版面分析

```python
from paddlex import PaddleX

# 加载版面分析模型
layout_model = PaddleX(model_dir='./inference/PicoDet-L_layout_3cls')

# 分析版面
result = layout_model.predict('document.jpg')

# 处理结果
for item in result:
    category = item['category']  # 区域类别
    score = item['score']        # 置信度
    bbox = item['bbox']          # 边界框 [x1, y1, x2, y2]
    print(f"类别: {category}, 置信度: {score}, 位置: {bbox}")
```

### 文档处理流水线

```python
import paddlex
from paddlex import PaddleX
from paddleocr import PaddleOCR
import cv2

class DocumentProcessor:
    def __init__(self):
        # 初始化各模型
        self.layout_model = PaddleX(model_dir='./inference/PicoDet-L_layout_3cls')
        self.table_model = PaddleX(model_dir='./inference/SLANet_plus')
        self.ocr_general = PaddleOCR(use_angle_cls=True, lang="ch")
        self.ocr_seal = PaddleOCR(use_angle_cls=True, lang="ch", 
                                  det_model_dir="./inference/pp_ocr_det_v4_server_seal")
    
    def process_document(self, image_path):
        # 读取图像
        image = cv2.imread(image_path)
        
        # 1. 版面分析
        layout_results = self.layout_model.predict(image)
        
        # 存储各种类型的结果
        results = {
            "文本内容": [],
            "表格数据": [],
            "印章信息": []
        }
        
        # 处理各区域
        for region in layout_results:
            category = region['category']
            bbox = region['bbox']
            
            # 裁剪区域图像
            x1, y1, x2, y2 = [int(v) for v in bbox]
            region_image = image[y1:y2, x1:x2]
            
            # 根据区域类型处理
            if category == "表格":
                table_result = self.table_model.predict(region_image)
                results["表格数据"].append(table_result)
                
            elif category == "印章":
                seal_result = self.ocr_seal.ocr(region_image)
                seal_texts = [line[1][0] for line in seal_result[0]] if seal_result[0] else []
                results["印章信息"].extend(seal_texts)
                
            else:  # 文本区域
                text_result = self.ocr_general.ocr(region_image)
                text_content = "\n".join([line[1][0] for line in text_result[0]]) if text_result[0] else ""
                results["文本内容"].append(text_content)
        
        return results

# 使用方法
processor = DocumentProcessor()
results = processor.process_document("document.jpg")
print(results)
```

## 参数配置

OCR引擎支持多种参数配置，可以根据实际需求进行调整：

### PaddleOCR参数

| 参数名 | 说明 | 默认值 | 可选值 |
|-------|------|-------|-------|
| use_gpu | 是否使用GPU推理 | False | True, False |
| use_angle_cls | 是否使用方向分类器 | False | True, False |
| lang | 识别语言 | "ch" | "ch", "en", "fr", "german", "korean", "japan" |
| det | 是否使用文本检测 | True | True, False |
| rec | 是否使用文本识别 | True | True, False |
| cls | 是否使用方向分类 | False | True, False |
| det_model_dir | 检测模型路径 | None | 自定义路径 |
| rec_model_dir | 识别模型路径 | None | 自定义路径 |
| cls_model_dir | 方向分类模型路径 | None | 自定义路径 |
| det_limit_side_len | 检测模型输入图像长宽限制 | 960 | 整数值 |
| det_limit_type | 检测模型输入图像限制类型 | "max" | "max", "min" |
| rec_batch_num | 识别模型batch size | 6 | 整数值 |
| max_text_length | 识别文本最大长度 | 25 | 整数值 |
| rec_char_dict_path | 识别字典路径 | None | 自定义路径 |
| drop_score | 识别结果过滤阈值 | 0.5 | 0~1之间 |
| use_onnx | 是否使用ONNX推理 | False | True, False |
| use_pdf2docx_api | 是否使用PDF转DOCX接口 | False | True, False |

### PaddleX参数

| 参数名 | 说明 | 默认值 | 可选值 |
|-------|------|-------|-------|
| model_dir | 模型路径 | 必填 | 自定义路径 |
| device | 推理设备 | "cpu" | "cpu", "gpu" |
| batch_size | 批处理大小 | 1 | 整数值 |
| use_trt | 是否使用TensorRT加速 | False | True, False |
| precision | 推理精度 | "fp32" | "fp32", "fp16", "int8" |
| use_mkldnn | 是否使用MKLDNN加速 | False | True, False |
| cpu_threads | CPU线程数 | 10 | 整数值 |
| use_static_graph | 是否使用静态图模式 | False | True, False |

## 错误处理

API接口可能返回以下错误码：

| 错误码 | 描述 | 可能原因 |
|-------|------|---------|
| 400 | 参数错误 | 缺少必需参数或参数格式错误 |
| 401 | 未授权 | API密钥无效或已过期 |
| 404 | 资源不存在 | 请求的文档ID不存在 |
| 413 | 文件过大 | 上传的文件超过大小限制 |
| 415 | 不支持的媒体类型 | 上传的文件格式不受支持 |
| 429 | 请求过多 | 超过API调用频率限制 |
| 500 | 服务器错误 | 服务器内部处理错误 |
| 503 | 服务不可用 | 服务器过载或维护中 |

## 示例代码

### 上传文档并识别

```python
import requests
import json

def upload_document(file_path, api_key, question=None):
    url = "http://localhost:5000/api/ocr/upload"
    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    
    files = {
        "file": open(file_path, "rb")
    }
    
    data = {}
    if question:
        data["question"] = question
    
    response = requests.post(url, headers=headers, files=files, data=data)
    
    if response.status_code == 200:
        return json.loads(response.text)
    else:
        raise Exception(f"Error: {response.status_code}, {response.text}")

# 使用示例
result = upload_document("/path/to/contract.pdf", "your_api_key", "提取印章信息")
print(result)
```

### 与文档进行问答

```python
import requests
import json

def chat_with_document(question, api_key, document_id=None):
    url = "http://localhost:5000/api/ocr/chat"
    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    
    data = {
        "question": question
    }
    
    if document_id:
        data["document_id"] = document_id
    
    response = requests.post(url, headers=headers, data=data)
    
    if response.status_code == 200:
        return json.loads(response.text)
    else:
        raise Exception(f"Error: {response.status_code}, {response.text}")

# 使用示例
result = chat_with_document("以yaml格式输出表格内容", "your_api_key")
print(result["answer"])
``` 