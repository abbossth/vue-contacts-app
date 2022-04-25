<template>
  <h1> Single Contact</h1>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SingleContact',
  methods: {
    ...mapActions(['fetchSingleContact'])
  },
  computed: mapGetters(['allContacts']),
  created () {
    console.log("Created");
    this.fetchSingleContact()
  }
}
</script>

<style>

</style>