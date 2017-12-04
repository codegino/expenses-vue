<template>
  <div id="signin">
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
          <button type="submit">Submit</button>
        </div>
      </form>
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

      console.log('before')
      console.log(this.$store.getters['auth/idToken'])
      console.log(this.$store.getters['auth/userId'])
      console.log('before')

      let callback = () => {
        this.$store.dispatch('retrieveFromRemote', () => {})
        this.$store.dispatch('saveToStorage', () => {})
        this.$router.replace('/')
        console.log('after')
        console.log(this.$store.getters['auth/idToken'])
        console.log(this.$store.getters['auth/userId'])
        console.log('after')
      }

      this.$store.dispatch('auth/login', {data, callback})
    }
  }
}
</script>

<style scoped>
</style>
