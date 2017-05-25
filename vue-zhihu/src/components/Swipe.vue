<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topStory in topStories" :key="topStory.id" @click.native="goto(topStory.id)">
        <img :src="attachImageUrl(topStory.image)" :alt="topStory.title" >
        <span class="top-story-title">{{topStory.title}}</span>
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
		// 获取最热新闻
		axios.get('api/news/latest')
			.then(response => {
				this.topStories = response.data.top_stories
			})
			.catch(error => {
				console.log(error)
			})
		},
		methods: {
			attachImageUrl: function(url) {
				if (url !== undefined) {
					return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
				}
			},
			goto: function(id) {
				router.push({ name: 'newsDetail',params: { id: id } })
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.swipe {
		width: 100%;
		height: 650px;
		color: #fff;
		font-size: 20px;
	}
	img {
		/*position: absolute;
		bottom: -75px;
		width: 100%;*/
		width: 100%;
	}
	.top-story-title {
	    position: absolute;
	    z-index: 2;
	    bottom: 0;
	    padding: 60px 20px;
	    line-height: 60px;
	    left: 0%;
	    right: 0%;
	    font-size: 50px;
	}
</style>
