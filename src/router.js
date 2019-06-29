import Vue from 'vue'
import Router from 'vue-router'
import p0 from './components/p0'
import p1 from './components/p1'
import p2 from './components/p2'
import p3 from './components/p3'
import pre1 from './components/pre1'
import p4 from './components/p4'
import p5 from './components/p5'
import p6 from './components/p6'
import testPage from './components/testPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: p0
    },
    {
      path: '/pre1',
      name: 'pre section 1',
      component: pre1
    },
    {
      path: '/p1',
      name: 'section 1',
      component: p1
    },
    {
      path: '/p2',
      name: 'section 2',
      component: p2
    },
    {
      path: '/p3',
      name: 'section 3',
      component: p3
    },
    {
      path: '/p4',
      name: 'section 4',
      component: p4
    },
    {
      path: '/p5',
      name: 'section 5',
      component: p5
    },
    {
      path: '/p6',
      name: 'section 6',
      component: p6
    },
    {
      path: '/testPage',
      name: 'section 7',
      component: testPage
    }
  ]
})
