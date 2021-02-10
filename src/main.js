import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

<<<<<<< HEAD
import { BootstrapVue, BootstrapVueIcons,IconsPlugin } from 'bootstrap-vue'

=======
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
>>>>>>> 72c72700a4fa62bc4f915e026455bdd443f07f2d
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
