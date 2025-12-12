// 引入React Hooks
import { useState, useEffect, useMemo } from 'react'

// 定义组件属性类型
interface GreetingProps {
  name: string // 问候对象名称
}

/**
 * 问候组件
 * 显示问候语和当前时间
 */
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // 状态管理 - 当前时间
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  // 计算属性 - 使用useMemo优化，仅当name变化时重新计算
  const message = useMemo(() => {
    return `你好，${name}！`
  }, [name])

  // 生命周期钩子 - 每秒更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    // 组件卸载时清理定时器
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="greeting">
      <h2>{message}</h2>
      <p>当前时间: {currentTime}</p>
    </div>
  )
}

export default Greeting