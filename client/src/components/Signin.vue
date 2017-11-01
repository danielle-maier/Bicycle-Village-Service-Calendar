<template>
  <section class="section">
    <h1>Welcome</h1>
    <br>
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
      </div
      <p>New Users please click the sign up link above</p>
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
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.signInForm.email,
          password: this.signInForm.password
        })
      }
      fetch(`${url}/signin`, settings)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        location.href = '/'
      })
    }
  }
}
</script>
<style>
  .section {
    background-color: #232323;
    color: white;
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
</style>
