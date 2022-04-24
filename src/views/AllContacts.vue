<template>
  <h3 class="text-center mt-3 pb-2 border-bottom">Все Контакты</h3>
  <Search />
  <Contacts />
</template>

<script>
import Contacts from '../components/Contacts'
import Search from '../components/Search'
export default {
  name: 'AllContacts',
  components: {
    Contacts,
    Search
  }
}
</script>

<style>

</style>