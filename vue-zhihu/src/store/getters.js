export default {
	collectText: state => {
		return state.isCollect ? '取消收藏' : '收藏';
	}
}