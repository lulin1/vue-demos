<template>
  <div class="theme-detail">
    <div class="header">
      <img class="header-img" v-lazy="attachImgUrl(data.image)">
      <i class="iconfont icon-pos go-back" @click="goBack">&#xe697;</i>
      <span class="header-txt">{{data.name}}</span>
      <i class="iconfont icon-pos fold" v-if="this.jia" @click="toggleJia">&#xe63c;</i>
      <i class="iconfont icon-pos fold" v-if="!this.jia" @click="toggleJia">&#xe628;</i>
    </div>

    <div class="editor" @click="goEditorList">
      <span class="editor-txt">主编</span>
      <img class="editor-img" v-for="item in data.editors" v-lazy="attachImgUrl(item.avatar)">
    </div>

    <ul class="content-list">
      <li class="content-item" v-for="story in data.stories">
        <span class="content-item-title">{{story.title}}</span>
        <img class="content-item-img" v-if="story.images !== undefined" v-lazy="attachImgUrl(story.images[0])">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  data () {
    return {
       data: {},
       jia: true
     }
  },
  created () {
    this.id = this.$route.params.id;
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      axios.get('api/theme/' + this.id)
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.log(error)
        })
    },
    attachImgUrl: function (srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    goBack: function () {
      router.push({ name: 'index' })
    },
    toggleJia: function () {
      this.jia = !this.jia;
    },
    goEditorList: function () {
      router.push( { name: 'editorList', params: this.id });
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
}

a {
  color: #42b983;
}

.header {
  height: 110px;
  line-height: 110px;
  color: #fff;
  font-size: 50px;
  position: relative;
}

.header-img {
  position: absolute;
  width: 100%;
  z-index: -1;
  left: 0;
  bottom: 0;
  filter: blur(5px);
}

.go-back {
  float: left;
  margin-left: 20px;
}

.fold {
  float: right;
  margin-right: 20px;
}

.editor {
  text-align: left;
  font-size: 35px;
  height: 100px;
  line-height: 100px;
  padding: 0 40px;
  border-bottom: 3px solid #eee;
}

.editor-txt {
  vertical-align: middle;
}

.editor-img {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 30px;
}

.content-list {
  margin: 0;
}

.content-item {
  /*margin: 0;*/
  display: inline-block;
  font-size: 35px;
  width: 100%;
  height: 160px;
  color: #000;
  text-align: left;
  padding: 10px 0;
  border-bottom: 3px solid #eee;
}

.content-item-title {
  display: inline-block;
  width: 70%;
  margin-left: 30px;
}

.content-item-img {
  width: 150px;
  height: 140px;
  float: right;
  margin-top: 10px;
  margin-right: 60px;
}
</style>
