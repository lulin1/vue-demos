<template>
  <div class="collect">
    <mt-header fixed title="收藏">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <ul class="story-list">
      <li class="story-item" v-for="item in this.$store.state.collectStories" :key="item.id" >
        <span class="story-item-title">{{item.title}}</span>
        <img class="story-item-img" v-lazy="attachImgUrl(item.images[0])">
      </li>
    </ul>
  </div>
</template>

<script>
import router from '../router';

export default {
  data () {
    return {
       
     }
  },
  methods: {
    back: function () {
      router.push({ name: 'index'});
    },
    attachImgUrl: function (url) {
      if (url !== undefined) {
        return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mint-header {
  height: 100px !important;
  font-size: 35px !important;
}

.mintui {
  font-size: 35px !important;
}

.story-list {
  margin-top: 100px;
  padding: 15px;
  font-size: 35px;
  list-style-type: none;
  text-align: left;
}

.story-item {
  overflow: hidden;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
}

.story-item-title {
  width: 70%;
  display: inline-block;
  margin-left: 20px;
}

.story-item-img {
  float: right;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 20%;
  height: 150px;
}
</style>
