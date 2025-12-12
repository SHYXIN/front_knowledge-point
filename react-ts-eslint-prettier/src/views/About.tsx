// 引入React Hooks
import { useState, useEffect } from 'react'

/**
 * 关于页面组件
 * 展示React + TypeScript项目的特性和生命周期
 */
const About = () => {
  // 状态管理 - 计数状态
  const [count, setCount] = useState(0)

  // 生命周期钩子 - 组件挂载后执行
  useEffect(() => {
    console.log('关于页面组件已挂载')

    // 每秒更新计数
    const timer = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)

    // 组件卸载时清理定时器
    return () => {
      clearInterval(timer)
      console.log('关于页面组件已卸载')
    }
  }, [])

  // 生命周期钩子 - 当count变化时执行
  useEffect(() => {
    console.log('计数已更新:', count)
  }, [count])

  return (
    <div>
      <h1>关于页面</h1>
      <p>本页面演示了 React + TypeScript + ESLint + Prettier 的集成使用。</p>

      <div className="features">
        <h2>核心特性</h2>
        <ul>
          <li>React 18 与 Hooks</li>
          <li>TypeScript 类型安全</li>
          <li>ESLint 代码质量检查</li>
          <li>Prettier 一致的代码格式化</li>
          <li>React Router 6 路由管理</li>
          <li>API 请求处理</li>
        </ul>
      </div>

      {/* 生命周期钩子演示 */}
      <div className="lifecycle">
        <h2>生命周期演示</h2>
        <p>请查看控制台以查看生命周期钩子的执行情况。</p>
        <p>计数: {count}</p>
        <button onClick={() => setCount(0)}>重置计数</button>
      </div>
    </div>
  )
}

export default About