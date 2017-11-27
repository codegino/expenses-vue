const state = {
  expenses: []
}

const getters = {
  expenses: state => {
    function compare (a, b) {
      if (a.id < b.id) { return -1 }
      if (a.id > b.id) { return 1 }
      return 0
    }

    state.expenses.sort(compare)
    return state.expenses
  }
}

const mutations = {
  addExpenses: (state, payload) => {
    let id = payload.date.toLocaleDateString()

    let contains = false

    for (var i in state.expenses) {
      if (state.expenses[i].id === id) {
        break
      }
    }

    let item = {
      'name': payload.name,
      'price': payload.price
    }

    if (!contains) {
      state.expenses.push({
        'id': id,
        items: [item]
      })
    } else {
      state.expenses[id].items.push(item)
    }
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
