<template>
  <vue-event-calendar :events="demoEvents">
      <template slot-scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <span>Customer: {{event.title}}</span><br>
          <span>{{event.desc}}</span>
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
        date: '2017/11/6',
        title: 'Ian MacKaye - IanMac@hotmail.com',
        desc: '720-678-2480 - 1 Bike'
      }, {
        date: '2017/11/6',
        title: 'J Mascis - JMac@yahoo.com',
        desc: '303-578-2823 - 1 Bike'
      }, {
        date: '2017/11/6',
        title: 'Henrey Rollins - BlackFlag@gmail.com',
        desc: '202-422-4943 - 1 Bike'
      }, {
        date: '2017/11/6',
        title: 'Thurston Moore - ThurstonM@yahoo.com',
        desc: '212-322-8530 - 1 Bike'
      }, {
        date: '2017/11/7',
        title: 'Matt Talbott - MTalbott@outlook.com',
        desc: '312-329-8943 - 1 Bike'
      }, {
        date: '2017/11/7',
        title: 'Milo Aukerman - Milo@descendants.com',
        desc: '970-697-4832 - 1 Bike'
      }, {
        date: '2017/11/7',
        title: 'Jim Lindberg - Jim@pennywisdom.com',
        desc: '310-304-0595 - 1 Bike'
      }]
    }
  }
}
</script>
