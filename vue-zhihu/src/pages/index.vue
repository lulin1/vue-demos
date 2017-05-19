<template>
  <div class="index">
  	<welcome></welcome>
    <swipe></swipe>
    <sideBar v-if="sideBarShow" @click="toggleSideBar"></sideBar>
    <header>
      <p class="sideBarIcon" @click="toggleSideBar"></p>
      <p class="hotNews">今日热闻</p>
    </header>
  </div>
</template>

<script>
import welcome from '../components/Welcome'
import swipe from '../components/Swipe'
import sideBar from '../components/SideBar'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sideBarShow: false
    }
  },
  components: {
    'welcome': welcome,
    'swipe': swipe,
    'sideBar': sideBar
  },
  methods: {
    toggleSideBar: function() {
      this.sideBarShow = !this.sideBarShow;
    }
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

header {
  position: fixed;
  width: 100%;
  height: 32px;
  z-index: 2;
  font-size: 22px;
  color: #fff;
  line-height: 32px;
  top: 0px;
}
.sideBarIcon {
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: red;
  left: 20px;
}
.hotNews {
  position: absolute;
  font-size: 35px;
  width: 150px;
  height: 100%;
  left: 42%;
  top: 0;
}

</style>
