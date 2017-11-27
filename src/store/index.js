import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import newItem from './modules/newItem.js'
import expenses from './modules/expenses.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    expenses,
    user,
    newItem
  },
  actions: {
    loadData: (context, router) => {
      var storage = window.localStorage

      var data = JSON.parse(storage.getItem('data'))

      if (data) {
        context.state.user.user = data.user
        context.state.expenses.expenses = data.expenses
      } else {
        router.replace('/signUp')
      }
    },
    saveToStorage: context => {
      var storage = window.localStorage
      let data = {
        'user': context.state.user.user,
        'expenses': context.state.expenses
      }

      storage.setItem('data', JSON.stringify(data))
    }
  }
})

