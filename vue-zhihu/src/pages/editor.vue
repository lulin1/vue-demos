<template>
  <div class="editor">
    <header class="header"> 
      <i class="iconfont icon-pos go-back" @click="goBack">&#xe697;</i>
      <span class="editor">{{this.$route.params.editorName}}</span>
    </header>

    <div class="editor-content" v-html="this.data"></div>
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
      axios.get('api/editor/' + this.$route.params.editorId + '/profile-page/ios')
        .then(response => {
          response.data = this.attachBodyImgUrl(response.data);
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    goBack: function () {
      router.go(-1);
    },
    attachBodyImgUrl: function (srlUrl) {
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
  height: 50px;
  line-height: 50px;
  background-color: #1ba3ea;
  font-size: 20px;
  color: #fff;
  text-align: center;
  position: fixed;
}

.go-back {
  position: absolute;
  left: 15px;
  font-size: 30px;
}

.editor-content {
  text-align: left;
}
</style>
