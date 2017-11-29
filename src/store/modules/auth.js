import axios from 'src/axios-auth'

const state = {
  idToken: null,
  userId: null
}

const getters = {
}

const mutations = {
}

const actions = {
  signUp ({commit}, authData) {
    axios.post('/signupNewUser?key=AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA', authData)
      .then(res => {
        console.log(res)
      }, error => console.log(error))
  },
  login ({commit}, authData) {
    axios.post('/verifyPassword?key=AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA', authData)
      .then(res => {
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
