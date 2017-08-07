<template>
 <div class="comment">
    <div class="title">{{this.$store.state.comments}}条点评</div>
    <long-comment></long-comment>
    <short-comment></short-comment>
    <div class="footer">
      <i class="iconfont icon-pos foot-1" @click="goBack">&#xe697;</i>
      <i class="iconfont icon-pos foot-2" >&#xe66e;</i>
      <span class="write-comment" @click="writeComment">写评论</span>
    </div>
  </div>
</template>

<script>
import welcome from '../components/Welcome';
import LongComment from '../components/LongComment';
import ShortComment from '../components/ShortComment';
import router from '../router'

export default {
  data () {
    return {
       msg: 'Welcome to Your Vue.js App',
       sideBarShow: false
     }
  },
  components: {
    'long-comment': LongComment,
    'short-comment': ShortComment
  },
  methods: {
    goBack: function() {
      router.go(-1)
    },
    writeComment: function() {
      router.push({ name: 'writeComment' , params: { id: this.$store.state.id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  width: 100%;
  height: 90px;
  line-height: 90px;
  background: #1ba3ea;
  font-size: 45px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 5px;
  position: fixed;
  top: 0;
  left: 0;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  color: #fff;
  font-size: 40px;
  background-color: #3c3c3c;
}

.foot-1 {
  position: absolute;
  left: 20px;
  color: #999;
}

.foot-1:hover {
  font-weight: bold;
}

.foot-2 {
  font-size: 50px;
}
</style>
