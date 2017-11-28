<template>
  <div class="container">
    <datepicker id="date"  v-model="displayedDate" class="col-xs-8" minimum-view="month" maximum-view="month"></datepicker>
    <template v-for="dailyExpenses in expenses">
      <b-badge variant="light" class="glyphicon-plus-sign"> {{ new Date(dailyExpenses.id).toDateString() }}
        <b-btn variant="success" @click="showModal(new Date(dailyExpenses.id))">+</b-btn>
      </b-badge>
      <template  v-for="(expenses, i) in dailyExpenses.items">
        <h6>
          {{expenses.name}}: P{{expenses.price}}
        </h6>
      </template>
    </template>
    <b-modal :ref="addItemModal" title="Enter something" @hide="cancel" hide-footer>
      <add-new-item @close-modal="closeModal"></add-new-item>
    </b-modal>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import AddNewItem from 'src/components/pages/AddNewItem.vue'
  import {addItemUsingModal} from 'src/mixins/addItemUsingModal'

  export default {
    components: {
      Datepicker,
      AddNewItem
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
      }
    },
    mixins: [addItemUsingModal]
  }
</script>
