import { createStore } from "vuex";

export default createStore({
	state: {
		defaultCount: 0,
		count: <number>0,
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
	},
	// async
  // use mapActions ([]) to groups them in components
	actions: {
		// myAction (context) {
		//   context.commit('increment')
		// }
    // ES6
		// myAction ({commit}) {
		//   commit('increment')
		// }
	},
	// store.getters -> for shared computed (e.g. filter)
	// use mapGetters([]) to groups them in components computed
	modules: {},
});
