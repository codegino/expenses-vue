<template>
  <div class="container">
    <div class="row">
      <b-input-group left="Date">
        <datepicker v-model="date" id="date" class="col-xs-8" placeholder="Please select a date"></datepicker>
      </b-input-group>
      <b-input-group left="Name">
        <b-form-input v-model="name" :class="{invalid: $v.name.$error}"
                      placeholder="Enter item name here" @input="$v.name.$touch()"></b-form-input>
      </b-input-group>
      <b-input-group left="Price: P" right=".00">
        <b-form-input type="number" v-model="price" :class="{invalid: $v.price.$error}"
                      placeholder="Enter price here" @input="$v.price.$touch()"></b-form-input>
      </b-input-group>
      <b-btn @click="addEntry" :disabled="$v.$invalid">Add</b-btn>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import { required, numeric, minValue } from 'vuelidate/lib/validators'

  export default {
    components: {
      Datepicker
    },
    validations: {
      name: {
        required
      },
      price: {
        required,
        numeric,
        minVal: minValue(0)
      }
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
        this.$store.dispatch('newItem/resetData')

        this.$v.$reset()
        this.$emit('close-modal')
      }
    }
  }
</script>

<style>
  .invalid {
    border: 1px solid red;
    background-color: #fff1ef;
  }
</style>
