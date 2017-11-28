export const remover = {
  methods: {
    removeItem (dailyIndex, dailyExpenses, index) {
      dailyExpenses.splice(dailyIndex, 1)
      if (dailyExpenses.length === 0) {
        this.monthlyExpenses.splice(index, 1)
      }
      this.$store.dispatch('saveToStorage')
      this.$forceUpdate()
    }
  }
}
