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

      let callback = () => {
        this.$store.dispatch('saveToStorage', () => { console.log('Save to storage Success') })
        this.$store.dispatch('retrieveFromRemote', () => { console.log('Retrieve Success') })
        this.$router.replace('/')
      }

      this.$store.dispatch('auth/login', {data, callback})
    }
  }
}
</script>

<style scoped>
</style>
