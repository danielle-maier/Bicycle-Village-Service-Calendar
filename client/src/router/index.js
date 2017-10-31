import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Form from '@/components/Form'
import Shop from '@/components/Shop'
import Customer from '@/components/Customer'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.use(Router)

const routes = [
  { path: '/', component: Customer },
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup }
]
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
