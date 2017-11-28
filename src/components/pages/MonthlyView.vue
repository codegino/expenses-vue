<template>
  <div class="container">
    <datepicker id="date"  v-model="displayedDate" class="col-xs-8" minimum-view="month" maximum-view="month"></datepicker>
    <h1>{{ displayedDate }}</h1>
    <template v-for="dailyExpenses in expenses">
    </template>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'

  export default {
    components: {
      Datepicker
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
    }
  }
</script>
