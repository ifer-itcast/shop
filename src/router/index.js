import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home
  }]
})

router.beforeEach((to, from, next) => {
  // to: 将要访问的路径
  // from: 从哪个路径过来的
  // 如果访问的是登录页，直接放行
  if (to.path === '/login') return next()
  // 如果不是登录页，从本地获取 token
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果没有 token 则跳转到登录
  if (!tokenStr) return next('/login')
  // 有的话放行
  next()
})

export default router
