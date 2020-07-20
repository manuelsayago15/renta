import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		number: 1,
		collapsed: false,
		resize: false,
		val: 'content-page',
		left: 'left side-menu',
		logo: 'logo-renta-nacional.png',
		logoSize: 'logo-size',
		toggle: 'toggle',
		iconBar: 'icon-bar',
	},
	mutations: {
		value(state){

			//state.number ++
			//console.log("test me");
			if (state.number == 1) {
				state.val = 'content-page-left fix-menu'
				state.left = 'fix-menu'
				state.logo = 'logo-renta-nacional-sm.png'
				state.logoSize = 'logo-sm'
				state.iconBar = 'icon-bar-collapsed'
                console.log(state.logo);
                state.number = 0;
                state.collapsed = true
                state.resize = true
            }else if (state.number == 0) {
				state.val = 'content-page fix-menu'
				state.left = 'fix-menu'
				state.logo = 'logo-renta-nacional.png'
				state.logoSize = 'logo-size'
				state.iconBar = 'icon-bar'
                state.collapsed = false
                state.resize = false
                console.log(state.logo);
                //console.log("I'm content-page");
                state.number = 1
            }
		}
	}
})