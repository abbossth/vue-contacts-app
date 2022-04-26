<template>
  <div class="mb-2">
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
  <div class="text-right">
    <!-- Update -->
    <router-link 
    :to="'/updateContact/' + contact.id">
      <span class="fas fa-pen text-muted"></span>
    </router-link>
    <!-- Delete -->
    <router-link 
    :to="'/'+contact.id"
    class="fas fa-trash mx-3 text-muted" 
    @click="deleteContact(contact.id)">
    </router-link>
  </div>
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