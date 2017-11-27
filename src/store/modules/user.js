const state = {
  user: {
    firstName: '',
    lastName: '',
    gender: ''
  }
}

const getters = {
  fullName: state => {
    let endearment = state.user.gender === 'M' ? 'Mr.' : 'Ms.'
    return endearment + ' ' + state.user.firstName + ' ' + state.user.lastName
  }
}

const mutations = {
  updateUser: (state, payload) => {
    state.user.firstName = payload.firstName
    state.user.lastName = payload.lastName
    state.user.gender = payload.gender
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
