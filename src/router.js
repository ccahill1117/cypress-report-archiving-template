import Vue from 'vue'
import Router from 'vue-router'
import p0 from './components/p0'
import p1 from './components/p1'
import p2 from './components/p2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: p0
    },
    {
      path: '/p1',
      name: 'githubWebhooks',
      component: p1
    },
    {
      path: '/p2',
      name: 's3',
      component: p2
    }
  ]
})
