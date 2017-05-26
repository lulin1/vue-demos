<template>
  <div class="news-list">
    <ul class="list" ref="NewsList">
      <li class="list-item" v-for="story in this.$store.state.stories" >
         <span>{{story.title}}</span>
         <div>
           <img v-bind:src="story.images[0]" :alt="story.title" />
         </div>
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
</style>
