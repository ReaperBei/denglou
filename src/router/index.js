import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ererr from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
    components: {
      default: HelloWorld,
      nav: MainNav
  }
  }, {
    path: '/',
    name: 'HelloWorld',
    component: ererr
  }
  ]
})
