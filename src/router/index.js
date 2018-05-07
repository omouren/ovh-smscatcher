import Vue from 'vue'
import Router from 'vue-router'
import Viewer from '@/components/Viewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'viewer',
      component: Viewer
    }
  ]
})
