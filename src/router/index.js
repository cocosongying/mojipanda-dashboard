import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/dashboard',
  routes: [
    {
      path: '/login',
      component: resolve => require(['@/components/Login'], resolve)
    },
    {
      path: '/',
      meta: {
        auth: true,
      },
      component: resolve => require(['@/components/Home'], resolve),
      children: [
        {path: "",
        component: () => import('@/components/menu/Blank')
      }

      ]
    }
  ]
})
