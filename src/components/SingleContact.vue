<template>
  <p> <b>Name: </b> {{ contact.name}}</p>
  <p><b>ID: </b> {{ contact.id }}</p>
  <span class="fas fa-trash mx-3" @click="deleteContact(contact.id)"></span>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'singleContact',
  props: {
    contact: Object
  },
  methods: {
    ...mapActions(['deleteContact'])
  }
}
</script>

<style>

</style>