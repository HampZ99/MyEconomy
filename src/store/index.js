import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
 import VuexPersistence from 'vuex-persist'
=======
import VuexPersistence from 'vuex-persist'
>>>>>>> 0f03f8d8e92c6388f9b6d2b3a8bbf98adf22d934

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenses: []
  },
  mutations: {
    addExpense(state, expense) {
      state.expenses.push(expense)
    }
  },
  actions: {},
  modules: {},
<<<<<<< HEAD
 plugins: [new VuexPersistence().plugin]
=======
  plugins: [new VuexPersistence().plugin]
>>>>>>> 0f03f8d8e92c6388f9b6d2b3a8bbf98adf22d934
})
