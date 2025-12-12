<template>
  <div class="about">
    <h1>关于页面</h1>
    <p>本页面演示了 Vue3 + ESLint + Prettier 的集成。</p>

    <div class="features">
      <h2>主要特性</h2>
      <ul>
        <li>Vue3 组合式 API 与 script setup</li>
        <li>JavaScript (无 TypeScript)</li>
        <li>ESLint 代码质量检查</li>
        <li>Prettier 一致的格式化</li>
        <li>Vue Router 路由管理</li>
        <li>API 请求处理</li>
      </ul>
    </div>

    <!-- 生命周期钩子演示 -->
    <div class="lifecycle">
      <h2>生命周期钩子演示</h2>
      <p>查看控制台以查看生命周期钩子的运行情况。</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated } from 'vue';

// 生命周期钩子演示
onMounted(() => {
  console.log('AboutView 组件已挂载');
});

onUpdated(() => {
  console.log('AboutView 组件已更新');
});

onUnmounted(() => {
  console.log('AboutView 组件已卸载');
});
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.features {
  margin-top: 2rem;
}

ul {
  list-style-type: disc;
  padding-left: 2rem;
}

li {
  margin-bottom: 0.5rem;
}

.lifecycle {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #e3f2fd;
  border-radius: 4px;
}
</style>
