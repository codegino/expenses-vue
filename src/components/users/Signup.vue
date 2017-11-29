<template>
  <div class="container">
    <h1 class="page-header">Sign up</h1>
    <div class="input row">
        <label class="col-md-1 col-xs-4" for="firstName">first name</label>
        <input class="col-md-2 col-xs-7" type="text" id="firstName" v-model="firstName">
    </div>
    <div class="input row">
        <label class="col-md-1 col-xs-4" for="lastName">last name</label>
        <input class="col-md-2 col-xs-7" type="text" id="lastName" v-model="lastName">
    </div>
    <div class="input row">
        <label class="col-md-1 col-xs-4" for="gender">gender</label>
        <input class="col-md-1 col-xs-7" type="text" id="gender" v-model="gender">
    </div>
    <div class="input row">
      <label class="col-md-1 col-xs-4" for="username">username</label>
      <input class="col-md-2 col-xs-7" type="text" id="username" v-model="username">
    </div>
    <div class="input row">
      <label class="col-md-1 col-xs-4" for="password">password</label>
      <input class="col-md-2 col-xs-7" type="password" id="password" v-model="password">
    </div>
    <div class="input row">
      <label class="col-md-1 col-xs-4" for="repeat-password">repeat password</label>
      <input class="col-md-2 col-xs-7" type="password" id="repeat-password" v-model="password">
    </div>
    <button class="btn btn-primary" @click="updateUser">Submit</button>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        firstName: '',
        lastName: '',
        gender: '',
        username: '',
        password: ''
      }
    },
    methods: {
      updateUser () {
        let user = {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender
        }

        this.$store.commit('user/updateUser', user)
        this.$store.state.expenses.expenses = []
        this.$store.dispatch('saveToStorage')
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>
</style>
