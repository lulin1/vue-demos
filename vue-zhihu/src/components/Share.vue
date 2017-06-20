<template>
  <div class="share">
	<span class="share-title">分享这篇文章</span>
    <mt-swipe :auto="0">
	  <mt-swipe-item >
	  	<div class="item-box">

	  		<div class="item-box-top">
	  			<div class="share-content ">
			  		<i class="iconfont icon-wx-friend" >&#xe635;</i>
			  		<p class="share-content-txt">微信好友</p>
			  	</div>
			  	<div class="share-content ">
			  		<i class="iconfont icon-wx-circle" >&#xe61f;</i>
			  		<p class="share-content-txt">微信朋友圈</p>
			  	</div>
			  	<div class="share-content ">
			  		<i class="iconfont icon-qq" >&#xe67c;</i>
			  		<p class="share-content-txt">QQ</p>
			  	</div>
			  	<div class="share-content ">
			  		<i class="iconfont icon-sina-blog" >&#xe606;</i>
			  		<p class="share-content-txt">新浪微博</p>
			  	</div>
	  		</div>
	  		
	  		<div class="item-box-bottom">
	  			<div class="share-content ">
			  		<i class="iconfont icon-paste" >&#xe661;</i>
			  		<p class="share-content-txt">复制链接</p>
			  	</div>
			  	<div class="share-content ">
			  		<i class="iconfont icon-youdao" >&#xe69c;</i>
			  		<p class="share-content-txt">有道云笔记</p>
			  	</div>
			  	<div class="share-content ">
			  		<i class="iconfont icon-impression-notes" >&#xe644;</i>
			  		<p class="share-content-txt">印象笔记</p>
			  	</div>
			  	<div class="share-content ">
			  		<i class="iconfont icon-tencent-blog" >&#xe600;</i>
			  		<p class="share-content-txt">腾讯微博</p>
			  	</div>
	  		</div>
		  	
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
	height: 100%;
	background-color: #e9e9e9;
}
.share-title {
    font-size: 50px;
    position: relative;
    top: 30px;
}
.share-content {
	float: left;
	margin-top: 15%;
	margin-left: 4%;
}
.iconfont {
    font-size: 80px;
    display: inline-block;
	height: 140px;
	line-height: 140px;
	width: 140px;
	border-radius: 90%;
    /*margin-bottom: 20px;*/
}
.item-box {
	margin-top: -45px;
}
.item-box-top {
    width: 100%;
    margin-top: -40px;
    display: inline-block;
}
.item-box-bottom {
	width: 100%;
	margin-top: -70px;
}
.share-content-txt {
	margin: 0;
	font-size: 40px;
	width: 200px;
}
.tencent-blog {
/*	margin-left: 4%;*/
}
.sina-blog {
/*	margin-left: 10%;*/
}
.icon-wx-friend {
	background-color: #64c654;
}
.icon-wx-circle {
	background-color: #75cd37;
}
.icon-qq {
	background-color: #286bc4;
}
.icon-sina-blog {
	background-color: #ec4226;
}
.icon-paste {
	background-color: #dd472c;
}
.icon-youdao {
	background-color: #38a3ea;
}
.icon-impression-notes {
	background-color: #5db346;
}
.icon-tencent-blog {
	background-color: #3ea1d9;
}
</style>
