<template>
  <div class="mt-2">
    <b>Phone: </b>
    <div v-for="phone in contact.phones" :key="phone">
      {{ phone.phone }}
    </div>
  </div>
  <div class="mt-2">
    <b>Email: </b>
    <div v-for="email in contact.emails" :key="email">
      {{ email.email }}
    </div>
  </div>
  <div class="mt-2">
    <b>Address: </b>
    <div v-for="address in contact.addresses" :key="address">
      {{ address.address }}
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