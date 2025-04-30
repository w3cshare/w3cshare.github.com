<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-30 15:30:21
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-30 15:30:25
 * @FilePath: /FullStack/apps/py-ocr/docs/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# PaddleXOCR 技术评审文档

## 目录

- [背景与需求](./background.md)
- [目标](./objectives.md)
- [技术方案](./technical-solution/)
  - [整体架构](./technical-solution/architecture.md)
  - [模块方案](./technical-solution/modules/)
    - [版面区域检测](./technical-solution/modules/layout-detection.md)
    - [文本检测](./technical-solution/modules/text-detection.md)
    - [文本识别](./technical-solution/modules/text-recognition.md)
    - [表格结构识别](./technical-solution/modules/table-recognition.md)
    - [印章文本检测](./technical-solution/modules/seal-detection.md)
    - [文本图像矫正](./technical-solution/modules/text-correction.md)
    - [文档图像方向分类](./technical-solution/modules/orientation-classification.md)
- [安装部署](./deployment/)
  - [环境准备](./deployment/environment.md)
  - [PaddlePaddle安装](./deployment/paddlepaddle.md)
  - [PaddleX安装](./deployment/paddlex.md)
  - [数据标注工具](./deployment/annotation-tool.md)
- [业务流程](./workflow.md)
- [测试计划](./testing.md)
- [人力排期](./schedule.md)
- [评审会议](./review-meeting.md)

## 简介

本文档是PaddleXOCR项目的技术评审文档，详细描述了项目的背景、需求、目标、技术方案、部署方案等内容。文档采用模块化组织，便于团队成员查阅和维护。

## 文档结构

- 每个主题都有独立的Markdown文件
- 技术方案按模块分类存储
- 部署相关文档集中在deployment目录
- 文档间通过相对链接保持关联

## 使用说明

1. 查看具体模块文档请点击对应链接
2. 文档使用Markdown格式，可直接在代码库中浏览
3. 如需修改，请遵循项目的文档规范
