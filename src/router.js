import Vue from 'vue'
import Router from 'vue-router'

// page
import LoginPage from '@/components/LoginPage'
import DatePage from '@/components/DatePage'
import HelloWorld from '@/components/HelloWorld'
import FormPage from '@/components/FormPage'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/date',
      component: DatePage
    },
    {
      path: '/hellow',
      component: HelloWorld
    },
    {
      path: '/form',
      component: FormPage
    }

  ]
})
