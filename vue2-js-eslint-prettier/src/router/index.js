import Vue from 'vue'
import Router from 'vue-router'

// 懒加载组件
const HomeView = () => import('../views/HomeView.vue')
const AboutView = () => import('../views/AboutView.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})