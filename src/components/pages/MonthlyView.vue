<template>
  <div class="container">
    <h2>Select Month</h2><datepicker  v-model="displayedDate" class="col-xs-8" minimum-view="month" maximum-view="month"></datepicker>
    <hr>
    <template v-for="dailyExpenses in expenses">
        <daily-expenses :date="dailyExpenses.id" :items="dailyExpenses.items"></daily-expenses>
    </template>
    <b-modal :ref="addItemModal" title="Enter something" @hide="cancel" hide-footer>
      <add-new-item @close-modal="closeModal"></add-new-item>
    </b-modal>
    <hr>
    <h2>
      <b-badge>
        Grand Total: {{grandTotal}}
      </b-badge>
    </h2>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import {computer} from 'src/mixins/computer'
  import AddNewItem from 'src/components/pages/AddNewItem.vue'
  import DailyExpenses from 'src/components/pages/DailyView.vue'
  import {addItemUsingModal} from 'src/mixins/addItemUsingModal'

  export default {
    components: {
      Datepicker,
      AddNewItem,
      DailyExpenses
    },
    computed: {
      displayedDate: {
        get () {
          return this.$store.getters['expenses/selectedDate']
        },
        set (newValue) {
          this.$store.commit('expenses/selectedDate', newValue)
        }
      },
      expenses () {
        return this.$store.getters['expenses/monthlyExpenses']
      },
      grandTotal () {
        let total = 0

        for (var i in this.expenses) {
          total += this.computeTotalForEachDay(this.expenses[i].items)
        }
        return total
      }
    },
    mixins: [addItemUsingModal, computer]
  }
</script>
