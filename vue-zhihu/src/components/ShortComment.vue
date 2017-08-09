<template>
  <div class="short-comment">
    <div class="title">
      {{this.$store.state.shortComment}} 条短评
    </div>
  </div>
</template>

<script>
import welcome from '../components/Welcome';

export default {
  data () {
    return {
       msg: 'Welcome to Your Vue.js App',
       sideBarShow: false
     }
  },
  components: {
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  padding: 20px 60px;
  font-size: 40px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #eee;
  margin-bottom: 100px;
}
</style>
