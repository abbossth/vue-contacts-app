<template>
  <form @submit="onSubmit"  class="w-50 m-auto">
    <div class="form-group">
      <label for="name">Имя</label>
      <input
      v-model="newContact.name" 
      type="text" class="form-control"
      id="name" placeholder="Фарход Азизов">
    </div>
    <div class="form-group">
      <label for="phoneInput">Тел</label>
      <div class="d-flex align-items-center" v-for="(input,index) in newContact.phones" :key="`phone`+ index">
        <input
          v-model="input.phone"
          type="tel" class="form-control mt-2"
          id="phoneInput" placeholder="+998917234567">
        <a v-if="index!=0"
          class="fas fa-minus text-danger mx-1"
          @click="deleteField(index, newContact.phones)">
        </a>
      </div>
      <button
        @click="addField(this.newContact.phones)" 
        class="btn btn-light mt-1"
        type="button">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="form-group">
      <label for="emailInput">Email</label>
      <div class="d-flex align-items-center" v-for="(input,index) in newContact.emails" :key="`email`+ index">
        <input
          v-model="input.email" 
          type="email" class="form-control mt-2"
          id="emailInput" 
          placeholder="farkhod@gmail.com">
        <a v-if="index!=0"
          class="fas fa-minus text-danger mx-1"
          @click="deleteField(index, newContact.emails)">
        </a>
      </div>
      <button
        @click="addField(this.newContact.emails)" 
        class="btn btn-light mt-1"
        type="button">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="form-group">
      <label for="addressInput">Address</label>
      <div class="d-flex align-items-center" v-for="(input,index) in newContact.addresses" :key="`address`+ index">
        <input
          v-model="input.address" 
          type="text" class="form-control mt-2"
          id="addressInput" 
          placeholder="Ташкент, Узбекистан">
        <a v-if="index!=0"
          class="fas fa-minus text-danger mx-1"
          @click="deleteField(index, newContact.addresses)">
        </a>
      </div>
      <button
        @click="addField(this.newContact.addresses)" 
        class="btn btn-light mt-1"
        type="button">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <button type="submit" class="btn btn-primary">Создать</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateContact',
  data() {
    return {
      newContact: {
        id: Math.floor(Math.random()*1000000),
        name: '',
        phones: [{phone: ''}],
        emails: [{email: ''}],
        addresses: [{address: ''}],
      }
    }
  },
  methods: {
    ...mapActions(['createNew']),
    onSubmit(e) {
      e.preventDefault()
      this.createNew(this.newContact)
    },
    addField(arr) {
      arr.push({})
    },
    deleteField(index, arr) {
      arr.splice(index, 1)
    }
  }
}
</script>
