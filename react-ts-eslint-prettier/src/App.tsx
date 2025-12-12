// 引入React Router组件
import { Routes, Route, Link } from 'react-router-dom'
// 引入页面组件
import Home from './views/Home'
import About from './views/About'

/**
 * 根组件App
 * 包含应用的整体布局和路由配置
 */
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>React + TypeScript + ESLint + Prettier 示例项目</p>
      </footer>
    </div>
  )
}

export default App