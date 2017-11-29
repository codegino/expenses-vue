import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import axiosAuth from 'src/axios-auth'

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
        'user': context.getters['user/user'],
        'expenses': context.getters['expenses/expenses']
      }

      storage.setItem('data', JSON.stringify(data))
    },
    saveToRemote: (context, successCallback) => {
      let data = {
        'user': context.getters['user/user'],
        'expenses': context.getters['expenses/expenses']
      }

      axios.put('/gihooh.json', data)
        .then(res => {
          context.dispatch('saveToStorage')
          successCallback()
        }, error => console.log(error))
    },
    signUp: (context, payload) => {
      let data = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      }
      console.log('gino')

      axiosAuth.post('/signupNewUser?key=AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA', data)
        .then(res => {
          console.log(res)
        }, error => console.log(error))
    },
    retrieveFromRemote: (context, successCallback) => {
      axios.get('/gihooh.json')
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

