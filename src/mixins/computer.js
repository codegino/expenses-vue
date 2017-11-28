export const computer = {
  methods: {
    computeTotalForEachDay (expenses) {
      let total = 0
      for (let i = 0; i < expenses.length; i++) {
        total += parseInt(expenses[i].price)
      }
      return total
    }
  }
}
