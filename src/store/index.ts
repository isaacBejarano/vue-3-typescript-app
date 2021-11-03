import { createStore } from "vuex";

import { i_Chuck } from "@/interfaces/chuck";

export default createStore({
	state: {
		defaultCount: 0,
		count: 0,
		chuck: "LOL",
	},
	// sync
	// use mapMutations([]) to groups them in components
	mutations: {
		resetCount(state) {
			state.count = <number>state.defaultCount;
		},
		mutateCount(state, payload) {
			state.count += <number>payload;
		},
		mutateChuck(state, payload: string) {
			state.chuck = payload;
		},
	},
	// async
	// use mapActions ([]) to groups them in components
	actions: {
		async mutateChuckAsync({ commit }, payload: string) {
			const res = await fetch(payload);
			const data: i_Chuck = await res.json();

			commit("mutateChuck", data.value);
		},
	},
	// store.getters -> for shared computed (e.g. filter)
	// use mapGetters([]) to groups them in components computed
	modules: {},
});
