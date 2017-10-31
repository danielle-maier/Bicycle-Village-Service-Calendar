import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Form from '@/components/Form'
import Shop from '@/components/Shop'
import Customer from '@/components/Customer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Form
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
    // ,
    // {
    //   path: '/signup',
    //   name: 'Signup',
    //   component: Signup
    // }
    // ,
    // {
    //   path: '/shop',
    //   name: 'Shop',
    //   component: Signup
    // },
    // {
    //   path: '/customer',
    //   name: 'Customer',
    //   component: Signup
    // }
  ]
})
