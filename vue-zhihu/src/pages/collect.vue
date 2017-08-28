<template>
  <div class="collect">
    <mt-header fixed title="收藏">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <ul class="story-list">
      <li class="story-item" v-for="item in this.$store.state.collectStories" :key="item.id" >
        <span class="story-item-title">{{item.title}}</span>
        <div class="img-wrapper">
          <img class="story-item-img" v-lazy="attachImgUrl(item.images[0])">
          <i class="iconfont icon-mult-pic">&#xe63a; 多图</i>
        </div>
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
<style scoped>
.story-list {
  margin-top: 100px;
  padding: 0;
  font-size: 35px;
  list-style-type: none;
  text-align: left;
}

.story-item {
  overflow: hidden;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  height: 200px;
  display: flex;
  align-items: center;
}

.story-item-title {
  width: 70%;
  display: inline-block;
  margin-left: 20px;
}

.img-wrapper {
  position: relative;
  width: 25%;
  display: inline-block;
}

.story-item-img {
  float: right;
  height: 150px;
}

.icon-mult-pic {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 30px;
  background-color: black;
  color: #fff;
}

</style>
