<template>
  <h3 class="text-center mt-3 pb-2 border-bottom">Изменить Контакт</h3>
  <form @submit="update" class="w-50 m-auto">
    <div class="form-group">
      <label for="name">Имя</label>
      <input
      type="text" class="form-control"
      id="name" v-model="name">
    </div>
    <div class="form-group">
      <label for="phoneInput">Тел</label>
      <div class="d-flex align-items-center" v-for="(input,index) in phones" :key="`phone`+ index">
        <input
          v-model="input.phone"
          type="tel" class="form-control mt-2"
          id="phoneInput" placeholder="+998917234567">
        <a v-if="index!=0"
          class="fas fa-minus text-danger mx-1"
          @click="deleteField(index, phones)">
        </a>
      </div>
      <button
        @click="addField(this.phones)" 
        class="btn btn-light mt-1"
        type="button">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="form-group">
      <label for="emailInput">Email</label>
      <div class="d-flex align-items-center" v-for="(input,index) in emails" :key="`email`+ index">
        <input
          v-model="input.email" 
          type="email" class="form-control mt-2"
          id="emailInput" 
          placeholder="farkhod@gmail.com">
        <a v-if="index!=0"
          class="fas fa-minus text-danger mx-1"
          @click="deleteField(index, emails)">
        </a>
      </div>
      <button
        @click="addField(this.emails)" 
        class="btn btn-light mt-1"
        type="button">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="form-group">
      <label for="addressInput">Address</label>
      <div class="d-flex align-items-center" v-for="(input,index) in addresses" :key="`address`+ index">
        <input
          v-model="input.address" 
          type="text" class="form-control mt-2"
          id="addressInput" 
          placeholder="Ташкент, Узбекистан">
        <a v-if="index!=0"
          class="fas fa-minus text-danger mx-1"
          @click="deleteField(index, addresses)">
        </a>
      </div>
      <button
        @click="addField(this.addresses)" 
        class="btn btn-light mt-1"
        type="button">
        <i class="fas fa-plus"></i>
      </button>
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
      phones: [],
      emails: [],
      address: []
    }
  },
  methods: {
    ...mapActions(['fetchContacts','updateContact']),
    update(e) {
      e.preventDefault()
      let upd = {
        id: this.id,
        name: this.name,
        phones: this.phones,
        emails: this.emails,
        addresses: this.addresses
      }
      // console.log(upd)
      this.updateContact(upd)
    },
    addField(arr) {
      arr.push({})
    },
    deleteField(index, arr) {
      arr.splice(index, 1)
    }
  },
  computed: {
    ...mapGetters(['allContacts']),
  },
  created() {
    this.fetchContacts()
    for (let contact of this.allContacts) {
      if (this.id == contact.id) {
        this.name = contact.name,
        this.phones = contact.phones,
        this.emails = contact.emails,
        this.addresses = contact.addresses
      }
    }
  },
}
</script>

<style>

</style>