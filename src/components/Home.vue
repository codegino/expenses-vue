<template>
  <!-- App -->
  <div class="container">
    <div class="row">
      <div class="col-xs-4 col-md-4">
        <router-link to="/expenses">Go to all expenses</router-link>
      </div>
      <div class="col-xs-4 col-md-4">
        <router-link to="/monthlyVIew">Monthly View</router-link>
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
    components: {
      'appUser': User
    }
  }
</script>

<style>
  body{
    padding-top: 30px;
  }
</style>
