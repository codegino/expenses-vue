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
        context.state.auth.idToken = data.idToken
        context.state.auth.userId = data.userId
        context.state.expenses.expenses = data.expenses
      } else {
        router.replace('/login')
      }
    },
    saveToStorage: context => {
      var storage = window.localStorage
      let data = {
        'user': context.getters['user/user'],
        'expenses': context.getters['expenses/expenses'],
        'userId': context.getters['auth/userId'],
        'idToken': context.getters['auth/idToken']
      }

      storage.setItem('data', JSON.stringify(data))
    },
    saveToRemote: (context, successCallback) => {
      let uid = context.getters['auth/userId']

      let data = {
        'user': context.getters['user/user'],
        'expenses': context.getters['expenses/expenses']
      }

      axios.put('/users/' + uid + '.json', data)
        .then(res => {
          context.dispatch('saveToStorage')
          successCallback()
        }, error => console.log(error))
    },

    retrieveFromRemote: (context, successCallback) => {
      let uid = context.getters['auth/userId']

      axios.get('/users/' + uid + '.json')
        .then(res => {
          context.commit('expenses/expenses', res.data.expenses)
          context.commit('user/updateUser', res.data.user)
          successCallback()
        })
        .catch(error => {
          console.log(error)
          console.log(axios)
        })
    }
  }
})

