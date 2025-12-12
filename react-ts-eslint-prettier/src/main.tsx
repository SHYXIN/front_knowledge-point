// 引入React核心库
import React from 'react'
// 引入React DOM渲染器
import ReactDOM from 'react-dom/client'
// 引入根组件
import App from './App.tsx'
// 引入React Router的BrowserRouter组件
import { BrowserRouter } from 'react-router-dom'
// 引入全局样式
import './index.css'

// 创建React根元素并渲染应用
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* React严格模式，用于检测潜在问题 */}
    <BrowserRouter> {/* 路由容器，使用HTML5 History API */}
      <App /> {/* 渲染根组件 */}
    </BrowserRouter>
  </React.StrictMode>,
)