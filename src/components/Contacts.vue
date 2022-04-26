<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text bg-white">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <input type="text" class="form-control" v-model="searched" placeholder="Поиск по именам">
  </div> 
  <div id="accordion" v-if="isAvailable(allContacts)">
    <div class="card" v-for="contact in filteredContacts" :key="contact.id">
      <div class="card-header d-flex justify-content-between" id="headingOne" data-toggle="collapse" :data-target="'#'+contact.id" aria-expanded="true" aria-controls="collapseOne">
        <p class="mb-0 p-1">
          <span>
            {{ contact.name }}
          </span>
        </p>
      </div>
      <div :id="contact.id" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <SingleContact :contact="contact" />
        </div>  
      </div>
    </div>
  </div>
  <div class="alert alert-warning " v-else>
    Нет доступных контактов...
    <router-link to="/newContact" class="text-success">
      <span class="mx-1">Нажмите, чтобы создать новый</span>
      <i class="fas fa-plus"></i>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SingleContact from './SingleContact'
export default {
  name: "ContactsList",
  data() {
    return {
      searched: ''
    }
  },
  methods: {
    ...mapActions(['fetchContacts', 'deleteContact','fetchSingleContact']),
    isAvailable(list) {
      return list.length === 0 ? false : true 
    }
  },
  computed: {
    ...mapGetters(['allContacts']),
    filteredContacts: function() {
      return this.allContacts.filter((contact) => {
        return contact.name.toLowerCase().match(this.searched)
      })
    }
  },
  created() {
    this.fetchContacts()
  },
  components: {
    SingleContact
  }
}
</script>

<style>

</style>