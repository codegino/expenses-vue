<template>
  <div class="container">
    <h1>Expenses</h1>
    <template v-for="(dailyExpenses, index) in monthlyExpenses">
      <h5 class="glyphicon-plus-sign">{{index}}
        <a href="#"><span @click="showModal(new Date(index))">+</span></a>
      </h5>
      <p v-for="expenses in dailyExpenses">{{expenses.name}}: P{{expenses.price}}</p>
      <h4>Total: {{computeTotalForEachDay(dailyExpenses)}}</h4>
      <hr>
    </template>
    <h3>Grand Total: {{grandTotal}}</h3>
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
          total += this.computeTotalForEachDay(this.monthlyExpenses[i])
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
        this.$forceUpdate()
        this.$refs.myModalRef.hide()
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
      }
    }
  }
</script>
