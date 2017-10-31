import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.use(vueEventCalendar, {locale: 'en'})
Vue.use(Buefy)
Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
import navbar from './components/navbar'
import foot from './components/foot'

new Vue({
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-fluid">
        <router-view></router-view>
      </div>
    </section>
    <foot />
  </div>
  `,
  router,
  components: {
    navbar,
    foot
  }
}).$mount('#app')
