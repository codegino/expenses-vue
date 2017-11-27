<template>
  <div class="container">
    <h1>Hello {{fullName}}</h1>
  </div>
</template>

<script>
 export default{
   computed: {
     fullName () {
       return this.$store.getters['user/fullName']
     }
   }
 }
</script>
