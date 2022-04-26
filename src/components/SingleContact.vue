<template>
  <p> <b>Name: </b> {{ contact.name}}</p>
  <p><b>Id: </b> {{ contact.id }}</p>
  <div>
    <b>Phone: </b>
    <div v-for="phone in contact.phone" :key="phone">
      {{ phone }}
    </div>
  </div>
  <div>
    <b>Email: </b>
    <div v-for="email in contact.email" :key="email">
      {{ email }}
    </div>
  </div>
  <router-link :to="'/updateContact/' + contact.id">
    <span class="fas fa-pen"></span>
  </router-link>
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
  },
  emits: ['updateData']
}
</script>

<style>

</style>