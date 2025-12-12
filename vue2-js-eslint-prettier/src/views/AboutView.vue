<template>
  <div class="about-view">
    <h1>{{ pageTitle }}</h1>
    <div class="about-content">
      <p>这是一个使用 Vue 2、JavaScript、ESLint 和 Prettier 构建的项目示例。</p>
      
      <h2>主要特性</h2>
      <ul class="features">
        <li><strong>Vue 2</strong> - 使用选项式 API</li>
        <li><strong>JavaScript</strong> - 轻量级脚本语言</li>
        <li><strong>ESLint</strong> - 代码质量检查</li>
        <li><strong>Prettier</strong> - 代码格式化</li>
        <li><strong>Vue Router 3</strong> - 路由管理</li>
      </ul>
      
      <div class="lifecycle-demo">
        <h2>生命周期钩子演示</h2>
        <p>组件创建时间: {{ createdTime }}</p>
        <p>组件挂载时间: {{ mountedTime }}</p>
        <p v-if="updatedTime">最后更新时间: {{ updatedTime }}</p>
        <button @click="updateComponent">触发更新</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      pageTitle: '关于 - Vue 2 + JavaScript + ESLint + Prettier',
      createdTime: null,
      mountedTime: null,
      updatedTime: null,
      counter: 0
    }
  },
  created() {
    this.createdTime = new Date().toLocaleString('zh-CN')
    console.log('组件已创建', this.createdTime)
  },
  mounted() {
    this.mountedTime = new Date().toLocaleString('zh-CN')
    console.log('组件已挂载', this.mountedTime)
  },
  updated() {
    this.updatedTime = new Date().toLocaleString('zh-CN')
    console.log('组件已更新', this.updatedTime)
  },
  methods: {
    updateComponent() {
      this.counter++
      console.log('触发组件更新', this.counter)
    }
  }
}
</script>

<style scoped>
.about-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about-content {
  margin-top: 2rem;
  line-height: 1.6;
}

.features {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.features li {
  margin-bottom: 0.5rem;
}

.lifecycle-demo {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.lifecycle-demo button {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.lifecycle-demo button:hover {
  background-color: #1976d2;
}
</style>