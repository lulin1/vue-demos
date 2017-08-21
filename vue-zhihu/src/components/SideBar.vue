<template>
  <div class="side-bar">
    <div class="user-menu">
      <img class="user-img" src="../assets/logo.png">
      <span class="user-name">Lulin</span>
    </div>

    <div class="menu-bar">
      <div class="menu-collect">
        <i class="iconfont icon-pos">&#xe60b;</i>
        <br/>
        <span>收藏</span>
      </div>
      <div class="menu-message">
        <i class="iconfont icon-pos">&#xe60a;</i>
        <br/>
        <span>消息</span>
      </div>
      <div class="menu-setting">
        <i class="iconfont icon-pos">&#xe69d;</i>
        <br/>
        <span>设置</span>
      </div>
    </div>

    <div class="content-wrapper">
      <ul class="content-list">
        <li class="content-item" v-for="item in data">
          <i class="iconfont icon-pos" v-if="item.id === -1">&#xe66f;</i>
          {{item.name}}
          <i class="iconfont icon-pos right">&#xe60c;</i>
        </li>
      </ul>
    </div>

    <div class="foot-bar">
      <div class="off-line">
        <i class="iconfont icon-pos">&#xe982;</i>
        <span class="off-line-txt">离线</span>
      </div>
      <div class="night-mode">
        <i class="iconfont icon-pos">&#xe610;</i>
        <span class="night-mode-txt">夜间</span>
      </div>
    </div>

    <div class="mask" @click="hideSideBar"></div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: 'hello',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    hideSideBar: function () {
      this.$emit('hideSideBar');
    },
    fetchData: function () {
      axios.get('api/themes')
        .then(response => {
          this.data = response.data.others;
          this.data.unshift({
            color: 0,
            thumbnail: '',
            description: '首页',
            id: -1,
            name: '首页'
          })
        })
        .catch(error => {
          console.log(error);
        })
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

.icon-pos {
  font-size: 50px;
}

.right {
  float: right;
}

.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 60%;
  height: 100%;
  background-color: #232a30;
  color: #fff;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 90;
  opacity: 0.3;
}

.user-menu {
  text-align: left;
  height: 150px;
  line-height: 150px;
}

.user-img {
  width: 15%;
  background-color: #fff;
  border-radius: 50%;
  margin-left: 45px;
  margin-right: 40px;
  vertical-align: middle;
}

.user-name {
  font-size: 35px;
  vertical-align: middle;
}

.menu-bar {
  display: flex;
  font-size: 30px;
}

.menu-collect,.menu-message,.menu-setting {
  width: 33.33%;
}

.content-list {
  text-align: left;
  font-size: 35px;
}

.content-item {
  display: block;
  margin: 70px 40px;
}

.foot-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 60%;
  height: 100px;
  line-height: 100px;
  background-color: #000;
  font-size: 35px;
}

.off-line,.night-mode {
  width: 50%;
}
</style>
