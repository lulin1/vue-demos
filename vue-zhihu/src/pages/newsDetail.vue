<template>
  <div class="news-detail" >
    <div class="top-wrapper">
      <img class="top-img" v-lazy="attachImageUrl(this.data.image)" :alt="this.data.title"/>
      <p class="top-title">{{data.title}}</p>
      <p class="top-img-source">图片：{{data.image_source}}</p>
    </div>
    <div class="news-body" v-html="this.data.body"></div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name: 'Welcome',
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.fetchData();
  },
  methods: {

    fetchData: function() {
      let id = this.$route.params.id;
      axios.get('api/news/' + id)
      .then(response => {
        this.data = response.data;
        response.data.body = this.attachBodyContent(response.data.body);
      })
      .catch(error => {
        console.log(error);
      });

      // this.$store.dispatch('changeCurrentNewsId',id);
      // this.$store.dispatch('judgeCollectState');
    },

    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },

    // 修改返回数据中的body中的图片链接
    attachBodyContent: function(body) {
      return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
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

.top-img {
  width: 100%;
}

.top-title {
    position: absolute;
    top: 300px;
    font-size: 40px;
    left: 5%;
    right: 5%;
}
</style>
