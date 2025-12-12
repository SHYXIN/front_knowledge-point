module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // Vue3 相关规则
    'vue/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'error',
    
    // ESLint 核心规则
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    
    // 缩进规则（与 Prettier 保持一致）
    'indent': 'off',
    'vue/indent': 'off'
  }
}