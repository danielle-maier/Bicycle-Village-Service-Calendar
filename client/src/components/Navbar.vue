<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="../assets/logo.png" alt="BV" width="112" height="60">
        </router-link>
        <button class="button navbar-burger" :class="{ 'is-active': mobile }"
        @click="toggleBurger">
          <span>Sign In</span>
          <span>Sign Up</span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': mobile }">
        <div class="navbar-end">
          <router-link to="/signin" v-if="!isSignedIn" class="navbar-item" @click="toggleBurger">Sign In</router-link>
          <router-link to="/signup" v-if="!isSignedIn" class="navbar-item" @click="toggleBurger">Sign Up</router-link>
          <div v-if="isSignedIn" class="navbar-item">
            <a class="button is-dark" @click="toggleBurger, logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      mobile: false
    }
  },
  computed: {
    isSignedIn() {
      return localStorage.getItem('token') ? true : false
    }
  },
  methods: {
    toggleBurger() {
      this.mobile = !this.mobile
    },
    logout() {
      localStorage.removeItem('token')
      location.href = '/'
    }
  }
}
</script>
<style>
  .navbar {
    background-color: #232323;
    color: white;
  }
  a,
  a:link,
  a:active,
  a:visited,
  a:hover {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: grey;
    text-decoration: underline;
  }
</style>
