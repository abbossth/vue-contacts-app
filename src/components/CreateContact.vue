<template>
  <form @submit="onSubmit"  class="w-50 m-auto">
    <div class="form-group">
      <label for="name">Имя</label>
      <input
      v-model="name" 
      type="text" class="form-control"
      id="name" placeholder="Фарход Азизов">
    </div>
    <button type="submit" class="btn btn-primary" @click="creating()">Создать</button>
  </form>
  <p v-if="isCreated" class="alert alert-success my-3 w-50 mx-auto">Контакт создан успешно!</p>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateContact',
  data() {
    return {
      name: '',
      isCreated: false
    }
  },
  methods: {
    ...mapActions(['createNew']),
    onSubmit(e) {
      e.preventDefault()
      this.createNew(this.name)
    },
    creating() {
      this.isCreated = !this.isCreated
      setTimeout(() => this.isCreated = !this.isCreated, 3000)
    }
  }
}
</script>
