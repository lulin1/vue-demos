<template>
  <div class="news-detail" >
    <div class="top-wrapper">
      <img class="top-img" v-lazy="attachImageUrl(this.data.image)" :alt="this.data.title"/>
      <p class="top-title">{{data.title}}</p>
      <p class="top-img-source">图片：{{data.image_source}}</p>
    </div>
    <div class="news-body" v-html="this.data.body"></div>
    <news-menu @reloadId="fetchData"></news-menu>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';
import NewsMenu from '../components/NewsMenu';

export default {
  name: 'newsDetail',
  data () {
    return {
      data: {}
    }
  },
  components: {
    'news-menu': NewsMenu
  },
  created () {
    this.fetchData();
  },
  methods: {
    // 获取路由参数上的id新闻具体内容
    fetchData: function() {
      let id = this.$route.params.id;
      axios.get('api/news/' + id)
      .then(response => {
        response.data.body = this.attachBodyContent(response.data.body);
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
      });

      this.$store.dispatch('changeCurrentNewsId',id);
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

.top-wrapper {
  width: 100%;
  height: 500px;
  position: relative;
  overflow-y: hidden;
}
.top-wrapper .top-img {
  width: 100%;
  position: relative;
  bottom: 200px;
}
.top-wrapper .top-title {
  position: absolute;
  top: 240px;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
  text-align: left;
  left: 3%;
  right: 3%;
}
.top-wrapper .top-img-source{
  position: absolute;
  font-size: 38px;
  font-weight: bold;
  color: darkgrey;
  top: 390px;
  right: 0px;
}

.news-body {
  margin: 30px;
  text-align: left;
  text-indent: 10%;
  line-height: 80px;
  color: dimgrey;
}

/*.news-body .view-more {
  text-align: center;
  margin-bottom: 30px;
  background: gainsboro;
  width: 100%;
  height: 80px;
  line-height: 80px;
}

.news-body a {
  font-size: 40px;
  text-decoration: none;
  color: darkgray;
}*/
</style>
