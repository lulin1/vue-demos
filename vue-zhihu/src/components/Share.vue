<template>
  <div class="share">
	<span class="share-title">分享这篇文章</span>
    <mt-swipe :auto="0">
	  <mt-swipe-item>
	  	<div class="share-content wx-friend">
	  		<i class="iconfont " >&#xe635;</i>
	  		<p class="share-content-txt">微信好友</p>
	  	</div>
	  	<div class="share-content wx-circle">
	  		<i class="iconfont " >&#xe61f;</i>
	  		<p class="share-content-txt">微信朋友圈</p>
	  	</div>
	  	<div class="share-content ">
	  		<i class="iconfont qq" >&#xe67c;</i>
	  		<p class="share-content-txt">QQ</p>
	  	</div>
	  	<div class="share-content sina-blog">
	  		<i class="iconfont icon-pos" >&#xe606;</i>
	  		<p class="share-content-txt">新浪微博</p>
	  	</div>
	  	<div class="share-content paste">
	  		<i class="iconfont icon-pos" >&#xe661;</i>
	  		<p class="share-content-txt">复制链接</p>
	  	</div>
	  	<div class="share-content youdao">
	  		<i class="iconfont icon-pos" >&#xe69c;</i>
	  		<p class="share-content-txt">有道云笔记</p>
	  	</div>
	  	<div class="share-content impression-notes">
	  		<i class="iconfont icon-pos" >&#xe644;</i>
	  		<p class="share-content-txt">印象笔记</p>
	  	</div>
	  	<div class="share-content tencent-blog">
	  		<i class="iconfont icon-pos" >&#xe600;</i>
	  		<p class="share-content-txt">腾讯微博</p>
	  	</div>
	  </mt-swipe-item>
	</mt-swipe>
	
  </div>
</template>

<script>
	import axios from 'axios'
	import router from '../router'

	export default {
	  name: 'Swipe',
	  data() {
	    return {
			  topStories: {}
			}
		},
	  created() {
		
		},
		methods: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.share {
	width: 100%;
	height: 800px;
	background-color: pink;
}
.share-title {
    font-size: 40px;
    position: relative;
    top: 30px;
}
.share-content {
	float: left;
	margin-top: 15%;
	margin-left: 6%;
}
.iconfont {
    border-radius: 95%;
    font-size: 80px;
    width: 150px;
    height: 150px;
    line-height: 150px;
    /*margin-bottom: 20px;*/
}
.share-content-txt {
	margin: 0;
	font-size: 40px;
}
.tencent-blog {
	margin-left: 4%;
}
.sina-blog {
	margin-left: 10%;
}
/*.wx-friend {
	background-color: #64c654;
}
.wx-circle {
	background-color: #75cd37;
}*/
</style>
