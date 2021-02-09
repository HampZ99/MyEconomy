import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import moment from 'moment'
import Login from '../views/Login.vue'
<<<<<<< HEAD
import Valuta from '../views/Valuta.vue'
=======

Vue.prototype.moment = moment
>>>>>>> 306427770ccd57e1bf628e2a033cd5a7a0b921bf
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
    component : Login
  },
  {
    path: '/Valuta',
    name: 'Valuta',
    component: Valuta
  }
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
