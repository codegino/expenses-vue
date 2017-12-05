<template>
  <!-- App -->
  <div class="container">
    <div class="row">
      <div class="col-xs-3 col-md-3">
        <b-btn @click="signOut">Sign out</b-btn>
      </div>
      <hr>
      <div class="col-xs-3 col-md-3">
        <router-link to="/expenses">Go to all expenses</router-link>
      </div>
      <div class="col-xs-3 col-md-3">
        <router-link to="/monthlyVIew">Monthly View</router-link>
      </div>
      <div class="col-xs-3 col-md-3">
        <router-link to="/manageData">Manage Data</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>

  </div>
</template>

<script>
  import User from 'src/components/pages/User.vue'

  export default {
    created () {
      if (!this.$store.getters['auth/userId']) {
        this.$router.replace('/login')
      }
    },
    components: {
      'appUser': User
    },
    methods: {
      signOut () {
        this.$store.dispatch('auth/clearData')
        this.$store.dispatch('expenses/clearData')
        this.$store.dispatch('user/clearData')
        this.$store.dispatch('saveToStorage', () => { console.log('Logout successfuly') })
        this.$router.replace('/login')
      }
    }
  }
</script>

<style>
  body{
    padding-top: 30px;
  }
</style>
