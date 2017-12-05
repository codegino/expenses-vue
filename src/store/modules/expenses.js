const state = {
  selectedDate: new Date(),
  expenses: []
}

const getters = {
  expenses: state => {
    function compare (a, b) {
      if (new Date(a.id) > new Date(b.id)) { return -1 }
      if (new Date(a.id) < new Date(b.id)) { return 1 }
      return 0
    }

    state.expenses.sort(compare)
    return state.expenses
  },
  selectedDate: state => {
    return state.selectedDate
  },
  monthlyExpenses: state => {
    var expenses = state.expenses.filter(function (el) {
      let elDayMonthYear = el.id.split('/')
      let stateDayMongthYear = state.selectedDate.toLocaleDateString().split('/')

      return elDayMonthYear[0] === stateDayMongthYear[0] && elDayMonthYear[2] === stateDayMongthYear[2]
    })

    return expenses
  }
}

const mutations = {
  selectedDate: (state, payload) => {
    console.log(payload)
    state.selectedDate = payload
  },
  expenses: (state, payload) => {
    state.expenses = payload
  },
  addExpenses: (state, payload) => {
    let id = payload.date.toLocaleDateString()

    let contains = false

    let item = {
      'name': payload.name,
      'price': payload.price
    }

    for (var i in state.expenses) {
      if (state.expenses[i].id === id) {
        state.expenses[i].items.push(item)
        contains = true
        break
      }
    }

    if (!contains) {
      state.expenses.push({
        'id': id,
        items: [item]
      })
    }
  }
}

const actions = {
  addData: (context, payload) => {
    context.commit('addExpenses', payload)
  },
  clearData: ({commit}) => {
    commit('expenses', [])
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
