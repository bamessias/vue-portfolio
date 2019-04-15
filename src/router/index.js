import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutMePage from '@/components/AboutMePage'
import ContactPage from '@/components/ContactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})
