<template>
  <div class="Welcome" v-if="show">
    <img src="../assets/zhihuWelcome.png" width="100%" height="50%" />
    <span class="author">{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'author: Lulin',
      show: true
    }
  },
  created () {
    let isFirstLoad = this.$store.state.isFirstLoad
    if (isFirstLoad) {
      setTimeout(() => {
        this.show = false
      }, 4000)
    } else {
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.author {
  font-size: 60px;
  color: grey;
  font-weight: bold;
  padding-bottom: 100px;
}
</style>
