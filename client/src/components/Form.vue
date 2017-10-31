<template>
  <section class='section'>
    <div class='container'>
      <div class='box'>
        <h2 class='title'>Schedule</h2>
        <form @submit.prevent='sendForm'>
          <div class='field'>
            <label class='label'>Name</label>
            <div class='control'>
              <input v-model='scheduleForm.name' class='input' type='text' placeholder='Name'>
            </div>
          </div>
          <div class='field'>
            <label class='label'>Email</label>
            <div class='control'>
              <input v-model='scheduleForm.email' class='input' type='email' placeholder='Email'>
            </div>
          </div>
          <div class='field'>
            <label class='label'>Phone Number</label>
            <div class='control'>
              <input v-model='scheduleForm.phone' class='input' type='tel' placeholder='Phone #'>
            </div>
          </div>
          <div class='field'>
            <label class='label'>Desired Service Date</label>
            <div class='control'>
              <input v-model='scheduleForm.date' class='input' type='date' placeholder='Date'>
            </div>
          </div>
          <div class='field'>
            <label class='label'>Number of bikes to service</label>
            <div class='control'>
              <input v-model='scheduleForm.bikes' class='input' type='number' placeholder='Number of Bikes'>
            </div>
          </div>
          <div class="field">
           <div class="control">
            <label class="checkbox">
           <input type="checkbox">I would like an Appointment reminder sent to the email above.
           </label>
          </div>
          </div>
          <div class='field is-grouped'>
            <div class='control'>
              <button class='button is-primary'>Submit</button>
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
  name: 'form',
  data() {
    return {
      scheduleForm: {
        name: '',
        email: '',
        phone: '',
        servicedate: '',
        bikes: '',
        contactme: ''
      }
    }
  },
  methods: {
    sendForm() {
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.scheduleForm.name,
          email: this.scheduleForm.email,
          phone: this.scheduleForm.phone,
          servicedate: this.scheduleForm.servicedate,
          bikes: this.servicedate.bikes,
          contactme: this.servicedate.servicedate
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
