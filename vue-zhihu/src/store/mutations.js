import * as types from './mutation-types';

export default {
	// 新增新闻内容
    [types.ADD_NEWS] (state, payload) {
        state.stories = state.stories.concat(payload.stories);
        state.ids = state.ids.concat(payload.ids);
    },
    // 修改是否是第一次进入首页
	[types.CHANGE_LOAD_STATE] (state) {
		state.isFirstLoad = ! state.isFirstLoad;
	},
	//  刷新首页新闻内容
	[types.REFRESH_NEWS] (state) {
		state.stories = [];
	}
}