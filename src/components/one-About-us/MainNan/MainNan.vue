<template>
  <div class="container">
    <ul class="mainnan container clearfix">
      <li><router-link to="/">首页</router-link></li>
      <li>
        <router-link to="/two">家政</router-link>
      </li>
      <li>月嫂</li>
      <li>催乳师 </li>
      <li>育儿嫂</li>
      <li>保姆</li>
      <li>城市合伙</li>
      <li>个人中心</li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  .mainnan li{
    float: left;
    width: 100px;
  }
</style>
