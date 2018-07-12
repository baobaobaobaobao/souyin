import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '../pages/index'
import searchAnswer from '../pages/seacrhAnswer'
import My from '../pages/myPerson'
import  logins from '../pages/logins'
import  searchPage from '../pages/searchs.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },

    {
      path: '/logins',
      name: 'logins',
      component: logins
    },
    {
      path: '/searchAnswer',
      name: 'searchAnswer',
      component: searchAnswer,
     
    },
    {
      path: '/My',
      name: 'My',
      component: My

    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage

    }
  ]
})
