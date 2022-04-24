<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand text-uppercase font-weight-bold" href="#">Контакты</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Все Контакты</router-link>
        </li>
      </ul>
      <router-link class="btn btn-outline-success" to="/newContact">Новый Контакт</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNavbar'
}
</script>

<style>

</style>