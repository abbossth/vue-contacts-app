<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: "ContactsApp",
  components: {
    Header
  }
}
</script>

<style>

</style>
