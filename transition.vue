<template>
  <div id="demo">
	  <button v-on:click="show = !show">
	    Toggle
	  </button>
	  <transition name="fade">
	    <p v-if="show">hello</p>
	  </transition>
	</div>
</template>

<script>
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
