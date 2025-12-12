// 引入React Hooks
import { useState, useEffect } from 'react'
// 引入自定义组件
import Greeting from '../components/Greeting'
// 引入API请求函数
import { fetchApiData } from '../api'

/**
 * 首页组件
 * 展示React + TypeScript项目的基本功能
 */
const Home = () => {
  // 状态管理
  const [loading, setLoading] = useState(false) // 加载状态
  const [error, setError] = useState<string | null>(null) // 错误信息
  const [data, setData] = useState<any>(null) // API返回数据
  const [greetingName, setGreetingName] = useState('React') // 问候名称

  // 生命周期钩子 - 组件挂载后执行
  useEffect(() => {
    console.log('首页组件已挂载')

    // 组件卸载时清理
    return () => {
      console.log('首页组件已卸载')
    }
  }, [])

  // API 请求函数
  const handleFetchData = async () => {
    setLoading(true)
    setError(null)
    setData(null)

    try {
      const result = await fetchApiData()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生了未知错误')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>首页</h1>
      <p>欢迎来到 React + TypeScript + ESLint + Prettier 示例项目！</p>

      {/* 使用自定义组件 */}
      <Greeting name={greetingName} />

      {/* API 请求示例 */}
      <div className="api-example">
        <h2>API请求示例</h2>
        <button onClick={handleFetchData} disabled={loading}>
          {loading ? '加载中...' : '获取数据'}
        </button>

        {error && <div className="error">{error}</div>}

        {data && (
          <div className="data">
            <h3>来自API的数据：</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home