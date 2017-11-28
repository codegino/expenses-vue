export const addItemUsingModal = {
  data () {
    return {
      addItemModal: 'addItemModal'
    }
  },
  methods: {
    showModal (date) {
      this.$store.commit('newItem/date', date)
      this.$refs[this.addItemModal].show()
    },
    closeModal () {
      this.$refs[this.addItemModal].hide()
      this.$forceUpdate()
    },
    cancel () {
      this.$store.dispatch('newItem/resetData')
    }
  }
}
