<template>
  <div class="container">
    <h1>
        Expenses
    </h1>
    <hr>
    <template v-for="(dailyExpenses, index) in monthlyExpenses">
      <h4>
        <b-badge variant="light" class="glyphicon-plus-sign"> {{ new Date(dailyExpenses.id).toDateString() }}
          <b-btn variant="success" @click="showModal(new Date(dailyExpenses.id))">+</b-btn>
        </b-badge>
      </h4>
      <template  v-for="(expenses, i) in dailyExpenses.items">
        <h6>
        <b-badge variant="light">{{expenses.name}}: P{{expenses.price}}
          <b-btn variant="danger" @click="removeItem(i, dailyExpenses.items, index)">-</b-btn>
        </b-badge>
        </h6>
      </template>
      <h4>Total: {{computeTotalForEachDay(dailyExpenses.items)}}</h4>
      <hr>
    </template>
    <h2 id="grandTotal">
      <b-badge>
        Grand Total: {{grandTotal}}
      </b-badge>
    </h2>
    <hr>
    <b-btn @click="showModal(new Date())">Add</b-btn>
    <b-modal ref="myModalRef" id="addDataModal" title="Enter something" @hide="cancel" hide-footer>
      <add-new-item @close-modal="closeModal"></add-new-item>
    </b-modal>
  </div>
</template>

<script>
  import AddNewItem from 'src/components/pages/AddNewItem.vue'

  export default{
    computed: {
      monthlyExpenses () {
        return this.$store.getters['expenses/expenses']
      },
      grandTotal () {
        let total = 0

        for (var i in this.monthlyExpenses) {
          total += this.computeTotalForEachDay(this.monthlyExpenses[i].items)
        }
        return total
      }
    },
    components: {
      AddNewItem
    },
    methods: {
      showModal (date) {
        this.$store.commit('newItem/date', date)
        this.$refs.myModalRef.show()
      },
      closeModal () {
        this.$refs.myModalRef.hide()
        this.$forceUpdate()
      },
      computeTotalForEachDay (expenses) {
        let total = 0
        for (let i = 0; i < expenses.length; i++) {
          total += parseInt(expenses[i].price)
        }
        return total
      },
      cancel () {
        this.$store.dispatch('newItem/resetData')
      },
      removeItem (dailyIndex, dailyExpenses, index) {
        dailyExpenses.splice(dailyIndex, 1)
        if (dailyExpenses.length === 0) {
          this.monthlyExpenses.splice(index, 1)
        }
        this.$store.dispatch('saveToStorage')
        this.$forceUpdate()
      },
      toDayString (num) {
        var weekday = new Array(7)
        weekday[0] = 'Sunday'
        weekday[1] = 'Monday'
        weekday[2] = 'Tuesday'
        weekday[3] = 'Wednesday'
        weekday[4] = 'Thursday'
        weekday[5] = 'Friday'
        weekday[6] = 'Saturday'

        return weekday[num]
      }
    }
  }
</script>

<style>
  #grandTotal{
    padding-bottom: 15px;
  }
</style>
