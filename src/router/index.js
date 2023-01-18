import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/auctionSchedule',
    name: 'auctionSchedule',
    component: () => import(/* webpackChunkName: "auctionSchedule" */ '../views/Auction-Schedule.vue')
  },
  {
    path: '/auctionDetails',
    name: 'auctionDetails',
    component: () => import(/* webpackChunkName: "auctionDetails" */ '../views/Auction-details.vue')
  },
  {
    path: '/onlineAuction',
    name: 'onlineAuction',
    component: () => import(/* webpackChunkName: "onlineAuction" */ '../views/Online-Auction.vue')
  },
  {
    path: '/results',
    name: 'results',
    component: () => import(/* webpackChunkName: "results" */ '../views/Results.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
