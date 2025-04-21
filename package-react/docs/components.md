---
title: React 组件总览
description: React 组件库组件分类与用法说明
outline: deep
---

# React 组件总览

本文档提供了 React 组件库中可用的所有组件的概览。

## 通用组件

| 组件名 | 描述 | 用法示例 |
|-------|------|---------|
| Button | 按钮组件 | `<Button type="primary">点击</Button>` |
| Icon | 图标组件 | `<Icon type="user" />` |
| Typography | 排版组件 | `<Typography.Title>标题</Typography.Title>` |

## 布局组件

| 组件名 | 描述 | 用法示例 |
|-------|------|---------|
| Grid | 栅格系统 | `<Row><Col span={12}>内容</Col></Row>` |
| Layout | 页面布局 | `<Layout><Header /><Content /></Layout>` |
| Space | 间距组件 | `<Space size="large">内容</Space>` |

## 导航组件

| 组件名 | 描述 | 用法示例 |
|-------|------|---------|
| Menu | 菜单组件 | `<Menu><Menu.Item>项目</Menu.Item></Menu>` |
| Pagination | 分页组件 | `<Pagination total={100} />` |
| Steps | 步骤条 | `<Steps current={1}><Steps.Item>步骤一</Steps.Item></Steps>` |

## 数据录入组件

| 组件名 | 描述 | 用法示例 |
|-------|------|---------|
| Form | 表单组件 | `<Form><Form.Item><Input /></Form.Item></Form>` |
| Input | 输入框 | `<Input placeholder="请输入" />` |
| Select | 选择器 | `<Select><Select.Option value="1">选项一</Select.Option></Select>` |
| DatePicker | 日期选择器 | `<DatePicker />` |
| Upload | 上传组件 | `<Upload><Button>上传文件</Button></Upload>` |

## 数据展示组件

| 组件名 | 描述 | 用法示例 |
|-------|------|---------|
| Table | 表格组件 | `<Table dataSource={data} columns={columns} />` |
| Tabs | 标签页 | `<Tabs><Tabs.TabPane tab="标签1">内容</Tabs.TabPane></Tabs>` |
| Card | 卡片组件 | `<Card title="标题">内容</Card>` |
| Descriptions | 描述列表 | `<Descriptions title="用户信息"><Descriptions.Item>详情</Descriptions.Item></Descriptions>` |

## 反馈组件

| 组件名 | 描述 | 用法示例 |
|-------|------|---------|
| Modal | 对话框 | `<Modal visible={true} title="标题">内容</Modal>` |
| Message | 全局提示 | `message.success('操作成功')` |
| Notification | 通知提醒 | `notification.open({ message: '通知标题' })` |
| Progress | 进度条 | `<Progress percent={30} />` |

## 其他组件

| 组件名 | 描述 | 用法示例 |
|-------|------|---------|
| ConfigProvider | 全局配置 | `<ConfigProvider locale={locale}>...</ConfigProvider>` |
| Divider | 分割线 | `<Divider />` |

## 企业级组件

以下是专为企业应用场景设计的高级组件：

| 组件名 | 描述 | 用法示例 |
|-------|------|---------|
| ProTable | 高级表格 | `<ProTable columns={columns} request={fetchData} />` |
| ProForm | 高级表单 | `<ProForm onFinish={handleSubmit}>...</ProForm>` |
| ProLayout | 高级布局 | `<ProLayout menuData={menuData}>...</ProLayout>` |
| ProDescriptions | 高级描述列表 | `<ProDescriptions dataSource={data} />` |

## 使用示例

```tsx
import React from 'react';
import { Form, Input, Button, Card } from '@fullstack/ant-design-lib';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('登录信息:', values);
  };

  return (
    <Card title="用户登录" style={{ width: 400 }}>
      <Form
        name="login"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
```
