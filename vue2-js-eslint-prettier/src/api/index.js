// 模拟API请求
export const fetchApiData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'API请求成功!',
        data: {
          title: 'Vue 2 + JavaScript + ESLint + Prettier',
          description: '这是一个使用Vue 2、JavaScript、ESLint和Prettier构建的项目示例',
          features: ['Vue 2', 'JavaScript', 'ESLint', 'Prettier', 'Vue Router 3']
        }
      })
    }, 1000)
  })
}

// 模拟API请求失败
export const fetchApiDataWithError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('API请求失败，这是一个模拟错误'))
    }, 1000)
  })
}