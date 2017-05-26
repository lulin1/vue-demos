import * as types from './mutation-types';

export default {
	addNews: ({ commit },payload) => {
		commit(types.ADD_NEWS, payload);
	},
	changeLoadState: ({ commit }) => {
		commit(types.CHANGE_LOAD_STATE);
	}
}