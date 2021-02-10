import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import moment from 'moment'
import Login from '../views/Login.vue'
import Stocks from '../views/Stocks.vue'
import History from '../views/History.vue'

Vue.prototype.moment = moment
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Stocks',
    name: 'Stocks',
    component: Stocks
  },
  {
    path: '/History',
    name: 'History',
    component: History
  }
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
