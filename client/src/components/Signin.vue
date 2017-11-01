<template>
  <section class="section">
    <h1 class="welcome">Welcome</h1>
    <br><br>
    <p class="please">Service Department Scheduler</p>
    <div class="container">
      <div class="box">
        <h2 class="title">Sign In</h2>
        <form @submit.prevent="signIn">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="signInForm.email" class="input" type="text" placeholder="Email">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="signInForm.password" class="input" type="password" placeholder="Password">
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <br><p class="please">New Users please click the sign up link above</p><br>
    </div>
  </section>
</template>

<script>
const url = 'https://bv-shop.herokuapp.com/api'

export default {
  name: 'signin',
  data() {
    return {
      signInForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      this.$router.push('/shop')

    }
  }
}
</script>
<style>
  .section {
    background-color: #232323;
    color: white;
  }
  .welcome {
    font-size: 3.2em;
    text-align: center;
  }
  .please {
    font-size: 1.6em;
    text-align: center;
    padding-bottom: 25px;
  }
</style>
