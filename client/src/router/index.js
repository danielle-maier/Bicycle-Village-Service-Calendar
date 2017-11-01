import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Form from '@/components/Form'
import Shop from '@/components/Shop'
import Customer from '@/components/Customer'
import End from '@/components/End'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.use(Router)

const routes = [
  { path: '/', component: Signin },
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup },
  { path: '/shop', component: Shop },
  { path: '/form', component: Form },
  { path: '/customer', component: Customer },
  { path: '/end', component: End }
]
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
