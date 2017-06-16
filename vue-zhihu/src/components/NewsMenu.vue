<template>
  <div class="news-menu">
  	<div class="super-line"></div>
    <u class="menu-wrapper">
    	<li class="menu-item" @click="goBack">
    		<i class="iconfont icon-pos" @click="toggleSideBar">&#xe697;</i>
    	</li>
    	<li class="menu-item" @click="goBack">
    		<i class="iconfont icon-pos" @click="toggleSideBar">&#xe697;</i>
    	</li>
    	<li class="menu-item" @click="goBack">
    		<i class="iconfont icon-pos" @click="toggleSideBar">&#xe697;</i>
    	</li>
        <li class="menu-item" @click="goBack">
    		<i class="iconfont icon-pos" @click="toggleSideBar">&#xe697;</i>
    	</li>
        <li class="menu-item" @click="goBack">
            <i class="iconfont icon-pos" @click="toggleSideBar">&#xe697;</i>
        </li>
    </u>
  </div>
</template>

<script>
export default {
  name: 'newsMenu'
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
    margin-right: 85px;
}
.icon-pos {
	display: inline-block;
}
</style>
