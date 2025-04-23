/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 15:28:22
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 15:32:57
 * @FilePath: /FullStack/micro-frontend/micro-app-vap/src/router/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'

import Monorepo from '@/pages/monorepo'

// 页面组件
const Dashboard = () => <div>工作台页面</div>
const Plugins = () => <div>插件市场页面</div>
const Settings = () => <div>设置页面</div>
// const Command = () => <div>包管理页面</div>;

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="plugins" element={<Plugins />} />
        <Route path="settings" element={<Settings />} />
        <Route path="command" element={<Monorepo />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
