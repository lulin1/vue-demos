<template>
  <div class="short-comment">
    <div class="title">
      {{this.$store.state.shortComment}} 条短评
      <i class="iconfont icon-pos open" @click="openCommentList">&#xe605;</i>
      <i class="iconfont icon-pos close" @click="closeCommentList">&#xe641;</i>
    </div>

    <ul class="comment-list">
      <li v-for="comment in this.shortComments" class="comment-item">
        <img v-lazy="attachImgUrl(comment.avatar)" class="comment-avatar">

        <div class="comment-content">

          <div class="comment-title">
            <span class="comment-author">{{comment.author}}</span>
            <i class="iconfont icon-pos" >&#xe602;</i>
            <span class="like-num">{{comment.likes}}</span>
          </div>

          <div class="comment-txt">
            {{comment.content}}
          </div>

          <div class="comment-reply" v-if="comment.reply_to">
            <span class="reply-author">//{{comment.reply_to.author}}:</span>
            <span class="reply-content">{{comment.reply_to.content}}</span>
          </div>

          <div class="comment-time">
            {{formatTime(comment.time)}}
          </div>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data () {
    return {
       shortComments: []
     }
  },
  components: {
    
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData () {
      axios.get('api/story/' + this.$store.state.id + '/short-comments')
        .then(response => {
          this.shortComments = response.data.comments;
          alert(JSON.stringify(this.shortComments));
        })
        .catch(error => {
          console.log(error)
        })
    },
    attachImgUrl: function (srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    formatTime: function (time) {
      return moment(time).format('MM-DD HH:mm')
    },
    openCommentList: function () {

    },
    closeCommentList: function() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment-list {
  padding-left: 0;
  padding-bottom: 100px;
}

.comment-item {
  display: flex;
  border-bottom: 2px solid #eee;
  padding: 20px;
}

.title {
  padding: 20px 60px;
  font-size: 40px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #eee;
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

.close {
  display: none;
  float: right;
}

.open {
  float: right;
}

.comment-avatar {
  display: flex;
  flex: 0 0 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: antiquewhite;
}

.comment-content {
  text-align: left;
  width: 100%;
}

.comment-title {
  font-size: 40px;
  text-align: right;
  padding: 0 30px;
}

.comment-author {
  float: left;
}

.comment-txt {
  padding: 30px;
  font-size: 25px;
  color: #666;
}

.comment-time {
  color: #ccc;
  font-size: 20px;
  padding: 10px 30px;
}

.comment-reply {
  padding: 0 30px;
  font-size: 20px;
}

.reply-author {
  color: #000;
}

.reply-content {
  color: #929292;
}
</style>
