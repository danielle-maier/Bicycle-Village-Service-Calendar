<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2 class="title">Sign In</h2>
        <form @submit.prevent="signIn">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="signInForm.email" class="input" type="text" placeholder="Email">
            </div>
            <!-- <p class="help is-success">This email is available</p> -->
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="signInForm.password" class="input" type="password" placeholder="Password">
            </div>
            <!-- <p class="help is-success">This username is available</p> -->
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
            <!-- <div class="control">
              <button class="button is-link">Cancel</button>
            </div> -->
          </div>
        </form>
      </div>
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
