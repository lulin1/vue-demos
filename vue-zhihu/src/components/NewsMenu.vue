<template>
  <div class="news-menu">
  	<div class="super-line"></div>
    <u class="menu-wrapper">
    	<!-- <li class="menu-item" @click="goBack">
    		<i class="iconfont icon-pos" >&#xe697;</i>
    	</li> -->
    	<li class="menu-item" @click="goNext">
    		<i class="iconfont icon-pos" >&#xe6a6;</i>
    	</li>
    	<!-- <li class="menu-item" @click="thumbsUp">
    		<i class="iconfont icon-pos" >&#xe602;</i>
    	</li>
        <li class="menu-item" @click="goShare">
    		<i class="iconfont icon-pos" >&#xe66d;</i>
    	</li>
        <li class="menu-item" @click="message">
            <i class="iconfont icon-pos" >&#xe80c;</i>
        </li> -->
    </u>
  </div>
</template>

<script>
import router from '../router';

export default {
  // name: 'newsMenu',
  // data() {
  //   return {

  //   }
  // },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'reloadId'
  },
  methods: {
    goNext :function() {
        router.push({ name: 'newsDetail', params: { id : this.$store.state.nextId } });
        // router.push({ name: 'newsDetail', params:{ id : this.$store.state.nextId } });
        // alert(this.$store.state.nextId)
    },
    // 刷新路由属性中的id，重载页面
    reloadId: function() {
        this.$emit('reloadId');
        // this.fetchStoryExtra();
    },
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
    margin-left: 50px;
    margin-right: 70px;
}
.icon-pos {
	display: inline-block;
}
</style>
