import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/one-About-us/index.vue'
import two from '../components/two-Child-parenting/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    components: {
      default: HelloWorld
    }
  }, {
    path: '/two',
    components: {
      default: two
    }
  }]
})
