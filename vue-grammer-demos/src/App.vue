<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transitionEffect></transitionEffect>
    <transitionStatus></transitionStatus>
    <vue-particles color="#dedede"></vue-particles>
  </div>
</template>

<script>
import TransitionEffect from './components/TransitionEffect'
import TransitionStatus from './components/TransitionStatus'

export default {
  name: 'app',
  components: {
    TransitionEffect,
    TransitionStatus
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
