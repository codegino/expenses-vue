<template>
  <div id="signin" class="container">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Email </label>
          <input type="text" id="email" v-model="email">
        </div>
        <div class="input">
          <label for="password">Password: </label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="submit">
          <b-btn type="submit">Submit</b-btn>
        </div>
      </form>
      <hr>
    </div>
    <div class="col-xs-3 col-md-3">
      <b-btn @click="signUp">Sign up</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const data = {
        email: this.email,
        password: this.password
      }

      let callback = () => {
        this.$store.dispatch('saveToStorage', () => { console.log('Save to storage Success') })
        this.$store.dispatch('retrieveFromRemote', () => { console.log('Retrieve Success') })
        this.$router.replace('/')
      }

      this.$store.dispatch('auth/login', {data, callback})
    },
    signUp () {
      this.$router.replace('/signUp')
    }
  }
}
</script>

<style scoped>
</style>
