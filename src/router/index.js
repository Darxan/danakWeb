import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/mywallet',
    name: 'mywallet',
    component: () => import('@/pages/MyWallet.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('@/views/ForgetPassword.vue')
  },
  {
    path: '/user-wallets',
    name: 'user_wallets',
    component: () => import('@/pages/UserWallets.vue')
  },
  {
    path: '/transaction/history',
    name: 'transaction_history',
    component: () => import('@/pages/TransactionHistory.vue')
  },
  {
    path: '/transaction/create',
    name: 'transaction_create',
    component: () => import('@/pages/TransactionCreate.vue')
  },
  {
    path: '/order/history',
    name: 'order_history',
    component: () => import('@/pages/OrderHistory.vue')
  },
  {
    path: '/refferal/order/history',
    name: 'refferal_order_history',
    component: () => import('@/pages/RefferalOrderHistory.vue')
  },
  {
    path: '/generate/link',
    name: 'generate_link',
    component: () => import('@/pages/GenerateLink.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
