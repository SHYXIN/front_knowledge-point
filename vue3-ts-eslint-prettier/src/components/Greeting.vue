<template>
  <div class="greeting">
    <h2>{{ message }}</h2>
    <p>当前时间: {{ currentTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 定义组件属性
interface Props {
  name: string
}

const props = defineProps<Props>()

// 计算属性
const message = computed(() => `你好, ${props.name}!`)

// 响应式状态
const currentTime = ref(new Date().toLocaleTimeString())

// 定时器引用
let timer: number | null = null

// 生命周期钩子 - 组件挂载后执行
onMounted(() => {
  // 每秒更新时间
  timer = window.setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString()
  }, 1000)
})

// 生命周期钩子 - 组件卸载前执行
onUnmounted(() => {
  // 清除定时器
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.greeting {
  margin: 2rem 0;
  padding: 1rem;
  background-color: #42b883;
  color: white;
  border-radius: 4px;
}

h2 {
  margin-top: 0;
}
</style>