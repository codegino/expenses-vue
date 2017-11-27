<template>
	<div class="container">
    <div class="page-header">
        <h1>About Page</h1>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h1>{{fullName}}</h1>
        <h2>The quick brown fox jumps over the lazy dog.</h2>
      </div>
    </div>
	</div>
</template>

<style scoped>
  .container{
    color: green;
  }
</style>

<script>
import $ from 'jquery'
import {mapGetters} from 'vuex'

export default{
  created: function () {
    var self = this
    $.getJSON('static/json/dummy.json', function (data) {
      self.name = data.name
    })
  },
  computed: {
    ...mapGetters(['fullName'])
  }
}
</script>
