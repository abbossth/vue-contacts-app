<template>
  <div class="list-group">
    <a 
    v-for="contact in allContacts"
    :key="contact.id" 
    class="list-group-item list-group-item-action">
    {{ contact.name}}
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "ContactsList",
  methods: {
    ...mapActions(['fetchContacts'])
  },
  computed: mapGetters(['allContacts']),
  created() {
    this.fetchContacts()
  }
}
</script>

<style>

</style>