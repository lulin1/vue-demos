<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="content">
      {{ books }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      books: []
    }
  },
  created () {
    this.getBooksInfo();
  },
  methods: {
    getBooksInfo: function () {
      axios.get('/search?q=python&fields=id,title')
      .then(response => {
          console.log('Get data from https://api.douban.com/v2/book/search?q=python&fields=id,title' + '\n' + JSON.stringify(response.data));
          this.books = response.data.books;
        })
        .catch(error => {
          console.log(error)
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
.content {
  padding: 70px;
  text-align: left;
  line-height: 40px;
  font-size: 20px;
}
</style>
