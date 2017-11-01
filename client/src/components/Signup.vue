<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2 class="title">Sign Up</h2>
        <form @submit.prevent="signUp">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="signUpForm.email" class="input" type="email" placeholder="Email">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="signUpForm.password" class="input" type="password" placeholder="Password">
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
const url = 'https://bv-shop.herokuapp.com/api'

export default {
  name: 'signup',
  data() {
    return {
      signUpForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signUp() {
      this.$router.push('/form')
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.signUpForm.email,
          password: this.signUpForm.password
        })
      }
      fetch(`${url}/signup`, settings)
      .then(response => response.json())
      .then(response => {
        location.href = '/form'
      })
    }
  }
}
</script>
<style>
 .section {
   background-color: #232323;
   color: white;
   padding-bottom: 150px;
 }

</style>
