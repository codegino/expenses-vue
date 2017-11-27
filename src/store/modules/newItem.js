const state = {
  date: '',
  name: '',
  price: ''
}

const getters = {
  date: state => {
    return state.date
  },
  name: state => {
    return state.name
  },
  price: state => {
    return state.price
  }
}

const mutations = {
  name: (state, payload) => {
    state.name = payload
  },
  price: (state, payload) => {
    state.price = payload
  },
  date: (state, payload) => {
    state.date = payload
  }
}

const actions = {
  resetData: (context) => {
    context.commit('name', '')
    context.commit('price', '')
    context.commit('date', null)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
