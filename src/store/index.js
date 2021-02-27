import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenses: []
  },
  mutations: {
    addExpense(state, expense) {
      state.expenses.push(Object.assign({}, expense))
    }
  },
  actions: {},
  modules: {},
  plugins: [new VuexPersistence().plugin]
})
