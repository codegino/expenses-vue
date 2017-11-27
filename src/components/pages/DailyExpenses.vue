<template>
  <div class="container">
    <h1>Expenses</h1>
    <h2 v-for="(dailyExpenses, index) in monthlyExpenses">
      <h3>{{index}}</h3>
      <!--<h4 v-for="expenses in dailyExpenses.items">{{expenses.name}}: P{{expenses.price}}</h4>-->
    </h2>
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
      }
    },
    components: {
      AddNewItem
    },
    methods: {
      addEntry () {
        let newItem = {
          name: this.name,
          date: this.date,
          price: this.price
        }
        this.$store.dispatch('expenses/addData', newItem)
        this.$store.dispatch('saveToStorage')
      }
    }
  }
</script>
