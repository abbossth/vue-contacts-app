<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand text-uppercase" href="#">Contacts</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Contacts List <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <a href="#" class="btn btn-primary">New Contact</a>
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