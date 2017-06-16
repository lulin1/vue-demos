<template>
  <div class="index">
  	<welcome></welcome>
    <sideBar v-if="sideBarShow" @click="toggleSideBar"></sideBar>
    <mt-loadmore :top-method="loadTop" :topDistance="40" ref="loadmore">
      <header>
        <i class="iconfont icon-pos" @click="toggleSideBar">&#xe675;</i>
        <!-- <i class="iconfont icon-pos" @click="toggleSideBar">&#xe6a6;</i> -->
        <p class="hotNews">今日热闻</p>
      </header>
      <swipe></swipe>
      <newsList ref="newsList"></newsList>
    </mt-loadmore>
  </div>
</template>

<script>
import welcome from '../components/Welcome'
import swipe from '../components/Swipe'
import sideBar from '../components/SideBar'
import newsList from '../components/NewsList'
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
    'sideBar': sideBar,
    'newsList': newsList
  },
  methods: {
    toggleSideBar: function() {
      this.sideBarShow = !this.sideBarShow;
    },
    loadTop() {
      this.$refs.newsList.$emit('refresh');
      this.$refs.loadmore.onTopLoaded();
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
.icon-pos {
  position: fixed;
  left: 40px;
  top: 80px;
}
.hotNews {
  position: absolute;
  font-size: 35px;
  width: 150px;
  height: 100%;
  left: 42%;
  top: 50px;
}

</style>
