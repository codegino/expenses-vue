<template>
  <div class="container">
    <div class="row">
      <b-input-group left="Date">
        <datepicker v-model="date" id="date" class="col-xs-8" placeholder="Please select a date"></datepicker>
      </b-input-group>
      <b-input-group left="Name">
        <b-form-input v-model="name" placeholder="Enter item name here"></b-form-input>
      </b-input-group>
      <b-input-group left="Price: P" right=".00">
        <b-form-input v-model="price" placeholder="Enter price here"></b-form-input>
      </b-input-group>
    </div>
    <h5>{{name}} : {{price}} : {{date}}</h5>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'

  export default {
    components: {
      Datepicker
    },
    computed: {
      name: {
        get () {
          return this.$store.getters['newItem/name']
        },
        set (newValue) {
          this.$store.commit('newItem/name', newValue)
        }
      },
      price: {
        get () {
          return this.$store.getters['newItem/price']
        },
        set (newValue) {
          this.$store.commit('newItem/price', newValue)
        }
      },
      date: {
        get () {
          return this.$store.getters['newItem/date']
        },
        set (newValue) {
          this.$store.commit('newItem/date', newValue)
        }
      }
    }
  }
</script>
