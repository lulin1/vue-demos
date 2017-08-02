<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition></transition>
  </div>
</template>

<script>
import Transition from './components/Transition'

export default {
  name: 'app',
  components: {
    Transition
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
