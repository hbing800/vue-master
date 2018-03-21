import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: resolve => {
        require(['@/components/Login'], resolve)
      }
    },
    {
      path: '/',
      name: 'Index',
      component: resolve => {
        require(['@/components/Index'], resolve)
      },
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: resolve => {
            require(['@/components/Dashboard'], resolve)
          }
        },
        {
          path: '/test1',
          name: 'Test1',
          component: resolve => {
            require(['@/components/test1'], resolve)
          }
        },
        {
          path: '/test2',
          name: 'Test2',
          component: resolve => {
            require(['@/components/test2'], resolve)
          }
        }
      ]
    }

  ]
})
