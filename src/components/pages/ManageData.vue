<template>
  <div class="container">
    <b-alert :show="showAlert"
             variant="warning">
      {{alertMessage}}
    </b-alert>
    <b-btn @click="exportToServer">Export</b-btn>
    <b-btn @click="importFromServer">Import</b-btn>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        showAlert: false,
        alertMessage: ''
      }
    },
    methods: {
      importSuccessCallback () {
        this.showAlert = true
        this.alertMessage = 'Successfuly imported from server.'
        setTimeout(() => { this.showAlert = false }, 3000)
      },
      exportSuccessCallback () {
        this.showAlert = true
        this.alertMessage = 'Successfuly exported to server.'
        setTimeout(() => { this.showAlert = false }, 3000)
      },
      exportToServer () {
        this.$store.dispatch('saveToRemote', this.exportSuccessCallback)
      },
      importFromServer () {
        this.$store.dispatch('retrieveFromRemote', this.importSuccessCallback)
      }
    }
  }
</script>
