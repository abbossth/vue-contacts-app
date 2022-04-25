<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text bg-white">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <input type="text" @input="search(searched)" class="form-control" v-model="searched" placeholder="Поиск по именам">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchContact',
  data() {
    return {
      searched: ''
    }
  },
  computed: mapGetters(['allContacts']),
  methods: {
    search(item) {
      for (let contact of this.allContacts) { 
        console.log(contact.name.toLowerCase());
      }
    }
  }
}
</script>

<style>

</style>