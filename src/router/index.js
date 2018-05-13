import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Echart from '@/components/echart'
import Parent from '@/components/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/echart',
      name: 'Echart',
      component: Echart
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ],
  mode: 'history'
})
