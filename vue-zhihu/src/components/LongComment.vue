<template>
  <div class="long-comment">
    <div class="title">
      {{this.$store.state.longComment}} 条长评
    </div>
    <div class="super-line"></div>
    <ul class="comment-list">
      <li v-for="comment in this.comments" class="comment-item">
        <img class="comment-avatar" v-lazy="attachImageUrl(comment.avatar)">

        <div class="comment-content">

          <div class="comment-title">
            <span class="comment-author">{{comment.author}}</span>
            <i class="iconfont icon-pos" >&#xe602;</i>
            <span class="like-num">{{comment.likes}}</span>
          </div>

          <div class="comment-txt">
            {{comment.content}}
          </div>

          <div class="reply" v-if="comment.reply_to">
            <span class="reply-name">//{{comment.reply_to.author}}:</span>
            <span class="reply-content">{{comment.reply_to.content}}</span>
          </div>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import welcome from '../components/Welcome';
import axios from 'axios';

export default {
  data () {
    return {
       comments: []
     }
  },
  components: {

  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      axios.get('api/story/' + this.$store.state.id + '/long-comments')
        .then(response => {
          this.comments = response.data.comments;
        })
        .catch(error => {
          console.log(error);
        })
    },
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.long-comment {
  margin-top: 90px;
}

.title {
  padding: 20px 60px;
  font-size:40px;
  text-align: left;
  font-weight: bold;
}

.super-line {
  margin: 10px auto;
  overflow: hidden;
  height: 1px;
  border-top: 1px solid #eee;
  transform-origin: 0 0;
  -webkit-transform: scaleY(2); 
  transform: scaleY(2);

}

.comment-list {
  padding-left: 0;
}

.comment-item {
  display: flex;
  padding: 20px;
  border-bottom: 2px solid #eee;
}

.comment-avatar {
  display: flex;
  flex: 0 0 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: antiquewhite;
}

.comment-title {
  font-size: 40px;
  padding: 0 30px;
  text-align: right;
}

.comment-author {
  float: left;
}

.comment-txt {
  font-size: 25px;
  color: #666;
  text-align: left;
  padding: 0 30px;
}

.icon-pos {
  font-size: 45px;
  margin-right: -10px;
  color: #b4b4b4;
}

.like-num {
  font-size: 30px;
  color: #b4b4b4;
}

.comment-txt {
  margin: 15px;
}

.reply {
  margin: 15px;
  padding: 0 30px;
  font-size: 20px;
  text-align: left;
}

.reply-name {
  color: #000;
}

.reply-content {
  color: #929292;
}
</style>
