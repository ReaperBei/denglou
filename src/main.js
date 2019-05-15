// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './static/css/commonality.less'
=======
//IWEJRIWERHIUWEHR

Vue.config.productionTip = false

>>>>>>> 526af77a6a4984b5cb0f158b09c329e65a476082
/* eslint-disable no-new */
Vue.use(ElementUi)
let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(vm)
