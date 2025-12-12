<template>
  <div class="app">
    <header class="app-header">
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="app-footer">
      <p>Vue3 + TypeScript + ESLint + Prettier 示例</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// App.vue - 根组件
// 使用 script setup 语法，这是 Vue3 的推荐写法
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.app-header {
  background-color: #42b883;
  color: white;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  flex: 1;
  padding: 2rem;
}

.app-footer {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}
</style>