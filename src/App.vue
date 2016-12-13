<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderComponent from './components/common/Header'

export default {
  name: 'app',
  components: {
    HeaderComponent
  }
}

</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
