import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import swipe from '@/components/Swipe'
import index from '@/pages/index'
import newsDetail from '../pages/newsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: index
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: newsDetail
    }
  ]
})
