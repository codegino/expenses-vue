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

      console.log(data)

      this.$store.dispatch('auth/login', data)
    }
  }
}
</script>

<style scoped>
</style>
