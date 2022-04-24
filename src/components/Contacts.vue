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
import { mapGetters } from 'vuex'

export default {
  name: "ContactsList",
  computed: mapGetters(['allContacts'])
}
</script>

<style>

</style>