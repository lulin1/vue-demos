<template>
  <div class="editor-list">
    <header class="header">
      <i class="iconfont icon-pos go-back" @click="goBack">&#xe697;</i>
      <span class="editor">主编</span>
    </header>
    <ul>
      <li class="editor-item" v-for="item in data">
        <img class="editor-item-img" v-lazy="attachImgUrl(item.avatar)">
        <span class="editor-item-name">{{item.name}}</span>
        <span class="editor-item-bio">{{item.bio}}</span>
        <i class="iconfont icon-pos detail">&#xe60c;</i>
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
       data: []
     }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      axios.get('api/theme/' + this.$route.params.id)
        .then(response => {
          this.data = response.data.editors;
        })
        .catch(error => {
          console.log(error);
        })
    },
    goBack: function () {
      router.go(-1);
    },
    attachImgUrl: function (srlUrl) {
      if (srlUrl !== undefined) {
        return srlUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
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

header {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #1ba3ea;
  font-size: 45px;
  color: #fff;
  text-align: center;
}

.go-back {
  position: absolute;
  left: 30px;
}

.editor-item {
  width: 100%;
  height: 100px;
  position: relative;
  font-size: 35px;
  margin-bottom: 20px;
  border-bottom: 3px solid #eee;
}

.editor-item-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -40px;
  left: 50px;
}

.editor-item-name {
  position: absolute;
  left: 170px;
}

.editor-item-bio {
  position: absolute;
  bottom: 10px;
  left: 170px;
  color: #b0b0b0;
  font-size: 28px;
}

.detail {
  position: absolute;
  right: 20px;
  top: 50%;
  font-size: 50px;
  margin-top: -25px;
  color: #ccc;
}
</style>
