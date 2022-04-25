<template>
  <div id="accordion">
    <div class="card" v-for="contact in allContacts" :key="contact.id">
      <div class="card-header d-flex justify-content-between" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <p class="mb-0 p-1">
          <span>
            {{ contact.name }}
          </span>
        </p>
      </div>
      <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <SingleContact :contact="contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SingleContact from './SingleContact'
export default {
  name: "ContactsList",
  methods: {
    ...mapActions(['fetchContacts', 'deleteContact','fetchSingleContact']),
  },
  computed: mapGetters(['allContacts']),
  created() {
    this.fetchContacts(),
    this.fetchSingleContact()
  },
  components: {
    SingleContact
  },
  emits: ['singleContactId']
}
</script>

<style>

</style>