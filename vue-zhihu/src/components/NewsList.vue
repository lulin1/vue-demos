<template>
  <div class="news-list">
    <ul class="list" ref="NewsList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
  infinite-scroll-distance="40" infinite-scroll-immediate-check=false>
      <li class="list-item" v-for="story in this.$store.state.stories" >
          <span class="story-title">{{story.title}}</span>
          <!-- <img class="story-img" v-bind:src="attachImageUrl(story.images[0])" :alt="story.title" /> -->
          <img class="story-img" v-lazy="attachImageUrl(story.images[0])" :alt="story.title" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';
import { Indicator } from 'mint-ui';

export default {
  name: 'NewsList',
  data () {
    return {
      loading: false,
      date: Date,
      dateStr: '' // 数据日期字符串格式
    }
  },
  created () {
    if (this.$store.state.isFirstLoad) {
      this.fetchData();
      this.$store.dispatch('changeLoadState');
    }

    this.initDate();

    // 下拉刷新数据
    this.$on('refresh', () => {
      this.refreshData();
    });
  },
  methods: {
    fetchData: function() {
      axios.get('api/news/latest')
      .then(response => {
        let stories = response.data.stories;
        let ids = stories.map(story => story.id);

        this.$store.dispatch('addNews',{
          stories: stories,
          ids: ids
        });
      })
      .catch(error => {
        console.log(error);
      });
    },

    // 修改图片链接
    attachImageUrl: function(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
    },

    refreshData: function() {
      //刷新数据
      this.$store.dispatch('refreshNews');
      //获取数据
      this.$nextTick(() => {
        this.fetchData();
      });
    },

    // 初始化当前日期
    initDate: function() {
      this.date = new Date();
      this.changeDate2String();
    },

    // 将Date类型的日期转换成String类型
    changeDate2String: function() {
      let year = this.date.getFullYear();
      let month = this.date.getMonth() + 1;
      let day = this.date.getDate();
      month = month < 10 ? '0' + month : month; // 格式化月份，小于10前置0
      day = day < 10 ? '0' + day : day; // 格式化日期，小于10前置0;

      this.dateStr = year + month + day;
    },

    // 将日期前推一天
    decreaseDate: function() {
      this.date.setDate(this.date.getDate() - 1);
      this.changeDate2String();
    },

    // 根据日期获取更多新闻数据
    fetchMoreData: function() {
      axios.get('api/news/before/' + this.dateStr).then(response => {
        // 合并数据
        let stories = response.data.stories;
        let ids = stories.map(story => story.id);

        this.$store.dispatch('addNews', {
          stories: stories,
          ids: ids
        });
        // 合并完数据关闭加载提示框
        Indicator.close();
      })
      .catch(error => {
        console.log(error);
      });

      this.decreaseDate();
    },

    // 加载更多新闻数据
    loadMore: function() {
        this.loading = true;

        // 打开加载提示框
        Indicator.open({
          text: 'Loading...',
          spinnerType: 'fading-circle'
        });

        // 加载更多数据并更新DOM
        this.$nextTick(function () {
          this.fetchMoreData();
        });

        this.loading = false;
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
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.list-item{
  height: 200px;
  border-bottom: 3px solid #f5f5f5;
  text-align: left;
}

.story-title {
  height: 200px;
  width: 70%;
  /*line-height: 200px;*/
  vertical-align: middle;
  font-size: 40px;
  float: left;
  margin-left: 30px;
  margin-top: 5px;
}

.story-img {
  vertical-align: middle;
  width: 20%;
  height: 150px;
  float: right;
}

</style>
