import Vue from 'vue'
import Router from 'vue-router'
import intro from '@/components/intro'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: intro,
        hello: Hello
      }
    }
  ]
})
