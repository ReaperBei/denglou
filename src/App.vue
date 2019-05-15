<template>
  <div id="app">
      <Topnav/>
    <router-view></router-view>     <!--//挂载内容-->
      <Footer/>
  </div>
</template>
<script>
import Topnav from './components/one-About-us/MainNan/MainNan.vue'
import Footer from './components/one-About-us/Footer/footer.vue'
export default {
  components: {
    Topnav,
    Footer
  }
}
</script>

<style>

</style>
