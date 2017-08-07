<template>
  <div class="news-menu">
  	<div class="super-line"></div>
    <u class="menu-wrapper">
    	<li class="menu-item" @click="goBack">
    		<i class="iconfont icon-pos" >&#xe697;</i>
    	</li>
    	<li class="menu-item" @click="goNext">
    		<i class="iconfont icon-pos" >&#xe6a6;</i>
    	</li>
    	<li class="menu-item" @click="thumbsUp" :class="{ 'thumbs-up-active' : isThumbsUp }">
    		<i class="iconfont icon-pos" >&#xe602;</i>
        <span class="thumbs-up-num">{{this.$store.state.popularity}}</span>
    	</li>
      <li class="menu-item" @click="goShare">
    		<i class="iconfont icon-pos" >&#xe66d;</i>
    	</li>
      <li class="menu-item" @click="showComment">
          <i class="iconfont icon-pos" >&#xe80c;</i>
          <span class="comment-num">{{this.$store.state.comments}}</span>
      </li>
    </u>
    <mt-popup class="popup" v-model="popupVisible" position="bottom" popup-transition="popup-fade">
      <share @cancel='hideMenu'></share>
    </mt-popup>
  </div>
</template>

<script>
import router from '../router';
import axios from 'axios';
import Share from './Share';

export default {
  name: 'newsMenu',
  data() {
    return {
      'isThumbsUp': false,
      'popupVisible': false
    }
  },
  created() {
    this.fetchNews();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'reloadId'
  },
  methods: {
    fetchNews: function() {
      axios.get('api/story-extra/'+ this.$store.state.id)
      .then(response => {
        this.$store.state.popularity = response.data.popularity;
        this.$store.state.long_comments = response.data.long_comments;
        this.$store.state.short_comments = response.data.short_comments;
        this.$store.state.comments = response.data.comments;
      })
      .catch( error => {
        console.log(error);
      });
    },
    thumbsUp: function() {
      if (!this.isThumbsUp) {
        this.$store.state.popularity++;
      } else{
        this.$store.state.popularity--;
      }
      this.isThumbsUp = ! this.isThumbsUp;
    },
    goShare: function() {
      this.popupVisible = true;
    },
    hideMenu: function() {
      this.popupVisible = false;
    },
    goBack: function() {
        // window.history.go(-1);
        router.push({ name: 'index'});
    },

    goNext: function() {
        router.push({ name: 'newsDetail', params: { id : this.$store.state.nextId } });
    },
    // 刷新路由属性中的id，重载页面
    reloadId: function() {
        this.$emit('reloadId');
        this.fetchNews();
    },
    showComment: function() {
      router.push({ name: 'comment', params: { id: this.$store.state.id } })
    }
  },
  components: {
    'share': Share
  }
}
</script>

<style>
.news-menu {
	position: fixed;
	bottom: 0px;
	width: 100%;
	height: 115px;
	background-color: #fff;
	list-style: none;
}
.super-line {
	overflow: hidden;
	height: 10px;
	border-top: 1px solid black;
	transform-origin: 0 0;
	-webkit-transform: scaleY(.2); 
	transform: scaleY(.2);
}
.menu-wrapper {
    display: block;
    height: 115px;
    width: 100%;
    line-height: 115px;
    margin-top: -10px;
}
.menu-item {
    float: left;
    margin-left: 35px;
    margin-right: 70px;
}
.icon-pos {
	display: inline-block;
}
.thumbs-up-num {
  font-size: 30px;
}
.thumbs-up-active {
  color: cornflowerblue;
  font-weight: bold;
}
.popup {
  width: 100%;
  height: 60%;
}

.comment-num {
  font-size: 30px;
  margin-left: -15px;
}

</style>
