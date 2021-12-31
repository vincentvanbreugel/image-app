<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item" href="/">
        Image Storage
      </router-link>
    </div>
    <div class="navbar-menu main-menu">
      <div v-if="isLoggedIn" class="navbar-end">
        <router-link to="/" class="navbar-item">
          Gallery
        </router-link>
        <router-link to="/upload" class="navbar-item">
          Upload
        </router-link>
        <a @click="logout" class="navbar-item">
          Logout
        </a>
      </div>
      <div v-else class="navbar-end">
        <div class="navbar-item">
          <button @click="login" class="button is-primary login-button">
            Login
          </button>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'AppHeader',
   computed: {
     ...mapGetters(['isLoggedIn'])
   },
   methods: {
     ...mapActions(['login', 'logout']),
   }
}
</script>