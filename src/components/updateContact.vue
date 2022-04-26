<template>
  <form @submit="update" class="w-50 m-auto">
    <div class="form-group">
      <label for="name">Имя</label>
      <input
      type="text" class="form-control"
      id="name" v-model="name">
    </div>
    <button type="submit" class="btn btn-success">Изменить</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'updateContact',
  data() {
    return {
      id: this.$route.params.id,
      name: '',
    }
  },
  methods: {
    ...mapActions(['fetchContacts','updateContact']),
    update(e) {
      e.preventDefault()
      let upd = {
        id: this.id,
        name: this.name
      }
      // console.log(upd)
      this.updateContact(upd)
    },
  },
  computed: {
    ...mapGetters(['allContacts']),
  },
  created() {
    this.fetchContacts()
    for (let contact of this.allContacts) {
      if (this.id == contact.id) {
        this.name = contact.name
      }
    }
  },
}
</script>

<style>

</style>