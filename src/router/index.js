import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Login.vue')
// import Login from '../components/Login.vue'
const Home = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Home.vue')
// import Home from '../components/Home.vue'
const Welcome = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Welcome.vue')
// import Welcome from '../components/Welcome.vue'
const Users = () => import(/* webpackChunkName:"user" */ '../components/user/Users.vue')
// import Users from '../components/user/Users.vue'
const Rights = () => import(/* webpackChunkName:"power" */ '../components/power/Rights.vue')
// import Rights from '../components/power/Rights.vue'
const Roles = () => import(/* webpackChunkName:"power" */ '../components/power/Roles.vue')
// import Roles from '../components/power/Roles.vue'
const Cate = () => import(/* webpackChunkName:"goods" */ '../components/goods/Cate.vue')
// import Cate from '../components/goods/Cate.vue'
const Params = () => import(/* webpackChunkName:"goods" */ '../components/goods/Params.vue')
// import Params from '../components/goods/Params.vue'
const GoodsList = () => import(/* webpackChunkName:"goods" */ '../components/goods/List.vue')
// import GoodsList from '../components/goods/List.vue'
const Add = () => import(/* webpackChunkName:"goods" */ '../components/goods/Add.vue')
// import Add from '../components/goods/Add.vue'
const Order = () => import(/* webpackChunkName:"order" */ '../components/order/Order.vue')
// import Order from '../components/order/Order.vue'
const Report = () => import(/* webpackChunkName:"report" */ '../components/report/Report.vue')
// import Report from '../components/report/Report.vue'

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
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: GoodsList
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
    ]
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
