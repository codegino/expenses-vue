import axios from 'src/axios-auth'

const state = {
  idToken: null,
  userId: null
}

const getters = {
  idToken (state) {
    return state.idToken
  },
  userId (state) {
    return state.userId
  }
}

const mutations = {
  authUser (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  }
}

const actions = {
  signUp ({commit, dispatch}, auth) {
    axios.post('/signupNewUser?key=AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA', auth.data)
      .then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        dispatch('login', {data: auth.data, callback: () => {}})
        auth.callback()
      }, error => console.log(error))
  },
  login ({commit}, auth) {
    axios.post('/verifyPassword?key=AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA', auth.data)
      .then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        auth.callback()
      }, error => console.log(error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
