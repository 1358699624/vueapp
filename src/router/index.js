import Vue from 'vue'
import Router from 'vue-router'
import 'vant/lib/index.css'
import HelloWorld from '@/components/HelloWorld'
import Phonetest from '@/view/lanview/phonetest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/phonetest',
      name: 'Phonetest',
      component: Phonetest
    }
  ]
})
