const state = {
  expenses: []
}

const getters = {
  expenses: state => {
    return state.expenses
  }
}

const mutations = {
  addExpenses: (state, payload) => {
    let id = payload.date.toLocaleDateString()
    console.log(id)

    console.log(payload)
    if (!state.expenses[id]) {
      state.expenses[id] = []
    }
    let item = {
      'name': payload.name,
      'price': payload.price
    }
    state.expenses[id].push(item)
  }
}

const actions = {
  addData: (context, payload) => {
    context.commit('addExpenses', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
