<template>
 <div class="write-comment">
    <div class="banner">
      <i class="iconfont icon-pos banner-icon" @click="goBack">&#xe697;</i>
      <span class="write">写点评</span>
      <span class="publish" @click="publishComment">发布</span>
    </div>
    <div class="content">
       不友善言论会被删除，深度讨论会被优先展示。
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  data () {
    return {
       msg: 'Welcome to Your Vue.js App',
       sideBarShow: false
     }
  },
  components: {
    
  },
  methods: {
    goBack: function() {
      router.go(-1);
    },
    publishComment: function() {
      alert('发布评论');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #1ba3ea;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
}

.banner-icon {
  position: absolute;
  left: 20px;
}

.write {
  font-size: 50px;
}

.publish {
  position: absolute;
  right: 25px;
}

.content {
  margin-top: 100px;
  width: 100%;
  padding: 30px;
  font-size: 50px;
  color: #d8d8d8;
  text-align: left;
}
</style>
