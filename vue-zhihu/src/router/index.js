import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Welcome from '@/components/Welcome'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: index
    }
  ]
})
