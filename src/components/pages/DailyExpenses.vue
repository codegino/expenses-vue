<template>
  <div class="container">
    <h1>Expenses</h1>
    <template v-for="(dailyExpenses, index) in monthlyExpenses">
      <h5>{{index}}</h5>
      <p v-for="expenses in dailyExpenses">{{expenses.name}}: P{{expenses.price}}</p>
      <h4>Total: {{computeTotalForEachDay(dailyExpenses)}}</h4>
      <hr>
    </template>
    <h3>Grand Total: {{grandTotal}}</h3>
    <b-btn v-b-modal.addDataModal>Add</b-btn>
    <b-modal id="addDataModal" title="Enter something" @ok="addEntry" ok-only>
      <add-new-item></add-new-item>
    </b-modal>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import AddNewItem from 'src/components/pages/AddNewItem.vue'

  export default{
    computed: {
      ...mapGetters('newItem', ['name', 'date', 'price']),
      monthlyExpenses () {
        return this.$store.getters['expenses/expenses']
      },
      grandTotal () {
        let total = 0

        for (var i in this.monthlyExpenses) {
          total += this.computeTotalForEachDay(this.monthlyExpenses[i])
        }
        return total
      }
    },
    components: {
      AddNewItem
    },
    methods: {
      computeTotalForEachDay (expenses) {
        let total = 0
        for (let i = 0; i < expenses.length; i++) {
          total += parseInt(expenses[i].price)
        }
        return total
      },
      addEntry () {
        let newItem = {
          name: this.name,
          date: this.date,
          price: this.price
        }
        this.$store.dispatch('expenses/addData', newItem)
        this.$store.dispatch('saveToStorage')
        this.$store.dispatch('newItem/resetData')
        this.$forceUpdate()
      }
    }
  }
</script>
