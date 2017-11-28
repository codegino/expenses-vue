<template>
  <div class="container">
    <div class="row">
      <div class="date" @click="itemShown = !itemShown">
        <h5>
          {{ new Date(date).toDateString()}}: Total {{computeTotalForEachDay(items)}}
        </h5>
      </div>
      <div class="button-left">
        <button class="btn btn-primary" variant="success" @click="showModal(new Date(date))">+</button>
      </div>
    </div>
    <template class="items" v-for="item in items" v-if="itemShown">
      <div class="row item-container">
        <span class="item">
          <h5>{{item.name}} </h5>
        </span>
        <span class="price">
          <h4>P {{item.price}}</h4>
        </span>
      </div>
    </template>
    <b-modal :ref="addItemModal" title="Enter something" @hide="cancel" hide-footer>
      <add-new-item @close-modal="closeModal"></add-new-item>
    </b-modal>
  </div>
</template>

<script>
  import {computer} from 'src/mixins/computer'
  import {addItemUsingModal} from 'src/mixins/addItemUsingModal'
  import AddNewItem from 'src/components/pages/AddNewItem.vue'

  export default {
    data () {
      return {
        itemShown: false
      }
    },
    components: {
      AddNewItem
    },
    props: ['date', 'items', 'shown'],
    mixins: [computer, addItemUsingModal]
  }
</script>

<style scoped>
  .date{
    width: 90%;
    background-color: #f7f7f7;
    margin-bottom: 10px;
  }
  .button-left {
    width: 10%;
  }
  .items {
    width: 100%;
    background-color: #f7f7f7;
    color: #0b2e13;
  }

  .item-container {
    padding-bottom: 10px;
  }

  .item {
    width: 75%;
    background-color: #f7f6ff;
    padding-left: 10px;
  }
  .price {
    width: 25%;
    background-color: #a2d5ff;
    text-align: left;
    padding-left: 5px;
  }
</style>
