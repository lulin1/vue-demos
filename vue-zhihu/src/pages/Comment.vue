<template>
 <div class="comment">
    <div class="title">{{this.$store.state.comments}}条点评</div>
    <long-comment></long-comment>
    <short-comment></short-comment>
    <div class="footer">
      <i></i>
      <i></i>
      <span class="writeComment">写评论</span>
    </div>
  </div>
</template>

<script>
import welcome from '../components/Welcome';
import LongComment from '../components/LongComment';
import ShortComment from '../components/ShortComment';

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
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 5px;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
