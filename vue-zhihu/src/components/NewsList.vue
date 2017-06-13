<template>
  <div class="news-list">
    <ul class="list" ref="NewsList">
      <li class="list-item" v-for="story in this.$store.state.stories" >
          <span class="story-title">{{story.title}}</span>
          <img class="story-img" v-bind:src="attachImageUrl(story.images[0])" :alt="story.title" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'NewsList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    if (this.$store.state.isFirstLoad) {
      this.fetchData();
      this.$store.dispatch('changeLoadState');
    }
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

    attachImageUrl: function(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
    },

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
  margin-left: 50px;
  margin-top: 5px;
}

.story-img {
  vertical-align: middle;
  width: 20%;
  height: 150px;
  float: right;
}

</style>
