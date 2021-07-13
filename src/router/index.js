import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    meta: {requiresLogged: true},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/mywallet',
    name: 'mywallet',
    component: () => import('@/pages/MyWallet.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/profile/change',
    name: 'profile_change',
    component: () => import('@/pages/ProfileChange.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {requiresAuth: true},
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
    meta: {requiresAuth: true},
    component: () => import('@/pages/UserWallets.vue')
  },
  {
    path: '/transaction/history',
    meta: {requiresAuth: true},
    name: 'transaction_history',
    component: () => import('@/pages/TransactionHistory.vue')
  },
  {
    path: '/confirm/new/password/',
    name: 'confirm-new-password',
    component: () => import('@/pages/ConfirmNewPassword.vue')
  },
  {
    path: '/confirm/email/account/',
    name: 'confirm-email-account',
    component: () => import('@/pages/ConfirmEmailAccount.vue')
  },
  {
    path: '/resend/activation/code/',
    name: 'resend-activation-code',
    component: () => import('@/pages/ResendActivationCode.vue')
  },
  {
    path: '/transaction/create',
    name: 'transaction_create',
    meta: {requiresAuth: true},
    component: () => import('@/pages/TransactionCreate.vue')
  },
  {
    path: '/order/history',
    name: 'order_history',
    meta: {requiresAuth: true},
    component: () => import('@/pages/OrderHistory.vue')
  },
  {
    path: '/referal/list',
    name: "referal_list",
    component: () => import('@/pages/ReferalList.vue')
  },
  {
    path: '/refferal/order/history',
    name: 'refferal_order_history',
    meta: {requiresAuth: true},
    component: () => import('@/pages/RefferalOrderHistory.vue')
  },
  {
    path: '/generate/link',
    meta: {requiresAuth: true},
    name: 'generate_link',
    component: () => import('@/pages/GenerateLink.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  { path: '*', component:() => import('@/views/Home.vue')}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
