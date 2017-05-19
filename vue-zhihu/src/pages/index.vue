<template>
  <div class="index">
  	<welcome></welcome>
    <swipe></swipe>
  </div>
</template>

<script>
import welcome from '../components/Welcome'
import swipe from '../components/Swipe'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'welcome': welcome,
    'swipe': swipe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
