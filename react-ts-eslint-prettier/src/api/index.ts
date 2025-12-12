// API 请求示例
// 模拟从服务器获取数据
export const fetchApiData = async () => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // 模拟 API 响应数据
  return {
    id: 1,
    name: 'React API 示例',
    description: '这是 React + TypeScript 示例的模拟 API 响应数据',
    createdAt: new Date().toISOString(),
    features: [
      'React 18',
      'TypeScript',
      'ESLint',
      'Prettier',
      'React Router 6'
    ],
    version: '1.0.0'
  }
}

// 模拟错误请求
export const fetchApiDataWithError = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  throw new Error('从 API 获取数据失败')
}