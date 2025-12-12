<template>
  <div class="home">
    <h1>首页</h1>
    <p>欢迎来到 Vue3 + ESLint + Prettier 示例项目！</p>

    <!-- 使用自定义组件 -->
    <HelloGreeting name="Vue3" />

    <!-- API 请求示例 -->
    <div class="api-example">
      <h2>API 请求示例</h2>
      <button @click="fetchData" :disabled="loading">
        {{ loading ? '加载中...' : '获取数据' }}
      </button>

      <div v-if="error" class="error">
        {{ error }}
      </div>

      <div v-if="data" class="data">
        <h3>从 API 获取的数据：</h3>
        <pre>{{ JSON.stringify(data, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HelloGreeting from '../components/HelloGreeting.vue';
import { fetchApiData } from '../api';

// 定义状态
const loading = ref(false);
const error = ref(null);
const data = ref(null);

// 定义函数 - 获取 API 数据
const fetchData = async () => {
  loading.value = true;
  error.value = null;

  try {
    const result = await fetchApiData();
    data.value = result;
  } catch (err) {
    error.value = err.message || '发生未知错误';
  } finally {
    loading.value = false;
  }
};

// 生命周期钩子 - 组件挂载后执行
onMounted(() => {
  console.log('HomeView 组件已挂载');
});
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

.api-example {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #35495e;
}

button:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.error {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 4px;
}

.data {
  margin-top: 1rem;
}

pre {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
