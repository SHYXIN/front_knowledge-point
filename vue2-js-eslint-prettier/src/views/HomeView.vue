<template>
  <div class="home-view">
    <h1>{{ pageTitle }}</h1>
    <HelloGreeting />
    <div class="api-section">
      <h2>API请求示例</h2>
      <div class="api-controls">
        <button @click="handleFetchApi" :disabled="loading">
          {{ loading ? '加载中...' : '请求API数据' }}
        </button>
        <button @click="handleFetchApiWithError" :disabled="loading">
          {{ loading ? '加载中...' : '测试错误处理' }}
        </button>
        <button @click="clearData" :disabled="loading">
          清除数据
        </button>
      </div>
      
      <div v-if="loading" class="loading">
        <p>⏳ 数据加载中...</p>
      </div>
      
      <div v-else-if="apiError" class="api-error">
        <p>❌ {{ apiError }}</p>
      </div>
      
      <div v-else-if="apiData" class="api-data">
        <h3>{{ apiData.data.title }}</h3>
        <p>{{ apiData.data.description }}</p>
        <ul class="features">
          <li v-for="(feature, index) in apiData.data.features" :key="index">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HelloGreeting from '../components/HelloGreeting.vue'
import { fetchApiData, fetchApiDataWithError } from '../api/index.js'

export default {
  name: 'HomeView',
  components: {
    HelloGreeting
  },
  data() {
    return {
      pageTitle: '首页 - Vue 2 + JavaScript + ESLint + Prettier',
      apiData: null,
      apiError: null,
      loading: false
    }
  },
  methods: {
    async handleFetchApi() {
      try {
        this.loading = true
        this.apiError = null
        this.apiData = await fetchApiData()
      } catch (error) {
        this.apiError = error.message
        this.apiData = null
      } finally {
        this.loading = false
      }
    },
    async handleFetchApiWithError() {
      try {
        this.loading = true
        this.apiError = null
        this.apiData = await fetchApiDataWithError()
      } catch (error) {
        this.apiError = error.message
        this.apiData = null
      } finally {
        this.loading = false
      }
    },
    clearData() {
      this.apiData = null
      this.apiError = null
    }
  }
}
</script>

<style scoped>
.home-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.api-section {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.api-controls {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

button {
  padding: 0.8rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background-color: #3aa876;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.loading, .api-error, .api-data {
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.loading {
  background-color: #e3f2fd;
  color: #1976d2;
}

.api-error {
  background-color: #ffebee;
  color: #d32f2f;
}

.api-data {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.features {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.features li {
  margin-bottom: 0.5rem;
}
</style>