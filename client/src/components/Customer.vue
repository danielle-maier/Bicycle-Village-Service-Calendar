<template>
  <vue-event-calendar :events="demoEvents">
      <template slot-scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <span>Hi {{event.title}}</span><br>
          <span>Your service is scheduled for: </span><br>
          <span>{{  event.date  }}</span>
        </div>
      </template>
    </vue-event-calendar>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      demoEvents: [{
        date: '2017/11/7',
        title: 'Milo Aukerman - Milo@descendants.com',
        desc: '970-697-4832 - 1 Bike'
      }]
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
    font-size: 3.2em;
    text-align: center;
  }
</style>
