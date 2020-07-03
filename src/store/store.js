import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		number: 1,
		val: 'content-page',
		left: 'left side-menu'
	},
	mutations: {
		value(state){
			//state.number ++
			//console.log("test me");
			if (state.number == 1) {
				state.val = 'content-page-left fix-menu'
				state.left = 'fix-menu'
                //console.log("I'm content-page-left");
                state.number = 0
            }else if (state.number == 0) {
				state.val = 'content-page fix-menu'
				state.left = 'fix-menu'
                //console.log("I'm content-page");
                state.number = 1
            }
		}
	}
})