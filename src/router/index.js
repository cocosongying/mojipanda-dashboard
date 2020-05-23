import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/dashboard',
  routes: [
    {
      path: '/login',
      meta: {
        normal: true
      },
      component: () => import('@/components/Login.vue')
    }
  ]
})
