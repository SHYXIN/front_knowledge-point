<template>
  <div class="hello-greeting">
    <h2>👋 你好！</h2>
    <p class="current-time">现在的时间是：{{ formattedTime }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloGreeting',
  data() {
    return {
      currentTime: new Date()
    }
  },
  computed: {
    formattedTime() {
      return this.currentTime.toLocaleString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
  },
  mounted() {
    // 每秒更新一次时间
    this.timer = setInterval(() => {
      this.currentTime = new Date()
    }, 1000)
  },
  beforeDestroy() {
    // 清理定时器
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.hello-greeting {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f0f8ff;
  border-radius: 8px;
}

.current-time {
  font-size: 1.1rem;
  color: #666;
  margin-top: 0.5rem;
}
</style>