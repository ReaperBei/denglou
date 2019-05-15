import Vue from 'vue'
import Router from 'vue-router'
import one from '../components/one-About-us/index.vue'
import two from '../components/two-Child-parenting/index.vue'
import three from '../components/three-Contact-us/index.vue'
import four from '../components/four-home-economics/index.vue'
import five from '../components/five-home-page/index.vue'
import six from '../components/seven-Maternity-matron/index.vue'
import seven from '../components/Eight-Nanny/index.vue'
import eight from '../components/nine-Safety-guarantee/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      default: one
    }
  }, {
    path: '/two',
    components: {
      default: two
    }
  }, {
    path: '/three',
    components: {
      default: three
    }
  }, {
    path: '/four',
    components: {
      default: four
    }
  }, {
    path: '/five',
    components: {
      default: five
    }
  }, {
    path: '/six',
    components: {
      default: six
    }
  }, {
    path: '/seven',
    components: {
      default: seven
    }
  }, {
    path: '/eight',
    components: {
      default: eight
    }
  }]
})
