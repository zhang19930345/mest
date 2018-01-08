import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/hage/Home'
import Play from '@/components/hage/Play'
import Please from '@/components/hage/Please'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/please',
      name: 'Please',
      component: Please

    }
  ]
})
