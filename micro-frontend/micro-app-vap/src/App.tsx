/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-14 22:39:20
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 15:28:33
 * @FilePath: /FullStack/micro-frontend/micro-app-vap/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import AppRouter from './router'

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <AppRouter />
      </Layout>
    </Router>
  )
}

export default App
