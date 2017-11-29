import axios from 'src/axios-auth'

const state = {
  idToken: null,
  userId: null
}

const getters = {
  idToken (state) {
    return state.idToken
  }
}

const mutations = {
  authUser (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  }
}

const actions = {
  signUp ({commit}, authData) {
    axios.post('/signupNewUser?key=AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA', authData)
      .then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        console.log(res)
      }, error => console.log(error))
  },
  login ({commit}, authData) {
    axios.post('/verifyPassword?key=AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA', authData)
      .then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        console.log(res)
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
