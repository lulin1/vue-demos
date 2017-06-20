import * as types from './mutation-types';

export default {
	addNews: ({ commit },payload) => {
		commit(types.ADD_NEWS, payload);
	},
	changeLoadState: ({ commit }) => {
		commit(types.CHANGE_LOAD_STATE);
	},
	refreshNews: ({ commit }) => {
		commit(types.REFRESH_NEWS);
	},
	changeNewsType: ({ commit}, type) => {
		commit(types.CHANGE_NEWS_TYPE, type);
	},
	changeCurrentNewsId: ({ commit }, id) => {
		commit(types.CHANGE_CURRENT_NEWS_ID, id);
	},
	toggleCollect: ({ commit }) => {
		commit(types.TOGGLE_COLLECT);
	}
}