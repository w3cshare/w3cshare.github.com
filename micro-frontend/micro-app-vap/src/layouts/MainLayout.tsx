/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-14 22:39:20
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 15:26:32
 * @FilePath: /FullStack/micro-frontend/micro-app-vap/src/layouts/MainLayout.tsx
 * @Description:
 */
import { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: '工作台',
    },
    {
      key: 'plugins',
      icon: <AppstoreOutlined />,
      label: '插件市场',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '设置',
    },
    {
      key: 'command',
      icon: <SettingOutlined />,
      label: '包管理',
    },
  ]

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          items={menuItems}
          onClick={({ key }) => navigate(`/${key}`)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={() => setCollapsed(!collapsed)} />
          )}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            minHeight: 280,
            background: '#fff',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
