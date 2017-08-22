import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import newsDetail from '../pages/newsDetail'
import comment from '../pages/Comment'
import writeComment from '../pages/writeComment'
import themeDetail from '../pages/themeDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: comment
    },
    {
      path: '/writeComment',
      name: 'writeComment',
      component: writeComment
    },
    {
      path: '/themeDetail/:id',
      name: 'themeDetail',
      component: themeDetail
    }
  ]
})
