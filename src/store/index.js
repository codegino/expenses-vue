import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import user from './modules/user.js'
import newItem from './modules/newItem.js'
import expenses from './modules/expenses.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    expenses,
    user,
    newItem,
    auth
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
        'user': context.getters['user/user'],
        'expenses': context.getters['expenses/expenses']
      }

      storage.setItem('data', JSON.stringify(data))
    },
    saveToRemote: (context, successCallback) => {
      const token = context.getters['auth/idToken']

      let data = {
        'user': context.getters['user/user'],
        'expenses': context.getters['expenses/expenses']
      }

      console.log(data)

      axios.put('/sample.json?auth=' + token, data)
        .then(res => {
          context.dispatch('saveToStorage')
          successCallback()
        }, error => console.log(error))
    },

    retrieveFromRemote: (context, successCallback) => {
      const token = context.getters['auth/idToken']

      axios.get('/sample.json?auth=' + token)
        .then(res => {
          context.commit('expenses/expenses', res.data.expenses)
          context.commit('user/updateUser', res.data.user)
          context.dispatch('saveToStorage')
          successCallback()
        })
        .catch(error => console.log(error))
    }
  }
})

